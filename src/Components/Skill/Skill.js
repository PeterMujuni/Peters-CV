import React from "react";

export class Skill extends React.Component {
    render() {
        return (
            <article className="box">
                <div className="header">
                    <img src={this.props.skill} alt="prize mark"/>
                    <h2>FÆRDIGHEDER</h2>
                </div>
                <div className="skills">
                    <div className="skill group">
                        <h4>HTML5</h4>
                        <progress max="100" value="100">95%</progress>
                    </div>                        
                </div>
            </article>
        );
    }
}