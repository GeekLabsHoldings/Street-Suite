import Clock from '../../assets/clock.svg';
import './TimeForRead.css';
const TimeForRead = ({datePosted="n days ago", timeRead="n min read"})=>{
    return(
        // common section for the time for reading any blog
        <div className='time md:w-4/5 flex justify-between align-items-center'>
        <span>{datePosted}</span>
        <div className='flex align-items-center md:gap-2 sm:gap-1'>
            <img src={Clock} />
        <span className='grayOne'>{timeRead}</span>
        </div>
    </div>
    )
}

export default TimeForRead