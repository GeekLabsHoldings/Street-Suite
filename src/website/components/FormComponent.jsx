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
}) => {
  const validationSchema = Yup.object({
    first_name: Yup.string().required("Name is required"),
    last_name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    password2: Yup.string()
      .oneOf([Yup.ref("password")], "password and rePassword should match")
      .required("RePassword is required"),
  });

  async function callRegister(reqBody) {
    console.log("asd");
    // setIsLoading(true);
    await axios
      .post(`https://abdulrahman.onrender.com/accounts/register/`, reqBody)
      .then(({ data }) => {
        // if (data.message == "success") {
        //   setIsLoading(false);
        //   setErrorMessage(null);
        //   navigate("/login");
        // }
        // setIsLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
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
    },
    validationSchema,
    onSubmit: callRegister,
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
                name="first_name"
                id="first_name"
                type="text"
                placeholder={`Enter your ${label1}`}
                onChange={registerForm.handleChange}
                value={registerForm.values.first_name}
                onBlur={registerForm.handleBlur}
              />
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
                name="last_name"
                id="last_name"
                type="text"
                placeholder={`Enter your ${label2}`}
                onChange={registerForm.handleChange}
                value={registerForm.values.last_name}
                onBlur={registerForm.handleBlur}
              />
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
                    id="email"
                    placeholder={`Enter your ${label3}`}
                    type="email"
                    onChange={registerForm.handleChange}
                    value={registerForm.values.email}
                    onBlur={registerForm.handleBlur}
                  />
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
                  name="password"
                  id="password"
                  type="password"
                  placeholder={`Enter your ${label4}`}
                  onChange={registerForm.handleChange}
                  value={registerForm.values.password}
                  onBlur={registerForm.handleBlur}
                />
              </div>
            ) : null}
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
                  {label5}
                </FormLabel>
                <Input
                  name="password2"
                  id="password2"
                  type="password"
                  placeholder={`Enter your ${label4}`}
                  onChange={registerForm.handleChange}
                  value={registerForm.values.password2}
                  onBlur={registerForm.handleBlur}
                />
              </div>
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

      <div className=" flex justify-center">
        <Button
          type="submit"
          className="newBtn formBtn"
          disabled={!(registerForm.isValid && registerForm.dirty)}
          // onSubmit={registerForm.handleSubmit}
          onClick={registerForm.handleSubmit}
        >
          {btnTxt}
        </Button>
      </div>
    </div>
  );
};

export default FormComponent;
