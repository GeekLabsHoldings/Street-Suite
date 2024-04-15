import './How-work.css';

const HowWork = ({Icon,Header})=>{
    return(
        // section that explain how we work in detail
        <div className='flex w-full md:gap-10 sm:gap-4'>
    <div className='vectorSize '>
    <img className='w-full' src={Icon} />
    </div>

    <div className='everySection md:w-full sm:w-11/12 '>
        <h5 className='md:pb-3 sm:pb-1'>{Header}</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
    )

}

export default HowWork