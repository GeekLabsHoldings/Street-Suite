import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box';
import LoginImg from '../../assets/imgOfPerson.svg';
import './SettingPage.css';

const SettingPage = () =>{
return(
    <div className='w-full'>
        <nav className='bg-amber-600 flex justify-between'>
            <div className='LeftBorder'>
                <h1>Setting</h1>
            </div>
            <div>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Link href="#public-info">Public info</Link>
        <Link href="#account-billing">Account Billing</Link>
        <Link href="#leaderboard">Leaderboard</Link>
        <Link href="#notification">Notifications</Link>
        <Link href="#security">Privacy & Security</Link>
        </Box>
            </div>
     


        <div className='bg-red-600 flex gap-2'>
    <img src={LoginImg} alt="" />
        <div>
        <h6>Moni Roy</h6>
        <p>Beginner</p>
        </div>
    </div>

        </nav>


        
    </div>

)
}

export default SettingPage;