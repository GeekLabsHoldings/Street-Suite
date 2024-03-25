import Clock from '../../assets/clock.svg';
import './TimeForRead.css';
const TimeForRead = ()=>{
    return(
        <div className='time w-4/5 flex justify-between align-items-center '>
        <span>25 mins ago</span>
        <div className='flex align-items-center gap-2'>
            <img src={Clock} />
        <span className='grayOne'>6 min read</span>
        </div>
    </div>
    )
}

export default TimeForRead