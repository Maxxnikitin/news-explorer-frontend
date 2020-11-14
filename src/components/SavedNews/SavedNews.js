import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews(props) {
  return (
    <main className='saved-news'>
      <Header activeClass='nav__link_active' onClick={props.onClick} isLogged={props.isLogged} menuIsOpen={props.menuIsOpen} mobileMenuClick={props.mobileMenuClick} signOut={props.signOut} loggedName={props.loggedName} />
      <SavedNewsHeader loggedName={props.loggedName} />
      <NewsCardList tooltip='Убрать из сохранённых' />
    </main>
  );
}

export default SavedNews;
