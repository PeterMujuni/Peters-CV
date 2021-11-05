import React from "react";
import { GrFormNextLink } from 'react-icons/gr';
import './Project.css';

export class Project extends React.Component {
    render() {
        return (
            <article className="projects box">
                <div className="header">
                    <img src={this.props.projectIcon} alt="lightball" />
                    <h2>PROJEKTER</h2>
                </div>
                <div className="project">
                    <div className="under-titel">
                        <h3>Team-page hos Meneto.dk</h3>
                    </div>
                    <div className="work-dato">
                        <img src={this.props.calenderIcon} alt="a calender"/>
                        <h4 className="dato">April 2019</h4>
                    </div>
                    <div className="paraText">
                        <p>Udfra et tilsendt design i storkærms størrelse psd fil, skulle jeg udtrække data fra filen og omskrive designet til HTML og CSS. Grid systemet skulle baseres på Bootstraps grid, og resten skulle laves fra bunden af.</p>
                    </div>
                    <a href=""><GrFormNextLink/>Se project</a>
                    <hr></hr>                   
                </div>
            </article>
        );
    }
}