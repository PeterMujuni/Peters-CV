import React, { useContext } from "react";
import { CVContext } from "../../contexts/cvcontext";

export const Resume = () => {
    const {cv} = useContext(CVContext);
    return (
        <article className="resume box">
            <div className="header">
                <h2>RESUMÈ</h2>
            </div>
            <div className="paraText">
                <p>{cv.resume}</p>
            </div>
        </article>
    );
    
}