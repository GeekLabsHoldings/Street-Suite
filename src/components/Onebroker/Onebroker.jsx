const OneBroker = ({num,word})=>{
    return(
        <div className=" flex py-2">
            <div className="col-md-4">
            <h5>{num}</h5>
            </div>
            <div className=" col-md-8 text-left">
            <h5 >{word}</h5>
            </div>
        </div>
    )

}
export default OneBroker