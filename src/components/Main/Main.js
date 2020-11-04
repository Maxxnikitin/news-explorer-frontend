import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NotFoundCard from '../NotFoundCard/NotFoundCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import LoginPopup from '../LoginPopup/LoginPopup';

function Main() {
  return (
    <main className='main'>
      <Header theme='white' activeClass='nav__link_active-white' />
      <SearchForm />
      <Preloader />
      <NewsCardList page='main' />
      <NotFoundCard />
      <About />
      <LoginPopup isOpen='1' buttonText='Войти' />
    </main>
  );
}

export default Main;
