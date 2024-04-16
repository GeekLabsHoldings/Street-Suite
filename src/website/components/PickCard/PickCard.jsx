import { Button } from 'react-bootstrap';
import StarsImg from '../../assets/starts.svg';
import PopularImg from '../../assets/popular-badge.png';
import { useDispatch } from 'react-redux'
import { add } from '../../../redux/cardsSlice';
import './pickCard.css';

const PickCard = ({imgUrl,title,whyWeLike,pros,cons,fees,accountMin,overview,setIsClicked,setCloseCompare})=>{
    const dispatch = useDispatch();
  

    return(
        // card specify our picks details
        <div className='smforBorder'>
            <div className='formPart cardBG'>
               <div className='headerBG '>

                {/* reusable component for different logos */}
                
            <div className='w-full flex p-2 holder'>
            
            <div className='md:w-1/3 sm:w-2/5 flex align-items-center md:justify-center sm:justify-between md:gap-3 sm:gap-1 '>
                <div className="imgDivHeader sm:w-2/5 ">
                    <img className='w-full h-full' src={imgUrl} />
                </div>
                <div className=" md:w-2/3 sm:w-3/5 textToImg sm:justify-end">
                    <div className='lg:py-3 sm:py-0 sm:pe-16 elementBorder w-full '>
                    <h4>{title}</h4>
                    </div>
                </div>
            </div>
{/* the amount of fees */}
            <div className='md:w-2/3  sm:w-3/5 flex justify-center px-0'>
                <div className="md:w-1/3 sm:w-1/5 text-center flex flex-col justify-center align-items-center ">
                        <div className='elementBorder flex flex-col align-items-center sm:px-4 w-full'>
                        <h5>{fees}</h5>
                        <h5>Fees</h5>
                        </div>
                </div>
                <div className=" md:w-1/3 sm:w-2/5 text-center flex flex-col justify-center align-items-center ">
                        <div className='elementBorder w-full'>
                        <h5>{accountMin}</h5>
                        <h5>Account Min.</h5>
                        </div>
                </div>
                {/* popular badge for popular picks */}
                <div className=" w-1/3 text-center sm:w-2/5 flex flex-col justify-center align-items-center">
                        <div className='starsImg flex align-items-center'>
                                <img className='img-fluid' src={StarsImg} />
                                </div>
                            <div className='popularBadge md:visible sm:hidden'>
                            <img src={PopularImg} />
                            </div>
                </div>
            </div>
        </div>
            </div>

                <div className="col-md-11 m-auto md:py-5 sm:pt-4 pickContainer sm:px-3">
                    <div className='row'>
                        <div className="col-md-6 ">
                        <div className='everyPart'>
                            <h5>Overview</h5>
                            <p>{overview}</p>
                            </div>
                            </div>
                            {/* props of our pick */}
                        <div className="col-md-6 flex justify-center sm:justify-start " >
                            <div className='everyPart'>
                            <h5>Pros:</h5>
                        <ul className='topBrokerList anyList'>
                            {pros.map((oneProp)=>(
                                <li>{oneProp}</li>
                            ))}
                        </ul>
                            </div>
                            </div>
                    </div>
                    <div className='row justify-between md:py-4 sm:pb-5 pt-2'>
                    <div className="col-md-6 ">
                        <div className='everyPart'>
                        <h5>Why we Like it?</h5>
                        <p>{whyWeLike}</p>
                            </div>
                        </div>
                        {/* cons of our picks */}
                            <div className="col-md-6 flex justify-center sm:justify-start">
                                
                            <div className='everyPart'>
                            <h5>Cons</h5>
                        <ul className='topBrokerList anyList'>
                            {/* render cons */}
                        {cons.map((oneCon)=>(
                                <li>{oneCon}</li>
                            ))}
                        </ul>
{/* compare button to enables you to select many picks and compare between them */}

{/* the shape of buttons in large screens */}
                        <div className='md:visible sm:hidden flex gap-3 pt-10 justify-end'>
                    <Button className='newBtn compareBtn' 
                    onClick={()=>{
                         dispatch(add({imgUrl,title,whyWeLike,pros,cons,fees,accountMin,overview}))
                         setIsClicked(true);
                    }}>Compare</Button>
                    <Button className='newBtn pickcardBtn'>Create Account</Button>
                </div>   
                
                            </div>
                            </div>
{/* the shape of buttons in small screens */}

                            <div className='sm:visible md:hidden flex gap-3 pt-10 sm:justify-end'>
                    <Button className='newBtn compareBtn'onClick={()=>{
                         dispatch(add({imgUrl,title,whyWeLike,pros,cons,fees,accountMin,overview}))
                         setIsClicked(true);
                         setCloseCompare(false);
                    }}>Compare</Button>
                    <Button className='newBtn pickcardBtn'>Create Account</Button>
                </div>

                    </div>
                </div>
            </div>

         

        </div>

  

    )

}

export default PickCard