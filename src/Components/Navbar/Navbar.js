import React, { useContext, useEffect } from 'react';
import { SiNgrok } from 'react-icons/si';
import { CVContext } from '../../contexts/cvcontext';
import './Navbar.css';

export const Navbar = () => {
    const { cv } = useContext(CVContext);
    
    const handleClick = (event) => {
        console.log(event)
        document.body.classList.toggle('nav-open');
    }
    

    return(
        <header className="header">
            <div className="logo">
                <img src={cv.personligInfo.logo} alt="" />
            </div>
            <button onClick={handleClick} className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link" onClick={handleClick}>Home</a></li>
                    <li className="nav__item"><a href="#skills" className="nav__link" onClick={handleClick}>Skills</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link" onClick={handleClick}>About me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link" onClick={handleClick}>My Work</a></li>
                </ul>
            </nav>
        </header>       
    )
    
}