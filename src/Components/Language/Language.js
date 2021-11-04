import React from "react";

export class Language extends React.Component {
    render() {
        return (
            <article className="box">
                <div className="header">
                    <img src={this.props.languageIcon} alt="speak box"/>
                    <h2>SPROG</h2>
                </div>
                <div className="skills">
                    <div className="skill">
                        <h4>Dansk</h4>
                        <progress max="100" value="100"></progress>
                    </div>
                </div>
            </article>
        )
    }
}