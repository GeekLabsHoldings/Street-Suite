import React from 'react'
import "./FAQ.css"
import $ from 'jquery';

const FAQ = () => {


    // method thet handle toggle expand collapse
    const handleCollapse = (e) => {
        console.log($(e.target).parents(".collapse-header"));
        $(e.target).parents(".collapse-header").next().slideToggle();
        $(e.target).parents(".collapse-header").toggleClass("open");
    }


    return (

        // FAQ section 
        <section className='FAQ'>
            <div className="mx-auto FAQ-container">
                <h4>FAQ</h4>

                {/* start FAQ Item */}
                <div className="collapse-item w-full">
                    <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <p>How do i sign up?</p>
                        <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                        </svg>

                    </div>
                    <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                </div>
                {/* end of FAQ item */}

                {/* start FAQ Item */}
                <div className="collapse-item w-full">
                    <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <p>How long is the Free trial?</p>
                        <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                        </svg>

                    </div>
                    <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                </div>

                {/* end of FAQ item */}

                {/* start FAQ Item */}

                <div className="collapse-item w-full">
                    <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <p>What are Alerts?</p>
                        <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                        </svg>

                    </div>
                    <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                </div>

                {/* end of FAQ item */}

                {/* start FAQ Item */}

                <div className="collapse-item w-full">
                    <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <p>Is there a refund policy?</p>
                        <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                        </svg>

                    </div>
                    <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                </div>
                {/* end of FAQ item */}

                {/* start FAQ Item */}
                <div className="collapse-item w-full">
                    <div className="collapse-header" onClick={(e) => handleCollapse(e)}>
                        <p>How to apply filters?</p>
                        <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5009 22.7027L28.5017 22.7027C28.775 22.7018 29.043 22.6256 29.2767 22.4823C29.5104 22.3389 29.701 22.1339 29.828 21.8892C29.955 21.6445 30.0135 21.3694 29.9974 21.0936C29.9812 20.8177 29.8909 20.5516 29.7362 20.3238L16.2358 0.612931C15.6763 -0.20431 14.3293 -0.20431 13.7683 0.612931L0.267868 20.3238C0.111601 20.5511 0.0199624 20.8174 0.00290847 21.0937C-0.0141455 21.37 0.0440377 21.6457 0.171136 21.8909C0.298235 22.1362 0.489388 22.3415 0.723827 22.4846C0.958267 22.6277 1.22703 22.7031 1.5009 22.7027Z" fill="white" />
                        </svg>

                    </div>
                    <div className="collapse-body">
                        <p>To sign up, simply head over to our website and locate the 'Sign Up' button. From there, you'll be directed to a registration form where you'll need to provide some basic information about yourself. Once you've filled out the form, don't forget to verify your email address. If there are any additional verification steps needed, we'll guide you through them seamlessly. Once everything's confirmed, you're all set to dive into our platform and start exploring. Welcome aboard!</p>
                    </div>
                </div>
                {/* end of FAQ item */}

                
            </div>
        </section>
    )
}

export default FAQ
