import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import linkedin from '../Navbar/linkedin.png';
import github from '../Navbar/github.png';
import logo from '../Navbar/portfolioLogo.png';
import profilePhoto from '../ProfilePhoto/profilePhoto.jpg';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';
import { Experience } from '../Experience/Experience';
import { PersonalInfo } from '../PersonalInfo/PersonalInfo';
import workDeskIcon from '../Experience/experince.png';
import calenderIcon from '../Experience/calender.png';
import location from '../PersonalInfo/location.png';
import work from '../PersonalInfo/work.png';
import personInfo from '../PersonalInfo/person-info.png';
import email from '../PersonalInfo/email.png';
import education from '../Education/education.png';
import { Education } from '../Education/Education';
import { Project } from '../Project/Project';
import { Diploma } from '../Diploma/Diploma';
import { Resume } from '../Resume/Resume';
import { Skill } from '../Skill/Skill';
import { Language } from '../Language/Language';
import skill from '../Skill/færdigheder.png';
import projectIcon from '../Project/project.png';
import languageIcon from '../Language/sprog.png';
import diploma1 from '../Diploma/htmlDiplom.jpg';
import diploma2 from '../Diploma/cssDiplom.jpg';
import diploma3 from '../Diploma/itucationdiplom.jpg';


class App extends React.Component {
  
  componentDidMount() {
    document.body.style.backgroundColor = "#082940";
  }

  render(){
    return (
      <div className="App">
        <header>
          <Navbar linkedin={linkedin} github={github} portfolioLogo={logo}/>
        </header>
        <section className="container">
          <section className="left">
            <ProfilePhoto profilePhoto={profilePhoto}/>
            <PersonalInfo location={location} work={work} personInfo={personInfo} email={email}/>
            <Resume />
            <Skill skill={skill}/>
            <Language languageIcon={languageIcon}/>
          </section>
          <section className="right">
            <Experience workDeskIcon={workDeskIcon} calenderIcon={calenderIcon}/>
            <Education calenderIcon={calenderIcon} education={education}/>
            <Project projectIcon={projectIcon} calenderIcon={calenderIcon}/>
            <Diploma diploma1={diploma1} diploma2={diploma2} diploma3={diploma3}/>
          </section>         
        </section>
      </div>
    );
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }
}

export default App;
