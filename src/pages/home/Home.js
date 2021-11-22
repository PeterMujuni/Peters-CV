import { ProfilePhoto } from './ProfilePhoto/ProfilePhoto';
import { Experience } from './Experience/Experience';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';
import { Education } from './Education/Education';
import { Project } from './Project/Project';
import { Resume } from './Resume/Resume';
import { Skills } from './Skill/Skills';
import { Language } from './Language/Language';



export const Home = () => {
    
    return (
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
    )
}
