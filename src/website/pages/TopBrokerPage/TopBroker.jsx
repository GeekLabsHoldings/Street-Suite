import { Button } from 'react-bootstrap';
import OneBroker from '../../components/Onebroker/Onebroker';
import PickCard from '../../components/PickCard/PickCard';
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import TestImg from '../../assets/broker-img1.png';
import { useSelector, useDispatch } from 'react-redux'
import { add, reset } from '../../../redux/cardsSlice';
// our data here
import {brokersData,blackBrokerData,ImagesData} from './brokersData';

import './topBroker.css';


const TopBroker = ()=>{
    const cards = useSelector((state) => state.featuresCard.value);
    const dispatch = useDispatch();
  
    const [itemsToCompare,setItemsToCompare] = useState([]);
    const [isClicked,setIsClicked] = useState(false);
    const [startCompare,setStartCompare] = useState(false);

   // render reusable pick cards
    const renderCards = ImagesData.map ((img)=>(
        <div>
            <PickCard setIsClicked={setIsClicked} setItemsToCompare={setItemsToCompare} itemsToCompare={itemsToCompare} imgUrl={img}/>
        </div>
    ))

    // render our first 3 best brokers
    const renderBrokers = 
        brokersData.map((broker)=>(
        <div className='OneBrokerBG brokerDiv my-3'>
            <OneBroker num={broker.num} word={broker.word}/>
        </div>
    ))

    // render the rest of best brokers
    const renderBlackBrokers = 
    blackBrokerData.map((broker)=>(
    <div className='brokerDiv blackBG my-3'>
        <OneBroker num={broker.num} word={broker.word}/>
    </div>
))
return(
    <div className='Msglayout'>

        <div className="pt-5 sm:w-full">
            <div className="brokersHeader md:w-7/12 text-center sm:w-full m-auto">
            <h1>Best Online Brokers And Trading Platforms For <span className="highlight">Street Suite</span></h1>
            </div>
            {/* best brokers card */}
            <div className='sm:visible md:hidden w-full'>
                    <div className='col-lg-6 smforBorder m-auto'>
                        <div className='formPart smbrokerBG py-3'>
                            <div className='md:w-1/2 sm:px-12 text-center topBrokerSM'>
                                    <h4 className='sm:pt-5'>Best brokers for 2024</h4>
                                    <div  >
                                    {renderBrokers}
                                    </div>
                            </div>
                        </div>
                    </div>
        </div>
        
            <div className='row'>
                {/* description of our work */}
            <div className='col-md-6'>
                <div className='col-md-10 m-auto rightPrt sm:pt-10'>
                    <div>
                    <h4 className='pb-4'>What are our Top choice’s criteria?</h4>
                <div className="textSection ">
                <p>Our top choices for brokerage platform integration are selected based on criteria that prioritize reliability, diversity of trading instruments, user interface quality, advanced tools, competitive pricing, customer support, and regulatory compliance. </p>
                    <p>hese platforms offer stability for seamless trading, a wide range of instruments for diversified portfolios, intuitive interfaces with advanced charting, competitive pricing, robust customer support, and adherence to regulatory standards. </p>
                    <p>By integrating these platforms, we aim to provide our users with the best trading experience, ensuring efficiency, security, and access to valuable tools for informed decision-making</p>
                </div>
                    </div>
                    <div>
                    <h4 className='pb-4'>How to  make pick the best platform for you?</h4>
                <div className="textSection ">
                    <ul className='topBrokerList anyList spacedList'>
                        <li key={1}>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </span>
                        </li>
                        <li key={2}>
                        <span>magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  </span>
                        </li>
                        <li key={3}>
                        <span>aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur </span>
                        </li>
                        <li key={4}>
                        <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                        </li>
                    </ul>
                </div>
                    </div>
            
                </div>
                
            </div>
            {/* display our brokers */}
            <div className='md:visible col-md-6 sm:hidden'>
                    <div className='col-lg-8 forBorder m-auto'>
                        <div className='formPart brokerBG py-3'>
                            <div className='col-lg-8 m-auto text-center'>
                                    <h4 className='py-8'>Best brokers for 2024</h4>
                                    <div>
                                    {renderBrokers}
                                    {renderBlackBrokers}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* display our picks */}
            <div className=' col-md-10 m-auto'>
                <div className='col-md-10 mx-auto my-5 ourPicks'>
                <h4 className='md:pb-5 sm:pb-8' >More about our picks:</h4>
                <div className='flex flex-col gap-3'>
                {renderCards}
                </div>
                </div>
            </div>

        </div>

        <div className={isClicked ?'visible comparePrt':'hidden'}>
        <div className={isClicked &&  !startCompare ? 'visible selectedItems' : ' hidden selectedItems'}>
                <div className='w-10/12 mx-auto flex justify-between'>
                        <h5>Selected ({cards.length})</h5>
                        <div className='flex gap-2'>
                        <Button className='forbtn py-2 px-5 compareBtn'onClick={()=>{
                            dispatch(reset());
                            console.log(cards)
                        }}>Reset</Button>
                        <Button className='forbtn py-2 px-5'onClick={()=>{
                            setStartCompare(true);
                        }} >Compare</Button>
                        </div>
                    </div>
                </div>

            <div className={startCompare ? ' visible' : ' hidden'}>
            <div className='pt-5 compareTable'>
                    <div className='flex flex-col gap-4 px-16 bottomThickBorder'>
                    <div className='flex justify-between'>
                    <h5>Selected ({itemsToCompare.length})</h5>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                    </div>
                    <h6>Selected Providers</h6>
                    </div>
                    {cards.map((oneCard)=>(
                        <div className='flex flex-col gap-2'>
            <div className='w-1/4 px-16 rightThickBorder'>
                                <div className=" flex justify-around py-3">
                                <div className="w-1/5">
                                    <img src={TestImg} />
                                    </div>
                                    <div className="w-2/5 providerTitle">
                                        <h4>Interactive Brokers</h4>
                                    </div>
                                    <div className="w-1/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    </div>
                                    
                                </div>
                                <div className="w-11/12  flex flex-col gap-2 text-center visitWebsite">
                                        <Button className='forbtn w-full'>Learn More</Button>
                                        <span>On Interactive Brokers website</span>
                                    </div>
                                </div>
                                <div className='py-3 px-4 providerFeatureName'>
                                <h4>fees</h4>
                            </div>
                            <div className="w-1/4 px-16 text-center rightThickBorder py-2 providerFeature">
                                <h6>$ 0</h6>
                            </div>
                            <div className='py-3 px-4 providerFeatureName'>
                                <h4>Account Minimum</h4>
                            </div>
                            <div className="w-1/4 px-16 text-center rightThickBorder py-2 providerFeature">
                                <h6>$ 0</h6>
                            </div>
                            <div className='py-3 px-4 providerFeatureName'>
                                <h4>Promotions</h4>
                            </div>
                            <div className="w-1/4 px-16 text-center rightThickBorder py-2 providerFeature">
                                <h6>None</h6>
                            </div>

                            
                        
                            </div>
                    ))}

            
                        
            </div> 
            </div>
        </div>
                
    </div>

    
)
}
export default TopBroker