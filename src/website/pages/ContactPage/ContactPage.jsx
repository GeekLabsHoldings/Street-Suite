import './ContactPage.css';
import FormComponent from '../../components/FormComponent';
import PhoneIcon from '../../assets/phone.svg';
import MailIcon from '../../assets/mail.svg';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
const ContactPage = () => {
    const [showElement,setShowElement] = useState(true);
    const [btnCicked,setBtnClicked] = useState(false);
    const onClickHandler = ()=>{
        setBtnClicked(true);
        setShowElement(false);
    }

    return (
        <>
            <Helmet>
                <title>Contact Us | Street Suite</title>
                <meta
                    name="description"
                    content="Want to get in touch? Find out how to contact a Street Suite representative."
                />
            </Helmet>

            <div className='Msglayout'>
                <div className='forBG flex sm:flex-col contactBg mx-0'>
                    {/* other ways to get in touch */}

                    <div className="lg:w-1/2 sm:w-full px-5" >
                        <div className='lg:w-2/3 mx-auto'>
                            <div className='descPart' >
                          <div className='sm:pb-5 contactUsBrief'>
                          <div>
                          <h5 className='highlight d-inline-block'>Say Hi To Street Suite</h5>
                          </div>
                                <h1 >Contact Us</h1>
                                {showElement ? <p>Want to get in touch? We’re all ears, Let us <br /> know how we can help!</p> : null}
                                {showElement ? <div className='md:hidden sm:visible'>
                                <Button className='newBtn contactBtn' onClick={onClickHandler}>Leave a message</Button>
                                </div> : null}
                          </div>

                          {showElement ? <>
                                {/* available time */}
                           <div className='leftContentInContactUs'>
                           <div>
                                <h3>Can’t Talk Right now?</h3>
                                </div>
                           <div>
                           <div className='timeForContact'>
                                    <div className='contactDays'>
                                        <h4>Catch us on </h4>
                                        <p>Sunday through Thursday</p>
                                    </div>

                                    <div className='lg:w-1/2 contactHours'>
                                        <h4>Between</h4>
                                        <p>9-5 EST</p>
                                    </div>
                                </div>
             
                                {/* contact by mail or mobile */}
                          <div className=' reachUsAndContactWays'>
                          <h4 className='md:pb-2'>Reach Us On</h4>

                                <div className='containContactWays '>
                                    <div className='contactWays'>
                                        <img src={MailIcon} />
                                        <span>stsuite@gmail.com</span>
                                    </div>
                                    <div className='contactWays'>
                                        <img src={PhoneIcon} />
                                        <span>+02  015698564</span>
                                    </div>
                                </div>
                          </div>
                           </div>
                           </div>
                          </>:null}

                            </div>
                        </div>
                    </div>

                    {/* {showElement && btnCicked ?  null : */}
                    <div className="lg:w-1/2 sm:w-10/12" >
                         <div className={btnCicked? "lg:w-2/3 forBorder mx-auto ":'md:visible sm:hidden md:w-2/3 forBorder m-auto'}>
                            <div className="formPart formBGMsg md:px-4 lg:px-0">
                                <div className='inForm'>
                                    <div className='lg:w-10/12 sm:w-10/12 mx-auto '>
                                        {/* form for signup and contact us */}
                                        <FormComponent needFirstPrt={true} purpose='Send Us a Message!' label1='Full Name' label2='Email' label3='Message' btnTxt='Submit' needCheckbox={false} textArea={true} />
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

export default ContactPage