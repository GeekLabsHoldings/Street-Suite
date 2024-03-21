import { Button } from 'react-bootstrap';
import Vector1 from '../../assets/Vector1.svg';
import Vector2 from '../../assets/Group.svg';
import Vector3 from '../../assets/vector3.svg';
import TeamWork from '../../assets/team-working-together.png';
import Logo from '../../assets/street suite logo-04 1.svg';
import './Careers.css';

const CareersPage = ()=>{
    return(
    <div className="Msglayout py-4">
        <div className="flex md:w-2/3 mx-auto h-72 ">

            <div className='md:w-2/3 sm:w-full flex align-items-center justify-center'>
                <div className='w-2/3 flex flex-col gap-3 headerRight '>
                <h3>ST Suite’s Careers</h3>
                <p>Street Suite is expanding and we are looking for talented people to join our team!</p>
                <Button className='forbtn py-2 px-4 w-fit'>Open Vacancies</Button>
                </div>
                
            </div>

            <div className="md:w-1/2 forBorder">
                <div className="formPart githubBG h-full text-center w-1/3 flex flex-col gap-3 py-3">
                <h4>Check Our Git Hub</h4>
                <div className="emptyDivBorder w-4/5 m-auto h-3/4 my-4">
                    <div className='githubBG formPart'></div>
                </div>
                </div>
                <div>
                </div>
            </div>
        </div>

        <div className='flex justify-end'>
        <div className='w-5/6'>
            <div className='forAfterEffect forFonts'>
            <h3 className='pb-16'>How We Work At <span className="highlight">Street Suite?</span></h3>
            </div>
            <div className="flex px-0">
            <div className='w-1/2 flex flex-col gap-8'>
            <div className='flex w-4/5 gap-10 '>
                <div>
                <img src={Vector1} />
                </div>

                <div className='everySection'>
                    <h5 className='pb-3'>In-depth Strategies explained in detail</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className='flex w-4/5 gap-10'>
                <div>
                <img src={Vector2} />
                </div>

                <div className='everySection'>
                    <h5 className='pb-3'>Gamified Experience with live charts</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className='flex w-4/5 gap-10'>
                <div>
                <img src={Vector3} />
                </div>

                <div className='everySection'>
                    <h5 className='pb-3'>Over 14 Modules Covering multiple categories</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            </div>
            <div className="w-1/2 flex justify-end">
                    <img src={TeamWork} />
            </div>
            </div>   
        </div>
        </div>
       

        <div className=' flex flex-col gap-3 w-3/5 mx-auto '>
            <div className='forFonts gap-3 text-center w-3/4 flex flex-col mx-auto'>
                <h3> <span className="highlight">ST Suite</span> Benefits</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo</p>
            </div>
            <div className='flex justify-between relative'>
            <div className="smforBorder w-3/12 my-4">
                    <div className='flexibleBG formPart pt-2 pb-3 '>
                        <div className='everySection w-4/5 m-auto text-center'>
                        <h5>Flexible Working Hours Lol</h5>
                        </div>
                    </div>
                </div>
                
                <div className="smforBorder w-3/12 goUp ">
                    <div className='flexibleBG formPart pt-2 pb-3'>
                        <div className='everySection w-4/5 m-auto text-center'>
                        <h5>Flexible Working Hours Lol</h5>
                        </div>
                    </div>
                </div>

                <div className="smforBorder w-3/12 my-4">
                    <div className='flexibleBG formPart pt-2 pb-3 '>
                        <div className='everySection w-4/5 m-auto text-center'>
                        <h5>Flexible Working Hours Lol</h5>
                        </div>
                    </div>
                </div>
                
            </div>
            
            </div>

            <div className='w-3/5 flex m-auto joinTeamBG p-3 relative'>


                    <div className='w-1/2 flex flex-col justify-between '>
                        <div className='forFonts pb-12 gap-3'>
                        <h3>Join Our Team Now!</h3>
                <p>Street Suite is expanding and we are looking for talented people to join our team!</p>
                <Button className='forbtn py-2 px-4 w-fit'>Open Vacancies</Button>
                        </div>
                
                <div className='borderTop movingCards w-3/5 mt-10 '>
                    <h5> Back End Developer</h5>
                </div>
                    </div>

                <div className=" w-2/5 flex flex-col align-items-center justify-end moveMiddle">
                <div className='borderTopForMid emptyDivBorder movingCards w-4/5 mt-10 flex flex-col gap-2 align-items-center'>
                    <div className='middleCard px-5 py-3 '>
                    <h5> Back End Developer</h5>
                    <p>Street Suite is expanding and we are looking for talented people to join our team!</p>
                    <Button className='forbtn py-2 px-4 w-fit'>Apply</Button>
                    </div>
                </div>
                </div>

                <div className="w-1/2 flex flex-col align-items-end pe-16 justify-between pt-2 ">
                    <div style={{width:'300px', height:'100px',paddingTop:'2rem'}}>
                    <img src={Logo} className='w-full'  />
                    </div>
                    <div className='borderTop movingCards w-3/5 mt-14'>
                    <h5>UX/UI Designer</h5>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default CareersPage