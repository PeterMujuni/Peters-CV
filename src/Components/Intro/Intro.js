import './Intro.css';
import petermujuni from '../../assets/petermujuni.png'

export const Intro = () => {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Peter Mujuni</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src={petermujuni} alt="peter mujuni" className="intro__img" />
        </section>
    )
}
