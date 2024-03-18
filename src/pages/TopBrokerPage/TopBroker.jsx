import OneBroker from '../../components/Onebroker/Onebroker';
import './topBroker.css';
const TopBroker = ()=>{
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
                    <ul>
                        <li>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                        </li>
                        <li>
                        <p>magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  </p>
                        </li>
                        <li>
                        <p>aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur </p>
                        </li>
                        <li>
                        <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </li>
                    </ul>
                </div>
                    </div>
            
                </div>
                
            </div>
            <div className='col-md-6'>
                    <div className='col-lg-8 forBorder m-auto'>
                        <div className='formPart brokerBG'>
                            <div className='col-lg-7 m-auto text-center'>
                                    <h4>Best brokers for 2024</h4>
                                    <div className='OneBrokerBG'>
                                    <OneBroker num={1} word='Interactive Brokers'/>
                                    </div>
                            </div>
                     

                        </div>

                    </div>

                </div>
            </div>
 
    </div>
)
}
export default TopBroker