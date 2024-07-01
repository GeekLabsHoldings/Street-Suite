import AccordionGroup from "@mui/joy/AccordionGroup";
import "./PositionsPage.css";
import { Helmet } from "react-helmet-async";
import LabelAndInput from "../../components/LabelAndInput";
import Button from "@mui/material/Button";
import FormLabel from "@mui/joy/FormLabel";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { useEffect, useState } from "react";
import axios from "axios";

const PositionsPage = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    document.getElementById("popupAlert")?.remove();
    if (!showElement) return;
    const newElement = document.createElement("div");
    // Add box shadow to the new element
    newElement.className =
      "fixed top-[10%] right-[-100%] bg-[linear-gradient(265deg,rgb(40,62,80)20%,rgb(53,111,166)100%)] overflow-hidden rounded min-w-[20em] transition-all duration-[500ms] py-1 px-3 shadow-lg";

    newElement.style.zIndex = "1000";
    newElement.id = "popupAlert";
    newElement.innerHTML = `
          <p class="text-white p-2">
              <svg fill="#7ead68" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M474.045,173.813c-4.201,1.371-6.494,5.888-5.123,10.088c7.571,23.199,11.411,47.457,11.411,72.1 c0,62.014-24.149,120.315-68,164.166s-102.153,68-164.167,68s-120.316-24.149-164.167-68S16,318.014,16,256 S40.149,135.684,84,91.833s102.153-68,164.167-68c32.889,0,64.668,6.734,94.455,20.017c28.781,12.834,54.287,31.108,75.81,54.315 c3.004,3.239,8.066,3.431,11.306,0.425c3.24-3.004,3.43-8.065,0.426-11.306c-23-24.799-50.26-44.328-81.024-58.047 C317.287,15.035,283.316,7.833,248.167,7.833c-66.288,0-128.608,25.813-175.48,72.687C25.814,127.392,0,189.712,0,256 c0,66.287,25.814,128.607,72.687,175.479c46.872,46.873,109.192,72.687,175.48,72.687s128.608-25.813,175.48-72.687 c46.873-46.872,72.687-109.192,72.687-175.479c0-26.332-4.105-52.26-12.201-77.064 C482.762,174.736,478.245,172.445,474.045,173.813z"></path> <path d="M504.969,83.262c-4.532-4.538-10.563-7.037-16.98-7.037s-12.448,2.499-16.978,7.034l-7.161,7.161 c-3.124,3.124-3.124,8.189,0,11.313c3.124,3.123,8.19,3.124,11.314-0.001l7.164-7.164c1.51-1.512,3.52-2.344,5.66-2.344 s4.15,0.832,5.664,2.348c1.514,1.514,2.348,3.524,2.348,5.663s-0.834,4.149-2.348,5.663L217.802,381.75 c-1.51,1.512-3.52,2.344-5.66,2.344s-4.15-0.832-5.664-2.348L98.747,274.015c-1.514-1.514-2.348-3.524-2.348-5.663 c0-2.138,0.834-4.149,2.351-5.667c1.51-1.512,3.52-2.344,5.66-2.344s4.15,0.832,5.664,2.348l96.411,96.411 c1.5,1.5,3.535,2.343,5.657,2.343s4.157-0.843,5.657-2.343l234.849-234.849c3.125-3.125,3.125-8.189,0-11.314 c-3.124-3.123-8.189-3.123-11.313,0L212.142,342.129l-90.75-90.751c-4.533-4.538-10.563-7.037-16.98-7.037 s-12.448,2.499-16.978,7.034c-4.536,4.536-7.034,10.565-7.034,16.977c0,6.412,2.498,12.441,7.034,16.978l107.728,107.728 c4.532,4.538,10.563,7.037,16.98,7.037c6.417,0,12.448-2.499,16.977-7.033l275.847-275.848c4.536-4.536,7.034-10.565,7.034-16.978 S509.502,87.794,504.969,83.262z"></path> </g> </g></svg>
              <span class="ml-2">Application Sent Successfully!</span>
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

  const [index, setIndex] = useState(0);
  const [vacanciesList, setVacanciesList] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [gitHubLink, setGitHubLink] = useState("");
  const [cv, setCv] = useState("");

  async function postApplication() {
    let payload = new FormData();
    payload.append("first_name", firstName);
    payload.append("last_name", lastName);
    payload.append("email", email);
    payload.append("portofolio_link", portfolioLink);
    payload.append("git_hub_link", gitHubLink);
    payload.append("cv", cv);

    try {
      const { data } = await axios.post(
        `https://abdulrahman.onrender.com/careers/positions/apply/project-manager/`,
        payload
      );

      console.log(data);
      await setShowElement(true);

      document.querySelectorAll("input").forEach((e) => (e.value = ""));
    } catch (e) {
      console.error(e);
    }
  }

  async function getAllVacancies() {
    try {
      // window.scrollTo(0, 0);
      //   setPageLoading(true);
      const { data } = await axios.get(
        `https://abdulrahman.onrender.com/careers/positions/vacancy/`
      );
      setVacanciesList(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      //   setPageLoading(false);
    }
  }
  useEffect(() => {
    getAllVacancies();
  }, []);

  return (
    <>
      <Helmet>
        <title>Vacancies | Street Suite</title>
        <meta name="description" content="Explore Vacancies on Street Suite." />
      </Helmet>

      {/* page for our open positions */}
      <div className="py-5 flex flex-col gap-16 bgImg">
        <div className="md:w-1/2 headOfPage mx-auto flex flex-col align-items-center text-center gap-3">
          <h1>
            <span className="highlight">Street Suite</span> Vacancies{" "}
          </h1>
          <div className="md:w-8/12 sm:w-3/4 text-center">
            <p>
              Street Suite is expanding and we are looking for talented people
              to join our team!
            </p>
          </div>
        </div>
        {/* expanding and collapse cards for every position */}
        <AccordionGroup
          disableDivider
          className=" w-10/12 mx-auto flex flex-col gap-6"
          sx={{ transition: "2s" }}
        >
          {/* first position and it's expanded by default */}

          {vacanciesList.map((e, i) => (
            <div
              key={i}
              className="grayPositionBorder carrerPositionCollapse md:py-0 sm:py-4"
            >
              <Accordion
                defaultExpanded={i == 0 ? true : false}
                sx={{
                  "&.Mui-expanded": {
                    border: "1px solid #53ACFF",
                    borderRadius: "0.5rem",
                  },
                  "&.Mui-expanded p": {
                    display: "none",
                  },
                  "&.Mui-expanded h2": {
                    color: "#53ACFF",
                  },
                  padding: "0 2rem",
                }}
                //   expanded={i === 0}
                //   onChange={(event, expanded) => {
                //     setIndex(expanded ? 0 : null);
                //   }}
              >
                <div className="grayPositionContainer bgPositionCard">
                  {/* the part that appear when card is collapsed */}
                  <AccordionSummary>
                    <h2 className="headOfRightDiv md:w-4/5">
                      {e.title.toUpperCase()}
                    </h2>
                    <div className="txtAlone">
                      <p className="ms:visible sm:hidden">{e.description}</p>
                    </div>
                  </AccordionSummary>
                  {/* the part that appear when the card is expanded */}

                  <AccordionDetails className="accordionDetails">
                    <div
                      className="everyPosition md:flex"
                      style={{ borderRadius: "0.8rem" }}
                    >
                      <div className="md:w-1/2 ">
                        <div className="w-4/5 mx-auto flex flex-col gap-7 sm:pb-10 bottomBorderInSm">
                          <div className="txtAlone">
                            <span>
                              We're seeking a {e.title} to join our team and
                              contribute to the development of our cutting-edge
                              products and services.
                            </span>
                          </div>
                          {/* position responsibilities */}
                          <div className="headAndUl flex flex-col md:gap-4 sm:gap-3">
                            <h3>Responsibilities</h3>

                            <ul className="positionsList ">
                              {e.responsibilities
                                ?.split("\n")
                                .map((line) => line.trim())
                                .map((e, i) => (
                                  <li key={i}>{e}</li>
                                ))}
                            </ul>
                          </div>
                          {/* position benefits */}
                          <div className="headAndUl flex flex-col md:gap-4 sm:gap-3">
                            <h3>Benefits</h3>
                            <ul className="positionsList">
                              {e.benefits
                                ?.split("\n")
                                .map((line) => line.trim())
                                .map((e, i) => (
                                  <li key={i}>{e}</li>
                                ))}
                            </ul>
                          </div>
                          {/* position requirements */}
                          <div className="headAndUl flex flex-col md:gap-4 sm:gap-3">
                            <h3 className="movingH3">Requirement</h3>
                            <div>
                              <ul className="positionsList">
                                {e.requirement
                                  ?.split("\n")
                                  .map((line) => line.trim())
                                  .map((e, i) => (
                                    <li key={i}>{e}</li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* form to be filled to complete user application for position */}
                      <div className="md:w-1/2 sm:pt-10">
                        <div className="w-4/5 positionRightPart flex flex-col md:gap-20 sm:gap-7 sm:mx-auto sm:pb-4">
                          <div className="flex flex-col gap-4">
                            <h3>Fill Application</h3>
                            <LabelAndInput
                              labeltext="First Name"
                              required={true}
                              placeholder="Enter your name"
                              onChangeHandler={(e) =>
                                setFirstName(e.target.value)
                              }
                            />
                            <LabelAndInput
                              labeltext="Last Name"
                              required={true}
                              placeholder="Enter your name"
                              onChangeHandler={(e) =>
                                setLastName(e.target.value)
                              }
                            />
                            <LabelAndInput
                              labeltext="Email"
                              required={true}
                              placeholder="Email"
                              onChangeHandler={(e) => setEmail(e.target.value)}
                            />
                            <LabelAndInput
                              labeltext="Portfolio Link"
                              required={false}
                              onChangeHandler={(e) =>
                                setPortfolioLink(e.target.value)
                              }
                            />
                            <LabelAndInput
                              labeltext="Get Hub Link"
                              required={false}
                              onChangeHandler={(e) =>
                                setGitHubLink(e.target.value)
                              }
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
                              Upload CV
                            </FormLabel>
                            <div className="selectFile">
                              <input
                                type="file"
                                id="files"
                                className="hidden"
                                onChange={(e) => setCv(e.target.files[0])}
                              />

                              <label htmlFor="files" className="w-fit fileBtn">
                                Attach pdf
                              </label>
                            </div>
                          </div>

                          <div className="mx-auto">
                            <Button
                              className="changesBtn applyBtn w-fit "
                              onClick={postApplication}
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>
                </div>
              </Accordion>
            </div>
          ))}
        </AccordionGroup>
      </div>
    </>
  );
};

export default PositionsPage;
