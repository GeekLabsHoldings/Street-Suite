import { Button } from 'react-bootstrap';
import Vector1 from '../../assets/Vector1.svg';
import Vector2 from '../../assets/Group.svg';
import Vector3 from '../../assets/vector3.svg';
import TeamWork from '../../assets/team-working-together.png';
import Logo from '../../assets/street suite logo-04 1.svg';
import Icon from '../../assets/visibleInSmIcon.svg';
import FlexibleCard from '../../components/FlexibleCard/FlexibleCard';
import HowWork from '../../components/How-work/How-work';
import CareerPositions from '../../components/CareerPositions/Career-positions';
import { useNavigate } from "react-router-dom";
import './Careers.css';
import { Helmet } from 'react-helmet-async';

const CareersPage = () => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate("./positions");

    }
    return (
        <>
            <Helmet>
                <title>Careers | Street Suite</title>
                <meta
                    name="description"
                    content="Find your dream job and join Street Suite today."
                />
            </Helmet>
            <div className="bgImg md:py-4 md:mb-5 sm:pb-10">
                <div className="md:flex md:w-2/3 mx-auto my-20  ">

                    <div className='md:w-2/3 flex align-items-center justify-center mb-5'>
                        <div className='w-2/3 flex flex-col gap-3 headerRight '>
                            <h3>ST Suite’s Careers</h3>
                            <p>Street Suite is expanding and we are looking for talented people to join our team!</p>
                            <Button className=' newBtn careerBtn w-fit ' onClick={onClickHandler}>Open Vacancies</Button>
                        </div>

                    </div>
                    {/* this needs for Image and link to our github for large screens*/}
                    <div className="md:w-5/12 sm:hidden forBorder careerForBorder">
                        <div className="formPart githubBG text-center flex flex-col w-1/4 gap-8 py-3">
                            <div className=' mt-2'>
                                <h4 >Check Our Git Hub</h4>
                            </div>
                            <div className="emptyDivBorder w-4/5 m-auto h-52 mb-3 ">
                                <div className='githubBG formPart'></div>
                            </div>
                        </div>

                    </div>
                    {/* this needs for Image and link to our github for small screens */}
                    <div className='md:hidden sm:visible w-3/4 mx-auto forBorder flex justify-start visibleInSmBorder '>
                        <div className='formPart text-center px-3 py-2 justify-between visibleInSm visibleInSmBorder githubBG'>
                            <div className='flex align-items-center'>
                                <h4>Check Our Git Hub</h4>
                            </div>
                            <div>
                                <Button className=' bg-transparent border-0 w-fit'><img src={Icon} /></Button>

                            </div>
                        </div>
                    </div>

                </div>


                <div className='flex md:justify-end sm:justify-center '>
                    <div className='w-5/6 '>
                        <div className='forAfterEffect forFonts lg:w-full sm:w-2/3'>
                            <h3 className='md:pb-16 sm:pb-10'>How We Work At <span className="highlight">Street Suite?</span></h3>
                        </div>
                        <div className="flex px-0">
                            <div className='md:w-1/2 sm:w-full flex justify-center flex-col gap-8'>

                                {/* explain how we work section */}
                                <HowWork Icon={Vector1} Header='In-Depth Strategies Explained In Detail' />
                                <HowWork Icon={Vector2} Header='Gamified Experience with live charts' />
                                <HowWork Icon={Vector3} Header='Over 14 Modules Covering multiple categories' />

                            </div>
                            <div className="md:visible sm:hidden w-1/2 flex justify-end">
                                <img src={TeamWork} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col gap-3 mx-auto md:py-40 sm:my-20 sm:px-5 '>
                    <div className='md:w-2/5 sm:w-full forFonts gap-4 text-center flex flex-col mx-auto md:pb-16 sm:pb-2'>
                        <h3> <span className="highlight">ST Suite</span> Benefits</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo</p>
                    </div>

                    <div className='md:w-4/6 sm:w-full mx-auto flex md:justify-between sm:justify-around relative'>
                        {/* card related to working flexible hours (one of them its place above the rest) */}

                        <FlexibleCard classname='my-4' />

                        <FlexibleCard classname='goUp' />

                        <FlexibleCard classname='my-4' />
                    </div>
                </div>



                <div className='md:w-3/5 sm:w-11/12 flex m-auto joinTeamBG p-2  sm:mb-10'>
                    <div className="forShadow md:p-12 relative sm:p-4 flex w-full">
                        <div className='md:w-2/3 sm:w-2/3 flex flex-col '>
                            <div className='forFonts paragraphFont sm:w-11/12 flex flex-col md:gap-8 sm:gap-2 md:mb-40 '>
                                <h3>Join Our Team Now!</h3>
                                <p className='md:visible sm:hidden'>Street Suite is expanding and we are looking for talented people to join our team!</p>
                                <p className='md:hidden sm:visible'>Street Suite is expanding, join our team!</p>
                                <Button className=' newBtn careerBtn w-fit ' onClick={onClickHandler}>Open Vacancies</Button>
                            </div>
                            {/* card for datails about available positions */}
                            <CareerPositions whichMove='moveFirst' positionName='Back End Developer' />
                        </div>

                        <div className="md:visible sm:hidden w-2/5 flex flex-col align-items-center justify-end moveMiddle">
                            <div className=' positionsBorder movingCards w-4/6 mt-10 flex flex-col gap-2 align-items-center'>
                                <div className='middleCard flex flex-col align-items-center md:w-4/5 px-4 py-10 '>
                                    <h5> Back End Developer</h5>
                                    <p>Street Suite is expanding and we are looking for talented people to join our team!</p>
                                <Button className=' newBtn positionBtn w-fit ' onClick={onClickHandler}>Apply</Button>

                                    
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 sm:w-1/3 flex flex-col align-items-center justify-between md:pt-2  ">
                            <div className='careerImgSize flex mx-auto '>
                                <img src={Logo} className='w-full' />
                            </div>

                            <CareerPositions whichMove='moveLast' positionName='UX/UI Designer' />

                        </div>
                    </div>



                </div>

            </div>
        </>

    )
}

export default CareersPage