import './ComparePage.css';
import TestImg from '../../assets/broker-img1.png';
import { Button } from 'react-bootstrap';

const ComparePage = ()=>{
    return(
        <div>
            <div className="w-1/2 text-center compareHeader mx-auto py-20">
            <h1>Best Online Brokers and Trading Platforms for <span className='highlight'>Street Suite</span></h1>
            </div>
            <div className=' pt-5 compareTable'>
                <div className='flex flex-col gap-4 px-16 bottomThickBorder'>
                <div className='flex justify-between'>
                <h5>Selected (2)</h5>
               <div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
               </div>
                </div>
                <h6>Selected Providers</h6>
                </div>

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
                       
        </div>
            
            </div>

    )
}

export default ComparePage