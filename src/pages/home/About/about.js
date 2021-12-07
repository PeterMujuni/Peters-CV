import './about.css'
import aboutPhoto from '../../../assets/petermujuni1.png'
import { CVContext } from '../../../contexts/cvcontext'
import { useContext } from 'react'

export const About = () => {
    const {cv} = useContext(CVContext);
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Frontend Engineer based in Denmark</p>
            <div className="about-me__body">
                {cv.resume.map((line, index) => (<p key={index}>{line}</p>))}                
            </div>
            <img src={aboutPhoto} alt="peter mujuni" className="about-me__img" />
            {/* <button className="btn cv-btn">See CV</button> */}
        </section>
    )
}
