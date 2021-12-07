// import {FaAward} from 'react-icons/fa';
import { FrontendSkills } from "./FrontendSkills";
import { BackendSkills } from "./BackendSkills";
import { OtherSkills } from "./OtherSkills";

import './Skills.css'

export const Skills = () => {
    return (
        
        <section className="my-skills" id="skills">
            <h2 className="section__title section__title--skills">Skills</h2>
                               
            <div className="skills">

                <article className="skills-group">
                    <h3>Front-end</h3>
                    <FrontendSkills />
                </article>  

                <article className="skills-group">
                    <h3>Back-end</h3>
                    <BackendSkills />
                </article>  

                <article className="skills-group">
                    <h3>Other</h3>
                    <OtherSkills />
                </article>  
                
            </div>
            <a href="#work" className="btn">My Work</a>
        </section>
    )
}
