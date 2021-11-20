import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';
import { Experience } from '../Experience/Experience';
import { PersonalInfo } from '../PersonalInfo/PersonalInfo';
import { Education } from '../Education/Education';
import { Project } from '../Project/Project';
import { Resume } from '../Resume/Resume';
import { Skills } from '../Skill/Skills';
import { Language } from '../Language/Language';
import { CVContextProvider } from '../../contexts/cvcontext';
import { ParticleBackground } from '../ParticleBackground/ParticleBackground';



export const App = () => {
  
  return (
    <div className="App">
      <ParticleBackground />
      <CVContextProvider>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <section className="left">
          <ProfilePhoto />
          <PersonalInfo />
          <Resume />
          <Skills />
          <Language/>
        </section>
        <section className="right">
          <Experience />
          <Education />
          <Project />
        </section>                
      </main>
      </CVContextProvider>
    </div>
  );
  
}

