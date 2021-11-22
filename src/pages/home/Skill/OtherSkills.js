import React, { useContext } from 'react'
import { HorizontalRule } from '../../../components/horizRule/HoriRule'
import './Skill.css';
import { Icons } from '../../../components/iconComp/iconComp';
import { CVContext } from "../../../contexts/cvcontext";

export const OtherSkills = () => {
    const { cv } = useContext(CVContext);
    return (
        <div className="skill">
            <HorizontalRule title={cv.skills.other}/>
            {cv.otherskills.map((item, index) => {
                return (
                    
                    <div key={index} className="skill-group">                        
                        <h4><Icons iconName={item.icon}/> {item.name}</h4>
                        <progress max="100" value={item.progressValue}></progress>
                    </div>
                     
                );
            })}
        </div>
    )
}
