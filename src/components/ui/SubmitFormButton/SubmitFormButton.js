import React from 'react';
import './SubmitFormButton.css';

function SubmitFormButton(props) {
  return (
    <button className={props.className} type='button' disabled={props.disabled} onClick={props.onClick}>{props.text}</button>
  );
}

export default SubmitFormButton;
