import './OldArticle.css';
import { useNavigate } from "react-router-dom";

const OldArticle = ({classname})=>{
    const navigate = useNavigate();
    const onClickHandler = ()=>{
        navigate("./specific-blog");
    }

    return(
// section for every old article or blog contains its name and date of publish
        <div className={`flex justify-between pb-8 px-[--18px] bottomBorder cursor-pointer ${classname}`} onClick={onClickHandler}>
        <div className=' minPrt'>
            <p>25 MINS AGO</p>
        </div>
        <div className=' blogTitle'>
            <h6>China Kicks U.S Butt In The <br /> Latest Whatever</h6>
        </div>
    </div>
    )
}

export default OldArticle