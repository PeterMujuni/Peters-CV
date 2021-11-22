import './App.css';
import { Home } from '../pages/home/Home';
import { Navbar } from '../components/Navbar/Navbar';
import { CVContextProvider } from '../contexts/cvcontext';
import { ParticleBackground } from '../components/ParticleBackground/ParticleBackground';


export const App = () => {
  
  return (
    <div className="App">
      <ParticleBackground />
      <CVContextProvider>
        <Navbar />
        <Home />
      </CVContextProvider>
    </div>
  );
  
}

