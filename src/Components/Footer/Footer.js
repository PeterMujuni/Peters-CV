import React from "react";
import './Footer.css';
import { MdAlternateEmail } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div class="footer-info">
                    <div class="socia-info">
                        <div class="email">
                            <span><MdAlternateEmail/></span>
                            <a href="mailto:kontakt@petermujuni.dk" class="val">kontakt@petermujuni.dk</a>
                        </div>
                        <div class="github">
                            <span><SiGithub/></span>
                            <a href="https://github.com/PeterMujuni"  class="val">PeterMujuni</a>
                        </div>
                        <div class="linkedin">
                            <span><SiLinkedin/></span>
                            <a href="https://www.linkedin.com/in/petermujuni/"  class="val">peterMujuni</a>
                        </div>
                    </div>        
                </div>               
            </footer> 
        );
    }
}