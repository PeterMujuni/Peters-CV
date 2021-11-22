import React, { useContext } from "react";
import { GrFormNextLink } from 'react-icons/gr';
import { HorizontalRule } from "../../../components/horizRule/HoriRule";
import './Project.css';
import { GoCalendar } from 'react-icons/go';
import {FiActivity} from 'react-icons/fi';
import { peterMujuni } from "../../../util/cvData";
import { CVContext } from "../../../contexts/cvcontext";

export const Project = () => {
    const { cv } = useContext(CVContext);
    const style = {color: '#255f7f', width: '25', height: '25'};
    const style1 = {color: '#255f7f', width: '35', height: '35'};
    return (
        <article className="projects box">
            <div className="header">
                <FiActivity  style={style1}/>
                <h2>PROJEKTER</h2>
            </div>
            {cv.projects.map((item, index) => {
                    return (
                        <div key={index} className="project">                    
                            <div className="under-titel">
                                <h3>{item.name}</h3>
                            </div>
                            <div className="work-dato">
                                <GoCalendar style={style}/>
                                <h4 className="dato">{item.period}</h4>
                            </div>
                            <div className="paraText">
                                <p>{item.description}</p>
                            </div>
                            <a href={item.link}><GrFormNextLink/>Se project</a>
                            <HorizontalRule/>                 
                        </div>
                    );
                })}
            
        </article>
    );
    
}