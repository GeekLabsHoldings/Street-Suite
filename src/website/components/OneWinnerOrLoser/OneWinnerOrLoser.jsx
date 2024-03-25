import Top3 from '../../assets/1 top3.png';
import './OneWinnerOrLoser.css';

const OneWinner = ({imgUrl,num,winner})=>{
    return(
        <div className='flex align-items-center gap-3 winnerBG ps-4 py-2 relative '>
            <h5>{num}</h5>
            <img src={imgUrl} />
            <div >
            <h5>JOHN dOW</h5>
            {winner?<p>+100 Day Streak</p>:null}
            </div>
            {winner?<div className='putTop3'>
            <img className='w-full' src={Top3} alt="" />
            </div> : null}
            
        </div>
   
    )

}

export default OneWinner