import React from 'react'
import * as ai from 'react-icons/ai';
import * as fa from 'react-icons/fa';


const Footer = () => {
    return (
        
        <>
            <footer>
            <div className="copyright">
                <h3 >© V-Helper 2020</h3>
            </div>
            <div className="about-contact-buttons">
                <ul>
                    <li className="about-button">About</li>
                    <li className="contact-button">Contact Us</li>
                </ul>
            </div>
            <div className="socials">
                <h3 className="follow-us"> Follow us</h3>
                <div className="underline"></div>
                <div className="social-icons">
                    <fa.FaFacebookF className="facebook-icon icon"/>
                    <ai.AiOutlineTwitter className="twitter-icon icon"/>
                    <fa.FaYoutube className="youtube-icon icon"/>
                    <fa.FaLinkedinIn className="youtube-icon icon"/>
                    <ai.AiFillInstagram className="instagram-icon icon"/>
                </div>
                </div>
            <img src="../img/blue-vector.svg" alt="Vector" className="vector-shape"/>
            </footer>
      </>
    )
}

export default Footer
