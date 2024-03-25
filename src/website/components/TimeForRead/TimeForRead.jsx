import Clock from '../../assets/clock.svg';
import './TimeForRead.css';
const TimeForRead = ()=>{
    return(
        <div className='time md:w-4/5 flex justify-between align-items-center '>
        <span>25 mins ago</span>
        <div className='flex align-items-center md:gap-2 sm:gap-1'>
            <img src={Clock} />
        <span className='grayOne'>6 min read</span>
        </div>
    </div>
    )
}

export default TimeForRead