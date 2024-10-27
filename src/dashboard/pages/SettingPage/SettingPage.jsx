import Link from "@mui/joy/Link";
import Box from "@mui/joy/Box";
import LoginImg from "../../assets/imgOfPerson.svg";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import BillIcon from "../../assets/billIcone.svg";
import ProperityAndSwitch from "../../components/properity-and-switch/ProperityAndSwitch";
import "./SettingPage.css";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormGroup } from "@mui/material";
import customAlert from "../../../website/utils/customAlert";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const SettingPage = () => {
  const [profData, setProfData] = useState();
  const refAva = useRef();
  const [imageReturned, setImageReturned] = useState()
  const [imageSent, setImageSent] = useState()

  const [passModal, setPassModal] = useState(false);
  const [errorPassMsg, setErrorPassMsg] = useState("");

  async function getProfSett() {
    const token = localStorage.getItem("userToken")
    await axios
      .get(`${process.env.REACT_APP_API_URL}accounts/profile-settings/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(({ data }) => {
        console.log("asd");
        console.log(data);
        setProfData(data);
        setImageReturned(data?.image);
      })
      .catch((err) => {
        console.log(token);
        console.log("sad");
        console.log(err);
      });
  }

  const [changeClass, setChangeClass] = useState("");
  const [linkClicked, setLinkClicked] = useState("");
  const [beginEmailChange, setBeginEmailChange] = useState(false);
  const [beginPassChange, setBeginPassChange] = useState(false);

  const changeEmail = () => {
    setBeginEmailChange(true);
  };
  const changePass = () => {
    setBeginPassChange(true);
  };

  const indicatorHandler = (e) => {
    setChangeClass(e.currentTarget.id);
    setLinkClicked(e.currentTarget.id);
  };

  const [phone, setPhone] = useState("");

  const styles = {
    highlightStyle: {
      backgroundColor: "#53ACFF",
      borderRadius: "0.3rem",
      padding: "0 0.3rem",
    },
    changeBtn: {
      display: "none !important",
    },
  };

  function removeAva() {
    refAva.current.src = "";
  }

  const validatePhoneNumber = (value) => {
    const Phone_Number = parsePhoneNumberFromString(value);
    return Phone_Number && Phone_Number.isValid();
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    profile: Yup.object({
      Phone_Number: Yup.string()
        .required("Phone number is required")
        .test("isValidPhoneNumber", "Phone number is not valid", (value) =>
          validatePhoneNumber(value)
        ),
    }),
  });

  // Initialize a state to track if the image has changed
  const [imageChanged, setImageChanged] = useState(false);

  async function callEditSett(reqBody) {
    const token = localStorage.getItem("userToken");
    const formData = new FormData();
    console.log(profSett.values.username.trim());
    formData.append("user.first_name", profSett.values.first_name);
    formData.append("user.last_name", profSett.values.last_name);
    formData.append("user.email", profSett.values.email);
    formData.append("About", profSett.values.profile.About);
    formData.append(
      "Phone_Number",
      profSett.values.profile.Phone_Number
    );
    if (imageSent) {
      console.log(imageSent);
      
      formData.append("image", imageSent);
    }

    await axios
      .patch(
        `${process.env.REACT_APP_API_URL}accounts/profile-settings/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        if (data.message == "Updated successfully!") {
          customAlert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const profSett = useFormik({
    initialValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      profile: {
        About: "",
        Phone_Number: "",
        image: "",
      },
    },
    validationSchema,
    onSubmit: callEditSett,
  });

  const passwordSchema = Yup.object({
    old_password: Yup.string().required("Old password is required"),
    new_password: Yup.string()
      .required("Password is required")
      .matches(
        /^[A-Z][a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/,
        "Password must start with an uppercase and contain range of numbers or characters bigger than 8"
      ),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("new_password")], "password and rePassword should match")
      .required("RePassword is required"),
  });

  async function changePassword(reqBody) {
    const token = localStorage.getItem("userToken");
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}accounts/change-password/`,
        reqBody,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (data.message == "password changed successfully") {
        customAlert(data?.message);
        changePasswordFormik.resetForm();
        setPassModal(false);
        setErrorPassMsg("");
      } else if (data.message == "old password not correct") {
        setErrorPassMsg(data?.message);
      }
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  const changePasswordFormik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      password_confirmation: "",
    },
    validationSchema: passwordSchema,
    onSubmit: changePassword,
  });

 

  useEffect(() => {
    getProfSett();
    console.log(profData);
  }, []);

  useEffect(() => {
    console.log(profData);
    profSett.setValues({
      username: `${profData?.user?.first_name ? profData?.user?.first_name : ""} `,
      first_name: `${profData?.user?.first_name ? profData?.user?.first_name : ""} `,
      last_name: `${profData?.user?.last_name ? profData?.user?.last_name : ""} `,
      email: `${profData?.user?.email ? profData?.user?.email : ""} `,
      password: `${profData?.password ? profData?.password : ""} `,
      profile: {
        About: `${profData?.About ? profData?.About : ""}`,
        Phone_Number: `${
          profData?.Phone_Number ? profData?.Phone_Number : ""
        }`,
        image: `${
          profData?.image
            ? `${profData?.image}`
            : ""
        }`,
      },
    });
  }, [profData]);

  return (
    <>
      <Helmet>
        <title>Settings | Street Suite</title>
        <meta name="description" content="Street Suite – Settings" />
      </Helmet>

      <div className="w-full md:px-4 sm:px-2">
        {/* navbar contains links lead you to every section and indicators specify clicked section */}
        <nav className="flex justify-between p-3">
          <div className="LeftBorder">
            <h1>Settings</h1>
          </div>

          <div className="sm:hidden md:visible">
            <Box
              sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
              className="linksSection"
            >
              <Link
                href="#public-info"
                id="public-info"
                onClick={indicatorHandler}
                style={
                  changeClass === "public-info" || linkClicked === "public-info"
                    ? styles.highlightStyle
                    : null
                }
              >
                Public info
              </Link>
              <Link
                href="#account-billing"
                id="account-billing"
                onClick={indicatorHandler}
                style={
                  changeClass === "account-billing" ||
                  linkClicked === "account-billing"
                    ? styles.highlightStyle
                    : null
                }
              >
                Account Billing
              </Link>
              <Link
                href="#leaderboard"
                id="leaderboard"
                onClick={indicatorHandler}
                style={
                  changeClass === "leaderboard" || linkClicked === "leaderboard"
                    ? styles.highlightStyle
                    : null
                }
              >
                Leaderboard
              </Link>
              <Link
                href="#notification"
                id="notification"
                onClick={indicatorHandler}
                style={
                  changeClass === "notification" ||
                  linkClicked === "notification"
                    ? styles.highlightStyle
                    : null
                }
              >
                Notifications
              </Link>
              <Link
                href="#security"
                id="security"
                onClick={indicatorHandler}
                style={
                  changeClass === "security" || linkClicked === "security"
                    ? styles.highlightStyle
                    : null
                }
              >
                Private Details
              </Link>
            </Box>
          </div>

          {/* user signed in profile  */}
          <div className="sm:hidden md:visible flex gap-2">
            <img src={LoginImg} alt="" />
            <div className="loginPerson">
              <h6>Moni Roy</h6>
              <p>Beginner</p>
            </div>
          </div>

          <div className="sm:visible md:hidden">
            <a href="#">
              <img src={BillIcon} alt="" />
            </a>
          </div>
        </nav>

        <div className="settingContent md:w-11/12 mx-auto flex flex-col gap-4 ">
          <div className="settingCardBorder">
            <form onSubmit={profSett.handleSubmit}>
              <div className=" md:flex settingBorderContainer largeDiv">
                {/* public information editing section */}
                <div
                  className="md:w-1/2 flex justify-center"
                  id="public-info"
                  onClick={indicatorHandler}
                >
                  <div className=" py-4 w-10/12 flex flex-col justify-center">
                    <div className="rightBorder sm:py-3">
                      <div className="nameAndDescEverySec spaceBottom">
                        <h3>Public Information</h3>
                        <p>
                          This information will be publicly displayed and
                          visible for all users.
                        </p>
                      </div>
                      <div className="flex flex-col md:gap-8 sm:gap-4 mx-auto ">
                        {/* change username */}
                        <div className="md:flex align-items-center ">
                          <div className=" labelColor md:w-1/4 ">
                            <label htmlFor="username" className="w-full">
                              Username
                            </label>
                          </div>
                          <div className="md:w-1/2 ">
                            <p
                              style={{
                                fontSize: `clamp(10px, calc( 0.8vw + 0.1rem), 60px)`,
                              }}
                            >
                              {profSett.values.username}
                            </p>
                          </div>
                        </div>
                        {/* change avatar or remove it */}
                        <div className="md:flex align-items-center ">
                          <div className=" labelColor md:w-1/4 ">
                            <label htmlFor="avatar" className="w-full">
                              Avatar
                            </label>
                          </div>
                          <div className="md:w-1/2 flex gap-2 align-items-center">
                            <div>
                              <img
                                ref={refAva}
                                src={
                                  imageSent ? URL.createObjectURL(imageSent) : profData?.image
                                }
                                alt=""
                                name="profile.image"
                                id="img-preview"
                                className=" w-[30px] h-[30px] rounded-full"
                              />
                            </div>
                            <div className="avatarTxt flex flex-col gap-1">
                              <p className=" relative">
                                <input
                                  type="file"
                                  id="choose-file"
                                  name="choose-file"
                                  accept="image/*"
                                  className=" hidden absolute inset-0"
                                  onChange={(e) => {
                                    console.log(e.target.files[0]);
                                    setImageSent(e.target.files[0]);
                                  }}
                                />

                                <label
                                  for="choose-file"
                                  className=" text-blue-400 cursor-pointer"
                                >
                                  Change Avatar
                                </label>
                              </p>
                              <p>
                                <button
                                  className=" bg-transparent outline-none border-none"
                                  onClick={() => removeAva()}
                                >
                                  Remove Avatar
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* change about section */}
                        <div className="md:flex align-items-center ">
                          <div className=" labelColor md:w-1/4 ">
                            <label htmlFor="about" className="w-full">
                              About me
                            </label>
                          </div>
                          <div className=" md:w-1/2 ">
                            <textarea
                              name="profile.About"
                              id="profile.About"
                              className="w-full textArea everyInput "
                              rows="2"
                              value={profSett.values.profile.About}
                              onChange={profSett.handleChange}
                              onBlur={profSett.handleBlur}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* private details section */}
                <div
                  className="md:w-1/2 flex justify-center"
                  id="security"
                  onClick={indicatorHandler}
                >
                  <div className="w-11/12 md:pb-6 md:pt-10 sm:py-3 leftSectionSetting sectionHeader">
                    <div className="nameAndDescEverySec spaceBottom">
                      <h3>Private Details</h3>
                      <p>
                        This information will be publicly displayed and visible
                        for all users.
                      </p>
                    </div>

                    <div className=" flex flex-col md:gap-[--sy-21px] sm:gap-2 mx-auto">
                      <div className="flex md:flex-col md:gap-2 sm:gap-8">
                        {/* change email */}
                        <div className="md:flex align-items-center">
                          <div className=" labelColor md:w-1/4">
                            <label htmlFor="Email" className="w-full">
                              Email
                            </label>
                          </div>
                          <p
                            style={{
                              fontSize: `clamp(10px, calc( 0.8vw + 0.1rem), 60px)`,
                            }}
                          >
                            {profSett.values.email}
                          </p>
                        </div>
                        {/* cahnge password section */}
                        <div className="md:flex align-items-center">
                          <div className=" labelColor md:w-1/4 ">
                            <label htmlFor="Password " className="w-full">
                              Password{" "}
                            </label>
                          </div>

                          <div className=" inputAndChangeBtn">
                            <Button
                              className={
                                !beginPassChange
                                  ? "newBtn settingBtn w-fit"
                                  : "newBtn settingBtn w-full"
                              }
                              onClick={() => setPassModal(true)}
                            >
                              Change Password
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* change first or last name */}
                      <div className="md:flex items-start">
                        <div className=" labelColor md:w-1/4 ">
                          <label htmlFor="first-name" className="w-full">
                            First name
                          </label>
                        </div>
                        <div className="md:w-1/2 ">
                          <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            className="w-full everyInput"
                            value={profSett.values.first_name}
                            onChange={profSett.handleChange}
                            onBlur={profSett.handleBlur}
                          />
                          {profSett.errors.first_name &&
                          profSett.touched.first_name ? (
                            <div className=" rounded-md border-red-900 p-2 text-red-600">
                              {profSett.errors.first_name}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="md:flex items-start">
                        <div className=" labelColor md:w-1/4 ">
                          <label htmlFor="Last-name" className="w-full">
                            Last name
                          </label>
                        </div>
                        <div className="md:w-1/2 ">
                          <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            className="w-full everyInput"
                            value={profSett.values.last_name}
                            onChange={profSett.handleChange}
                            onBlur={profSett.handleBlur}
                          />
                          {profSett.errors.last_name &&
                          profSett.touched.last_name ? (
                            <div className=" rounded-md border-red-900 p-2 text-red-600">
                              {profSett.errors.last_name}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      {/* change phone number */}
                      <div className="md:flex align-items-center">
                        <div className=" labelColor md:w-1/4 ">
                          <label htmlFor="Phone-number" className="w-full">
                            Phone number
                          </label>
                        </div>
                        <div className="md:w-1/2 ">
                          <PhoneInput
                            required
                            id="profile.Phone_Number"
                            name="profile.Phone_Number"
                            value={profSett.values.profile.Phone_Number}
                            onChange={(value) =>
                              profSett.setFieldValue(
                                "profile.Phone_Number",
                                value
                              )
                            }
                            onBlur={profSett.handleBlur}
                          />
                          {profSett.errors.profile?.Phone_Number &&
                          profSett.touched.profile?.Phone_Number ? (
                            <div className=" rounded-md border-red-900 p-2 text-red-600">
                              {profSett.errors.profile?.Phone_Number}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="w-full md:flex justify-end md:px-3 sm:py-3">
                        <Button
                          className="newBtn widerBtn w-fit md:w-fit sm:w-full"
                          type="submit"
                          onClick={() => {
                            console.log(profSett.values);
                            profSett.handleSubmit();
                          }}
                          id="here"
                          disabled={!(profSett.isValid && profSett.dirty)}
                        >
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="flex sm:flex-col gap-4">
            {/* leaderboard section  */}
            <div
              className="md:w-1/2 settingCardBorder"
              id="leaderboard"
              onClick={indicatorHandler}
            >
              <div className=" settingBorderContainer largeDiv">
                <div className="w-11/12 mx-auto md:flex px-3 py-4">
                  <div className="md:w-1/2 flex flex-col gap-4">
                    <div className="nameAndDescEverySec leftSectionSetting sectionHeader">
                      <h3>Leaderboard</h3>
                      <p>
                        This information will be publicly displayed and visible
                        for all users.
                      </p>
                    </div>

                    <div className="sm:visible md:hidden">
                      <ProperityAndSwitch title="Appear on leaderboard" />
                    </div>

                    <div className="p-3 forborderRaduis">
                      <ProperityAndSwitch title="Wins Percentage"/>
                      <ProperityAndSwitch title="Profit" />
                      <ProperityAndSwitch title="Average Gain" />
                      <ProperityAndSwitch title="Wins Percentage" />
                      <ProperityAndSwitch title="Number of Trades" />
                    </div>
                  </div>

                  <div className="md:w-1/2 flex md:justify-end">
                    <div className="md:w-10/12 flex flex-col justify-between max-w-[clamp(11vw,_12vw,_220px)]">
                      <div className="sm:hidden md:visible">
                        <ProperityAndSwitch title="Appear on leaderboard" />
                      </div>
                      <div>
                        {/* disconnect broker's account and this section appear in small screens only */}
                        <div className="flex flex-col md:gap-2 sm:gap-4 txtUnderProperities">
                          <div className="sm:visible md:hidden flex mt-4 gap-2">
                            <p>Disconnect my broker’s account</p>
                            <Button className="newBtn settingBtn w-full ">
                              Disconnect
                            </Button>
                          </div>

                          <div className="disconnectSetting">
                            <div className=" md:w-[62%] md:flex flex-col gap-2">
                              <Button className="newBtn settingBtn w-full " sx={{
                                textWrap:"nowrap",
                              }}>
                                Save Changes
                              </Button>
                              <div className="sm:hidden md:visible">
                                <Button className=" settingBtn disconnetBtn w-full ">
                                  Disconnect
                                </Button>
                              </div>
                            </div>
                            <p className="sm:hidden md:visible">
                              Disconnect my broker’s account
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="md:w-1/2 settingCardBorder"
              id="notification"
              onClick={indicatorHandler}
            >
              {/* notifications section */}
              <div className="settingBorderContainer largeDiv">
                <div className="w-11/12 mx-auto px-3 py-4 flex flex-col md:gap-10 sm:gap-2 ">
                  <div className="md:flex justify-between leftSectionSetting sectionHeader">
                    <h3>Notifications & Alerts</h3>
                    <ProperityAndSwitch title="Allow Notifications" />
                  </div>

                  <div className="md:flex">
                    <div className="md:w-1/2 flex flex-col md:gap-3">
                      <div className="p-3 sm:mb-4 forborderRaduis">
                        <div className="optionAndDesc ">
                          <ProperityAndSwitch title="Pause all" />
                          <span className="lightTxt">
                            Temporarily pause notification for 4 hours
                          </span>
                        </div>
                        <div className="optionAndDesc">
                          <ProperityAndSwitch title="Quiet mode" />
                          <span className="lightTxt">
                            Automatically mute notifications at night
                          </span>
                        </div>
                        <div className="optionAndDesc">
                          <ProperityAndSwitch title="Notify via Email" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" md:flex justify-end">
                    <div className="flex ">
                      <Button className="newBtn widerBtn">Save Changes</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="settingCardBorder "
            id="account-billing"
            onClick={indicatorHandler}
          >
            <div className="settingBorderContainer largeDiv">
              <div className="w-full md:flex py-8 mx-[--60px]">
                <div className="md:w-1/3 sm:pb-4">
                  {/* your plan and premuim plan and its cost */}
                  <div className=" flex flex-col md:gap-2 sm:gap-4 accountBilling">
                    <h5>Account Billing</h5>
                    <p>My Current Plan:</p>
                    <div className="md:w-2/3 premuimBorder">
                      <div className=" flex flex-col align-items-center md:py-[--sy-20px] px-[--40px] sm:py-3 gap-2 premuimContainer premuimDiv">
                        <div className="bottomBorder p-3 sm:w-10/12 sm:text-center md:w-fit  ">
                          <h4>Premium Plan</h4>
                        </div>
                        <div className="flex align-items-center">
                          <h1>$15</h1>
                          <h6>/ month</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-[56.333333%] ">
                  <div className="rightSecAccount flex flex-col gap-4">
                    <h5>Invoice:</h5>

                    <div>
                      <div className="tableSection flex flex-col ">
                        <div className="tableHead ">
                          <ul className="grid md:grid-cols-4 sm:grid-cols-3 itemsBG">
                            <li>Amount</li>
                            <li className="sm:hidden md:visible">
                              Invoice Number
                            </li>
                            <li className="sm:visible md:hidden">Invoice #</li>
                            <li className="md:visible sm:hidden">Purchase</li>
                            <li>Date</li>
                          </ul>
                        </div>
                        <div className="tableBody flex flex-col gap-[2px]">
                          <ul className="grid md:grid-cols-4 sm:grid-cols-3  gap-[1px] itemsBG">
                            <li>$ 15</li>
                            <li>15874622895478</li>
                            <li className="sm:hidden md:visible">
                              Premium Plan
                            </li>
                            <li>20 March 2024</li>
                          </ul>
                          <ul className="grid grid-cols-4 sm:grid-cols-3 gap-[2px] itemsBG">
                            <li>$ 15</li>
                            <li>15874622895478</li>
                            <li className="sm:hidden md:visible">
                              Premium Plan
                            </li>
                            <li>20 March 2024</li>
                          </ul>
                          <ul className="grid grid-cols-4 sm:grid-cols-3 gap-[2px] itemsBG">
                            <li>$ 15</li>
                            <li>15874622895478</li>
                            <li className="sm:hidden md:visible">
                              Premium Plan
                            </li>
                            <li>20 March 2024</li>
                          </ul>
                          <ul className="grid grid-cols-4 sm:grid-cols-3 gap-[2px] itemsBG">
                            <li>$ 15</li>
                            <li>15874622895478</li>
                            <li className="sm:hidden md:visible">
                              Premium Plan
                            </li>
                            <li>20 March 2024</li>
                          </ul>
                          <ul className="grid grid-cols-4 sm:grid-cols-3 gap-[2px] itemsBG">
                            <li>$ 15</li>
                            <li>15874622895478</li>
                            <li className="sm:hidden md:visible">
                              Premium Plan
                            </li>
                            <li>20 March 2024</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {passModal ? (
          <Transition appear show={passModal} as={Fragment}>
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
                        <div className=" flex flex-col gap-2 mb-[3vh]">
                          <label
                            htmlFor="old_password"
                            className=" text-white text-xl block"
                          >
                            Enter Your Old Password
                          </label>
                          <input
                            name="old_password"
                            onChange={changePasswordFormik.handleChange}
                            value={changePasswordFormik.values.old_password}
                            onBlur={changePasswordFormik.handleBlur}
                            type="password"
                            id="old_password"
                            className=" w-[60%] mx-auto rounded-md outline-none border-none py-1 px-2 text-black "
                          />
                          {changePasswordFormik.errors.old_password &&
                          changePasswordFormik.touched.old_password ? (
                            <div className=" w-[60%] mx-auto bg-red-300 text-black rounded-md text-center text-sm p-1">
                              {changePasswordFormik.errors.old_password}
                            </div>
                          ) : null}
                        </div>
                        <div className=" flex flex-col gap-2 mb-[3vh]">
                          <label
                            htmlFor="new_password"
                            className=" text-white text-xl block"
                          >
                            Enter Your New Password
                          </label>
                          <input
                            name="new_password"
                            onChange={changePasswordFormik.handleChange}
                            value={changePasswordFormik.values.new_password}
                            onBlur={changePasswordFormik.handleBlur}
                            type="password"
                            id="new_password"
                            className=" w-[60%] mx-auto rounded-md outline-none border-none py-1 px-2 text-black text-sm p-1"
                          />
                          {changePasswordFormik.errors.new_password &&
                          changePasswordFormik.touched.new_password ? (
                            <div className=" w-[60%] mx-auto bg-red-300 text-black rounded-md text-center">
                              {changePasswordFormik.errors.new_password}
                            </div>
                          ) : null}
                        </div>
                        <div className=" flex flex-col gap-2 mb-[3vh]">
                          <label
                            htmlFor="password_confirmation"
                            className=" text-white text-xl block"
                          >
                            Re-enter Your New Password
                          </label>
                          <input
                            name="password_confirmation"
                            onChange={changePasswordFormik.handleChange}
                            value={
                              changePasswordFormik.values.password_confirmation
                            }
                            onBlur={changePasswordFormik.handleBlur}
                            type="password"
                            id="password_confirmation"
                            className=" w-[60%] mx-auto rounded-md outline-none border-none py-1 px-2 text-black text-sm p-1"
                          />
                          {changePasswordFormik.errors.password_confirmation &&
                          changePasswordFormik.touched.password_confirmation ? (
                            <div className=" w-[60%] mx-auto bg-red-300 text-black rounded-md text-center">
                              {
                                changePasswordFormik.errors
                                  .password_confirmation
                              }
                            </div>
                          ) : null}
                        </div>
                        {errorPassMsg ? (
                          <p className=" text-center text-red-800">
                            {errorPassMsg}
                          </p>
                        ) : null}

                        <div className="mt-4">
                          <button
                            type="submit"
                            className="inline-flex"
                            onClick={() => {
                              changePasswordFormik.handleSubmit();
                            }}
                            disabled={
                              !(
                                changePasswordFormik.isValid &&
                                changePasswordFormik.dirty
                              )
                            }
                          >
                            Confirm
                          </button>
                        </div>
                        <button
                          className="bg-transparent p-0 absolute -top-[18px] right-[16px] !text-blue-400"
                          onClick={() => setPassModal(false)}
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
        ) : null}
      </div>
    </>
  );
};

export default SettingPage;
