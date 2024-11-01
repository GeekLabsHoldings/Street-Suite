import LogoIcon from "../../assets/street suite logo-04 1.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LabelAndInput from "../../components/LabelAndInput";
import Button from "@mui/material/Button";
import "./SignIn.css";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../redux/cardsSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FormGroup } from "@mui/material";
import Input from "@mui/joy/Input";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../../context/appContext";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import VerificationInput from "react-verification-input";
import customAlert from "../../utils/customAlert";
import { useGoogleLogin } from "@react-oauth/google";

const SignIn = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.login.loggedIn);
  const dispatch = useDispatch();
  const { authToken, setAuthToken } = useContext(tokenContext);
  const [wrongPass, setWrongPass] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [inForgot, setInForgot] = useState(false);
  const [inReset, setInReset] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [verificationValue, setVerificationValue] = useState(0);
  const [emailVer, setEmailVer] = useState("");
  const [emailReset, setEmailReset] = useState("");
  const [tokenVer, setTokenVer] = useState("");
  const [invalidVer, setInvalidVer] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^[A-Z][a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/,
        "Password must start with an uppercase and contain range of numbers or characters bigger than 8"
      ),
  });

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      console.log(response.scope);
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res);
        console.log(response.access_token);

        if (res?.data.name) {
          try {
            console.log("yesss");

            // Fetch the picture as a blob
            const pictureResponse = await fetch(res?.data?.picture, {
              mode: "no-cors",
            });
            console.log(pictureResponse);
            const pictureBlob = await pictureResponse.blob();
            console.log(pictureBlob);

            // Convert the blob to a File
            const pictureFile = new File([pictureBlob], "profile_picture.jpg", {
              type: pictureBlob.type,
            });
            console.log(pictureFile);

            // Create a FormData object to include the file
            const formData = new FormData();
            formData.append("email", res.data.email);
            formData.append("family_name", res.data.family_name);
            formData.append("given_name", res.data.given_name);
            formData.append("name", res.data.name);
            formData.append("picture", pictureFile);

            const data = await axios.post(
              `${process.env.REACT_APP_API_URL}accounts/google/login/`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            console.log("noooooo");

            console.log(data, "post google");
            console.log(data?.data?.message);
            if (data?.data?.message == "logged in successfully!") {
              console.log("aha");
              console.log(data.data.Token);
              console.log("sadasewqe");
              localStorage.setItem("userToken", data.data.Token);
              dispatch(signIn());
              customAlert("Logged in successfully");
              navigate("/");
            }
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  async function callRegister(reqBody) {
    console.log("reqBody");
    // setIsLoading(true);
    await axios
      .post(`${process.env.REACT_APP_API_URL}accounts/login/`, reqBody)
      .then(({ data }) => {
        console.log(data);
        setAuthToken(data?.Token);
        localStorage.setItem("userToken", data?.Token);
        if (data?.Token) {
          dispatch(signIn());
          customAlert("Logged in successfully");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message == "wrong password") {
          setWrongPass(true);
        } else if (
          err.response.data.message == "your email not exists in the website"
        ) {
          setWrongEmail("your email does not exist in the website");
        }
        // setErrorMessage(err.response.data.message);
        // setIsLoading(false);
      });
  }
  async function sendVer(email) {
    try {
      console.log(email);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}accounts/forgetpassword/`,
        {
          email: email,
        }
      );

      setEmailReset(email);

      console.log(data);
      setTokenVer(data.Token);
      setShowVerification(true);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  async function confirmVer(token) {
    try {
      console.log(token);
      console.log(verificationValue.toString());
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}accounts/forgetpassword/verify/`,
        {
          verification_code: verificationValue.toString(),
          email: `${emailVer}`,
        }
      );
      console.log(emailReset);

      console.log(data);
      setInForgot(false);
      setInReset(true);
      setShowVerification(false);
      return data;
    } catch (err) {
      console.log(err);
      // if (err.response.data.message == "Invalid verification code") {
      //   setInvalidVer("Invalid verification code");
      // }
    }
  }
  async function resetPass(reqBody) {
    try {
      // Ensure that emailReset is set
      if (!emailReset) {
        console.error("emailReset is empty");
        return;
      }

      // Add the email to the request body if it's not already there
      reqBody.email = emailReset;

      console.log(reqBody);
      console.log(tokenVer, "tokenVer");

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}accounts/forgetpassword/reset/`,
        reqBody
      );

      customAlert(data.message);
      setInReset(false);
      updatePasswordFormik.resetForm();
      setWrongPass(false);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  const registerForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: callRegister,
  });

  const passwordSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^[A-Z][a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/,
        "Password must start with an uppercase and contain range of numbers or characters bigger than 8"
      ),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], "password and rePassword should match")
      .required("RePassword is required"),
  });

  const updatePasswordFormik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
      email: `${emailReset}`,
    },
    validationSchema: passwordSchema,
    onSubmit: resetPass,
  });

  return (
    <>
      <Helmet>
        <title>Log in | Street Suite</title>
        <meta
          name="description"
          content="Join Street Suite – a trading tool which will provide you with daily trading alerts and insights you can trust, with all the information to back it up."
        />
      </Helmet>

      {/* sign in page */}
      <div className="signInBG flex align-items-center ">
        <div className="flex sm:flex-col sm:gap-24 md:gap-0 sm:py-10">
          <div className="md:w-1/2">
            <div className="md:w-3/5 sm:w-10/12 mx-auto txtPrtLogin">
              <div className="signInLogo">
                <img className="w-full" src={LogoIcon} />
              </div>
              {/* welcoming text */}
              <div className="signinContent flex flex-col md:gap-4 sm:gap-1">
                <div>
                  <h2 className="md:ps-3">Hello!</h2>
                  <span className="highlight px-3">Welcome Back!</span>
                </div>
                <p className="md:ps-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="forBorder md:w-3/5 sm:w-10/12 ">
              <div className="formPart formBGSignIn ">
                <div className="formElements w-10/12 mx-auto signInForm ">
                  {/* welcoming text in large screens */}

                  <div className=" signinFormContent ">
                    <div className="md:visible sm:hidden text-center">
                      <h3>
                        Welcome back to{" "}
                        <span className="highlight">Street Suite!</span>
                      </h3>
                    </div>
                    {/* welcoming text in small screens */}
                    <div className="md:hidden sm:visible text-center flex flex-col gap-2">
                      <h3>
                        Welcome to{" "}
                        <span className="highlight">Street Suite!</span>
                      </h3>
                      <p>Log in to your account</p>
                    </div>
                    {/* forn to enter user email and password */}
                    <FormGroup
                      className="formGroup"
                      onSubmit={registerForm.handleSubmit}
                    >
                      <div className=" formLabelsAndInputs flex flex-col !gap-[--sy-25px] ">
                        {wrongPass ? (
                          <div className=" bg-red-200 text-black rounded-md w-full p-1 border-red-950 border-2 border-solid text-center">
                            Wrong Password
                          </div>
                        ) : wrongEmail ? (
                          <div className=" bg-red-200 text-black rounded-md w-full p-1 border-red-950 border-2 border-solid text-center">
                            {wrongEmail}
                          </div>
                        ) : null}
                        <div className=" mb-[--sy-4px]">
                          <label
                            htmlFor="email"
                            className=" mb-[--sy-15px] !font-normal text-[--16px]"
                          >
                            Email *
                          </label>
                          <Input
                            sx={{ marginBottom: "0.8vh", padding: "4px 14px" }}
                            name="email"
                            id="email"
                            type="text"
                            placeholder={`Enter your email`}
                            onChange={registerForm.handleChange}
                            value={registerForm.values.email}
                            onBlur={registerForm.handleBlur}
                          />
                          {registerForm.errors.email &&
                          registerForm.touched.email ? (
                            <div className="error rounded-md bg-red-200 border-red-900 p-2 text-black">
                              {registerForm.errors.email}
                            </div>
                          ) : null}
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className=" mb-[--sy-15px] !font-normal text-[--16px]"
                          >
                            Password *
                          </label>
                          <Input
                            sx={{ marginBottom: "0.8vh", padding: "4px 14px" }}
                            name="password"
                            id="password"
                            type="password"
                            placeholder={`Enter your password`}
                            onChange={registerForm.handleChange}
                            value={registerForm.values.password}
                            onBlur={registerForm.handleBlur}
                          />
                          {registerForm.errors.password &&
                          registerForm.touched.password ? (
                            <div className="error rounded-md bg-red-200 border-red-900 p-2 text-black">
                              {registerForm.errors.password}
                            </div>
                          ) : null}
                        </div>

                        <div className=" w-full flex justify-between items-center">
                          <FormControlLabel
                            control={<Checkbox />}
                            className="labelfont checkboxFont rememberClass"
                            label="Remember me"
                          />

                          <button
                            onClick={() => setInForgot(true)}
                            className=" underline cursor-pointer bg-transparent outline-none border-none text-sm"
                          >
                            Forgot Password?
                          </button>
                        </div>
                      </div>
                      <div className="mx-auto flex flex-col gap-[--sy-16px] w-full">
                        <Button
                          className="newBtn loginBtn w-full block"
                          type="submit"
                          disabled={
                            !(registerForm.isValid && registerForm.dirty)
                          }
                          onClick={() => {
                            registerForm.handleSubmit();
                          }}
                        >
                          Log In
                        </Button>
                        <button
                          className=" text-black rounded-md border-none py-2 !w-full block text-[--16px]"
                          onClick={() => login()}
                        >
                          Sign In With Google{" "}
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                              fill="#FFC107"
                            />
                            <path
                              d="M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z"
                              fill="#FF3D00"
                            />
                            <path
                              d="M12.0002 22.0003C14.5832 22.0003 16.9302 21.0118 18.7047 19.4043L15.6097 16.7853C14.5719 17.5745 13.3039 18.0014 12.0002 18.0003C9.39916 18.0003 7.19066 16.3418 6.35866 14.0273L3.09766 16.5398C4.75266 19.7783 8.11366 22.0003 12.0002 22.0003Z"
                              fill="#4CAF50"
                            />
                            <path
                              d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                              fill="#1976D2"
                            />
                          </svg>
                        </button>
                      </div>
                    </FormGroup>
                  </div>
                  {/*button to complete login  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Transition appear show={inForgot} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => {
              console.log("a");
            }}
          >
            {/* <div className="fixed inset-0 " aria-hidden="true" /> */}

            <div className="fixed inset-0 overflow-y-auto bg-neutral-900 bg-opacity-45">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="gradient-border add-register-modal">
                    <Dialog.Panel className="modal-body w-[40vw] transform overflow-hidden rounded-2xl p-10 align-middle shadow-xl transition-all">
                      <h6 className=" text-white">Enter Your Email</h6>
                      <input
                        onChange={(e) => setEmailVer(e.target.value)}
                        value={emailVer}
                        type="email"
                        className=" w-[60%] mx-auto rounded-md outline-none border-none py-1 px-2 text-black block"
                      />
                      <button
                        type="button"
                        className="inline-flex"
                        onClick={() => {
                          console.log(emailVer);
                          sendVer(emailVer);
                        }}
                      >
                        Send Verification Code
                      </button>
                      {showVerification ? (
                        <p className=" text-center mt-2">
                          The verification code has been sent to you
                        </p>
                      ) : null}
                      <div className="line"></div>

                      <div className="mt-2">
                        <p className="text-sm text-gray-500 text-center mb-[2vh]">
                          Enter Your Verification Code
                        </p>
                      </div>
                      <div className="input-text flex flex-col justify-center items-center gap-[2vh]">
                        <VerificationInput
                          placeholder=""
                          validChars="0-9"
                          onChange={(value) => setVerificationValue(value)}
                        />
                      </div>
                      {invalidVer ? (
                        <p className=" text-center mt-2">{invalidVer}</p>
                      ) : null}

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex"
                          onClick={() => {
                            confirmVer(tokenVer);
                          }}
                        >
                          Send
                        </button>
                      </div>
                      <button
                        className="bg-transparent p-0 absolute -top-[18px] right-[16px] !text-blue-400"
                        onClick={() => setInForgot(false)}
                      >
                        Close
                      </button>
                    </Dialog.Panel>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <Transition appear show={inReset} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => {
              console.log("a");
            }}
          >
            {/* <div className="fixed inset-0 " aria-hidden="true" /> */}

            <div className="fixed inset-0 overflow-y-auto bg-neutral-900 bg-opacity-45 ">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="gradient-border add-register-modal">
                    <Dialog.Panel className="modal-body overlay-modal w-[40vw] transform overflow-hidden rounded-2xl p-10 align-middle shadow-xl transition-all bg-[linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)72%,rgba(2,0,144,1)100%)]">
                      <div className=" flex flex-col gap-2 mb-[3vh]">
                        <label
                          htmlFor="password"
                          className=" text-white text-xl block"
                        >
                          Enter Your New Password
                        </label>
                        <input
                          name="password"
                          onChange={updatePasswordFormik.handleChange}
                          value={updatePasswordFormik.values.password}
                          onBlur={updatePasswordFormik.handleBlur}
                          type="password"
                          id="password"
                          className=" w-[60%] mx-auto rounded-md outline-none border-none py-1 px-2 text-black"
                        />
                        {updatePasswordFormik.errors.password &&
                        updatePasswordFormik.touched.password ? (
                          <div className=" w-[60%] mx-auto bg-red-300 text-black rounded-md text-center text-sm p-1">
                            {updatePasswordFormik.errors.password}
                          </div>
                        ) : null}
                      </div>
                      <div className=" flex flex-col gap-2 mb-[3vh]">
                        <label
                          htmlFor="repassword"
                          className=" text-white text-xl block"
                        >
                          Rewrite Your New Password
                        </label>
                        <input
                          name="password_confirmation"
                          onChange={updatePasswordFormik.handleChange}
                          value={
                            updatePasswordFormik.values.password_confirmation
                          }
                          onBlur={updatePasswordFormik.handleBlur}
                          type="password"
                          id="password_confirmation"
                          className=" w-[60%] mx-auto rounded-md outline-none border-none py-1 px-2 text-black"
                        />
                        {updatePasswordFormik.errors.password_confirmation &&
                        updatePasswordFormik.touched.password_confirmation ? (
                          <div className=" w-[60%] mx-auto bg-red-300 text-black rounded-md text-center">
                            {updatePasswordFormik.errors.password_confirmation}
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex"
                          onClick={() => {
                            updatePasswordFormik.handleSubmit();
                          }}
                        >
                          Confirm
                        </button>
                      </div>
                      <button
                        className="bg-transparent p-0 absolute -top-[18px] right-[16px] !text-blue-400"
                        onClick={() => setInReset(false)}
                      >
                        Close
                      </button>
                    </Dialog.Panel>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default SignIn;
