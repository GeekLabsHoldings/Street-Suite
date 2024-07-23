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
import customAlert from "../../utils/customAlert";

const PositionsPage = () => {
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
        `${process.env.REACT_APP_API_URL}careers/positions/apply/project-manager/`,
        payload
      );

      console.log(data);
      customAlert("Application Sent Successfully!");

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
        `${process.env.REACT_APP_API_URL}careers/positions/vacancy/`
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
