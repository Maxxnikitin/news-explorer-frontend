import React from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';

function Main() {
  return (
    <main className='main'>
      <Preloader />
      <About />
    </main>
  );
}

export default Main;
