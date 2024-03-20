import { Button } from 'react-bootstrap';
import './pickCard.css'
import HeaderCard from '../HeaderForCard/HeaderCard';



const PickCard = ({imgUrl})=>{
    return(
        <div className='cardBG'>
            <div className='headerBG '>
            <HeaderCard imgUrl={imgUrl}/>
            </div>

                <div className="col-md-11 m-auto py-5 pickContainer sm:px-3">
                    <div className='row '>
                        <div className="col-md-6 " >
                        <div className='everyPart'>
                            <h5>Overview</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                         </div>
                        <div className="col-md-6 flex justify-center sm:justify-start " >
                            <div className='everyPart'>
                            <h5>Pros:</h5>
                        <ul className='topBrokerList anyList'>
                            <li key={1}>
                                Lorem ipsum dolor sit amet, consectetur
                            </li>
                            <li key={2}>
                            sed do eiusmod tempor incididunt ut labore et 
                            </li>
                            <li key={3}>
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
                         
                         <div className="col-md-6 flex justify-center sm:justify-start">
                            <div className='everyPart'>
                            <h5>Cons</h5>
                        <ul className='topBrokerList anyList'>
                            <li key={1}>
                                Lorem ipsum dolor sit amet, consectetur
                            </li>
                            <li key={2}>
                            sed do eiusmod tempor incididunt ut labore et 
                            </li>
                            <li key={3}>
                            dolore magna aliqua. Ut enim ad minim 
                            </li>
                        </ul>

                        <div className='md:visible sm:hidden flex gap-3 pt-10 justify-end'>
                    <Button className='topBrokerBtns compareBtn forbtn py-2 px-4 w-fit'>Compare</Button>
                    <Button className='topBrokerBtns forbtn py-2 w-fit'>Create Account</Button>
                </div>
                        
                            </div>
            
                         </div>
                         <div className='sm:visible md:hidden flex gap-3 pt-10 sm:justify-end'>
                    <Button className='topBrokerBtns compareBtn forbtn py-2 px-4 w-fit'>Compare</Button>
                    <Button className='topBrokerBtns forbtn py-2 w-fit'>Create Account</Button>
                </div>
             
                    </div>
             
                </div>

        </div>

  

    )

}

export default PickCard