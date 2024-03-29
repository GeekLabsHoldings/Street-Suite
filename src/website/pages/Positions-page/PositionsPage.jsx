
import LabelAndInput from '../../components/LabelAndInput';
import Button from '@mui/material/Button';
import FormLabel from '@mui/joy/FormLabel';
import './PositionsPage.css';

const PositionsPage = ()=>{
    return(
        <div className='py-5'>
            <div className="w-1/2 headOfPage mx-auto flex flex-col align-items-center gap-3">
                <h1><span className='highlight'>Street Suite</span> Vacancies </h1>
               <div className='w-5/12 text-center'>
               <p>Street Suite is expanding and we are looking for talented people to join our team!</p>


               </div>
            </div>
         <div className="w-10/12 mx-auto">
         <div className='settingCardBorder' style={{borderRadius:'0.8rem'}}>
                <div className="settingBorderContainer px-7 py-10 everyPosition flex"  style={{borderRadius:'0.8rem'}}>
                    <div className="w-1/2 ">
            <div className="w-4/5 mx-auto flex flex-col gap-7">
            <h2 className='headOfRightDiv'>Back End Developer</h2>
                    <div className='txtAlone'>
                    <p>We're seeking a Senior Backend Developer to join our team and contribute to the development of our cutting-edge products and services.</p>
                    </div>

                     <div className='headAndUl'>
                   <h3>Responsibilities</h3>
                    <ul className='positionsList '>
                        <li>
                        Develop and maintain backend systems.
                        </li>
                        <li>
                        Collaborate to implement efficient solutions.
                        </li>
                        <li>
                        Optimize performance and ensure security.
                        </li>
                        <li>
                        Mentor junior developers and improve processes.
                        </li>
                    </ul>
                   </div>
                    
                   <div className='headAndUl'>
                   <h3>Benefits</h3>
                    <ul className='positionsList'>
                        <li>
                        Competitive salary and benefits.
                        </li>
                        <li>
                       Opportunities for professional growth and remote work options
                        </li>
                        <li>
                        Dynamic work environment focused on innovation and collaboration.
                        </li>
                     
                    </ul>
                   </div>
                   
                   <div className='headAndUl'>
                   <h3 className='movingH3'>Requirement</h3>
                    <div>
                    <ul className='positionsList'>
                        <li>
                        3 years of backend development experience.
                        </li>
                        <li>
                        Proficiency in Java, Python, or Node.js.
                        </li>
                        <li>
                        Strong understanding of software architecture and cloud platforms
                        </li>
                        <li>
                        Problem-solving and communication skills
                        </li>
                     
                    </ul>
                    </div>
                   </div>
                    
            </div>
                    </div>
                    <div className="w-1/2">
                        <div className="w-4/5 positionRightPart flex flex-col gap-4">
                            <h3>Fill Application</h3>
                            <LabelAndInput labeltext='First Name' required={true} placeholder='Enter your name'/>
                            <LabelAndInput labeltext='Last Name' required={true} placeholder='Enter your name'/>
                            <LabelAndInput labeltext='Email' required={true} placeholder='Email'/>
                            <LabelAndInput labeltext='Portfolio Link' required={false} />
                            <LabelAndInput labeltext='Get Hub Link' required={false} />
                            <FormLabel required className='mb-1 labelfont'
                            sx={{
                            "& .MuiFormLabel-asterisk":{
                            color:'white'
                            }
                            }}>Upload CV</FormLabel>
                            <input type="file" id="myFile" name="filename"></input>


                        </div>
                    </div>
                </div>

            </div>
         </div>
        </div>
    )

}

export default PositionsPage