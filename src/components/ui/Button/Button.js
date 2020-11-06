import React from 'react';
import './Button.css';

function Button(props) {
  const buttonClassName = (
    `${(props.theme === 'white') ? 'button button_theme_white' : 'button'}`
  );

  return (
    <button className={buttonClassName} type={props.type} onClick={props.onClick}>
      {props.text}
      {props.children}
    </button>
  );
}

export default Button;
