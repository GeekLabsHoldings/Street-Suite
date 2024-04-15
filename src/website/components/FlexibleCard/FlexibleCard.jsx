import './FlexibleCard.css';


const FlexibleCard =({classname})=>{
    return(
        // small card to inform you 
        <div className={`smforBorder md:w-1/4 sm:w-5/12 ${classname}`}>
        <div className='flexibleBG movingBorder pt-3 pb-4 '>
            <div className='everySection cardsFont text-center md:mx-10 sm:mx-5 sm:px-2'>
            <h5>Flexible Working Hours Lol</h5>
            </div>
        </div>
    </div>
    )

}

export default FlexibleCard