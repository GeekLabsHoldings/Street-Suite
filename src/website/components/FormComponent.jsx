import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FormGroup } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/cardsSlice";
import customAlert from "../utils/customAlert";

// repeated form for signup and contact us

const FormComponent = ({
  purpose,
  label1,
  label2,
  label3,
  label4,
  label5,
  textArea,
  needCheckbox,
  needForthInput,
  btnTxt,
  needFirstPrt,
  verificationModal,
  setVerificationModal,
}) => {
  const validatePhoneNumber = (value) => {
    const phone_number = parsePhoneNumberFromString(value);
    return phone_number && phone_number.isValid();
  };
  const [errMessage,setErrMessage] = useState("")
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^[A-Z][a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/,
        "Password must start with an uppercase and contain range of numbers or characters bigger than 8"
      ),
    password2: Yup.string()
      .oneOf([Yup.ref("password")], "password and rePassword should match")
      .required("RePassword is required"),
    phone_number: Yup.string()
      .required("Phone number is required")
      .test("isValidPhoneNumber", "Phone number is not valid", (value) =>
        validatePhoneNumber(value)
      ),
  });

  async function callRegister(reqBody) {
    console.log(reqBody);
    await axios
      .post(`${process.env.REACT_APP_API_URL}accounts/register/`, reqBody)
      .then(({ data }) => {
        // if (data.message == "success") {
        //   setIsLoading(false);
        //   setErrorMessage(null);
        //   navigate("/login");
        // }
        // setIsLoading(false);

        setVerificationModal(true);
        setErrMessage("")
      })
      .catch((err) => {
        console.log(err);
        setErrMessage("")
        if (err.response.data.message == "Email account is already exists") {
          setErrMessage(err.response.data.message)
        }
        // setErrorMessage(err.response.data.message);
        // setIsLoading(false);
      });
  }

  const registerForm = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: "",
      phone_number: "",
    },
    validationSchema,
    onSubmit: callRegister,
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
            console.log(data, "post google");
            console.log(data?.data?.message);
            if (data?.data?.message == "loged in successfully!") {
              console.log("sadasewqe");
              localStorage.setItem("userToken", data.data.token);
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
  return (
    // welcoming text and purpose of form
    <div className="formHead formElementsAndBtn">
      <div className=" formElements">
        {needFirstPrt ? (
          <div className="sm:pb-5 sm:text-center">
            <h3>
              Welcome to <span className="highlight">Street Suite!</span>
            </h3>
            <p>{purpose}</p>
          </div>
        ) : null}
        {errMessage ? <div className=" rounded-md bg-red-200 border-red-900 p-2 text-black text-center">{errMessage}</div> : null}
        <div>
          <FormGroup
            className="formGroup"
            // onSubmit={registerForm.handleSubmit}
          >
            <div>
              <FormLabel
                required
                className="mb-1 labelfont"
                sx={{
                  "& .MuiFormLabel-asterisk": {
                    color: "white",
                  },
                }}
              >
                {label1}
              </FormLabel>
              <Input
                sx={{ marginBottom: "0.3vh" }}
                name="first_name"
                id="first_name"
                type="text"
                placeholder={`Enter your ${label1}`}
                onChange={registerForm.handleChange}
                value={registerForm.values.first_name}
                onBlur={registerForm.handleBlur}
              />

              {registerForm.errors.first_name &&
              registerForm.touched.first_name ? (
                <div className=" rounded-md bg-red-200 border-red-900 p-2 text-black">
                  {registerForm.errors.first_name}
                </div>
              ) : null}
            </div>

            <div>
              <FormLabel
                required
                className="mb-1 labelfont"
                sx={{
                  "& .MuiFormLabel-asterisk": {
                    color: "white",
                  },
                }}
              >
                {label2}
              </FormLabel>
              <Input
                sx={{ marginBottom: "0.3vh" }}
                name="last_name"
                id="last_name"
                type="text"
                placeholder={`Enter your ${label2}`}
                onChange={registerForm.handleChange}
                value={registerForm.values.last_name}
                onBlur={registerForm.handleBlur}
              />
              {registerForm.errors.last_name &&
              registerForm.touched.last_name ? (
                <div className=" rounded-md bg-red-200 border-red-900 p-2 text-black">
                  {registerForm.errors.last_name}
                </div>
              ) : null}
            </div>

            <div>
              {textArea ? (
                <>
                  <FormLabel
                    required
                    className="mb-1 labelfont"
                    sx={{
                      "& .MuiFormLabel-asterisk": {
                        color: "white",
                      },
                    }}
                  >
                    {label3}
                  </FormLabel>
                  <textarea
                    name="aboutMe"
                    id="about"
                    className="w-full textArea textAreaInForm "
                    rows="4"
                  ></textarea>
                </>
              ) : (
                <>
                  <FormLabel
                    required
                    className="mb-1 labelfont"
                    sx={{
                      "& .MuiFormLabel-asterisk": {
                        color: "white",
                      },
                    }}
                  >
                    {label3}
                  </FormLabel>

                  <Input
                    name="email"
                    sx={{ marginBottom: "0.3vh" }}
                    id="email"
                    placeholder={`Enter your ${label3}`}
                    type="email"
                    onChange={registerForm.handleChange}
                    value={registerForm.values.email}
                    onBlur={registerForm.handleBlur}
                  />
                  {registerForm.errors.email && registerForm.touched.email ? (
                    <div className=" rounded-md bg-red-200 border-red-900 p-2 text-black">
                      {registerForm.errors.email}
                    </div>
                  ) : null}
                </>
              )}
            </div>
            {needForthInput ? (
              <div>
                <FormLabel
                  required
                  className="mb-1 labelfont"
                  sx={{
                    "& .MuiFormLabel-asterisk": {
                      color: "white",
                    },
                  }}
                >
                  {label4}
                </FormLabel>
                <Input
                  sx={{ marginBottom: "0.3vh" }}
                  name="password"
                  id="password"
                  type="password"
                  placeholder={`Enter your ${label4}`}
                  onChange={registerForm.handleChange}
                  value={registerForm.values.password}
                  onBlur={registerForm.handleBlur}
                />
                {registerForm.errors.password &&
                registerForm.touched.password ? (
                  <div className=" rounded-md bg-red-200 border-red-900 p-2 text-black">
                    {registerForm.errors.password}
                  </div>
                ) : null}
              </div>
            ) : null}
            {needForthInput ? (
              <>
                <div>
                  <FormLabel
                    required
                    className="mb-1 labelfont"
                    sx={{
                      "& .MuiFormLabel-asterisk": {
                        color: "white",
                      },
                    }}
                  >
                    {label5}
                  </FormLabel>
                  <Input
                    sx={{ marginBottom: "0.3vh" }}
                    name="password2"
                    id="password2"
                    type="password"
                    placeholder={`Enter your ${label4}`}
                    onChange={registerForm.handleChange}
                    value={registerForm.values.password2}
                    onBlur={registerForm.handleBlur}
                  />
                  {registerForm.errors.password2 &&
                  registerForm.touched.password2 ? (
                    <div className=" rounded-md bg-red-200 border-red-900 p-2 text-black">
                      {registerForm.errors.password2}
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className=" labelColor md:w-1/4 ">
                    <FormLabel
                      htmlFor="Phone-number"
                      className="w-full labelfont mb-1"
                    >
                      Phone number
                    </FormLabel>
                  </div>
                  <div>
                    <PhoneInput
                      // defaultCountry="eg"
                      className="registerPhone mb-[0.3vh]"
                      id="phone_number"
                      name="phone_number"
                      value={registerForm.values.phone_number}
                      onChange={(value) =>
                        registerForm.setFieldValue("phone_number", value)
                      }
                      onBlur={registerForm.handleBlur}
                    />
                  </div>
                  {registerForm.errors.phone_number &&
                  registerForm.touched.phone_number ? (
                    <div className=" rounded-md bg-red-200 border-red-900 p-2 text-black">
                      {registerForm.errors.phone_number}
                    </div>
                  ) : null}
                </div>
              </>
            ) : null}

            {/* Terms and Conditions */}
            {needCheckbox ? (
              <div className="checkboxes">
                <FormControlLabel
                  control={<Checkbox />}
                  className="labelfont checkboxFont rememberClass"
                  label={<span>Remember me</span>}
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  className="labelfont checkboxFont"
                  label={
                    <span>
                      By creating an account, I have read and agreed to Street
                      Suite's{" "}
                      <a href="/terms&conditions"> Terms & Conditions.</a>
                    </span>
                  }
                />
              </div>
            ) : null}
          </FormGroup>
        </div>
      </div>

      <div className=" flex justify- flex-col gap-[2vh] w-fit mx-auto">
        <Button
          type="submit"
          className="newBtn formBtn"
          disabled={!(registerForm.isValid && registerForm.dirty)}
          // onSubmit={registerForm.handleSubmit}
          onClick={registerForm.handleSubmit}
        >
          {btnTxt}
        </Button>
        <button
          className=" text-black rounded-md border-none py-2 px-4"
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
    </div>
  );
};

export default FormComponent;
