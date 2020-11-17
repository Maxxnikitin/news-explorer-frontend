import React from 'react';
import './CardListButton.css';

function CardListButton(props) {
  return (
  <button onClick={props.onClick} className='card-list-button' type='button'>{props.text}</button>
  );
}

export default CardListButton;
