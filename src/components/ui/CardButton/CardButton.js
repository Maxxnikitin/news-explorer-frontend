import React from 'react';
import './CardButton.css';

function CardButton(props) {
  return (
    <button className='card-button' type='button'>
      <img className='card-button__img' src={props.src} alt={props.alt} />
    </button>
  );
}

export default CardButton;
