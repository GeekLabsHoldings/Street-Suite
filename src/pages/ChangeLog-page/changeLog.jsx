
import FormLabel from '@mui/joy/FormLabel';
import './changeLog.css';
import { TextareaAutosize } from '../../components/FormComponent';

//     ({ theme }) => `
//     box-sizing: border-box;
//     width: 100%;
//     font-family: "Poppins", sans-serif;
//     font-size: 0.875rem;
//     font-weight: 400;
//     line-height: 1.5;
//     padding: 8px 12px;
//     border-radius: 8px;
//     min-height:10%;
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//     background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//     border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//     box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
//     &:hover {
//       border-color: ${blue[400]};
//     }
  
//     &:focus {
//       border-color: ${blue[400]};
//       box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
//     }
//     &:focus-visible {
//       outline: 0;
//     }
//   `,
//   );
const ChangeLogs = () =>{
    return(
        <div className="Msglayout">
            <div className='row forBG changeLogLayout sm:px-7 sm:py-10'>
            <div className="col-lg-6 col-sm-12">
                    <div className="caption col-lg-8 m-auto">
                        <div className='col-lg-8 col-sm-8'>
                        <h5 className="highlight d-inline-block">Street Suite Updates</h5>
                    <h1>We’ve Made Some Changes</h1>
                        </div>
                   
                    <p>At Street Suite, we pride ourselves on our collaborative culture that encourages creativity and innovation. Here's what you can expect when you join our team</p>
                    <div className='logcardBG cardContainer md:hidden sm:visible '>
                                <div className='sm:m-auto sm:max-h-80 sm:overflow-y-scroll'>
                                   <div className='leftBorder'>
                                   <div>
                                   <h5>Feb 20</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                   </div>
                                   <div>
                                   <h5>Feb 20</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                   </div> 
                                   <div>
                                   <h5>Feb 20</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                   </div> 
                                   <div>
                                   <h5>Feb 20</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                   </div> 
                                   </div>
                                </div>

                            </div>

                    <div className='col-lg-9 col-md-9 d-flex flex-col gap-4 msgPrt'>
                        <div className='pt-5'>
                        <h3>Have A Feature In Mind?</h3>
                        <FormLabel className='mb-1 labelfont'>Send us a message</FormLabel>
                        <TextareaAutosize sx={{
                                minHeight:'10%'
                        }} aria-label="empty textarea" placeholder="......" />
                          
                        </div>
                          <div>
                    <button type="button" style={{padding:'0.3rem 2rem'}} className='btnColor'>submit</button>
                            </div>               

                    </div>
                    </div>
            </div>
            <div className='col-lg-6 col-sm-12'>
                        <div className='col-lg-9 changeLogBorder sm:hidden md:visible m-auto'>
                            <div className='logcardBG cardContainer'>
                                <div className='col-lg-9 m-auto lg:max-h-fit xl:overflow-y-hidden lg:overflow-hidden md:overflow-y-hidden'>
                                   <div className='leftBorder'>
                                   <div>
                                   <h5>Feb 20</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                   </div>
                                   <div>
                                   <h5>Feb 20</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                   </div> 
                                   <div>
                                   <h5>Feb 20</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                   </div> 
                                   <div>
                                   <h5>Feb 20</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                   </div> 
                                   </div>
                                </div>

                            </div>

                        </div>

                    </div>

            </div>
 

        </div>
    )

}

export default ChangeLogs