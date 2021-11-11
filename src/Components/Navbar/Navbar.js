import React, { useContext } from 'react';
import { CVContext } from '../../contexts/cvcontext';
import './Navbar.css';

export const Navbar = () => {
    const { cv } = useContext(CVContext);
    return(            
        <nav>
            <div className="logo">
                <img src={cv.personligInfo.logo} alt="logo" />
            </div>
            
            <ul>
                <li><img src={cv.personligInfo.linkedinImage} alt="Linkedin" /></li>
                <li><img src={cv.personligInfo.githubImage} alt="Github" /></li>
            </ul>
        </nav>           
    )
    
}