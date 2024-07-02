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
import { useEffect } from "react";
import useCustomAlert from "../../hooks/useCustomAlert";

// repeated form for signup and contact us

//Append a susses message to the form after submission

const ContactForm = () => {
  const showAlert = useCustomAlert();

  const validationSchema = Yup.object({
    full_name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  async function callRegister(reqBody) {
    console.log("asd");
    await axios
      .post(
        `https://abdulrahman.onrender.com/contact_us/post_message/
        `,
        reqBody
      )
      .then(({ data }) => {
        // if (data.message == "success") {
        //   setIsLoading(false);
        //   setErrorMessage(null);
        //   navigate("/login");
        // }
        // setIsLoading(false);
        console.log(data);
        showAlert("Message Sent Successfully!");
      })
      .then(() => {
        registerForm.resetForm();
      })
      .catch((err) => {
        console.log(err);
        // setErrorMessage(err.response.data.message);
        // setIsLoading(false);
      });
  }

  const registerForm = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: callRegister,
  });
  return (
    // welcoming text and purpose of form
    <div className="formHead formElementsAndBtn">
      <div className=" formElements">
        <div className="sm:pb-5 sm:text-center">
          <h3>
            Welcome to <span className="highlight">Street Suite!</span>
          </h3>
          <p>Send Us a Message!</p>
        </div>
        <div>
          <FormGroup
            className="formGroup"
            // onSubmit={registerForm.handleSubmit}
          >
            <div className=" formLabelsAndInputs">
              <FormLabel
                required
                className="mb-1 labelfont"
                sx={{
                  "& .MuiFormLabel-asterisk": {
                    color: "white",
                  },
                }}
              >
                Full Name
              </FormLabel>
              <Input
                name="full_name"
                id="full_name"
                type="text"
                placeholder={`Enter your full name`}
                onChange={registerForm.handleChange}
                value={registerForm.values.full_name}
                onBlur={registerForm.handleBlur}
              />

              <FormLabel
                required
                className="mb-1 labelfont"
                sx={{
                  "& .MuiFormLabel-asterisk": {
                    color: "white",
                  },
                }}
              >
                Email
              </FormLabel>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder={`Enter your email`}
                onChange={registerForm.handleChange}
                value={registerForm.values.email}
                onBlur={registerForm.handleBlur}
              />

              <FormLabel
                required
                className="mb-1 labelfont"
                sx={{
                  "& .MuiFormLabel-asterisk": {
                    color: "white",
                  },
                }}
              >
                Message
              </FormLabel>
              <textarea
                name="message"
                id="message"
                row={4}
                placeholder={`Enter your message`}
                onChange={registerForm.handleChange}
                value={registerForm.values.message}
                onBlur={registerForm.handleBlur}
                className="w-full textArea textAreaInForm "
              ></textarea>
            </div>
            <div className="mx-auto">
              <Button
                className="newBtn loginBtn"
                type="submit"
                onClick={() => {
                  registerForm.handleSubmit();
                }}
              >
                Submit
              </Button>
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
