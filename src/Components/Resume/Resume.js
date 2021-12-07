import React, { useContext } from "react";
import { CVContext } from "../../contexts/cvcontext";

// styles
import './Resume.css'

export const Resume = () => {
    const {cv} = useContext(CVContext);
    return (
        <article className="resume box">
            <div className="header">
                <h2>RESUMÈ</h2>
            </div>
            <div className="paraText">
                {cv.resume.map((line) => (<p>{line}</p>))}
            </div>
        </article>
    );
    
}