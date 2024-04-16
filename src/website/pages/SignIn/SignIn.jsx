import LogoIcon from '../../assets/street suite logo-04 1.svg';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LabelAndInput from '../../components/LabelAndInput';
import Button from '@mui/material/Button';
import './SignIn.css'
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import {signIn} from '../../../redux/cardsSlice';

const SignIn = () => {
    const userState = useSelector((state) => state.login.value);
    const dispatch = useDispatch();
    return (
        <>
            <Helmet>
                <title>Log in | Street Suite</title>
                <meta
                    name="description"
                    content="Join Street Suite – a trading tool which will provide you with daily trading alerts and insights you can trust, with all the information to back it up."
                />
            </Helmet>

{/* sign in page */}
            <div className="signInBG flex align-items-center ">
                <div className="flex sm:flex-col sm:gap-24 md:gap-0 sm:py-10">
                    <div className="md:w-1/2">
                        <div className="md:w-3/5 sm:w-10/12 mx-auto flex flex-col gap-6">
                            <div className="signInLogo">
                                <img className="w-full" src={LogoIcon} />
                            </div>
                            {/* welcoming text */}
                            <div className="signinContent flex flex-col md:gap-4 sm:gap-1">
                                <div>
                                    <h2 className='md:ps-3'>Hello!</h2>
                                    <span className="highlight px-3">
                                        Welcome Back!
                                    </span>
                                </div>
                                <p className='md:ps-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                            </div>
                        </div>

                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="forBorder md:w-3/5 sm:w-10/12 ">
                            <div className='formPart formBGSignIn '>
                                <div className="formElements flex flex-col gap-20 w-10/12 mx-auto md:pt-28 md:pb-20 sm:pt-12 sm:pb-8 ">
                                    {/* welcoming text in large screens */}

                                <div className='flex flex-col gap-12 '>
                                     <div className='md:visible sm:hidden text-center'>
                                        <h3>Welcome back to <span className='highlight'>Street Suite!</span></h3>
                                    </div>
                                    {/* welcoming text in small screens */}
                                    <div className='md:hidden sm:visible text-center flex flex-col gap-2'>
                                        <h3>Welcome to <span className='highlight'>Street Suite!</span></h3>
                                        <p>Log in to your account</p>
                                    </div>
                                    {/* forn to enter user email and password */}
                                    <div className=' formLabelsAndInputs'>
                                    <LabelAndInput labeltext='Email' required={true} placeholder='Enter your email' />
                                    <LabelAndInput labeltext='Password' required={true} placeholder='Enter password' />
                                    <FormControlLabel control={<Checkbox />} className='labelfont checkboxFont rememberClass' label="Remember me" />
                                    </div>
                                </div>
                            {/*button to complete login  */}
                                    <div className='mx-auto'>
                                        <Button className='newBtn loginBtn' onClick={()=>{dispatch(signIn())}}>Log In</Button>
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

export default SignIn