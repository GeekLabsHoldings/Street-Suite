import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (

        // start footer
        <footer>

            <div className="gradient-line"></div>

            <div className="footer-container">

                <h5>Disclamer</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quisquam tempora adipisci facere, quidem numquam deserunt accusamus nam, sit expedita dolore libero maiores laboriosam repellat, optio aliquam. Harum voluptate, magnam neque ducimus laborum quasi asperiores qui, cupiditate perferendis vel necessitatibus!</p>
                <div className="line"></div>

                {/* links of footer */}
                <div className="footer-links">

                    {/* first col of links */}
                    <div className="links-col">
                        <h6>Geek Labs Holding</h6>

                        <ul>
                            <li>
                                <a href="">Lorem ipsum dolor sit amet consectetur.</a>
                            </li>
                            <li>
                                <a href="">Lorem ipsum dolor sit amet.</a>
                            </li>
                            <li>
                                <a href="">Lorem ipsum dolor sit amet consectetur.</a>
                            </li>
                        </ul>
                    </div>

                    {/* second col of links */}
                    <div className="links-col">
                        <h6>Support</h6>

                        <ul>
                            <li>
                                <a href="">Documenation</a>
                            </li>
                            <li>
                                <a href="">Knoweledge base</a>
                            </li>
                            <li>
                                <a href="">API</a>
                            </li>
                            <li>
                                <a href="">Live Chat</a>
                            </li>
                            <li>
                                <a href="">Phone Support</a>
                            </li>
                            <li>
                                <a href="">E-mail</a>
                            </li>
                        </ul>
                    </div>

                    {/* third col of links */}
                    <div className="links-col">
                        <h6>Quick Links</h6>

                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">FAQ</a>
                            </li>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                            <li>
                                <a href="">Terms & Conditoins</a>
                            </li>
                        </ul>
                    </div>

                    {/* fourth col of links */}
                    <div className="links-col">
                        <h6>Social Media</h6>

                        <ul>
                            <li>
                                <a href="">@Twitter</a>
                            </li>
                            <li>
                                <a href="">@Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='copyright'>Copyright © 2024 Geek Labs Holdings. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
