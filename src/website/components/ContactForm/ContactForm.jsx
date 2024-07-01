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

// repeated form for signup and contact us

//Append a susses message to the form after submission

const ContactForm = () => {
  const [showElement, setShowElement] = React.useState(false);

  useEffect(() => {
    document.getElementById("popupAlert")?.remove();
    if (!showElement) return;
    const newElement = document.createElement("div");
    // Add box shadow to the new element
    newElement.className =
      "sticky top-[20%] right-[-100%] bg-[linear-gradient(265deg,rgb(40,62,80)20%,rgb(53,111,166)100%)] top-6 overflow-hidden rounded w-[20em] transition-all duration-[500ms] py-1 px-3 shadow-lg";

    newElement.style.zIndex = "1000";
    newElement.id = "popupAlert";
    newElement.innerHTML = `
          <p class="text-white p-2">
              <svg fill="#7ead68" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M474.045,173.813c-4.201,1.371-6.494,5.888-5.123,10.088c7.571,23.199,11.411,47.457,11.411,72.1 c0,62.014-24.149,120.315-68,164.166s-102.153,68-164.167,68s-120.316-24.149-164.167-68S16,318.014,16,256 S40.149,135.684,84,91.833s102.153-68,164.167-68c32.889,0,64.668,6.734,94.455,20.017c28.781,12.834,54.287,31.108,75.81,54.315 c3.004,3.239,8.066,3.431,11.306,0.425c3.24-3.004,3.43-8.065,0.426-11.306c-23-24.799-50.26-44.328-81.024-58.047 C317.287,15.035,283.316,7.833,248.167,7.833c-66.288,0-128.608,25.813-175.48,72.687C25.814,127.392,0,189.712,0,256 c0,66.287,25.814,128.607,72.687,175.479c46.872,46.873,109.192,72.687,175.48,72.687s128.608-25.813,175.48-72.687 c46.873-46.872,72.687-109.192,72.687-175.479c0-26.332-4.105-52.26-12.201-77.064 C482.762,174.736,478.245,172.445,474.045,173.813z"></path> <path d="M504.969,83.262c-4.532-4.538-10.563-7.037-16.98-7.037s-12.448,2.499-16.978,7.034l-7.161,7.161 c-3.124,3.124-3.124,8.189,0,11.313c3.124,3.123,8.19,3.124,11.314-0.001l7.164-7.164c1.51-1.512,3.52-2.344,5.66-2.344 s4.15,0.832,5.664,2.348c1.514,1.514,2.348,3.524,2.348,5.663s-0.834,4.149-2.348,5.663L217.802,381.75 c-1.51,1.512-3.52,2.344-5.66,2.344s-4.15-0.832-5.664-2.348L98.747,274.015c-1.514-1.514-2.348-3.524-2.348-5.663 c0-2.138,0.834-4.149,2.351-5.667c1.51-1.512,3.52-2.344,5.66-2.344s4.15,0.832,5.664,2.348l96.411,96.411 c1.5,1.5,3.535,2.343,5.657,2.343s4.157-0.843,5.657-2.343l234.849-234.849c3.125-3.125,3.125-8.189,0-11.314 c-3.124-3.123-8.189-3.123-11.313,0L212.142,342.129l-90.75-90.751c-4.533-4.538-10.563-7.037-16.98-7.037 s-12.448,2.499-16.978,7.034c-4.536,4.536-7.034,10.565-7.034,16.977c0,6.412,2.498,12.441,7.034,16.978l107.728,107.728 c4.532,4.538,10.563,7.037,16.98,7.037c6.417,0,12.448-2.499,16.977-7.033l275.847-275.848c4.536-4.536,7.034-10.565,7.034-16.978 S509.502,87.794,504.969,83.262z"></path> </g> </g></svg>
              <span class="ml-2">Message Sent Successfully!</span>
          </p>
          <div class="h-[3px] absolute left-0 right-0 bottom-0">
            <div class="h-full w-[0%] bg-[#7ead68] transition-all duration-[5000ms]" id="progress">
            </div>
          </div>
    `;
    document.body.appendChild(newElement);
    document.getElementById("popupAlert").style.opacity = "0.0";
    setTimeout(() => {
      document.getElementById("popupAlert").style.right = "1rem";
      document.getElementById("popupAlert").style.opacity = "1.0";
      document.getElementById("progress").style.width = "100%";
    }, 10);

    setTimeout(() => {
      document.getElementById("popupAlert").style.opacity = "0";
      document.getElementById("progress").style.right = "-100%";
    }, 4500);
    setTimeout(() => {
      setShowElement(false);
      newElement.remove();
    }, 5000);

    return () => {
      newElement.remove();
    };
  }, [showElement]);

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
        setShowElement(true);
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
