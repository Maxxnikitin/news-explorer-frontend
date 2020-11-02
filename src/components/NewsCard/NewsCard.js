import React from 'react';
import './NewsCard.css';
import CardButton from '../ui/CardButton/CardButton';
import iconAdd from '../../images/news-card/add-not-active.svg'

function NewsCard(props) {
  return (
    <article className='card'>
      <img className='card__img' src={props.src} alt={props.alt} />
      <div className='card__container'>
        <p className='card__date'>{props.date}</p>
        <h3 className='card__title'>{props.title}</h3>
        <p className='card__text'>{props.text}</p>
        <p className='card__source'>{props.source}</p>
      </div>
      <CardButton src={iconAdd} alt='добавить в избранное.' />
    </article>
  );
}

export default NewsCard;
