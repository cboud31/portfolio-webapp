import './App.css';
import '/Users/CoryB/Desktop/2021_codingProjects/portfolioWebsite/my-app/node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  NavBar,
  Header,
  AboutMe,
  Portfolio,
  Experience,
  Contact,
} from './components';
import Particles from 'react-particles-js';

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
                value_area: 900,
              },
            },
          },
        }}
      />
      <NavBar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
