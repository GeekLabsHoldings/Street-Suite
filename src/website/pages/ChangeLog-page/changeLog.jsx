import FormLabel from "@mui/joy/FormLabel";
import "./changeLog.css";
import { Helmet } from "react-helmet-async";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import customAlert from "../../utils/customAlert";

const ChangeLogs = () => {
  const [changeLogs, setChangeLogs] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);
  const [textFeature,setTextFeature] = useState("")
  const [errorText,setErrorText] = useState("")

  async function getAllChangeLogs() {
    try {
      // window.scrollTo(0, 0);
      setPageLoading(true);
      const { data } = await axios.get(
        `https://abdulrahman.onrender.com/change_log/list_all/`
      );
      setChangeLogs(data);
    } catch (e) {
      console.error(e);
    } finally {
      setPageLoading(false);
    }
  }
  async function postFeature() {
    try {
      const {data} = await axios.post(`https://abdulrahman.onrender.com/change_log/post_feature/`,{
        text_message:textFeature
      })
      if (data.message == "Message sent successfully!") {
      customAlert("Message sent successfully!")
      }
      setErrorText("")
      return data
    } catch (error) {
      if (error.response.data.text_message[0] == "This field may not be blank.") {
        setErrorText("You should type something")
      }
      console.log(error);
    }
  }

  useEffect(() => {
    getAllChangeLogs();
  }, []);

  if (pageLoading) {
    return (
      <div className="h-[100vh] flex justify-center items-start mt-[--34px]">
        <Loader />
      </div>
    );
  }

  if (changeLogs.length === 0) {
    return (
      <div className="h-[100vh] flex justify-center items-start mt-[--34px]">
        <p class="alert-message">No change logs found</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Change Log | Street Suite</title>
        <meta
          name="description"
          content="Get to know Street Suite’s upcoming releases and new updates as soon as they drop."
        />
      </Helmet>

      <div className="Msglayout">
        <div className=" forBG changeLogLayout sm:px-7 sm:py-10">
          <div className="row">
            {/* description of new changes and why we do it */}
            <div className="col-lg-6 col-sm-12 ">
              <div className="caption col-lg-8 m-auto ">
                <div className="col-lg-10 col-sm-8 md:pb-6 md:flex flex-col gap-4">
                  <div className="updatesChangeLog">
                    <h5 className="highlight d-inline-block">
                      Street Suite Updates
                    </h5>
                  </div>
                  <h1>We’ve Made Some Changes</h1>
                </div>

                <p>
                  At Street Suite, we pride ourselves on our collaborative
                  culture that encourages creativity and innovation. Here's what
                  you can expect when you join our team
                </p>
                <div className="logcardBG cardContainer md:hidden sm:visible">
                  <div className="sm:m-auto sm:max-h-80 sm:overflow-y-scroll">
                    <div className="leftBorder">
                      <div className="flex flex-col gap-2">
                        <h5>Feb 20</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5>Feb 20</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5>Feb 20</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5>Feb 20</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* give a chance to suggest new feature */}

                <div className="col-lg-9 col-md-9 d-flex flex-col gap-3 msgPrt">
                  <div className="pt-5 ">
                    <h3 className="md:pb-4">Have A Feature In Mind?</h3>
                    <FormLabel className="mb-1 labelfont">
                      Send us a message
                    </FormLabel>
                    <textarea
                      placeholder="...."
                      name="aboutMe"
                      id="about"
                      className="w-full textArea msgTextArea"
                      rows="4"
                      value={textFeature}
                      onChange={(e)=>setTextFeature(e.target.value)}
                    ></textarea>
                    {errorText && <p className=" mb-[0.4vh] text-red-700" style={{fontSize: `clamp(10px, calc( 0.8vw + 0.1rem), 60px)`}}>{errorText}</p>}
                  </div>
                  <div>
                    <Button className=" newBtn loginBtn " onClick={()=>{postFeature()}}>Submit</Button>
                  </div>
                </div>
              </div>
            </div>
            {/* our changes with their date */}
            <div className="col-lg-6 col-sm-12">
              <div className="col-lg-9 changeLogBorder sm:hidden md:visible m-auto ">
                <div className="logcardBG cardContainer">
                  <div className="col-lg-9 m-auto lg:max-h-fit">
                    <div className="leftBorder overflow-y-auto max-h-[50vh]">
                      {changeLogs.map((changeLog, idx) => {
                        return (
                          <div className="gapInUpdate" key={idx}>
                            <h5>{changeLog.date}</h5>
                            <p>{changeLog.message}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeLogs;
