import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contantWrapper/ContentWrapper";

import "./style.scss";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
    const {
        loginWithPopup,
        loginWithRedirect,
        logout,
        user,
        isAuthenticated
      } = useAuth0;
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                    {/* <li className="menuItem"><button className="loginPage" onClick={loginWithPopup}>Login P</button></li>
                    <li className="menuItem"> <button className="loginPage" onClick={loginWithRedirect}>Login R</button></li>
                    <li className="menuItem"> <li><button className="loginPage" onClick={logout}>Logout</button></li></li> */}
                </ul>
                {/* <ul>
              <li>
                <button className="loginPage" onClick={loginWithPopup}>Login P</button>
             </li>
             <li>
                <button className="loginPage" onClick={loginWithRedirect}>Login R</button>
                
             </li>
             <li><button className="loginPage" onClick={logout}>Logout</button></li>
            </ul> */}
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;