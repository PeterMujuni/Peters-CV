import React, { useContext } from "react";
import './ProfilePhoto.css';
import { CVContext } from "../../contexts/cvcontext";

export const ProfilePhoto = () => {
    //use context to get data
    const {cv} = useContext(CVContext);
    console.log(cv.personligInfo.image);
    return (
        <figure className="profile-photo">
            <img src={cv.personligInfo.image} />
            <div className="profile-text">
                <h1>{cv.personligInfo.name}</h1>
                <p>{cv.personligInfo.position}</p>
            </div>
        </figure>
    );
}