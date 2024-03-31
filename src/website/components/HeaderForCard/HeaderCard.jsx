import './HeaderCard.css';
import StarsImg from '../../assets/starts.svg';
import PopularImg from '../../assets/popular-badge.png';

const HeaderCard = ({ imgUrl }) => {
    return(
        <div className='w-full flex p-2 holder'>
            <div className='md:w-1/3 sm:w-2/5 flex align-items-center md:justify-center sm:justify-between md:gap-3 sm:gap-1 '>
                <div className="imgDivHeader sm:w-2/5 ">
                    <img className='w-full' src={imgUrl} />
                </div>
                <div className=" md:w-2/3 sm:w-3/5 textToImg sm:justify-end">
                    <div className='lg:py-3 sm:py-0 sm:pe-16 elementBorder w-full '>
                    <h4>Interactive Brokers</h4>
                    </div>
                </div>
            </div>
            <div className='md:w-2/3  sm:w-3/5 flex justify-center px-0'>
                <div className="md:w-1/3 sm:w-1/5 text-center flex flex-col justify-center align-items-center ">
                        <div className='elementBorder flex flex-col align-items-center sm:px-4 w-full'>
                        <h5>$0</h5>
                        <h5>Fees</h5>
                        </div>
                </div>
                <div className=" md:w-1/3 sm:w-2/5 text-center flex flex-col justify-center align-items-center ">
                        <div className='elementBorder w-full'>
                        <h5>$0</h5>
                        <h5>Account Min.</h5>
                        </div>
                </div>
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

    )
}


export default HeaderCard