import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        // start footer
        <footer>

            <div className="gradient-line"></div>

            <div className="footer-container">

                <h5>Disclaimer</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quisquam tempora adipisci facere, quidem numquam deserunt accusamus nam, sit expedita dolore libero maiores laboriosam repellat, optio aliquam. Harum voluptate, magnam neque ducimus laborum quasi asperiores qui, cupiditate perferendis vel necessitatibus!</p>
                <div className="line"></div>

                {/* links of footer */}
                <div className="footer-links">

                    {/* first col of links */}
                    <div className="links-col">
                        <h6>Geek Labs Holdings</h6>

                        <ul>
                            <li>
                                <Link >Lorem ipsum dolor sit amet consectetur.</Link>
                            </li>
                            <li>
                                <Link >Lorem ipsum dolor sit amet.</Link>
                            </li>
                            <li>
                                <Link >Lorem ipsum dolor sit amet consectetur.</Link>
                            </li>
                        </ul>
                    </div>

                    {/* second col of links */}
                    <div className="links-col">
                        <h6>Support</h6>

                        <ul>
                            <li>
                                <Link >Documenation</Link>
                            </li>
                            <li>
                                <Link >Knoweledge base</Link>
                            </li>
                            <li>
                                <Link to="/api">API</Link>
                            </li>
                            <li>
                                <Link to="/careers">Careers</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* third col of links */}
                    <div className="links-col">
                        <h6>Quick Links</h6>

                        <ul>
                            <li>
                                <Link to="/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link to="/privacy&security">Privacy</Link>
                            </li>
                            <li>
                                <Link >Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to="disclaimer">Disclaimer</Link>
                            </li>
                        </ul>
                    </div>

                    {/* fourth col of links */}
                    <div className="links-col">
                        <h6>Social Media</h6>

                        <ul>
                            <li>
                                <Link >Twitter</Link>
                            </li>
                            <li>
                                <Link >Reddit</Link>
                            </li>
                            <li>
                                <Link >Discord</Link>
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
