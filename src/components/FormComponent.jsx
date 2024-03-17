import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/system';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
 const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
 export const TextareaAutosize= styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    min-height:30%;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
    &:focus-visible {
      outline: 0;
    }
  `,
  );
   const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#53ACFF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
const FormComponent = ({purpose,label1,label2,label3,textArea,needCheckbox,btnTxt}) =>{
    return(
        <div>
        <h3>Welcome to <span className='highlight'>Street Suite!</span></h3>
        <p>{purpose}</p>

      <FormControl className="gap-4">

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
      }}>{label3}</FormLabel><TextareaAutosize aria-label="empty textarea" placeholder="......" /></>:<>
      <FormLabel required className='mb-1 labelfont'sx={{
      "& .MuiFormLabel-asterisk":{
      color:'white'
      }
      }}>{label3}</FormLabel>
      <Input
      name={label3}
      type="text"
      placeholder={`Enter your ${label3}`}
      />
      </>}
      </div>

      {needCheckbox ? <><FormControlLabel control={<Checkbox />} className='labelfont' label="Remember me" />
      <FormControlLabel required control={<Checkbox />} className='labelfont' label="By creating an account, I have read and agreed to Street Suite's Terms and Conditions" /></> :null}


      </FormControl>


<div className='btnContainer'> 
<button type="button" className='btnColor'>{btnTxt}</button>
</div>
        </div>
    )

}

export default FormComponent