import React from 'react';
import './CloseFormButton.css';

function CloseFormButton(props) {
  return (
    <button
      className='button-close-item'
      type='button'
      onClick={props.onClick}
    />
  );
}

export default CloseFormButton;
