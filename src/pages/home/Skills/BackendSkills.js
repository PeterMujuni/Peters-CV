import React, { useContext } from 'react';
import { Icons } from '../../../components/IconComp/iconComp';
import { CVContext } from "../../../contexts/cvcontext";

export const BackendSkills = () => {
    const { cv } = useContext(CVContext);
    return (        
        <>
            {/* <HorizontalRule title={cv.skills.backend}/> */}
            {cv.backendskills.map((item, index) => {
                return (
                    
                    <div key={index} className="skill">
                        <span><Icons iconName={item.icon} style={item.color}/> {item.name}</span>
                        <progress max="100" value={item.progressValue}>95%</progress>
                    </div>
                );
            })}
            
        </>
    );
}
