import './OldArticle.css';

const OldArticle = ({classname})=>{
    return(

        <div className={`flex justify-between likeComments pb-8 bottomBorder ${classname}`}>
        <div className='w-1/3 '>
            <p>25 MINS AGO</p>
        </div>
        <div className='w-2/3 '>
            <h6>China Kicks U.S Butt In The Latest Whatever</h6>
        </div>
    </div>
    )
}

export default OldArticle