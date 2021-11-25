import React, { useContext } from "react";
import { HorizontalRule } from "../../../components/horizRule/HoriRule";
import './Experience.css';
import { GoCalendar } from 'react-icons/go';
import {ImOffice} from 'react-icons/im';
import { CVContext } from "../../../contexts/cvcontext";

export const Experience = () => {
    const { cv } = useContext(CVContext);
    const style = {color: '#255f7f', width: '25', height: '25'};
    const style1 = {color: '#255f7f', width: '35', height: '35'};

    return (
        <article className="experiences">
            <div className="header">
                <ImOffice style={style1}/>
                <h2>EXPERIENCE</h2>
            </div>

            {cv.experience.map((item, index) => {
                return (
                    <div key={index} className="experience">
                        <div className="job-titel">
                            <h3>{item.company}</h3>
                        </div>
                        
                        <div className="work-dato">
                            <GoCalendar style={style}/>
                            <h4 className="dato">{item.period}</h4>
                        </div>
                        <div className="paraText">
                            <p><b>Project:</b> {item.assignments}</p>
                            <p><b>Responsibilities:</b></p>
                            <ul>{item.responsibilities.map((resp) => <li>{resp}</li>)}</ul>
                            <p><b>Technologies:</b> {item.technologies.map((tech) => (<span>{tech+", "}</span>))}</p>
                        </div>
                        <HorizontalRule/>
                    </div>
                );
            })}
            
        </article>
    );
    
}