import React from 'react';
import './FormInput.css';

function FormInput(props) {
  return (
    <input
      className='form-input'
      type={props.type}
      name={props.name}
      id={props.name}
      required
      placeholder={props.placeholder}
    />
  );
}

export default FormInput;
