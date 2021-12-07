import { Footer } from "../../components/Footer/Footer"
import { Intro } from "../../components/Intro/Intro"
import { Project } from "../project"
import { About } from "./About/about"
import { Skills } from "./Skills/Skills"

export const Home = () => {
    
    return (
        <>
            <Intro />
            <Skills />
            <About />
            <Project />
            <Footer />
        </>
    )
}
