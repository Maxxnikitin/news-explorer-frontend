import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NotFoundCard from '../NotFoundCard/NotFoundCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main() {
  return (
    <main className='main'>
      <Header theme='white' activeClass='nav__link_active-white' />
      <SearchForm />
      <Preloader />
      <NewsCardList title='Результаты поиска' />
      <NotFoundCard />
      <About />
    </main>
  );
}

export default Main;
