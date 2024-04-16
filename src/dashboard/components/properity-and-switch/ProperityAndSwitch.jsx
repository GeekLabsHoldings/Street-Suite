
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const ProperityAndSwitch = ({title})=>{

    return(
        // To turn on or off specific thing 
        <div className='flex align-items-center justify-between properityInSwitch'>
                <p>{title}</p>
                <Switch {...label} />
        </div>
    )
}

export default ProperityAndSwitch