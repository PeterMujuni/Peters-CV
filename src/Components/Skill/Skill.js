import React from "react";
import './Skill.css';
import {FaAward} from 'react-icons/fa';
import { FrontendSkills } from "./FrontendSkills";
import { BackendSkills } from "./BackendSkills";
import { OtherSkills } from "./OtherSkills";


export class Skills extends React.Component {
    render() {
        const style1 = {color: '#255f7f', width: '35', height: '35'};
        return (
            <article className="box">
                <div className="header">
                    <FaAward style={style1}/>
                    <h2>Skills</h2>
                </div>
                <div className="skills">
                    <FrontendSkills />
                    <BackendSkills />
                    <OtherSkills />             
                </div>
            </article>
        );
    }
}