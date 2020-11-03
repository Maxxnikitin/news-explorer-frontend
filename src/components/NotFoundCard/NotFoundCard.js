import React from 'react';
import './NotFoundCard.css';
import img from '../../images/not-found-card/not-found.svg';

function NotFoundCard() {
  return (
    <section className='not-found-card'>
      <img className='not-found-card__img' src={img} alt='не найдено.' />
      <h2 className='not-found-card__title'>Ничего не найдено</h2>
      <p className='not-found-card__text'>К сожалению по вашему запросу
ничего не найдено.</p>
    </section>
  );
}

export default NotFoundCard;
