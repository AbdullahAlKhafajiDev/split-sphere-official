import './App.css';

import WelcomeScreen from './components/WelcomeScreen.js';
import WhatWeDo from './components/WhatWeDo.js';
import HappyClients from './components/HappyClients.js';
import Form from './components/Form.js';
import About from './components/About.js';
import NavBar from './components/NavBar.js';
import OurWork from './components/OurWork.js';

function App() {
  return (
    <>
      <div className='bg-[#0F0D1A]'>
        <NavBar />
        <WelcomeScreen />
        <WhatWeDo />
        <OurWork />
        <HappyClients />
      </div>

      <Form />
      <About />
    </>

    
  );
}

export default App;
