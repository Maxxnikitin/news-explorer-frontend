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
      onChange={props.onChange}
    />
  );
}

export default FormInput;
