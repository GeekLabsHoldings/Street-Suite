import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box';
import LoginImg from '../../assets/imgOfPerson.svg';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import BillIcon from '../../assets/billIcone.svg'
import ProperityAndSwitch from '../../components/properity-and-switch/ProperityAndSwitch';
import './SettingPage.css';
import { Helmet } from 'react-helmet-async';



const SettingPage = () => {

    const [changeClass, setChangeClass] = useState('');
    const [linkClicked,setLinkClicked] = useState('');
    const [beginChange,setBeginChange] = useState(false);

    const changeValue = ()=>{
        setBeginChange(true);
    }

    const indicatorHandler = (e) => {
        setChangeClass(e.currentTarget.id);
        setLinkClicked(e.currentTarget.id);
    }


    const [phone, setPhone] = useState('');

    const styles = {
        highlightStyle: {
            backgroundColor: '#53ACFF',
            borderRadius: '0.3rem',
            padding: '0 0.3rem'
        },
        changeBtn:{
            display:'none !important'
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
                            <Link href="#public-info" id='public-info' onClick={indicatorHandler} style={changeClass === 'public-info' || linkClicked === 'public-info' ? styles.highlightStyle : null} >Public info</Link>
                            <Link href="#account-billing" id='account-billing' onClick={indicatorHandler} style={changeClass === 'account-billing'  || linkClicked === 'account-billing' ? styles.highlightStyle : null} >Account Billing</Link>
                            <Link href="#leaderboard" id='leaderboard' onClick={indicatorHandler} style={changeClass === 'leaderboard' || linkClicked === 'leaderboard'? styles.highlightStyle : null} >Leaderboard</Link>
                            <Link href="#notification" id='notification' onClick={indicatorHandler} style={changeClass === 'notification'|| linkClicked === 'notification' ? styles.highlightStyle : null} >Notifications</Link>
                            <Link href="#security" id='security' onClick={indicatorHandler} style={changeClass === 'security' || linkClicked === 'security'? styles.highlightStyle : null} >Private Details</Link>
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
                                    <div className='rightBorder sm:py-3'>
                                        <div className='nameAndDescEverySec spaceBottom'>
                                        <h3>Public Information</h3>
                                        <p>This information will be publicly displayed and visible for all users.</p>
                                        </div>
                                        <div className='flex flex-col md:gap-8 sm:gap-4 mx-auto '>
                                           
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
                                                    <div className='avatarTxt flex flex-col gap-1'>
                                                        <p><a className='blueTxt' href="#">Change Avatar</a></p>
                                                        <p><a href="#">Remove Avatar</a></p>
                                                    </div>

                                                </div>
                                            </div>

                                            {/* change about section */}
                                            <div className='md:flex align-items-center '>
                                                <div className=' labelColor md:w-1/4 '>
                                                    <label htmlFor="about" className='w-full'>About me</label>
                                                </div>
                                                <div className=" md:w-1/2 ">
                                                    <textarea name="aboutMe" id="about" className='w-full textArea everyInput ' rows="2"></textarea>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* private details section */}
                            <div className="md:w-1/2 flex justify-center" id='security' onClick={indicatorHandler}>
                                <div className="w-11/12 md:pb-6 md:pt-10 sm:py-3 leftSectionSetting sectionHeader">
                                <div className='nameAndDescEverySec spaceBottom'>
                                        <h3>Private Details</h3>
                                        <p>This information will be publicly displayed and visible for all users.</p>
                                        </div>

                                    <div className=' flex flex-col md:gap-4 sm:gap-2 mx-auto'>

                                        <div className='flex md:flex-col md:gap-2 sm:gap-8'>
                                            {/* change email */}
                                            <div className='md:flex align-items-center '>
                                                <div className=' labelColor md:w-1/4 '>
                                                    <label htmlFor="Email" className='w-full'>Email</label>
                                                </div>
                                                <div className='flex'>
                                                    <Button className={!beginChange ? 'newBtn settingBtn w-fit' : 'hidden'} onClick={changeValue}>Change email</Button>
                                                    <input type="text" id='change-email' className={beginChange ?'w-full everyInput':'hidden'} />
                                                </div>

                                            </div>
                                            {/* cahnge password section */}
                                            <div className='md:flex align-items-center'>
                                                <div className=' labelColor md:w-1/4 '>
                                                    <label htmlFor="Password " className='w-full'>Password </label>
                                                </div>
                                                <div className='flex'>
                                                    <Button className='newBtn settingBtn w-fit'>Change Password</Button>
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
                                            <Button className='newBtn widerBtn w-fit md:w-fit sm:w-full'>Save Changes</Button>

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
                                    <div className="md:w-1/2 flex flex-col gap-4">
                                       
                                        <div className='nameAndDescEverySec leftSectionSetting sectionHeader'>
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

                                                    <div className='sm:visible md:hidden flex mt-4 gap-2'>
                                                        <p>Disconnect my broker’s account</p>
                                                        <Button className='newBtn settingBtn w-full '>Disconnect</Button>
                                                    </div>

                                                    <div className='disconnectSetting'>
                                                    <div className=' md:w-1/2 md:flex flex-col gap-2'>
                                                        <Button className='newBtn settingBtn w-full '>Save Changes</Button>
                                                        <div className='sm:hidden md:visible'>
                                                            <Button className=' settingBtn disconnetBtn w-full '>Disconnect</Button>
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
                        </div>

                        <div className="md:w-1/2 settingCardBorder" id='notification' onClick={indicatorHandler}>

                        {/* notifications section */}
                            <div className='settingBorderContainer largeDiv'>
                                <div className="w-11/12 mx-auto px-3 py-4 flex flex-col md:gap-10 sm:gap-2 ">
                                    
                                    <div className="md:flex justify-between leftSectionSetting sectionHeader">
                                        <h3>Notifications & Alerts</h3>
                                        <ProperityAndSwitch title='Allow Notifications' />
                                    </div>

                                    <div className="md:flex">
                                        <div className="md:w-1/2 flex flex-col md:gap-3">
                                            <div className='p-3 sm:mb-4 forborderRaduis'>
                                                <div className='optionAndDesc '>
                                                    <ProperityAndSwitch title='Pause all' />
                                                    <span className='lightTxt'>Temporarily pause notification for 4 hours</span>
                                                </div>
                                                <div className='optionAndDesc'>
                                                    <ProperityAndSwitch title='Quiet mode' />
                                                    <span className='lightTxt'>Automatically mute notifications at night</span>
                                                </div>
                                                <div className='optionAndDesc'>
                                                    <ProperityAndSwitch title='Notify via Email' />
                                                </div>
                                            </div>
                                        </div>
                                     
                                    </div>
                                    <div className=" md:flex justify-end">
                                            <div className="flex ">
                                                <Button className='newBtn widerBtn'>Save Changes</Button>
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
                                                    <h4>Premium Plan</h4>
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
                                        <h5>Invoice:</h5>

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