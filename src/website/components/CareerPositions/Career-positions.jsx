import './Career-positions.css';
const CareerPositions = ({whichMove,positionName})=>{
    return(
        // small card has position name and lead you to full description of it
        <div className={`md:visible sm:hidden whiteBorder w-1/4 mt-10 ${whichMove} `}>
        <div className='movingBorder pt-4 pb-12 movingCardsBG movingCards text-center'>
        <h5>{positionName}</h5>
        </div>
       </div>
    )
}
export default CareerPositions;