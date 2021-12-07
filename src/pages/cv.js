import { ProfilePhoto } from '../components/ProfilePhoto/ProfilePhoto';
import { Experience } from '../components/Experience/Experience';
import { PersonalInfo } from '../components/PersonalInfo/PersonalInfo';
import { Education } from '../components/Education/Education';
import { Project } from '../components/ProjectCV/Project';
import { Resume } from '../components/Resume/Resume';
import { Skills } from '../components/Skill/Skill';
import { Language } from '../components/Language/Language';

export const cv = () => {
    return (
        <main className="cv-container">
            <ProfilePhoto />
            <PersonalInfo />
            <Resume />
            <Skills />                    
            <Experience />
            <Project />
            <Education />
            <Language/> 
        </main>
    )
}
