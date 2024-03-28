
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const ProperityAndSwitch = ({title})=>{
    return(
        <div className='flex align-items-center justify-between'>
                <p>{title}</p>
                <Switch {...label} />
        </div>
    )
}

export default ProperityAndSwitch