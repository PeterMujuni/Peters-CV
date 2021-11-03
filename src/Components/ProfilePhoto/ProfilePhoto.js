import React from "react";
import './ProfilePhoto.css';

export class ProfilePhoto extends React.Component {
    render() {
        return (
            <figure className="profile-photo">
                <img src={this.props.profilePhoto} />
                <div className="profile-text">
                    <h1>PETER MUJUNI MWEBESA</h1>
                    <p>Frontend Developer</p>
                </div>
            </figure>
        );
    }
}