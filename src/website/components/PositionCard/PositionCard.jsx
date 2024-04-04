import LabelAndInput from '../../components/LabelAndInput';
import Button from '@mui/material/Button';
import FormLabel from '@mui/joy/FormLabel';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { useState } from 'react';

const PositionCard =({positionTitle,positionIdx})=>{
    const [index, setIndex] = useState(0);


    return(

        <div className= 'grayPositionBorder carrerPositionCollapse md:py-0 sm:py-4' >
        <Accordion 
        type="single"
        sx={{
            "&.Mui-expanded":{
                border:'1px solid #53ACFF',
                borderRadius:'0.5rem',
            },
            "&.Mui-expanded p":{
                    display:'none'
            },
            "&.Mui-expanded h2":{
                color:"#53ACFF"
            },
            padding:'0 2rem',

        }}
         
     expanded={index === positionIdx}
     onChange={(event, expanded) => {
       setIndex(expanded ? positionIdx: null);
     }} 
>
    <div className='grayPositionContainer bgPositionCard'>
    <AccordionSummary >
    <h2 className='headOfRightDiv md:w-4/5'>{positionTitle}</h2>
    <div className='txtAlone'>
    <p className='ms:visible sm:hidden'>We're seeking a Senior Backend Developer to join our team and contribute to the development of our cutting-edge products and services.</p>
    </div>
     </AccordionSummary>

    <AccordionDetails className="accordionDetails">

<div className="everyPosition md:flex"  style={{borderRadius:'0.8rem'}}>
            <div className="md:w-1/2 ">
    <div className="w-4/5 mx-auto flex flex-col gap-7 sm:pb-10 bottomBorderInSm">
            <div className='txtAlone'>
            <span>We're seeking a Senior Backend Developer to join our team and contribute to the development of our cutting-edge products and services.</span>
            </div>

             <div className='headAndUl flex flex-col md:gap-4 sm:gap-3'>
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
            
           <div className='headAndUl flex flex-col md:gap-4 sm:gap-3'>
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
           
           <div className='headAndUl flex flex-col md:gap-4 sm:gap-3'>
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
            <div className="md:w-1/2 sm:pt-10">
                <div className="w-4/5 positionRightPart flex flex-col md:gap-20 sm:gap-7 sm:mx-auto sm:pb-4">
                    <div className='flex flex-col gap-4'>
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
               <div className='selectFile'>
               <input type="file" id="files" class="hidden"/>
                <label for="files" className='w-fit fileBtn'>Attach pdf</label>

               </div>
                    </div>

               <div className='mx-auto'>
               <Button className='changesBtn applyBtn w-fit '>Apply</Button>
               </div>
               </div>
            </div>
        </div>
</AccordionDetails>

</div>

</Accordion>

    </div>

    )
}

export default PositionCard