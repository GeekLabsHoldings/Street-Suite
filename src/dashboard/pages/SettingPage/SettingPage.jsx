import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box';
import LoginImg from '../../assets/imgOfPerson.svg';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import './SettingPage.css';
import ProperityAndSwitch from '../../components/properitt-and-switch/ProperityAndSwitch';

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
  const TextareaAutosize= styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 0.2rem;
    min-height:5%;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: #2E2E2E ;
    border: 1px solid #979797;
  
    &:hover {
      border-color: #ffffff;
    }
  
    &:focus {
      border-color: #ffffff;

    }
    &:focus-visible {
      outline: 0;
    }
  `,
  );

const SettingPage = () =>{

    const indicatorHandler = (e)=>{
        // console.log(e.target.id)
        // console.log(this.id)
    }
    const [phone, setPhone] = useState('');

    function createData(Amount, Invoice_Number, Purchase, Date) {
        return { Amount, Invoice_Number, Purchase, Date };
      }
      
      const rows = [
        createData('$ 15', 15874622895478, 'Premium Plan', '20 March 2024'),
        createData('$ 15', 15874622895478, 'Premium Plan', '20 March 2024'),
        createData('$ 15', 15874622895478, 'Premium Plan', '20 March 2024'),
        createData('$ 15', 15874622895478, 'Premium Plan', '20 March 2024'),
        createData('$ 15', 15874622895478, 'Premium Plan', '20 March 2024'),
      ]; 

return(
    <div className='w-full px-4'>
        <nav className='flex justify-between p-3'>
            <div className='LeftBorder'>
                <h1>Setting</h1>
            </div>

            <div>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }} className='linksSection'>
        <Link href="#public-info">Public info</Link>
        <Link href="#account-billing">Account Billing</Link>
        <Link href="#leaderboard">Leaderboard</Link>
        <Link href="#notification">Notifications</Link>
        <Link href="#security">Privacy & Security</Link>
        </Box>
            </div>

        <div className='flex gap-2'>
    <img src={LoginImg} alt="" />
        <div className='loginPerson'>
        <h6>Moni Roy</h6>
        <p>Beginner</p>
        </div>
    </div>

        </nav>

        <div className="settingContent w-11/12 mx-auto flex flex-col gap-4 ">
            <div className="largeDiv flex">
                <div className="w-1/2 flex justify-center" id='public-info' key={5} onClick={indicatorHandler}>
                    <div className=' py-4 w-10/12 flex flex-col justify-center'>
                    <div className='rightBorder'>
                    <h3 className=' pb-2'>Public Information</h3>
                    <div className='flex flex-col gap-8 mx-auto '>
                    <div className='flex flex-col gap-1'>
            
            <p>This information will be publicly displayed and visible for all users.</p>
            </div>
        
    <div className='flex align-items-center '>
        <div className=' labelColor w-1/4 '>
        <label htmlFor="username" className='w-full'>Username</label>
        </div>
        <div className="w-1/2 ">
        <input type="text" id='username' className='w-full everyInput' />

        </div>
    </div>

    <div className='flex align-items-center '>
        <div className=' labelColor w-1/4 '>
        <label htmlFor="avatar" className='w-full'>Avatar</label>
        </div>
        <div className="w-1/2 flex gap-2 align-items-center">
        <div>
        <Avatar alt="user avatar" src={LoginImg} />
        </div>
        <div className='avatarTxt'>
            <p >Change Avatar</p>
            <p>Remove Avatar</p>
        </div>

        </div>
    </div>

    <div className='flex align-items-center '>
    <div className=' labelColor w-1/4 '>
        <label htmlFor="about" className='w-full'>About me</label>
        </div>
        <div className=" w-1/2 ">
        <TextareaAutosize id='about' aria-label="empty textarea"  />
        </div>
    </div>
        <div className='w-full flex justify-end px-3'>
    <Button className='settingBtn changesBtn px-4 py-2 w-fit'>Save Changes</Button>

    </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="w-1/2 flex justify-center">
                    <div className="w-10/12 py-4 ">
                    <h3 className='pb-2'>Private Details</h3>
                    <div className=' flex flex-col gap-4 mx-auto '>
                    <div className='flex flex-col gap-1'>
            
            <p>This information will not be publicly displayed.</p>
            </div>
        
   <div className='flex flex-col gap-2'>
   <div className='flex align-items-center '>
        <div className=' labelColor w-1/4 '>
        <label htmlFor="Email" className='w-full'>Email</label>
        </div>
            <div className='flex px-3'>
            <Button className='settingBtn changesBtn px-4 py-2 w-fit'>Change email</Button>
            </div>

    </div>
    <div className='flex align-items-center'>
        <div className=' labelColor w-1/4 '>
        <label htmlFor="Password " className='w-full'>Password </label>
        </div>
        <div className='flex px-3'>
            <Button className='settingBtn changesBtn px-4 py-2 w-fit'>Change Password</Button>
            </div>
    </div>
   </div>

    <div className='flex align-items-center'>
        <div className=' labelColor w-1/4 '>
        <label htmlFor="first-name" className='w-full'>First name</label>
        </div>
        <div className="w-1/2 ">
        <input type="text" id='first-name' className='w-full everyInput' />

        </div>
    </div>

    <div className='flex align-items-center'>
        <div className=' labelColor w-1/4 '>
        <label htmlFor="Last-name" className='w-full'>Last name</label>
        </div>
        <div className="w-1/2 ">
        <input type="text" id='Last-name' className='w-full everyInput' />

        </div>
    </div>

    <div className='flex align-items-center'>
        <div className=' labelColor w-1/4 '>
        <label htmlFor="Phone-number" className='w-full'>Phone number</label>
        </div>
        <div className="w-1/2 ">
         <PhoneInput
        defaultCountry="eg"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />

        </div>
    </div>

                     <div className='w-full flex justify-end px-3'>
    <Button className='settingBtn changesBtn px-4 py-2 w-fit'>Save Changes</Button>

    </div>
                    </div>

                    </div>

                </div>
 

            </div>

            <div className="flex gap-4">
                <div className="w-1/2  forBorder">
                    <div className="w-11/12 flex px-3 py-4 mx-auto formPart largeDiv">
                        <div className="w-1/2 flex flex-col gap-3">
                        <div className='flex flex-col gap-3'>
                        <h3>Leaderboard</h3>
                        <p>This information will be publicly displayed and visible for all users.</p>
                        </div>

                        <div className='p-3 forborderRaduis'>
                            <ProperityAndSwitch title='Wins Percentage'/>
                            <ProperityAndSwitch title='Profit'/>
                            <ProperityAndSwitch title='Average Gain'/>
                            <ProperityAndSwitch title='Wins Percentage'/>
                            <ProperityAndSwitch title='Number of Trades'/>
                        </div>

                        </div>

                        <div className="w-1/2 flex justify-end">
                            <div className="w-10/12 flex flex-col justify-between">
                            <ProperityAndSwitch title='Appear on leaderboard'/>
                            <div>
                           <div className='flex flex-col gap-2'>
                           <div className=' w-1/2 flex flex-col gap-2'>
                            <Button className='settingBtn changesBtn w-full py-1 '>Save Changes</Button>
                            <Button className='settingBtn disconnectBtn w-full py-1'>Disconnect</Button>
                            </div>
                            <p>Disconnect my broker’s account</p>

                           </div>
                            
                            </div>

                            </div>
                        </div>
                       
                    </div>
                </div>

                <div className="w-1/2 largeDiv">
                    <div className="w-11/12 px-3 py-4 flex flex-col gap-10 mx-auto">

                        <div className="flex justify-between ">
                            <h3>Notifications & Alerts</h3>
                        <ProperityAndSwitch title='Allow Notifications'/>
                        </div>

                        <div className="flex">
                        <div className="w-1/2 flex flex-col gap-3">
                                <div className='p-3 forborderRaduis'>
                                    <div className='optionAndDesc'>
                                    <ProperityAndSwitch title='Pause all'/>
                                    <span>Temporarily pause notification for 4 hours</span>
                                    </div>
                                    <div className='optionAndDesc'>
                                    <ProperityAndSwitch title='Quiet mode'/>
                                    <span>Automatically mute notifications at night</span>
                                    </div>
                                    <div className='optionAndDesc'>
                                    <ProperityAndSwitch title='Notify via Email'/>
                                    </div>
                                </div>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                    <div className="w-2/5 flex h-full align-items-end">
                                        <Button className='settingBtn changesBtn py-2 w-full'>Save Changes</Button>
                                    </div>
                                </div>
                        </div>
                       
           
                </div>
            </div>

        </div>

        <div className=" largeDiv">
            <div className="w-10/12 flex py-8 mx-auto">
            <div className="w-1/3">
           <div className='flex flex-col gap-2 accountBilling'>
           <h5>Account Billing</h5>
                <p>My Current Plan:</p>
                <div className='w-2/3 premuimDiv flex flex-col align-items-center p-3 gap-2'>
                    <div className='bottomBorder py-3 '>
                    <h4>premium Plan</h4>
                    </div>
                    <div className='flex align-items-center'>
                        <h1>$15</h1>
                        <h6>/ month</h6>
                    </div>
                </div>
           </div>
            </div>
            <div className="w-10/12 ">
                <div className='rightSecAccount flex flex-col gap-4'>
                <h5>In Voice:</h5>

    <div>
    <table className='w-full'>
        <thead>
            <tr>
                <td className='firstHead'>
                Amount
                </td>
                <td className='secondHead'>
                Invoice Number
                </td>
                <td className='thirdHead'>
                Purchase
                </td>
                <td className='forthHead'>
                Date
                </td>
            </tr>
        </thead>
        <tbody >
            <tr>
                <td className='firstTd'>
                $ 15
                </td>
                <td>
                15874622895478
                </td>
                <td>
                Premium Plan
                </td>
                <td>
                20 March 2024
                </td>
            </tr>
            <tr>
                <td className='firstTd'>
                $ 15
                </td>
                <td>
                15874622895478
                </td>
                <td>
                Premium Plan
                </td>
                <td>
                20 March 2024
                </td>
            </tr>
            <tr>
                <td className='firstTd'>
                $ 15
                </td>
                <td>
                15874622895478
                </td>
                <td>
                Premium Plan
                </td>
                <td>
                20 March 2024
                </td>
            </tr>
            <tr >
                <td className='firstTd'>
                $ 15
                </td>
                <td>
                15874622895478
                </td>
                <td>
                Premium Plan
                </td>
                <td>
                20 March 2024
                </td>
            </tr>
            <tr className='lastRow'>
                <td className='firstTd'>
                $ 15
                </td>
                <td>
                15874622895478
                </td>
                <td>
                Premium Plan
                </td>
                <td className='lastTd'>
                20 March 2024
                </td>
            </tr>
        </tbody>
    </table>
    </div>
                </div>
           
            </div>
            </div>

        </div>

        </div>

        
    </div>

)
}

export default SettingPage;