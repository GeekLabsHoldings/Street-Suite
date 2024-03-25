import Clock from '../../assets/clock.svg';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Follow from '../../assets/followers.svg';
import TheCup from '../../assets/the-cup.svg';
import Like from '../../assets/like.svg';
import FirstAvatar from '../../assets/avatar1 with flag.svg';
import SecondAvatar from '../../assets/avatar2 with flag.svg';
import ThirdAvatar from '../../assets/avatar3 with flag.svg';
import Top3 from '../../assets/1 top3.png';


import HotStrip from '../../assets/hot strip gray.png' ;
import './OneBlog.css';
import OneWinner from '../OneWinnerOrLoser/OneWinnerOrLoser';
import TimeForRead from '../TimeForRead/TimeForRead';

const OneBlog =()=>{
    return (
   <div className='flex '>
         <div className=" verticalSeparator my-4 px-4 md:w-3/5">

            <div className="flex py-4 bottomBorder">
            <div className='md:w-1/2 pt-3  '>
            <div className='oneBlogCont flex flex-col gap-3'>
                <div className=' flex flex-col align-items-center gap-3'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
           
       <TimeForRead/>
            </div>
           
            </div>
            <div className="w-1/2">
                <div >
                <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 340,
          boxShadow:'0px 0px 10px 0px rgba(0,0,0,1) inset',
          backgroundColor:' #3B3B3B',
          borderRadius:'1.2rem'
        },
      }}
    >
      <Paper />

    </Box>
                </div>
 
            </div>
            
            </div>

            <div className='flex justify-around secDivOnLeft py-8 relative bottomBorder'>
                <div className='md:w-1/4'>
                <h2>Get Better with ST Suite Trainings</h2>
                </div>
                <div className="md:w-3/5  babyblueDiv flex flex-col align-items-end ">
                    <div className='leftBG md:w-3/4 p-2 '>
                        <div className='md:w-3/4'>
                        <h5 className='md:w-1/2 pb-3'>Stock Market 101 - Advanced</h5>
                    <div className='flex justify-between align-items-center'>
                        <div className='flex flex-col gap-2 coloredTxt'>
                        <h6 className='highlight py-1 w-fit darkerColor'>30 Modules</h6>
                        <h6 className='highlight py-1 w-fit darkerColor'>5.1k People enrolled</h6>
                        </div>
                        <div className='flex flex-col gap-1'>
                        <div className='flex gap-3 txtspan'>
                            <img src={Follow} />
                            <span>2.1k </span>
                        </div>
                        <div className='flex gap-3 txtspan'>
                            <img src={TheCup} />
                            <span>1025</span>
                        </div>
                        <div  className='flex gap-3 txtspan'>
                            <img src={Like} />
                            <span>300 </span>
                        </div>

                        </div>
                      
                    </div>
                        </div>
                        <div className='topRight'>
                        <img src={HotStrip} />
                        </div>
                  
                    </div>
                    
                    

                </div>
            </div>

            <div className="flex py-4 bottomBorder">
            <div className='md:w-1/2 pt-3  '>
            <div className='oneBlogCont flex flex-col gap-3'>
            <span className='bluecolor'>Private Equity</span>
                <div className='flex flex-col align-items-center gap-3'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                
 <TimeForRead/>
            </div>
           
            </div>
            <div className="w-1/2">
                <div >
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: '90%',
                    height: 207,
                    boxShadow:'0px 0px 10px 0px rgba(0,0,0,1) inset',
                    backgroundImage:'linear-gradient(0deg, rgba(34,47,59,1) 72%, rgba(35,50,63,1) 100%);',
                    borderRadius:'1.2rem'
                    },
                }}
    >
      <Paper />

    </Box>
  
                </div>
 
            </div>
            
            </div>

            <div className='flex gap-3 py-4 bottomBorder'>
                <h6>Private Equity:</h6>
                <p>New Companies List On <span className='highlight'>Street Suite</span></p>

            </div>

            <div className="flex bottomBorder">
           <div className="w-1/2">
           <div className='oneBlogCont flex flex-col gap-4 py-8 bottomBorder'>
                <div className=' flex flex-col align-items-center gap-4'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
           
   <TimeForRead/>
            </div>
            <div className='oneBlogCont flex flex-col gap-4 py-8 '>
                <div className=' flex flex-col align-items-center gap-4'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
           
    <TimeForRead/>
            </div>
           </div>
           <div className="w-1/2">
           <div className='py-8' >
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: '90%',
                    height: 420,
                    boxShadow:'0px 0px 10px 0px rgba(0,0,0,1) inset',
                    backgroundImage:'linear-gradient(0deg, rgba(41,65,88,1) 72%, rgba(47,77,106,1) 100%);',
                    borderRadius:'1.2rem'
                    },
                }}
    >
      <Paper />

    </Box>
  
                </div>
 
           </div>

            </div>
        <div className='py-8 bottomBorder'>
        <div className='flex divBg md:w-11/12'>
                        <div className='w-1/3 ps-3'>
                            <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: '85%',
                            height: 200,
                            boxShadow:'0px 0px 10px 0px rgba(0,0,0,1) inset',
                            backgroundImage:'linear-gradient(302deg, rgba(49,60,69,1) 30%, rgba(46,69,90,1) 100%);',
                            borderRadius:'1.2rem'
                            },
                        }}
            >
            <Paper />
            </Box>
                        </div>

                        <div className='w-3/4 flex flex-col justify-center gap-4 '>
                            <div className='w-3/4 blackBGFonts mx-auto flex flex-col gap-4'>
                        <div>
                        <h2>Here’s The Worlds Best Kept Secret</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                                    
              <TimeForRead/>
                            </div>
                        </div>

                    </div>
                
        </div>

        <div className="flex py-4 bottomBorder">
            <div className='w-1/2 py-2 '>
            <div className='w-11/12 oneBlogCont flex flex-col gap-4 py-8 pe-3 rightBorder'>
                <div className=' flex flex-col gap-4'>
                <h3>Lorem ipsum dol</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
           
        <TimeForRead/>
            </div>
            </div>
            <div className="w-1/2 pt-3">
                <div >
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: '90%',
                    height: 207,
                    boxShadow:'0px 0px 10px 0px rgba(0,0,0,1) inset',
                    backgroundColor:'rgb(58,105,149)',
                    borderRadius:'1.2rem'
                    },
                }}
    >
      <Paper />

    </Box>
  
                </div>
 
            </div>
        </div>

        <div className="flex py-4 ">
            <div className='md:w-1/2 pt-3  '>
            <div className='oneBlogCont flex flex-col gap-3'>
                <div className=' flex flex-col align-items-center gap-3'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
           
  <TimeForRead/>
            </div>
           
            </div>
            <div className="w-1/2">
                <div >
                <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 220,
          boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.2)inset',
          backgroundImage:'linear-gradient(0deg,  rgba(44,67,89,1) 64%, rgba(43,74,101,1) 100%);',
          borderRadius:'1.2rem'
        },
      }}
    >
      <Paper />

    </Box>
                </div>
 
            </div>
            
            </div>

          
        </div>


        <div className='md:w-2/5 mx-auto flex flex-col align-items-center '>

        <div className="w-9/12 flex pe-3 py-4 bottomBorder " >
            <div className=' w-11/12'>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: '90%',
                    height: 207,
                    boxShadow:'0px 0px 10px 0px rgba(0,0,0,1) inset',
                    backgroundImage:'linear-gradient(0deg, rgba(34,47,59,1) 72%, rgba(35,50,63,1) 100%);',
                    borderRadius:'1.2rem'
                    },
                }}
    >
      <Paper />

    </Box>
    <div className='gap-3 px-2 flex flex-col pb-8'>
           
            <div className=' flex flex-col align-items-center oneBlogCont'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>

            <TimeForRead/>
      
            </div>

            </div>
                </div>

                <div className="w-9/12 flex justify-end pe-3 py-5 bottomBorder  ">
                    <div className='w-11/12 forGradBG winnerAndLoserBorder'>
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

            <div className='w-9/12'>
                <div className='flex justify-end py-4'>
                <div className='w-11/12' >
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: 207,
                    boxShadow:'0px 0px 10px 0px rgba(0,0,0,1) inset',
                    backgroundColor:'rgb(58,105,149)',
                    borderRadius:'1.2rem'
                    },
                }}
    >
      <Paper />

    </Box>
  
                </div>
                </div>
                <div className="blueContainer w-full py-3 px-4 text-center">
                <h3>In Case You Missed It</h3>
                </div>
                <div className="flex justify-between likeComments pt-6 pb-8 bottomBorder">
                    <div className='w-1/3 '>
                        <p>25 MINS AGO</p>
                    </div>
                    <div className='w-2/3 '>
                        <h6>China Kicks U.S Butt In The Latest Whatever</h6>
                    </div>
                </div>
                <div className="flex justify-between likeComments pt-6 pb-8 bottomBorder">
                    <div className='w-1/3 '>
                        <p>25 MINS AGO</p>
                    </div>
                    <div className='w-2/3 '>
                        <h6>China Kicks U.S Butt In The Latest Whatever</h6>
                    </div>
                </div>
                <div className="flex justify-between likeComments pt-6 pb-8 bottomBorder">
                    <div className='w-1/3 '>
                        <p>25 MINS AGO</p>
                    </div>
                    <div className='w-2/3'>
                        <h6>China Kicks U.S Butt In The Latest Whatever</h6>
                    </div>
                </div>
                <div className="flex align-items-center bottomBorder py-4">
                <div className='w-1/2'>
                <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 150,
          boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.2)',
          backgroundImage:'linear-gradient(0deg,  rgba(44,67,89,1) 64%, rgba(43,74,101,1) 100%);',
          borderRadius:'1.2rem'
        },
      }}
    >
      <Paper />

    </Box>
                </div>
                <div className='w-1/2 likeComments flex flex-col gap-3 '>
                    <div>
                    <h6>China Kicks U.S Butt In The Latest Whatever</h6>
                    </div>
                    <div>
                    <p>25 MINS AGO</p>
                    </div>
                </div>
                </div>
                <div className='py-8'>
                   <div className='w-11/12 mx-auto flex flex-col gap-3 '>
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