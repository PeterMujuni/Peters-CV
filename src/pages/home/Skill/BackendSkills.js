import React, { useContext } from 'react';
import { HorizontalRule } from '../../../components/horizRule/HoriRule';
import './Skill.css';
import { peterMujuni } from "../../../util/cvData";
import { Icons } from '../../../components/iconComp/iconComp';
import { CVContext } from "../../../contexts/cvcontext";

export const BackendSkills = () => {
    const { cv } = useContext(CVContext);
    return (        
        <div className="skill">
            <HorizontalRule title={cv.skills.backend}/>
            {cv.backendskills.map((item, index) => {
                return (
                    
                    <div key={index} className="skill-group">                        
                        <h4><Icons iconName={item.icon}/> {item.name}</h4>
                        <progress max="100" value={item.progressValue}></progress>
                    </div>
                );
            })}
            
        </div>
    );
}
