import './App.css';
import WelcomeScreen from './components/WelcomeScreen.js';
import WhatWeDo from './components/WhatWeDo.js';
import HappyClients from './components/HappyClients.js';
import Form from './components/Form.js';
import About from './components/About.js';

function App() {
  return (
    <>
      <div className='bg-[#0F0D1A]'>
        <WelcomeScreen />
        <WhatWeDo />
        <HappyClients />
      </div>

      <Form />
      <About />
    </>

    
  );
}

export default App;
