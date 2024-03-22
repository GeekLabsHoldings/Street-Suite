import { Button } from 'react-bootstrap';
import Vector1 from '../../assets/Vector1.svg';
import Vector2 from '../../assets/Group.svg';
import Vector3 from '../../assets/vector3.svg';
import TeamWork from '../../assets/team-working-together.png';
import Logo from '../../assets/street suite logo-04 1.svg';
import Icon from '../../assets/visibleInSmIcon.svg';
import './Careers.css';

const CareersPage = ()=>{
    return(
    <div className="bgImg md:py-4 md:mb-5 ">
        <div className="md:flex md:w-2/3 mx-auto my-20  ">

<div className='md:w-2/3 flex align-items-center justify-center mb-5'>
    <div className='w-2/3 flex flex-col gap-3 headerRight '>
    <h3>ST Suite’s Careers</h3>
    <p>Street Suite is expanding and we are looking for talented people to join our team!</p>
    <Button className='forbtn careerBtn py-2 px-4 w-fit'>Open Vacancies</Button>
    </div>
    
</div>

<div className="md:w-5/12 sm:hidden forBorder careerForBorder">
    <div className="formPart githubBG text-center flex flex-col w-1/4 gap-8 py-3">
        <div className=' mt-2'>
        <h4 >Check Our Git Hub</h4>
        </div>
    <div className="emptyDivBorder w-4/5 m-auto h-52 mb-3 ">
        <div className='githubBG formPart'></div>
    </div>
    </div>

</div>
<div className='md:hidden sm:visible w-3/4 mx-auto forBorder flex justify-start visibleInSmBorder '>
    <div className='formPart text-center px-3 py-3 justify-between visibleInSm visibleInSmBorder'>
        <div className='flex align-items-center'>
        <h4>Check Our Git Hub</h4>
        </div>
        <div>
    <Button className=' bg-transparent border-0 w-fit'><img src={Icon} /></Button>
    </div>
    </div>
   
    
</div>

</div>


<div className='flex md:justify-end sm:justify-center '>
<div className='w-5/6 '>
<div className='md:forAfterEffect forFonts lg:w-full sm:w-2/3'>
<h3 className='pb-16'>How We Work At <span className="highlight">Street Suite?</span></h3>
</div>
<div className="flex px-0">
<div className='md:w-1/2 sm:w-full flex justify-center flex-col gap-8'>

<div className='flex w-full md:gap-10 sm:gap-4'>
    <div className='vectorSize '>
    <img className='w-full' src={Vector1} />
    </div>

    <div className='everySection md:w-full sm:w-11/12 '>
        <h5 className='md:pb-3 sm:pb-1'>In-Depth Strategies Explained In Detail</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
<div className='flex w-full md:gap-10 sm:gap-4'>
    <div  className='vectorSize'>
    <img className='w-full'src={Vector2} />
    </div>

    <div className='everySection md:w-full sm:w-11/12'>
        <h5 className='md:pb-3 sm:pb-1'>Gamified Experience with live charts</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
<div className='flex w-full md:gap-10 sm:gap-4'>
    <div  className='vectorSize'>
    <img className='w-full'src={Vector3} />
    </div>

    <div className='everySection md:w-full sm:w-11/12'>
        <h5 className='md:pb-3 sm:pb-1'>Over 14 Modules Covering multiple categories</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
</div>
<div className="md:visible sm:hidden w-1/2 flex justify-end">
        <img src={TeamWork} />
</div>
</div>   
</div>
</div>


<div className='flex flex-col gap-3 mx-auto md:py-40 sm:my-20 sm:px-5 '>
<div className='md:w-2/5 sm:w-full forFonts gap-4 text-center flex flex-col mx-auto md:pb-16 sm:pb-2'>
    <h3> <span className="highlight">ST Suite</span> Benefits</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo</p>
</div>

<div className='md:w-4/6 sm:w-full mx-auto flex md:justify-between sm:justify-around relative'>

<div className="smforBorder md:w-1/4 sm:w-5/12 my-4">
        <div className='flexibleBG movingBorder pt-3 pb-4 '>
            <div className='everySection cardsFont text-center md:mx-10 sm:mx-5 sm:px-2'>
            <h5>Flexible Working Hours Lol</h5>
            </div>
        </div>
    </div>
    
    <div className="smforBorder md:w-1/4 sm:w-5/12 goUp ">
        <div className='flexibleBG movingBorder pt-3 pb-4 '>
            <div className='everySection text-center cardsFont md:mx-10 sm:mx-5 sm:px-2 '>
            <h5>Flexible Working Hours Lol</h5>
            </div>
        </div>
    </div>

    <div className=" smforBorder md:w-1/4 sm:w-5/12 my-4 ">
        <div className='flexibleBG movingBorder pt-3 pb-4  '>
            <div className='everySection cardsFont text-center md:mx-10 sm:mx-5 sm:px-2'>
            <h5>Flexible Working Hours Lol</h5>
            </div>
        </div>
    </div>
    
</div>
</div>




<div className='md:w-3/5 sm:w-full flex m-auto joinTeamBG p-2 '>
     <div className="forShadow md:p-12 relative sm:p-8 sm:mb-10 flex w-full">
     <div className='md:w-1/2 sm:w-2/3 flex flex-col '>
        <div className='forFonts paragraphFont flex flex-col md:gap-6 sm:gap-2 md:mb-40 '>
            <h3>Join Our Team Now!</h3>
            <p>Street Suite is expanding and we are looking for talented people to join our team!</p>
            <Button className='forbtn py-2 px-4 w-fit'>Open Vacancies</Button>
        </div>
    
    <div className='md:visible sm:hidden whiteBorder w-1/4 mt-10 moveFirst '>
        <div className='movingBorder pt-4 pb-12 movingCardsBG movingCards text-center'>
        <h5> Back End Developer</h5>
        </div>
       
    </div>
        </div>

    <div className="md:visible sm:hidden w-2/5 flex flex-col align-items-center justify-end moveMiddle">
    <div className=' positionsBorder movingCards w-4/6 mt-10 flex flex-col gap-2 align-items-center'>
        <div className='middleCard flex flex-col align-items-center md:w-4/5 px-4 py-10 '>
        <h5> Back End Developer</h5>
        <p>Street Suite is expanding and we are looking for talented people to join our team!</p>
        <Button className='forbtn py-2 px-4 w-fit'>Apply</Button>
        </div>
    </div>
    </div>

  <div className="md:w-1/2 sm:w-1/3 flex flex-col joinTeamBG md:pe-16 align-items-end md:justify-between md:pt-2  ">
        <div className='smImgSize '>
        <img src={Logo} className='w-full'  />
        </div>

        <div className='md:visible sm:hidden whiteBorder w-1/4 mt-10 moveLast '>
            <div className='movingBorder pt-4 pb-12 movingCardsBG movingCards text-center'>
            <h5>UX/UI Designer</h5>
            </div>
    </div>

    </div>
     </div>


    
</div>
        
        </div>
    )
}

export default CareersPage