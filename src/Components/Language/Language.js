import React, { useContext } from "react";
import './Language.css';
import {GiTalk} from 'react-icons/gi';
import { CVContext } from "../../contexts/cvcontext";

export const Language = () => {
    const { cv } = useContext(CVContext);
    const style1 = {color: '#255f7f', width: '35', height: '35'};
    return (
        <article className="box">
            <div className="header">
                <GiTalk style={style1}/>
                <h2>LANGUAGE</h2>
            </div>
            <div className="languages">
                {cv.language.map((item, index) => {
                    return (
                        <div key={index} className="language">
                            <h4>{item.name}</h4>
                            <progress max="100" value={item.progressValue}></progress>
                        </div>
                    );
                })}                    
            </div>
        </article>
    );
    
}