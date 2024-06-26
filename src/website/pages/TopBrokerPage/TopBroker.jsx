import { Button } from 'react-bootstrap';
import OneBroker from '../../components/Onebroker/Onebroker';
import PickCard from '../../components/PickCard/PickCard';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { reset, removeItem } from '../../../redux/cardsSlice';
// our data here
import { brokersData, blackBrokerData, cardsData } from './brokersData';
import { Helmet } from 'react-helmet-async';
import './topBroker.css';



const TopBroker = () => {
    const cards = useSelector((state) => state.featuresCard.value);
    const dispatch = useDispatch();
    const [isClicked, setIsClicked] = useState(false);
    const [startCompare, setStartCompare] = useState(false);
    const [closeCompare, setCloseCompare] = useState(false);
    const [removeLastItem, setRemoveLastItem] = useState(false);


    // render reusable pick cards
    const renderCardsData = cardsData.map(({id, img, pros, cons, whyWeLike, title, fees, accountMin, overview }) => (
        <PickCard id={id} setCloseCompare={setCloseCompare} setIsClicked={setIsClicked} imgUrl={img} fees={fees} title={title} whyWeLike={whyWeLike} pros={pros} cons={cons} overview={overview} accountMin={accountMin} />
    ))

    // render our first 3 best brokers
    const renderBrokers =
        brokersData.map((broker) => (
            <div className='OneBrokerBG brokerDiv my-3'>
                <OneBroker num={broker.num} word={broker.word} />
            </div>
        ))

    // render the rest of best brokers
    const renderBlackBrokers =
        blackBrokerData.map((broker) => (
            <div className='brokerDiv blackBG my-3'>
                <OneBroker num={broker.num} word={broker.word} />
            </div>
        ))
    return (
        <>
            <Helmet>
                <title>Top Brokers | Street Suite</title>
                <meta
                    name="description"
                    content="Get to know our top picks for the best online broker platforms available right now."
                />
            </Helmet>

            <div className='Msglayout sm:px-4'>

                <div className="pt-5 sm:w-full">
                    <div className="brokersHeader md:w-7/12 text-center sm:w-full m-auto">
                        <h1>Best Online Brokers And Trading Platforms For <span className="highlight">Street Suite</span></h1>
                    </div>
                    {/* best brokers card */}
                    <div className='sm:visible md:hidden w-full'>
                        <div className='lg:w-1/2 smforBorder m-auto'>
                            <div className='formPart py-3 smbrokerBG'>
                                <div className='md:w-1/2 sm:px-12 text-center topBrokerSM '>
                                    <h4 className='sm:pt-5'>Best brokers for 2024</h4>
                                    <div>
                                        {renderBrokers}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-20">
                    <div className='flex '>
                        {/* description of our work */}
                        <div className='md:w-1/2 flex justify-end'>
                            <div className='md:w-10/12 rightPrt sm:pt-10'>
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
                        <div className='md:visible md:w-1/2 sm:hidden'>
                            <div className='md:w-8/12 forBorder m-auto'>
                                <div className='formPart brokerBG py-3'>
                                    <div className='md:w-8/12 m-auto text-center topBrokerSM'>
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
                    <div className=' md:w-10/12 m-auto '>
                        <div className='md:w-10/12 mx-auto my-5 ourPicks'>
                            <h4 className='md:pb-12 sm:pb-8' >More about our picks:</h4>
                            <div className='flex flex-col gap-3 w-full'>
                                {renderCardsData}
                            </div>
                        </div>
                    </div>
                    </div>

                </div>

                <div className={isClicked && !closeCompare ? 'visible comparePrt ' : 'hidden'}>
                    <div className={isClicked && !startCompare ? 'visible selectedItems' : ' hidden'}>
                        <div className='w-10/12 mx-auto flex justify-between selectFont'>
                            <h5>Selected ({cards.length})</h5>
                            <div className='flex gap-2'>
                                <Button className='newBtn compareBtn' onClick={() => {
                                    dispatch(reset());
                                }}>Reset</Button>

                                <Button className='newBtn pickcardBtn' onClick={() => {
                                    setStartCompare(true);
                                    setCloseCompare(false);
                                }} >Compare</Button>
                            </div>
                        </div>
                    </div>

                    <div className={startCompare && !removeLastItem ? 'visible h-3/6' : ' hidden'}>
                        <div className='md:pt-5 sm:pt-4 compareTable'>
                            <div className='flex flex-col md:gap-4 sm:gap-2 md:px-16 sm:px-10 sm:pb-3 md:pb-0 bottomThickBorder'>
                                <div className='flex justify-between '>
                                    <h5>Selected ({cards.length})</h5>
                                    <div>
                                        <svg onClick={() => { dispatch(reset()); setCloseCompare(true) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <h6>Selected Providers</h6>
                            </div>
                            <div className="flex overflow-auto max-w-full">
                                {cards.map((oneCard ) => (
                                    <div className='flex flex-col gap-2 min-w-1/4 relative'>
                                        <div className='md:px-8 sm:px-4 rightThickBorder w-full'>
                                            <div className="flex justify-around py-3">
                                                <div className="w-1/5 flex align-items-center">
                                                    <img className='w-full' alt='card-img' src={oneCard.imgUrl} />
                                                </div>

                                                <div className="w-3/5 providerTitle">
                                                    <h4>{oneCard.title}</h4>
                                                </div>
                                                <div className="w-1/12 ">
                                                    <svg
                                                        onClick={() => {
                                                            dispatch(removeItem(oneCard));
                                                            if (cards.length === 1) {
                                                                setRemoveLastItem(true);
                                                            }
                                                        }}
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="w-11/12 flex flex-col gap-2 text-center visitWebsite">
                                                <Button className='newBtn pickcardBtn w-full'>Learn More</Button>
                                                <span>On Interactive Brokers website</span>
                                            </div>
                                        </div>


                                        <div className='md:py-3 px-4 md:h-[3.75rem] sm:h-[2.5rem] providerFeatureName '>
                                        </div>

                                        <div className=" px-16 text-center rightThickBorder md:py-2 providerFeature">
                                            <h6>{oneCard.fees}</h6>
                                        </div>

                                        <div className='md:py-3 px-4 md:h-[3.75rem] sm:h-[2.5rem] providerFeatureName'>
                                        </div>

                                        <div className=" px-16 text-center rightThickBorder md:py-2 providerFeature">
                                            <h6>{oneCard.accountMin}</h6>
                                        </div>

                                        <div className='md:py-3 px-4 md:h-[3.75rem] sm:h-[2.5rem] providerFeatureName'>
                                        </div>

                                        <div className=" px-16 text-center rightThickBorder md:py-2 providerFeature">
                                            <h6>None</h6>
                                        </div>

                                    </div>
                                ))}
                                <div className=" feesPrt">
                                    <h4>Fees</h4>
                                </div>
                                <div className=" accountPrt">
                                    <h4>Account Minimum</h4>
                                </div>
                                <div className=" promotionsPrt">
                                    <h4>Promotions</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>


    )
}
export default TopBroker