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
import { useContext, useEffect } from "react";
import { tokenContext } from "../../context/appContext";

const SignIn = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.login.value);
  const dispatch = useDispatch();
  const {authToken,setAuthToken} = useContext(tokenContext)

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  async function callRegister(reqBody) {
    console.log("reqBody");
    // setIsLoading(true);
    await axios
      .post(`https://abdulrahman.onrender.com/accounts/login/`, reqBody)
      .then(({ data }) => {
        // if (data.message == "success") {
        //   setIsLoading(false);
        //   setErrorMessage(null);
        //   navigate("/login");
        // }
        // setIsLoading(false);
        console.log(data);
        setAuthToken(data.token)
        localStorage.setItem("userToken",data.token)
      })
      .catch((err) => {
        console.log(err);
        // setErrorMessage(err.response.data.message);
        // setIsLoading(false);
      });
  }

  const registerForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: callRegister,
  });
  useEffect(()=>{
    console.log(authToken);
  },[authToken])

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
                      <div className=" formLabelsAndInputs">
                        <Input
                          name="email"
                          id="email"
                          type="text"
                          placeholder={`Enter your email`}
                          onChange={registerForm.handleChange}
                          value={registerForm.values.email}
                          onBlur={registerForm.handleBlur}
                        />
                        <Input
                          name="password"
                          id="password"
                          type="password"
                          placeholder={`Enter your password`}
                          onChange={registerForm.handleChange}
                          value={registerForm.values.password}
                          onBlur={registerForm.handleBlur}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          className="labelfont checkboxFont rememberClass"
                          label="Remember me"
                        />
                      </div>
                      <div className="mx-auto">
                        <Button
                          className="newBtn loginBtn"
                          type="submit"
                          onClick={() => {
                            registerForm.handleSubmit();
                            console.log("asdasd");
                          }}
                        >
                          Log In
                        </Button>
                      </div>
                    </FormGroup>
                  </div>
                  {/*button to complete login  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
