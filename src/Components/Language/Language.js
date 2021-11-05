import React from "react";
import './Language.css';

export class Language extends React.Component {
    render() {
        return (
            <article className="box">
                <div className="header">
                    <img src={this.props.languageIcon} alt="speak box"/>
                    <h2>SPROG</h2>
                </div>
                <div className="languages">
                    <div className="language">
                        <h4>Dansk</h4>
                        <progress max="100" value="100"></progress>
                    </div>
                    <div className="language">
                        <h4>Engelsk</h4>
                        <progress max="100" value="90"></progress>
                    </div>
                    <div className="language">
                        <h4>Arabisk</h4>
                        <progress max="100" value="80"></progress>
                    </div>
                </div>
            </article>
        )
    }
}