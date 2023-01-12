import React from 'react';
import './App.css';

import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='bg-black text-white m-auto antialised font-sans'>  
    <Hero/>
    <NavBar/>
    </div>
  );
}

export default App;
