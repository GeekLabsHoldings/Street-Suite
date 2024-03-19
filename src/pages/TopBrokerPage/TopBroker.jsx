import OneBroker from '../../components/Onebroker/Onebroker';
import PickCard from '../../components/PickCard/PickCard';
import {brokersData,blackBrokerData} from './brokersData';
import './topBroker.css';
const TopBroker = ()=>{
    const renderBrokers = 
        brokersData.map((broker)=>(
        <div className='OneBrokerBG brokerDiv my-3'>
            <OneBroker num={broker.num} word={broker.word}/>
        </div>
    ))
    const renderBlackBrokers = 
    blackBrokerData.map((broker)=>(
    <div className='brokerDiv blackBG my-3'>
        <OneBroker num={broker.num} word={broker.word}/>
    </div>
))
return(
    <div className="Msglayout">
            <div className="brokersHeader col-md-6 m-auto ">
            <h1>Best Online Brokers And Trading Platforms For <span className="highlight">Street Suite</span></h1>
            </div>
            <div className='row'>
            <div className='col-md-6'>
                <div className='col-md-10 m-auto rightPrt'>
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
                        <li>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </span>
                        </li>
                        <li>
                        <span>magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  </span>
                        </li>
                        <li>
                        <span>aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur </span>
                        </li>
                        <li>
                        <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                        </li>
                    </ul>
                </div>
                    </div>
            
                </div>
                
            </div>
            <div className='col-md-6'>
                    <div className='col-lg-6 forBorder m-auto'>
                        <div className='formPart brokerBG py-3'>
                            <div className='col-lg-8 m-auto text-center'>
                                    <h4 className='py-8'>Best brokers for 2024</h4>
                                    <div >
                                    {renderBrokers}
                                    {renderBlackBrokers}
                                    </div>
                            </div>
                     

                        </div>

                    </div>

                </div>
            </div>

            <div className=' col-md-10 m-auto'>
                <div className='col-md-10 m-auto my-5'>
                <h4 className='pb-5' >More about our picks:</h4>
                <PickCard/>
                </div>
            </div>
 
    </div>
)
}
export default TopBroker