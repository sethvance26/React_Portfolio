import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar.js';
import Header from './components/Header';

function App() {
  return (
    <>
    <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          }
        }
      }}
    />
    <Navbar />
    <Header/>
    </>
  );
}

export default App;
