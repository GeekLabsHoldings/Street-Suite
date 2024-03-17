import React from 'react'
import "./TradingSection.css"
import boxBg from "../../../assets/spaceXbg.png"
import tradingImg from "../../../assets/trading-img.png"
import tradeCompanyLogo from "../../../assets/tradeCompanyLogo.png"

const TradingSction = () => {
    return (

        // trading section 
        <section className='trading'>

            {/* title of the section */}
            <h3 className='section-title'>Trading</h3>

            <div className="lg:container mx-auto px-0 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-6 trading-container columns-8">

                {/* image of trading section */}
                <div className="img-container hidden md:block">
                    <img src={tradingImg} alt="" />
                </div>
                {/* end image of trading section */}

                {/* content of trading section */}
                <div className="trading-content space-y-4">
                    <h4>PRIVATE EQUITY <br /> MADE SIMPLE!</h4>

                    <p>Imagine investing in Tesla before it went public! <br />
                        Now anyone can Get into the Private equity game with 2 clicks.</p>

                    <h5>What is Private Equity</h5>

                    <p>Private Equity is simply buying a stake in a private company, this has always been available only to the High net worth investors,
                        now anyone can buy shares in these companies, start with as little as $100</p>

                    <h5>Private Companies on ST Suite</h5>

                    {/* price of private companies */}
                    <div className="private-companies-box grid md:grid-cols-2 gap-2">

                        {/* first company */}
                        <div className="item">
                            <img src={tradeCompanyLogo} alt="" />
                            <div className="price">
                                <p>$ <span>190</span></p>
                                <svg width="10" height="23" viewBox="0 0 30 23" fill="#D94111" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="#D94111" />
                                </svg>
                            </div>
                        </div>
                        {/* end first company */}

                        {/* second company */}
                        <div className="item">
                            <img src={tradeCompanyLogo} alt="" />
                            <div className="price ">
                                <p>$ <span>190</span></p>
                                <svg width="10" height="23" viewBox="0 0 30 23" fill="#D94111" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="#D94111" />
                                </svg>
                            </div>
                        </div>
                        {/* end second company */}

                        {/* third company */}
                        <div className="item">
                            <img src={tradeCompanyLogo} alt="" />
                            <div className="price">
                                <p>$ <span>190</span></p>
                                <svg width="10" height="23" viewBox="0 0 30 23" fill="#D94111" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="#D94111" />
                                </svg>
                            </div>
                        </div>
                        {/* end third company */}

                        {/* fourth company */}
                        <div className="item">
                            <img src={tradeCompanyLogo} alt="" />
                            <div className="price up">
                                <p>$ <span>190</span></p>
                                <svg width="10" height="23" viewBox="0 0 30 23" fill="#118F4B" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.4991 0.297293L1.49833 0.297295C1.22496 0.298161 0.957 0.374371 0.723293 0.51772C0.489586 0.661069 0.298981 0.866129 0.171997 1.11083C0.0450125 1.35553 -0.0135449 1.6306 0.00263018 1.90643C0.0188053 2.18227 0.109101 2.44842 0.263794 2.67624L13.7642 22.3871C14.3237 23.2043 15.6707 23.2043 16.2317 22.3871L29.7321 2.67624C29.8884 2.44889 29.98 2.18261 29.9971 1.90631C30.0141 1.63002 29.956 1.35428 29.8289 1.10907C29.7018 0.863849 29.5106 0.658526 29.2762 0.51541C29.0417 0.372293 28.773 0.296857 28.4991 0.297293Z" fill="#118F4B" />
                                </svg>
                            </div>
                        </div>
                        {/* end fourth company */}

                        {/* space X box */}
                        <div className="spaceX">
                            <img src={boxBg} alt="" />
                            <div className="box">

                            </div>
                            <h6>SPACE X <br />CASE STUDY</h6>
                        </div>
                        {/* end space X box */}
                    </div>
                    {/* end price of private companies */}


                </div>

            </div>

        </section>
        // end of trading section 
    )
}

export default TradingSction
