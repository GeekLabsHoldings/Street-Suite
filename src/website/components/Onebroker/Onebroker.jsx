const OneBroker = ({num,word})=>{
    return(
        // the broker name and its rank
        <div className=" row py-2 sm:ps-8 oneBrokerFonts">
            <div className="col-md-4 sm:w-fit ">
            <h5>{num}</h5>
            </div>
            <div className="col-md-8 text-left sm:w-fit">
            <h5 >{word}</h5>
            </div>
        </div>
    )
    

}
export default OneBroker