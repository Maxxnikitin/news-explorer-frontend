import React from 'react';
import './Button.css';
import imgBlack from '../../../images/button/logout-black.svg';
import imgWhite from '../../../images/button/logout-white.svg';

function Button(props) {
  const buttonClassName = (
    `${(props.theme === 'white') ? 'button button_theme_white' : 'button'}`
  );
  const buttonImg = (
    `${(props.theme === 'white') ? imgWhite : imgBlack}`
  );

  return (
    <button className={buttonClassName} type={props.type}>
      {props.text}
      <img className='button__icon' src={buttonImg} alt='выход.' />
    </button>
  );
}

export default Button;
