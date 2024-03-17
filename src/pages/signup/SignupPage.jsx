import FormComponent from "../../components/FormComponent";
import LogoIcon from '../../assets/street suite logo-04 1.svg'
import './SignupPage.css';
const SignupPage = ()=>{
    return(
        <div className='Signuplayout row'>
        <div className='desc col-lg-6'>
          <div className="content col-md-7 m-auto" >
            <div className='logoDiv'>
            <img src={LogoIcon} />
            </div>
          <h3>Hello! <br />
          Let's get started with <br />
          your 14 Day <span className='highlight'>FREE Trial</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rerum vel deserunt debitis, tenetur molestiae veniam ad perspiciatis aperiam, exercitationem.</p>
          </div>
        </div>

        <div className=' col-lg-6'>
          <div className='row col-md-11'>
          <div className=' m-auto col-md-9 forBorder'>
         <div className='formPart formBGSignup'>
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