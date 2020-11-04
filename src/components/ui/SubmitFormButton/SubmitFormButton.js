import React from 'react';
import './SubmitFormButton.css';

function SubmitFormButton(props) {
  return (
    <button className='submit-button' type='submit'  onClick={props.onClick}>{props.text}</button>
  );
}

export default SubmitFormButton;
