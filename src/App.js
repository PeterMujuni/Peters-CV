import { Home } from './pages/Home/home';
import { Navbar } from './components/Navbar/Navbar';
import { CVContextProvider } from './contexts/cvcontext';


export const App = () => {
  
  return (
    <>
      <CVContextProvider>
        <Navbar />
        <Home />
      </CVContextProvider>
    </>
  );
  
}

