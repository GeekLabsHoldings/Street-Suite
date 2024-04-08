import BlogForm from '../../components/BlogForm/BlogForm';
import './SpecificBlog.css';

const SpecificBlog = ()=>{
    return(
        
        <div className='pageBG'>
            <div className='w-3/4 mx-auto py-5'>
           <div className='md:pb-10'>
            {/* blog title */}
                <div className='largeHeader'>
            <h1>Lorem Ipsum Dol</h1>
            </div>
            {/* big image about it */}
            <div className='divForImgLg md:h-96 sm:h-40 md:my-5 sm:mt-2 sm:mb-5'></div>
            </div>
           {/* blog title */}
           <div className='headerFotTxtSec'>
           <h3>Lorem ipsum dol</h3>
           </div>
           {/* blog description */}
           <div className="md:flex">
           <div className="md:w-2/3">
           <div className='txtSection w-11/12'>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <p> ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.LoremLorem ipsum dolor sit amet, consectetur adip</p>
                <p>iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                <p>reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.LoremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat </p>

            </div>
           </div>
            <div className='md:w-1/3'>
                <div className='md:visible sm:hidden bottomBorder py-4'>
                <div className='divForImgSm h-48 '></div>
                </div>
{/* similar blogs to read */}
               <BlogForm/>
               <BlogForm/>
               <BlogForm classname='lastExample'/>
            </div>
           </div>
        </div>
        </div>
    )
}

export default SpecificBlog