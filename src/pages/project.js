import { useContext } from "react"
import { CVContext } from "../contexts/cvcontext"

// styles
import './project.css'

export const Project = () => {
    const { cv } = useContext(CVContext);
    
    return (
        <section className="my-work" id="work">
            <h2 className="section__title">My Work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div className="portfolio">
                {cv.projects.map((project, index) => {
                    return (
                        <a key={index} href={project.link} className="portfolio__item">
                            <img src={project.imageUrl} alt="" className="portfolio__img" />
                        </a>
                    )
                })}
                
            </div>
        </section>
    )
}
