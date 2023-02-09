import React from 'react';
import './App.css';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className='bg-black text-white m-auto antialised font-sans'>  
    <Hero/>
    <NavBar/>
    <Carousel/>
    <Carousel/>
    <Carousel/>
    </div>
  );
}

export default App;
