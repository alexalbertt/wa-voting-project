import React from "react"
import { IconContext } from "react-icons";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { Link } from "gatsby";
import "./footer.scss";


export default function Footer() {
    return (
        <div class="footer">
            <div class="footer-links">
                <Link to="/about" class="footer-link">About</Link>
                <Link to="/donate" class="footer-link">Donate</Link>
                <a class="footer-link" href = "mailto:team@wavoting.org?subject = Contact&body = Message">Contact</a>
            </div>
            <div class="socials">
                <IconContext.Provider value={{className:"social-icon", size: '40px'}}>
                    <a target="_blank" class="social-icon" href="https://instagram.com/wavotingproject?igshid=19ca6t17skfgu"><IoLogoInstagram class="social-icon"/></a>
                    <a target="_blank" class="social-icon" href="https://www.facebook.com/wavotingproject/"><IoLogoFacebook/></a>
                    <a target="_blank" class="social-icon" href="https://twitter.com/wavotingproject/"><IoLogoTwitter/></a>
                </IconContext.Provider>
            </div>
        </div>
    );
}