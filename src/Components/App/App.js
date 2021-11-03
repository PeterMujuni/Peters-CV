import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import linkedin from '../Navbar/linkedin.png';
import github from '../Navbar/github.png';
import logo from '../Navbar/portfolioLogo.png';
import profilePhoto from '../ProfilePhoto/profilePhoto.jpg';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';
import { Experience } from '../Experience/Experience';

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
          </section>
          <section className="right">
            <Experience />
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
