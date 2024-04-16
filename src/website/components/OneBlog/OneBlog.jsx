import { useNavigate } from "react-router-dom";
import FirstAvatar from '../../assets/avatar1 with flag.svg';
import SecondAvatar from '../../assets/avatar2 with flag.svg';
import ThirdAvatar from '../../assets/avatar3 with flag.svg';
import Follow from '../../assets/followers.svg';
import HotStrip from '../../assets/hot strip gray.png';
import Like from '../../assets/like.svg';
import TheCup from '../../assets/the-cup.svg';
import OldArticle from '../OldArticle/OldArticle';
import OneWinner from '../OneWinnerOrLoser/OneWinnerOrLoser';
import TimeForRead from '../TimeForRead/TimeForRead';
import './OneBlog.css';

const OneBlog =()=>{
    // to enable navigation
    const navigate = useNavigate();

// to navigate to leader board page
    const leaderboardNavigator = ()=>{
        navigate('/leaderboard');

    }

    // to navigate to training page
    const trainingNavigator = ()=>{
        navigate('/dashboard/training')
    }

// to navigate to specific blog page
    const onClickHandler = ()=>{
        navigate("./specific-blog");
    }

    return (
    <div className='md:flex sm:my-2'>
        <div className="md:w-3/5 verticalSeparator md:my-4 md:px-4 sm:px-1 ">
{/* one blog */}
            <div className="flex md:gap-4 md:py-4 sm:py-3 cursor-pointer bottomBorder sm:gap-2" onClick={onClickHandler}>
                <div className="sm:w-7/12 md:w-1/2 ">
                    <div className="oneBlogCont md:py-4 sm:gap-3 md:gap-5 flex flex-col">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <TimeForRead/>
                    </div>
                </div> 

                <div className='sm:w-5/12 md:w-1/2'>
                    <div className="md:w-10/12 sm:w-11/12">
                    <div className='blogsDivForImg md:h-80 sm:h-32 '></div>
                    </div>
                </div>
            </div>

{/* one blog */}
            <div className="sm:visible md:hidden flex py-3 cursor-pointer bottomBorder" onClick={onClickHandler} >
                    <div className="flex gap-4 py-2 ">
                <div className='w-5/12 '>
                <div className='divForImgSm md:h-28 sm:h-28'></div>
                </div>

                <div className="w-7/12 ">
                <div className="oneBlogCont gap-2 flex flex-col">
                
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <TimeForRead/>
                </div>
                </div>
                
                </div>
            </div>
{/* blog about our training */}
            <div className='flex justify-between px-8 secDivOnLeft py-8 bottomBorder cursor-pointer' onClick={trainingNavigator}>
                <div className='sm:w-4/12 md:w-4/12 flex align-items-center'>
                <h2>Get Better with ST Suite Trainings</h2>
                </div>
                <div className="md:w-3/5 sm:w-8/12 flex justify-center relative">
                <div className=" md:w-10/12 babyblueDiv flex flex-col align-items-end ">
                    <div className='leftBG md:w-3/4 sm:w-full md:p-2 sm:px-4 py-2'>
                        <div className='md:w-3/4'>
                        <h5 className='md:w-4/5 sm:w-1/2 md:pb-3 sm:pb-1'>Stock Market 101 - Advanced</h5>
                    <div className='flex justify-between align-items-center'>
                        <div className='flex flex-col md:gap-2 sm:gap-1 coloredTxt'>
                        <h6 className='highlight py-1 w-fit darkerColor'>30 Modules</h6>
                        <h6 className='highlight py-1 w-fit darkerColor'>5.1k People enrolled</h6>
                        </div>
                        <div className='flex flex-col gap-1'>
                        <div className='flex gap-3 txtspan'>
                            <div className='imgSizeInSm'>
                                <img className='flex w-full' alt='followers' src={Follow} />
                            </div>
                            <span>2.1k </span>
                        </div>
                    <div className='flex gap-3 txtspan'>
                        <div className='imgSizeInSm'> 
                            <img className='w-full flex' alt='cup' src={TheCup} />
                            </div>
                            <span>1025</span>
                        </div>
                        <div  className='flex gap-3 txtspan'>
                        <div className='imgSizeInSm'> 
                            <img className='w-full flex' alt='likes' src={Like} />
                            </div>
                            <span>300 </span>
                        </div>
                        </div>
                    </div>
                        </div>
                        <div className='topRight'>
                        <img className='w-full' alt='hot badge' src={HotStrip} />
                        </div>
                    </div>
                </div>
                </div>
            </div>

{/* blog about our private equity */}
            <div className="flex md:gap-4 md:py-4 sm:py-3 cursor-pointer bottomBorder sm:gap-2" onClick={onClickHandler}>
                    <div className="w-1/2 ">
                        <div className="oneBlogCont md:py-4 sm:gap-4 md:gap-5 flex flex-col">
                        <span className='bluecolor'>Private Equity</span>
                        <div className='flex flex-col gap-1'>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                        <TimeForRead/>
                        </div>
                    </div> 

                    <div className='w-1/2 sm:pt-10 md:py-4'>
                        <div className="md:w-10/12 md:pt-5">
                        <div className='divForImgSm md:h-52 sm:h-28 '></div>
                        </div>
                    </div>
            </div>

            <div className='flex md:gap-3 md:py-4 sm:py-2 textDiv bottomBorder'>
                <h6>Private Equity: </h6>
                <p>New Companies List On <span className='highlight'>Street Suite</span></p>

            </div>

{/* 2 different blogs about same thing and common image */}
            <div className="flex bottomBorder md:gap-5 sm:gap-3">

            <div className="w-1/2">
            <div className='oneBlogCont flex flex-col md:gap-4 sm:gap-2 md:py-8 sm:py-4 bottomBorder cursor-pointer' onClick={onClickHandler}>
                <div className=' flex flex-col align-items-center md:gap-4 sm:gap-2'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
    <TimeForRead/>
            </div>

            <div className='oneBlogCont flex flex-col md:gap-4 sm:gap-2 md:py-8 sm:py-4 cursor-pointer'onClick={onClickHandler}>
                <div className=' flex flex-col align-items-center md:gap-4 sm:gap-2'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
    <TimeForRead/>
            </div>

            </div>

            <div className="w-1/2">
            <div className=' py-8 md:pe-3 flex justify-center' >
            <div className='sm:w-11/12 md:w-9/12 cursor-pointer' onClick={onClickHandler}>
                <div className='divForImgLg md:h-96 sm:h-72'></div>
                </div>

                </div>
            </div>

            </div>

{/* ad section */}
            <div className='md:hidden sm:visible flex py-4'>
            <div className=' w-full' >
            <div className='divForImgLg h-44'></div>

                </div>

            </div>
{/* alert about random old blogs */}
            <div className="sm:visible md:hidden blueContainer w-full py-3 px-4 text-center">
                <h3>In Case You Missed It</h3>
                </div>
{/* sample of old blogs */}
                <div className='md:hidden sm:visible'>
                <OldArticle classname='pt-6'/>
                <OldArticle classname='pt-6'/>
                <OldArticle classname='pt-6'/>
                </div>

{/* feature */}

        <div className='md:py-8 sm:py-6 bottomBorder md:pe-8 flex justify-center'>
        <div className='flex divBg md:w-11/12 md:py-4 sm:py-3 cursor-pointer ' onClick={onClickHandler}>
                        <div className='md:w-1/3 sm:w-1/2 ps-3 sm:pt-1'>
                            <div className='w-10/12 '>
                            <div className='divForImgSm md:h-48 sm:h-32'></div>
                            </div>
                        </div>
                        <div className='md:w-2/3 sm:w-1/2 flex flex-col justify-center md:gap-4 sm:gap-3 '>
                            <div className='md:w-3/4 blackBGFonts mx-auto flex flex-col md:gap-4 sm:gap-3 sm:px-2'>
                        <div>
                        <h2>Here’s The Worlds Best Kept Secret</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                                    
                <TimeForRead/>
                            </div>
                        </div>

                    </div>
                
        </div>
{/* one blog */}
        <div className="flex md:py-4 sm:py-2 md:gap-4 sm:gap-4 RbottomBorder cursor-pointer" onClick={onClickHandler}>
            <div className='md:w-3/5 sm:w-1/2 md:py-2 '>
            <div className='md:w-11/12 oneBlogCont flex flex-col md:gap-4 sm:gap-2 md:py-8 sm:py-4 pe-3 rightBorder'>
                <div className=' flex flex-col md:gap-4 sm:gap-2'>
                <h3>Lorem ipsum dol</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
        <TimeForRead/>
            </div>
            </div>

            <div className="md:w-3/5 sm:w-1/2 md:pt-3 sm:pt-5 md:flex justify-center md:pe-11">

                <div className='md:w-11/12 sm:w-11/12 '>
                <div className='divForImgLg md:h-48 sm:h-24'></div>
                </div>
            </div>

        </div>
{/* one blog */}
        <div className="sm:hidden md:visible flex md:justify-between py-4 cursor-pointer " onClick={onClickHandler}>
            <div className='w-5/12 pt-3 '>
            <div className='oneBlogCont flex flex-col gap-4'>
                <div className='flex flex-col align-items-center gap-3'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
    <TimeForRead/>
            </div>

            </div>
            <div className="w-1/2 flex md:pe-6">
                <div className='w-11/12 pt-3'>
                <div className='divForImgLg h-52 '></div>

                </div>
            </div>
            </div>
        </div>


        <div className='md:w-2/5 sm:w-full mx-auto flex flex-col align-items-center '>
{/* one blog appear in large screen and appear in another form and position in small screens */}
        <div className="md:visible sm:hidden w-9/12 flex md:pe-3 py-4 bottomBorder cursor-pointer" onClick={onClickHandler} >
            <div className='w-11/12'>

                <div className='md:py-7'>
                <div className='divForImgSm h-52'></div>
            </div>
    <div className='w-full gap-3 px-2 flex flex-col justify-center pb-8'>
            <div className=' flex flex-col align-items-center md:gap-4 oneBlogCont'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>

            <TimeForRead/>
            </div>

            </div>
                </div>

{/* about our leader board */}
                <div className="md:visible sm:hidden w-9/12 flex justify-end pe-3 py-5 bottomBorder cursor-pointer" onClick={leaderboardNavigator}>
                    <div className=' w-11/12 forGradBG winnerAndLoserBorder'>
                    <div className='formPart flex flex-col align-items-center forGradBG'>
                    <div className='w-5/6 flex justify-center bottomBorder pt-10 pb-8'>
                    <div className='w-4/5 text-center flex flex-col gap-3 winnerFont'>
                    <h5>Biggest Winners</h5>
                    <OneWinner imgUrl={FirstAvatar} num={1} winner={true}/>
                    <OneWinner imgUrl={SecondAvatar} num={2} winner={true}/>
                    <OneWinner imgUrl={ThirdAvatar} num={3} winner={true}/>

                    </div>
                    </div>
                    <div className='w-5/6 flex justify-center pt-10 pb-8'>
                    <div className='w-4/5 text-center flex flex-col gap-3 winnerFont'>
                    <h5>Biggest Losers</h5>
                    <OneWinner imgUrl={FirstAvatar} num={1} winner={false}/>
                    <OneWinner imgUrl={SecondAvatar} num={2} winner={false}/>
                    <OneWinner imgUrl={ThirdAvatar} num={3} winner={false}/>
                    </div>
                    </div>
                </div>
                    </div>

                </div>

            <div className='md:w-9/12 sm:w-full'>
{/* ad section appear in large screens and appear in different form and position in small screen */}
                <div className='md:visible sm:hidden flex justify-end py-7 '>
                    <div className="w-11/12">
                    <div className='divForImgSm h-52'></div>
                    </div>
                </div>
{/* alert appear in large screens and appear in different form and position in small screen */}
                <div className="md:visible sm:hidden blueContainer w-full py-3 px-4 text-center">
                <h3>In Case You Missed It</h3>
                </div>
{/* old blogs appear in large screens and appear in different form and position in small screen */}
                <div className='md:visible sm:hidden'>
                <OldArticle classname='pt-7 '/>
                <OldArticle  classname='pt-7 '/>
                <OldArticle  classname='pt-7 '/>
                </div>

{/* one blog */}
            <div className="md:visible sm:hidden flex bottomBorder py-8 cursor-pointer " onClick={onClickHandler}>
                <div className='w-1/3 '>
                    <div className="w-11/12">
                    <div className='divForImgSm h-28'></div>
                    </div>
                </div>

                <div className='w-2/3 oldBlogs flex flex-col gap-3 '>
                    <div className='w-8/12 flex flex-col gap-3'>
                    <div>
                    <h6>China Kicks U.S Butt In The Latest Whatever</h6>
                    </div>
                    <div>
                    <p>25 MINS AGO</p>
                    </div>
                    </div>
                    
                </div>

                </div>
{/* one blog */}
                <div className='md:visible sm:hidden py-8 '>
                    <div className='w-11/12 mx-auto flex flex-col gap-3 cursor-pointer' onClick={onClickHandler}>
                    <div className='lastInRight'>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div>
                    <TimeForRead/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )

}
export default OneBlog