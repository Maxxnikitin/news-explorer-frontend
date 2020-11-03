import React from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import NotFoundCard from '../NotFoundCard/NotFoundCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main() {
  return (
    <main className='main'>
      <Preloader />
      <NewsCardList title='Результаты поиска' />
      <NotFoundCard />
      <About />
    </main>
  );
}

export default Main;
