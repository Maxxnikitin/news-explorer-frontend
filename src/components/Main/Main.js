import React from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import NotFoundCard from '../NotFoundCard/NotFoundCard';
import About from '../About/About';

function Main() {
  return (
    <main className='main'>
      <Preloader />
      <NotFoundCard />
      <About />
    </main>
  );
}

export default Main;
