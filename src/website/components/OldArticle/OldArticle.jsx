import './OldArticle.css';
import { useNavigate } from "react-router-dom";

const OldArticle = ({classname})=>{
    const navigate = useNavigate();
    const onClickHandler = ()=>{
        navigate("./specific-blog");
    }

    return(
// section for every old article or blog contains its name and date of publish
        <div className={`flex justify-between likeComments pb-8 bottomBorder cursor-pointer ${classname}`} onClick={onClickHandler}>
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