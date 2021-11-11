import React, { useContext } from "react";
import './PersonalInfo.css';
import {MdWork} from 'react-icons/md';
import {MdAttachEmail} from 'react-icons/md';
import {GiPositionMarker} from 'react-icons/gi';
import {IoIosContact} from 'react-icons/io';
import { CVContext } from "../../contexts/cvcontext";


export const PersonalInfo = () => {
    const {cv} = useContext(CVContext);

    const style = {color: '#255f7f', width: '35', height: '35', stroke: '#255f7f'};
    const style1 = {color: '#255f7f', width: '25', height: '25'};
    return (
        <article className="personal-info box">
            <div className="header">
                <IoIosContact style={style}/>
                <h2>PERSONLIG INFO</h2>
            </div>
            <div className="job-titel">
                <MdWork style={style1}/>
                <h3>{cv.personligInfo.position}</h3>
            </div>
            <div className="email-info">
                <MdAttachEmail style={style1}/>
                <h3> <a href={`mailto:${cv.personligInfo.email}`}>{cv.personligInfo.email}</a></h3>
            </div>
            <div className="location-info">
                <GiPositionMarker style={style1}/>
                <h3>{cv.personligInfo.location}</h3>
            </div>
        </article>
    );    
}