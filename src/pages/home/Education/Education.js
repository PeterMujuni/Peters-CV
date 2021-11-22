import React, { useContext } from "react";
import { HorizontalRule } from "../../../components/horizRule/HoriRule";
import { GoCalendar } from 'react-icons/go';
import {MdSchool} from 'react-icons/md';
import { CVContext } from "../../../contexts/cvcontext";

export const Education = () => {
    const { cv } = useContext(CVContext);

    const style1 = {color: '#255f7f', width: '35', height: '35'};
    const style = {color: '#255f7f', width: '25', height: '25'};
    return (
        <article className="educations box">
            <div className="header">
                <MdSchool style={style1}/>
                <h2>UDDANNELSE</h2>
            </div>
            {cv.education.map((item,index) => {
                return (
                    <div key={index} className="education">
                        <div className="under-titel">
                            <h3>{item.name}</h3>
                        </div>
                        <div className="work-dato">
                            <GoCalendar style={style}/>
                            <h4 className="dato">{item.period}</h4>
                        </div>
                        <HorizontalRule/>
                    </div>
                );
            })}
            
        </article>
    );
    
}