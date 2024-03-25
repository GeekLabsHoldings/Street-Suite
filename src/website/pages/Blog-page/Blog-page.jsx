import OneBlog from '../../components/OneBlog/OneBlog';
import BasicTabs from '../../components/Taps/Tabs';
import './Blog-page.css';

const BlogPage = ()=>{
    return(
        <div className='pageBG'>
            <div className='md:w-1/3 mx-auto flex flex-col gap-8 py-10'>
                <div className='flex justify-center ourName'>
                <h1 className='highlight w-fit'>Street Suite</h1>
                </div>
                <div className='descParagraph text-center'>
                <p>Dive into our interactive quizzes designed to unravel your trading persona and unveil insights into your trading prowess.</p>
                </div>
            </div>
            <div className='md:w-10/12 mx-auto'>
                <BasicTabs content='test'/>
                <OneBlog/>

            </div>
        </div>
    )

}

export default BlogPage