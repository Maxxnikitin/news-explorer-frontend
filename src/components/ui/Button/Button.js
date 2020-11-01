import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button className='button' type={props.type}>
      {props.text}
      <div className='button__icon'></div>
    </button>
  );
}

export default Button;
