import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import * as React from 'react';


  // repeated form for signup and contact us

const FormComponent = ({purpose,label1,label2,label3,label4,textArea,needCheckbox,needForthInput,btnTxt,needFirstPrt}) =>{

    return(
      // welcoming text and purpose of form
        <div className='formHead formElementsAndBtn'>
          <div className=' formElements'>
         {needFirstPrt? <div className='sm:pb-5 sm:text-center' >
        <h3>Welcome to <span className='highlight'>Street Suite!</span></h3>
        <p>{purpose}</p>
        </div> :null}
<div>
      
    <FormControl className="formGroup">

    <div>
    <FormLabel required className='mb-1 labelfont'
    sx={{
    "& .MuiFormLabel-asterisk":{
    color:'white'
    }
    }}>{label1}</FormLabel>
    <Input
    name={label1}
    type="text"
    placeholder= {`Enter your ${label1}`}
    />
    </div>

    <div>
    <FormLabel required className='mb-1 labelfont' sx={{
    "& .MuiFormLabel-asterisk":{
    color:'white'
    }
    }}>{label2}</FormLabel>
    <Input
    name={label2}
    type="email"
    placeholder={`Enter your ${label2}`}
    />
    </div>

    <div>
        {textArea?<><FormLabel required className='mb-1 labelfont'sx={{
    "& .MuiFormLabel-asterisk":{
    color:'white'
    }
    }}>{label3}</FormLabel>
     <textarea name="aboutMe" id="about" className='w-full textArea textAreaInForm ' rows="4"></textarea>
    
    </>:
    
    <>
    <FormLabel required className='mb-1 labelfont'sx={{
    "& .MuiFormLabel-asterisk":{
    color:'white'
    }
    }}>{label3}</FormLabel>

    <Input
    name={label3}
    placeholder={`Enter your ${label3}`}
    type="text"
        />
    </>
    }
    </div>
{needForthInput ?     <div>
    <FormLabel required className='mb-1 labelfont' sx={{
    "& .MuiFormLabel-asterisk":{
    color:'white'
    }
    }}>{label4}</FormLabel>
    <Input
    name={label4}
    type="text"
    placeholder={`Enter your ${label4}`}
    />
    </div> : null}

 {/* Terms and Conditions */}
    {needCheckbox ? <div className='checkboxes'>
    <FormControlLabel control={<Checkbox />} className='labelfont checkboxFont rememberClass' label={<span>Remember me</span>} />
    <FormControlLabel required control={<Checkbox />} className='labelfont checkboxFont' label={<span>By creating an account, I have read and agreed to Street Suite's <a href="/terms&conditions"> Terms & Conditions.</a></span>}
     />
    </div> :null}

    </FormControl>
   
    </div>
          </div>


    <div className=' flex justify-center'>
    <Button className='newBtn formBtn'>{btnTxt}</Button>
    </div>
            </div>
        )

    }

    export default FormComponent