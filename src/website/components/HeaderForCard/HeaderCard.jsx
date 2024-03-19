import './HeaderCard.css';
import StarsImg from '../../assets/starts.svg';
import PopularImg from '../../assets/popular-badge.png'
const HeaderCard = ({ imgUrl }) => {
    
    return(
        <div className='w-full flex p-2 holder'>
            <div className='w-1/3 flex align-items-center gap-3'>
                <div className=" w-1/3 sm:imgDivHeader">
                        <img className='w-full' src={imgUrl} />
                </div>
                <div className=" w-2/3 textToImg elementBorder pe-2">
                        <h4>  Interactive Brokers</h4>
                    </div>

            </div>
            <div className='w-2/3 flex'>
                <div className=" w-1/3 text-center flex flex-col justify-center align-items-center ">
                        <div className='elementBorder w-full'>
                        <h5>$0</h5>
                        <h5>Fees</h5>
                        </div>
                </div>
                <div className=" w-1/3 text-center flex flex-col justify-center align-items-center ">
                        <div className='elementBorder w-full'>
                        <h5>$0</h5>
                        <h5>Account Min.</h5>
                        </div>
                </div>
                <div className=" w-1/3 text-center flex flex-col justify-center align-items-center ">
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