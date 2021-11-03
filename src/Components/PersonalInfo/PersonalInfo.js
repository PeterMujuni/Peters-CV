import React from "react";
import './PersonalInfo.css';


export class PersonalInfo extends React.Component {
    render() {
        return (
            <article className="personal-info box">
                <div className="header">
                    <img src={this.props.personInfo} alt="personal card" />
                    <h2>PERSONLIG INFO</h2>
                </div>
                <div className="job-titel">
                    <img src={this.props.work} alt="briefcase" />
                    <h3>Frontend Developer</h3>
                </div>
                <div className="email-info">
                    <img src={this.props.email} alt="snabel a" />
                    <h3> <a href="mailto:kontakt@petermujuni.dk">kontakt@petermujuni.dk</a></h3>
                </div>
                <div className="location-info">
                    <img src={this.props.location} alt="location" />
                    <h3>Denmark, Copenhagen</h3>
                </div>
            </article>
        );
    }
}