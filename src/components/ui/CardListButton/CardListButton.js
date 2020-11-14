import React from 'react';
import './CardListButton.css';

function CardListButton(props) {
  return (
  <button className='card-list-button' type='button'>{props.text}</button>
  );
}

export default CardListButton;
