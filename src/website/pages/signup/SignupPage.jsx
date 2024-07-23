import FormComponent from "../../components/FormComponent";
import LogoIcon from "../../assets/street suite logo-04 1.svg";
import "./SignupPage.css";
import { Helmet } from "react-helmet-async";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import VerificationInput from "react-verification-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [verificationModal, setVerificationModal] = useState(false);
  const [verificationValue, setVerificationValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  async function verifying(reqBody) {
    console.log("asd");

    await axios
      .post(`${process.env.REACT_APP_API_URL}accounts/signup/verify/`, {
        verification_code: verificationValue.toString(),
      })
      .then(({ data }) => {
        setVerificationModal(false);
        if (data?.message == "User created successfully.") {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log("saddwqe21weq");
        console.log(err.response.data.message);
        setErrorMessage(err.response.data.message);
      });
  }

  return (
    <>
      <Helmet>
        <title>Sign Up | Street Suite</title>
        <meta
          name="description"
          content="Join Street Suite – a trading tool which will provide you with daily trading alerts and insights you can trust, with all the information to back it up."
        />
      </Helmet>

      <div className="Signuplayout flex mx-0 sm:px-10 sm:flex-col gap-3">
        <div className="desc lg:w-1/2 md:w-full ">
          <div className="md:w-7/12 sm:w-full sm:py-5 mx-auto">
            {/* our logo and small intro */}
            <div className="content ">
              <div className="imgDiv lg:w-52 sm:w-32 lg:-ml-7 sm:ml-0">
                <img className="w-full" src={LogoIcon} />
              </div>
              <h3>
                Hello! <br />
                Let's get started with your 14 Day{" "}
                <span className="highlight">FREE Trial</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia rerum vel deserunt debitis, tenetur molestiae veniam ad
                perspiciatis aperiam, exercitationem.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-full">
          <div className="flex w-11/12 sm:mb-7 mx-auto">
            <div className="mx-auto md:w-3/4 forBorder">
              <div className="formPart formBGSignup py-[4vh]">
                <div className="inForm">
                  <div className="md:w-10/12 formcontent">
                    {/* common form for signup and contact us */}
                    <FormComponent
                      needForthInput={true}
                      label4="Password"
                      label5="RePassword"
                      needFirstPrt={true}
                      purpose="Create a new account"
                      label1="First Name"
                      label2="Last Name"
                      label3="Email"
                      needCheckbox={true}
                      btnTxt="Sign Up"
                      textArea={false}
                      verificationModal={verificationModal}
                      setVerificationModal={setVerificationModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {verificationModal ? (
          <Transition appear show={verificationModal} as={Fragment}>
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
                        <h6 className=" text-white">
                          You Are One Step Away From Completing Your
                          Registration
                        </h6>
                        <div className="line"></div>

                        <div className="mt-2">
                          <p className="text-sm text-gray-500 text-center mb-[2vh]">
                            Enter Your Verification Code
                          </p>
                        </div>
                        <div className="input-text flex flex-col justify-center items-center gap-[2vh]">
                          <VerificationInput
                            placeholder=""
                            onChange={(value) => setVerificationValue(value)}
                          />
                          {errorMessage ? (
                            <p className="text-sm text-gray-500 text-center mb-[2vh]">
                              {errorMessage.toUpperCase()}
                            </p>
                          ) : null}
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex"
                            onClick={() => {
                              console.log(verificationValue);
                              verifying(verificationValue);
                            }}
                          >
                            Sign Up
                          </button>
                        </div>
                      </Dialog.Panel>
                    </div>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        ) : null}
      </div>
    </>
  );
};

export default SignupPage;
