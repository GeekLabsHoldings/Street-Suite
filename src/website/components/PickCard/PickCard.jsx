import { Button } from 'react-bootstrap';
import './pickCard.css'
import HeaderCard from '../HeaderForCard/HeaderCard';
import FirstImg from '../../assets/firstImgBroker.svg';
const PickCard = ()=>{
    return(
        <div className='cardBG'>
        <div className="cardHeader">
            <HeaderCard imgUrl={FirstImg}/>
        </div>
                <div className="col-md-11 m-auto py-5 pickContainer">
                    <div className='row '>
                        <div className="col-md-6 " >
                        <div className='everyPart'>
                            <h5>Overview</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                         </div>



                        <div className="col-md-6 flex justify-center " >
                            <div className='everyPart'>
                            <h5>Pros:</h5>
                        <ul className='topBrokerList anyList'>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur
                            </li>
                            <li>
                            sed do eiusmod tempor incididunt ut labore et 
                            </li>
                            <li>
                            dolore magna aliqua. Ut enim ad minim 
                            </li>
                        </ul>
                            </div>
              
                         </div>
                   
                    </div>
                    <div className='row justify-between'>
                    <div className="col-md-6 ">
                        <div className='everyPart'>
                        <h5>Why we Like it?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        </div>
                         
                         <div className="col-md-6 flex justify-center ">
                            <div className='everyPart'>
                            <h5>Cons</h5>
                        <ul className='topBrokerList anyList'>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur
                            </li>
                            <li>
                            sed do eiusmod tempor incididunt ut labore et 
                            </li>
                            <li>
                            dolore magna aliqua. Ut enim ad minim 
                            </li>
                        </ul>
                        <div className='flex gap-3 pt-10 justify-end'>
                    <Button className='topBrokerBtns compareBtn forbtn py-2 px-4 w-fit'>Compare</Button>
                    <Button className='topBrokerBtns forbtn py-2 w-fit'>Create Account</Button>
                </div>
                        
                            </div>
            
                         </div>
     
             
                    </div>
             
                </div>

        </div>

  

    )

}

export default PickCard