import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews() {
  return (
    <main className='saved-news'>
      <Header activeClass='nav__link_active' />
      <SavedNewsHeader />
      <NewsCardList />
    </main>
  );
}

export default SavedNews;
