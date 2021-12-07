import React, { useContext } from "react";
import './Footer.css';
import { SiGithub, SiTwitter, SiLinkedin } from 'react-icons/si';
import { CVContext } from "../../contexts/cvcontext";

export const Footer = () => {    
    const { cv } = useContext(CVContext);
    
    return (
        <footer className="footer">
            <a href={`mailto:${cv.personligInfo.email}`} className="footer__link">kontakt@petermujuni.dk</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a href={cv.personligInfo.githubLink} className="social-list__link">
                        <SiGithub />
                    </a></li>
                <li className="social-list__item">
                    <a href={cv.personligInfo.linkedinLink} className="social-list__link">
                        <SiLinkedin />
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="#" className="social-list__link">
                        <SiTwitter />
                    </a>
                </li>
            </ul>
        </footer>
    );
    
}