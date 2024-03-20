import './HeaderCard.css';
import StarsImg from '../../assets/starts.svg';
import PopularImg from '../../assets/popular-badge.png'
const HeaderCard = ({imgUrl})=>{
    return(
//     <div className="row px-2 py-3 holder sm:justify-end">
//         <div className="col-md-4 sm:w-fit">
//                 <div className='flex sm:hidden md:visible align-items-center justify-center p-0 m-0'>
//                     <div className="col-md-4 flex justify-center">
//                         <img src={imgUrl} />
//                     </div>
//                     <div className="col-md-8 textToImg">
//                         <h4 className='elementBorder'>Interactive Brokers</h4>
//                     </div>
//                     </div>


//                     <div className='flex sm:visible md:hidden align-items-center justify-center gap-1 p-0 m-0'>
//                         <div className="col-md-4 sm:w-fit flex justify-center imgDivHeader">
//                         <img src={imgUrl} className='img-fluid' />
//                         </div>
//                         <div className="col-md-8 sm:w-fit sm:pe-10 textToImg">
//                         <h4 className='elementBorder pe-1'>Interactive <br /> Brokers</h4>
//                         </div>
//                     </div> 
//                     </div>

//                     <div className="col-md-2">
//                     <div className="flex align-items-center justify-center p-0 sm:w-fit">
//                 <div className='elementBorder m-auto text-center sm:px-3'>
//                 <h5>$0</h5>
//                 <h5>Fees</h5>
//                 </div>
     
//             </div>
//                     </div>

//             <div className="col-md-2">
//             <div className=" flex align-items-center justify-center p-0 sm:w-fit">
//                             <div className='elementBorder m-auto text-center sm:px-3'>
//                             <h5>$0</h5>
//                             <h5>Account Min.</h5>
//                             </div>
//                         </div>
//             </div>
            
//             <div className="col-md-4">
                
//             <div className=" flex align-items-center justify-center sm:w-fit">
//                             <div className='starsImg sm:w-full'>
//                                 <img className='img-fluid' src={StarsImg} />
//                                 </div>
//                             <div className='popularBadge md:visible sm:hidden'>
//                             <img src={PopularImg} />
//                             </div>
//                         </div>
//             </div>

        
// </div>

            <div className="flex align-items-center holder sm:justify-center">
                <div className="col-md-4 w-fit p-0 gap-1">

                    <div className="sm:visible md:hidden flex gap-1 justify-center align-items-center p-0 m-0 ">
                        <div className="col-md-4 sm:w-fit imgDivHeader">
                        <img className='w-full' src={imgUrl} />
                        </div>
                        <div className="col-md-8 sm:w-fit sm:pe-10 textToImg">
                        <h4 className='elementBorder pe-1'>Interactive <br /> Brokers</h4>
                        </div>
                    </div>

                    <div className="sm:hidden md:visible flex gap-1 justify-center align-items-center p-0 m-0 md:w-full">
                        <div className="col-md-4 sm:w-fit">
                        <img className='w-full' src={imgUrl} />
                        </div>
                        <div className="col-md-8 sm:w-fit sm:pe-10 textToImg">
                        <h4 className='elementBorder'>Interactive Brokers</h4>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-2 sm:w-fit p-0">
                             <div className='elementBorder m-auto text-center sm:px-3 p-0 md:w-full'>
                             <h5>$0</h5>
                             <h5>Fees</h5>
                             </div>
                </div>
                <div className="col-md-3 sm:w-fit p-0">
                             <div className='elementBorder m-auto text-center sm:px-3 p-0 md:w-full'>
                             <h5>$0</h5>
                             <h5>Account Min.</h5>
                             </div>
                     
                </div>       
                    
                    <div className="col-md-3 sm:w-fit p-0 flex align-items-center">
                        <div className='md:w-full m-auto text-center sm:px-3 p-0'>
                        <div className='starsImg'>
                                 <img className='img-fluid' src={StarsImg} />
                                 </div>
                             <div className='popularBadge md:visible sm:hidden'>
                             <img src={PopularImg} />
                             </div>
                        </div>
                             
                   

            </div>
            </div>

    )
}


export default HeaderCard