import React from "react";
import './ProfilePhoto.css';

export class ProfilePhoto extends React.Component {
    render() {
        return (
            <figure className="profile-photo">
                <h1>PETER MUJUNI MWEBESA</h1>
                <img src={this.props.profilePhoto} alt="of Peter" />
            </figure>
        );
    }
}