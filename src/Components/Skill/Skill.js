import React from "react";
import './Skill.css';
import { ImHtmlFive2 } from 'react-icons/im';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';


export class Skill extends React.Component {
    render() {
        return (
            <article className="box">
                <div className="header">
                    <img src={this.props.skill} alt="prize mark"/>
                    <h2>FÆRDIGHEDER</h2>
                </div>
                <div className="skills">
                    <div className="skill group">                        
                        <h4><ImHtmlFive2/> HTML5</h4>
                        <progress max="100" value="99">95%</progress>
                    </div>
                    <div className="skill group">                        
                        <h4><SiCss3/> CSS3</h4>
                        <progress max="100" value="99">95%</progress>
                    </div>
                    <div className="skill group">                        
                        <h4><SiJavascript/> JavaScript ES6</h4>
                        <progress max="100" value="99">95%</progress>
                    </div>
                    <div className="skill group">                        
                        <h4><SiReact/> ReactJS</h4>
                        <progress max="100" value="99">99%</progress>
                    </div>
                    <div className="skill group">                        
                        <h4><SiGithub/> Respository</h4>
                        <progress max="100" value="99">95%</progress>
                    </div>   
                    <div className="skill group">                        
                        <h4><FaNodeJs/> NodeJS</h4>
                        <progress max="100" value="75">85%</progress>
                    </div>
                                           
                </div>
            </article>
        );
    }
}