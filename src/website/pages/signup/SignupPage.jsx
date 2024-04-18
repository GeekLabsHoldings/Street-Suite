import FormComponent from "../../components/FormComponent";
import LogoIcon from '../../assets/street suite logo-04 1.svg';
import './SignupPage.css';
import { Helmet } from "react-helmet-async";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

const SignupPage = () => {
  return (

    <>
              <Helmet>
                <title>Sign Up | Street Suite</title>
                <meta
                    name="description"
                    content="Join Street Suite – a trading tool which will provide you with daily trading alerts and insights you can trust, with all the information to back it up."
                />
            </Helmet>
    
        <div className='Signuplayout flex mx-0 sm:px-10 sm:flex-col gap-3'>
      <div className='desc lg:w-1/2 md:w-full '>
        <div className="md:w-7/12 sm:w-full sm:py-5 mx-auto" >
          {/* our logo and small intro */}
          <div className="content ">
            <div className='imgDiv lg:w-52 sm:w-32 lg:-ml-7 sm:ml-0'>
              <img className="w-full" src={LogoIcon} />
            </div>
            <h3>Hello! <br />
              Let's get started with your 14 Day <span className='highlight'>FREE Trial</span></h3> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rerum vel deserunt debitis, tenetur molestiae veniam ad perspiciatis aperiam, exercitationem.</p>
          </div>
        </div>
      </div>

      <div className='lg:w-1/2 md:w-full'>
        <div className='flex w-11/12 sm:mb-7 mx-auto'>
          <div className='mx-auto md:w-3/4 forBorder'>
            <div className='formPart formBGSignup '>
              <div className='inForm'>
                <div className='md:w-10/12 formcontent'>
                  {/* common form for signup and contact us */}
                  <FormComponent needForthInput={true} label4='Password' needFirstPrt={true} purpose='Create a new account' label1='First Name' label2='Last Name' label3='Email' needCheckbox={true} btnTxt='Sign Up' textArea={false} />
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

export default SignupPage