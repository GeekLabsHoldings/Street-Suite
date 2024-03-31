import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';

const LabelAndInput = ({labeltext,required,placeholder})=>{
    
    return(
        <div>
        <FormLabel required={required} className='mb-1 labelfont'
        sx={{
        "& .MuiFormLabel-asterisk":{
        color:'white'
        }
        }}>{labeltext}</FormLabel>
        <Input
        name={labeltext}
        type="text"
        placeholder = {placeholder}
        />
        </div>
    
    )
}
export default LabelAndInput;