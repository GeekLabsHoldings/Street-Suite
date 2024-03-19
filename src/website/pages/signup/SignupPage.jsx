import FormComponent from "../../components/FormComponent";
import LogoIcon from '../../assets/street suite logo-04 1.svg';
import './SignupPage.css';

const SignupPage = ()=>{
    return(
        <div className='Signuplayout row sm:px-10'>
        <div className='desc col-lg-6 col-sm-12 '>
          <div className="col-md-7 col-sm-12 sm:py-5 m-auto" >
           <div className="content ">
           <div className='imgDiv lg:w-52 sm:w-32 lg:-ml-7 sm:ml-0'>
            <img className="w-full" src={LogoIcon} />
            </div>
          <h3>Hello! <br />
          Let's get started with <br />
          your 14 Day <span className='highlight'>FREE Trial</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rerum vel deserunt debitis, tenetur molestiae veniam ad perspiciatis aperiam, exercitationem.</p>
           </div>
          </div>
        </div>

        <div className=' col-lg-6 col-sm-12'>
          <div className='row col-md-11 sm:mb-7 '>
          <div className='m-auto col-md-9 forBorder'>
         <div className='formPart formBGSignup lg:pt-24 lg:pb-14 sm:py-14 sm:px-4 '>
            <div className='inForm'>
                <div className='col-md-10 formcontent'>
                  <FormComponent purpose='Create a new account' label1='Full Name' label2='Email' label3='Password' needCheckbox={true} btnTxt='Sign Up' textArea={false}/>
                </div>
            </div>
        </div>
      </div>
    
        </div>
        </div>

     
      </div>

    )
}

export default SignupPage