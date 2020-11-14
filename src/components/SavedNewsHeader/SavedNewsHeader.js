import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader(props) {
  return (
    <div className='saved-news-header'>
      <p className='saved-news-header__about'>Сохранённые статьи</p>
      <h2 className='saved-news-header__title'>{props.loggedName}, у вас 5 сохранённых статей</h2>
      <p className='saved-news-header__keywords'>По ключевым словам: <span className='saved-news-header__keywords_bold'>Природа, Тайга</span> и <span className='saved-news-header__keywords_bold'>2-м другим</span></p>
    </div>
  );
}

export default SavedNewsHeader;
