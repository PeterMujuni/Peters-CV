import React from "react";


export class Diploma extends React.Component {
    render() {
        return (
            <article>
                <div className="slider slide">
                    <div><img src={this.props.diploma1} alt="diplom"/></div>
                    <div><img src={this.props.diploma2} alt="diplom"/></div>
                    <div><img src={this.props.diploma3} alt="diplom"/></div>
                </div>
            </article>
        );
    }
}