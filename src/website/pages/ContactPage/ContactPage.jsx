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
                <div className='forBG row contactBg mx-0'>
                    {/* other ways to get in touch */}

                    <div className="col-lg-6 col-sm-12 px-5" >
                        <div className='col-lg-8 m-auto'>
                            <div className='descPart' >
                          <div className='sm:pb-5'>
                          <h5 className='highlight d-inline-block'>Say Hi To Street Suite</h5>
                                <h1 className='sm:pb-3'>Contact Us</h1>
                                {showElement ? <p>Want to get in touch? We’re all ears, Let us <br /> know how we can help!</p> : null}
                                {showElement ? <div className='md:hidden sm:visible'>
                                <Button className='newBtn contactBtn' onClick={onClickHandler}>Leave a message</Button>
                                </div> : null}
                          </div>


                          {showElement ? <>
                                {/* available time */}
                                <h3>Can’t Talk Right now?</h3>
                                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                    <div className='flex flex-col md:gap-1'>
                                        <h4>Catch us on </h4>
                                        <p>Sunday through Thursday</p>
                                    </div>

                                    <div className='col-lg-6 flex flex-col align-items-center md:gap-1'>
                                        <h4>Between</h4>
                                        <p>9-5 EST</p>
                                    </div>
                                </div>
             
                                {/* contact by mail or mobile */}
                          <div className='flex flex-col sm:gap-2 md:gap-3'>
                          <h4 className='md:pb-2'>Reach Us On</h4>

                                <div className='containContactWays '>
                                    <div className='contactWays lg:gap-9 sm:gap-3'>
                                        <img src={MailIcon} />
                                        <span>stsuite@gmail.com</span>
                                    </div>
                                    <div className='contactWays lg:gap-9 sm:gap-3'>
                                        <img src={PhoneIcon} />
                                        <span>+02  015698564</span>
                                    </div>
                                </div>
                          </div>
                          </>:null}

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 ">
                        {showElement && btnCicked ?  null : <div className="col-lg-8 forBorder m-auto ">
                            <div className="formPart formBGMsg lg:pt-24 lg:pb-14 sm:pt-14 sm:pb-8 sm:px-4">
                                <div className='inForm'>
                                    <div className='col-lg-10 m-auto'>
                                        {/* form for signup and contact us */}
                                        <FormComponent needFirstPrt={true} purpose='Send Us a Message!' label1='Full Name' label2='Email' label3='Message' btnTxt='Submit' needCheckbox={false} textArea={true} />
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    
                </div>
            </div>
        </>
    )

}

export default ContactPage