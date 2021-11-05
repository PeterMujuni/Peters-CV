import React from "react";
import './Experience.css';

export class Experience extends React.Component {
    render() {
        return (
            <article className="experiences box">
                <div className="header">
                    <img src={this.props.workDeskIcon} alt="a worker at a desk" />
                    <h2>ERFARING</h2>
                </div>
                <div className="experience">
                    <div className="job-titel">
                        <h3>Frontend Developer at Softmedia.dk</h3>
                    </div>
                    <div className="work-dato">
                        <img src={this.props.calenderIcon} alt="a calender" />
                        <h4 className="dato">Maj 2015 - Dec 2015</h4>
                    </div>
                    <div className="paraText">
                        <p>Mine opgaver bestod af udvikling af hjemmesider, ved brug af HTML og CSS. Siderne blev dernæst overført til Wordpress.</p>
                    </div>
                    <hr></hr>
                </div>
            </article>
        );
    }
}