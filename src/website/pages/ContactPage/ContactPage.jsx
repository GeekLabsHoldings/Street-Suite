import { Button } from 'react-bootstrap';
import './ContactPage.css';
import FormComponent from '../../components/FormComponent';
import PhoneIcon from '../../assets/phone.svg';
import MailIcon from '../../assets/mail.svg'
const ContactPage = ()=>{
    
return(
    <div className='Msglayout'>
        <div className='forBG row contactBg'>
            {/* other ways to get in touch */}

        <div className="col-lg-6 col-sm-12 px-5" >
            <div className='col-lg-8 m-auto'>
                <div className='descPart' >
                <h5 className='highlight d-inline-block'>Say Hi To Street Suite</h5>
                <h1>Contact Us</h1>
                <p>Want to get in touch? We’re all ears, Let us <br /> know how we can help!</p>
                
                <div className="btns col-lg-5">
                <Button className='forbtn py-2 sm:w-fit md:w-full'>Yes, Lets Chat!</Button>
                <Button className='forbtn py-2 sm:w-fit md:w-full'>I Prefer to leave a message</Button>
                </div>
                
                {/* available time */}
                <h3>Can’t Talk Right now?</h3>
                <div style={{display:"flex",justifyContent:'space-between'}}>
                    <div className='flex flex-col md:gap-1'>
                    <h4>Catch us on </h4>
                <p>Sunday through Thursday</p>
                    </div>

                    <div className='col-lg-6 flex flex-col md:gap-1'>
                    <h4>Between</h4>
                    <p>9-5 EST</p>
                </div>
                </div>
        {/* contact by mail or mobile */}
                <h4 className='md:pb-2'>Reach Us On</h4>
                
                <div className='containContactWays '>
                <div className='contactWays lg:gap-9 sm:gap-3'>
                <img src={MailIcon}/>
                <span>stsuite@gmail.com</span>
                </div>
                <div className='contactWays lg:gap-9 sm:gap-3'>
                <img src={PhoneIcon}/>
                <span>+02  015698564</span>
                </div>
                </div>
                
                </div>
            </div>
            </div>

            <div className="col-lg-6 sm:hidden">
                <div className="col-lg-8 forBorder m-auto">
                    <div className="formPart formBGMsg lg:pt-24 lg:pb-14 sm:py-14 sm:px-4">
                        <div className='inForm'>
                        <div className='col-lg-9 m-auto'>
                            {/* form for signup and contact us */}
                            <FormComponent purpose='Send Us a Message!' label1='Full Name' label2='Email' label3='Message' btnTxt='Submit' needCheckbox={false} textArea={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)

}

export default ContactPage