import './App.css';
import Navbar from '../Navbar/Navbar';
import linkedin from '../Navbar/linkedin.png';
import github from '../Navbar/github.png';
import logo from '../Navbar/portfolioLogo.png';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar linkedin={linkedin} github={github} portfolioLogo={logo}/>
      </header>
    </div>
  );
}

export default App;
