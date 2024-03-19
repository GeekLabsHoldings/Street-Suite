import './HeaderCard.css'
const HeaderCard = ({imgUrl})=>{
    return(
        <div className="row">
            <div className='col-md-4'>
                <div className='flex align-items-center gap-2'>
                <img src={imgUrl} />
            <div className="interactiveDiv">
            <h4>Interactive Brokers</h4>
            </div>
                </div>
            </div>
            <div className='col-md-3'>
            <div className='interactiveDiv flex flex-col justify-center'>
                <h5>$0</h5>
                <h5>Fees</h5>
            </div>
            </div>
            <div className="col-md-3">
            <div className='interactiveDiv'>
                            <h5>$0</h5>
                            <h5>Account Min.</h5>
                        </div>
            </div>
      
            <div>
                <img src="" />
            </div>
        </div>

    )
}

export default HeaderCard