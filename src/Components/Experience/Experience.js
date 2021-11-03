import React from "react";
import './Experience.css';
import workDeskIcon from './experince.png';
import calenderIcon from './calender.png';

export class Experience extends React.Component {
    render() {
        return (
            <article className="erfaring box">
                <div className="header">
                    <img src={workDeskIcon} alt="a worker at a desk" />
                    <h2>ERFARING</h2>
                </div>
                <div className="under-titel">
                    <h3>Frontend Developer at Softmedia.dk</h3>
                </div>
                <div className="work-dato">
                    <img src={calenderIcon} alt="a calender" />
                    <h4 className="dato">Maj 2015 - Dec 2015</h4>
                </div>
                <div className="text" id="last-text">
                    <p>Mine opgaver bestod af udvikling af hjemmesider, ved brug af HTML og CSS. Siderne blev dernæst overført til Wordpress.</p>
                </div>
                <hr></hr>
            </article>
        );
    }
}