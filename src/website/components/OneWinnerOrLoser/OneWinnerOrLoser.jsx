import Top3 from '../../assets/1 top3.png';
import './OneWinnerOrLoser.css';

const OneWinner = ({imgUrl,num,winner})=>{
    return(
        // section for name , photo and rank for every winner or loser
        <div className=' border-animate winnerBG'>
           <div className=' w-full bg-black ps-4 py-2 winnerBG flex align-items-center gap-3 relative !z-50'>
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
            
        </div>
   
    )

}

export default OneWinner