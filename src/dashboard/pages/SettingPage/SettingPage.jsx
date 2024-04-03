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
import BillIcon from '../../assets/billIcone.svg'

import ProperityAndSwitch from '../../components/properitt-and-switch/ProperityAndSwitch';
import './SettingPage.css';
import { Helmet } from 'react-helmet-async';

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

const TextareaAutosize = styled(BaseTextareaAutosize)(
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

const SettingPage = () => {

    const [changeClass, setChangeClass] = useState('');

    const indicatorHandler = (e) => {
        setChangeClass(e.currentTarget.id);

    }

    const [phone, setPhone] = useState('');

    const styles = {
        highlightStyle: {
            backgroundColor: '#53ACFF',
            borderRadius: '0.3rem',
            padding: '0 0.3rem'
        }
    }

    return (

        <>
            <Helmet>
                <title>Settings | Street Suite</title>
                <meta
                    name="description"
                    content="Street Suite – Settings"
                />
            </Helmet>

            <div className='w-full md:px-4 sm:px-2'>
                {/* navbar contains links lead you to every section and indicators specify clicked section */}
                <nav className='flex justify-between p-3'>
                    <div className='LeftBorder'>
                        <h1>Settings</h1>
                    </div>

                    <div className='sm:hidden md:visible'>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }} className='linksSection'>
                            <Link href="#public-info" style={changeClass === 'public-info' ? styles.highlightStyle : null}>Public info</Link>
                            <Link href="#account-billing" style={changeClass === 'account-billing' ? styles.highlightStyle : null}>Account Billing</Link>
                            <Link href="#leaderboard" style={changeClass === 'leaderboard' ? styles.highlightStyle : null}>Leaderboard</Link>
                            <Link href="#notification" style={changeClass === 'notification' ? styles.highlightStyle : null}>Notifications</Link>
                            <Link href="#security" style={changeClass === 'security' ? styles.highlightStyle : null}>Privacy & Security</Link>
                        </Box>
                    </div>

                    {/* user signed in profile  */}
                    <div className='sm:hidden md:visible flex gap-2'>
                        <img src={LoginImg} alt="" />
                        <div className='loginPerson'>
                            <h6>Moni Roy</h6>
                            <p>Beginner</p>
                        </div>
                    </div>

                    <div className='sm:visible md:hidden'>
                        <a href="#"><img src={BillIcon} alt="" /></a>
                    </div>

                </nav>

                <div className="settingContent md:w-11/12 mx-auto flex flex-col gap-4 ">
                    <div className="settingCardBorder">
                        <div className=' md:flex settingBorderContainer largeDiv'>
                            {/* public information editing section */}
                            <div className="md:w-1/2 flex justify-center" id='public-info' onClick={indicatorHandler}>
                                <div className=' py-4 w-10/12 flex flex-col justify-center'>
                                    <div className='rightBorder sm:py-3 '>
                                        <h3 className=' pb-2'>Public Information</h3>
                                        <div className='flex flex-col md:gap-8 sm:gap-4 mx-auto '>
                                            <p>This information will be publicly displayed and visible for all users.</p>

                                            {/* change username */}
                                            <div className='md:flex align-items-center '>
                                                <div className=' labelColor md:w-1/4 '>
                                                    <label htmlFor="username" className='w-full'>Username</label>
                                                </div>
                                                <div className="md:w-1/2 ">
                                                    <input type="text" id='username' className='w-full everyInput' />

                                                </div>
                                            </div>
                                            {/* change avatar or remove it */}
                                            <div className='md:flex align-items-center '>
                                                <div className=' labelColor md:w-1/4 '>
                                                    <label htmlFor="avatar" className='w-full'>Avatar</label>
                                                </div>
                                                <div className="md:w-1/2 flex gap-2 align-items-center">
                                                    <div>
                                                        <Avatar alt="user avatar" src={LoginImg} />
                                                    </div>
                                                    <div className='avatarTxt'>
                                                        <p >Change Avatar</p>
                                                        <p>Remove Avatar</p>
                                                    </div>

                                                </div>
                                            </div>

                                            {/* change about section */}
                                            <div className='md:flex align-items-center '>
                                                <div className=' labelColor md:w-1/4 '>
                                                    <label htmlFor="about" className='w-full'>About me</label>
                                                </div>
                                                <div className=" md:w-1/2 ">
                                                    <TextareaAutosize id='about' aria-label="empty textarea" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* private details section */}
                            <div className="md:w-1/2 flex justify-center" id='security' onClick={indicatorHandler}>
                                <div className="w-10/12 md:py-4 sm:py-3 leftSectionSetting">
                                    <h3 className='pb-2'>Private Details</h3>
                                    <div className=' flex flex-col md:gap-4 sm:gap-2 mx-auto '>
                                        <div className='flex flex-col gap-1'>

                                            <p>This information will not be publicly displayed.</p>
                                        </div>

                                        <div className='flex md:flex-col gap-2'>
                                            {/* change email */}
                                            <div className='md:flex align-items-center '>
                                                <div className=' labelColor md:w-1/4 '>
                                                    <label htmlFor="Email" className='w-full'>Email</label>
                                                </div>
                                                <div className='flex'>
                                                    <Button className='settingBtn changesBtn w-fit'>Change email</Button>
                                                </div>

                                            </div>
                                            {/* cahnge password section */}
                                            <div className='md:flex align-items-center'>
                                                <div className=' labelColor md:w-1/4 '>
                                                    <label htmlFor="Password " className='w-full'>Password </label>
                                                </div>
                                                <div className='flex'>
                                                    <Button className='settingBtn changesBtn w-fit'>Change Password</Button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* change first or last name */}
                                        <div className='md:flex align-items-center'>
                                            <div className=' labelColor md:w-1/4 '>
                                                <label htmlFor="first-name" className='w-full'>First name</label>
                                            </div>
                                            <div className="md:w-1/2 ">
                                                <input type="text" id='first-name' className='w-full everyInput' />

                                            </div>
                                        </div>

                                        <div className='md:flex align-items-center'>
                                            <div className=' labelColor md:w-1/4 '>
                                                <label htmlFor="Last-name" className='w-full'>Last name</label>
                                            </div>
                                            <div className="md:w-1/2 ">
                                                <input type="text" id='Last-name' className='w-full everyInput' />

                                            </div>
                                        </div>
                                        {/* change phone number */}
                                        <div className='md:flex align-items-center'>
                                            <div className=' labelColor md:w-1/4 '>
                                                <label htmlFor="Phone-number" className='w-full'>Phone number</label>
                                            </div>
                                            <div className="md:w-1/2 ">
                                                <PhoneInput
                                                    defaultCountry="eg"
                                                    value={phone}
                                                    onChange={(phone) => setPhone(phone)}
                                                />

                                            </div>
                                        </div>

                                        <div className='w-full md:flex justify-end md:px-3 sm:py-3'>
                                            <Button className='settingBtn changesBtn md:px-4 md:py-2 md:w-fit sm:w-full'>Save Changes</Button>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>



                    </div>

                    <div className="flex sm:flex-col gap-4">
                        {/* leaderboard section  */}
                        <div className="md:w-1/2 settingCardBorder" id='leaderboard' onClick={indicatorHandler}>
                            <div className=" settingBorderContainer largeDiv">
                                <div className='w-11/12 mx-auto md:flex px-3 py-4'>
                                    <div className="md:w-1/2 flex flex-col gap-3">
                                        <div className='flex flex-col md:gap-3 sm:gap-2 leftSectionSetting'>
                                            <h3>Leaderboard</h3>
                                            <p>This information will be publicly displayed and visible for all users.</p>
                                        </div>

                                        <div className='sm:visible md:hidden'>
                                            <ProperityAndSwitch title='Appear on leaderboard' />
                                        </div>

                                        <div className='p-3 forborderRaduis'>
                                            <ProperityAndSwitch title='Wins Percentage' />
                                            <ProperityAndSwitch title='Profit' />
                                            <ProperityAndSwitch title='Average Gain' />
                                            <ProperityAndSwitch title='Wins Percentage' />
                                            <ProperityAndSwitch title='Number of Trades' />
                                        </div>

                                    </div>

                                    <div className="md:w-1/2 flex md:justify-end">
                                        <div className="md:w-10/12 flex flex-col justify-between">
                                            <div className='sm:hidden md:visible'>
                                                <ProperityAndSwitch title='Appear on leaderboard' />
                                            </div>
                                            <div>
                                                {/* disconnect broker's account and this section appear in small screens only */}
                                                <div className='flex flex-col md:gap-2 sm:gap-4 txtUnderProperities'>

                                                    <div className='sm:visible md:hidden flex gap-2 mt-4'>
                                                        <p>Disconnect my broker’s account</p>
                                                        <Button className='settingBtn disconnectBtn w-full '>Disconnect</Button>
                                                    </div>

                                                    <div className=' md:w-1/2 md:flex flex-col gap-2'>
                                                        <Button className='settingBtn changesBtn w-full py-1 '>Save Changes</Button>
                                                        <div className='sm:hidden md:visible'>
                                                            <Button className=' settingBtn disconnectBtn w-full py-1'>Disconnect</Button>
                                                        </div>
                                                    </div>
                                                    <p className='sm:hidden md:visible'>Disconnect my broker’s account</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="md:w-1/2 settingCardBorder" id='notification' onClick={indicatorHandler}>


                            <div className='settingBorderContainer largeDiv'>
                                <div className="w-11/12 mx-auto px-3 py-4 flex flex-col md:gap-10 sm:gap-2 ">
                                    {/* notifications section */}
                                    <div className="md:flex justify-between leftSectionSetting ">
                                        <h3>Notifications & Alerts</h3>
                                        <ProperityAndSwitch title='Allow Notifications' />
                                    </div>

                                    <div className="md:flex">
                                        <div className="md:w-1/2 flex flex-col md:gap-3">
                                            <div className='p-3 sm:mb-4 forborderRaduis'>
                                                <div className='optionAndDesc'>
                                                    <ProperityAndSwitch title='Pause all' />
                                                    <span>Temporarily pause notification for 4 hours</span>
                                                </div>
                                                <div className='optionAndDesc'>
                                                    <ProperityAndSwitch title='Quiet mode' />
                                                    <span>Automatically mute notifications at night</span>
                                                </div>
                                                <div className='optionAndDesc'>
                                                    <ProperityAndSwitch title='Notify via Email' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:flex justify-end">
                                            <div className="md:w-2/5 flex h-full align-items-end">
                                                <Button className='settingBtn changesBtn md:py-2 w-full'>Save Changes</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>


                    <div className='settingCardBorder ' id='account-billing' onClick={indicatorHandler}>
                        <div className="settingBorderContainer largeDiv">
                            <div className="w-10/12 md:flex py-8 mx-auto">
                                <div className="md:w-1/3 sm:pb-4">
                                    {/* your plan and premuim plan and its cost */}
                                    <div className=' flex flex-col md:gap-2 sm:gap-4 accountBilling'>
                                        <h5>Account Billing</h5>
                                        <p>My Current Plan:</p>
                                        <div className='md:w-2/3 premuimBorder'>
                                            <div className='flex flex-col align-items-center md:p-3 sm:py-3 gap-2 premuimContainer premuimDiv'>
                                                <div className='bottomBorder p-3 sm:w-10/12 sm:text-center md:w-fit  '>
                                                    <h4>premium Plan</h4>
                                                </div>
                                                <div className='flex align-items-center'>
                                                    <h1>$15</h1>
                                                    <h6>/ month</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-10/12 ">
                                    <div className='rightSecAccount flex flex-col gap-4'>
                                        <h5>In Voice:</h5>

                                        <div>

                                            <div className="tableSection flex flex-col ">
                                                <div className="tableHead ">
                                                    <ul className='grid md:grid-cols-4 sm:grid-cols-3 itemsBG'>
                                                        <li>Amount</li>
                                                        <li className='sm:hidden md:visible'>Invoice Number</li>
                                                        <li className='sm:visible md:hidden'>Invoice #</li>
                                                        <li className='md:visible sm:hidden'>Purchase</li>
                                                        <li>Date</li>
                                                    </ul>
                                                </div>
                                                <div className="tableBody flex flex-col gap-[2px]">
                                                    <ul className='grid md:grid-cols-4 sm:grid-cols-3  gap-[1px] itemsBG'>

                                                        <li>$ 15</li>
                                                        <li>15874622895478</li>
                                                        <li className='sm:hidden md:visible'>Premium Plan</li>
                                                        <li>20 March 2024</li>
                                                    </ul>
                                                    <ul className='grid grid-cols-4 sm:grid-cols-3 gap-[2px] itemsBG'>
                                                        <li>$ 15</li>
                                                        <li>15874622895478</li>
                                                        <li className='sm:hidden md:visible'>Premium Plan</li>
                                                        <li>20 March 2024</li>
                                                    </ul>
                                                    <ul className='grid grid-cols-4 sm:grid-cols-3 gap-[2px] itemsBG'>
                                                        <li>$ 15</li>
                                                        <li>15874622895478</li>
                                                        <li className='sm:hidden md:visible'>Premium Plan</li>
                                                        <li>20 March 2024</li>
                                                    </ul>
                                                    <ul className='grid grid-cols-4 sm:grid-cols-3 gap-[2px] itemsBG'>
                                                        <li>$ 15</li>
                                                        <li>15874622895478</li>
                                                        <li className='sm:hidden md:visible'>Premium Plan</li>
                                                        <li>20 March 2024</li>
                                                    </ul>
                                                    <ul className='grid grid-cols-4 sm:grid-cols-3 gap-[2px] itemsBG'>
                                                        <li>$ 15</li>
                                                        <li>15874622895478</li>
                                                        <li className='sm:hidden md:visible'>Premium Plan</li>
                                                        <li>20 March 2024</li>
                                                    </ul>
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
        </>


    )
}

export default SettingPage;