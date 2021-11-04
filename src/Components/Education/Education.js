import React from "react";

export class Education extends React.Component {
    render() {
        return (
            <article className="educations box">
                <div className="header">
                    <img src={this.props.education} alt="education hat" />
                    <h2>UDDANNELSE</h2>
                </div>
                <div className="education">
                    <div className="under-titel">
                        <h3>Frontend Nanodegree hos UDACITY</h3>
                    </div>
                    <div className="work-dato">
                        <img src={this.props.calenderIcon} alt="a calender" />
                        <h4 className="dato">Dec 2018 - Marts 2019</h4>
                    </div>
                    <hr></hr>
                </div>
            </article>
        );
    }
}