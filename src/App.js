import React from 'react';
import './components/Navbar.js'
import './components/Intro.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MyNavbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Resume from './components/Resume.js';

function App() {
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
      <Intro></Intro>
      <About></About>
      <Resume></Resume>
    </div>
  );
}

export default App;
