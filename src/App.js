import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import AboutMe from "./components/AboutMe";
import Services from "./components/Services"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6.5,
              color: '#f9ab00'
            }
          }
        }
      }}
    />
    <Navbar />
    <Header/>
    <AboutMe />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
