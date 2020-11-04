import React from 'react';
import './PopupWithForm.css';
import CloseFormButton from '../ui/CloseFormButton/CloseFormButton';
import SubmitFormButton from '../ui/SubmitFormButton/SubmitFormButton';

function PopupWithForm(props) {
  return (
    <section className={`popup ${props.isOpen && 'popup_opened'}`} id={props.name}>
      <div className='popup__overlay' />
      <form
        className={`form form_type_${props.name}`}
        id={`form-${props.name}`}
        name={props.name}
        method="post"
        action="#"
        onSubmit={props.onSubmit}
      >
        <CloseFormButton onClick={props.onClose} />
        <fieldset className="form__fieldset">
          <legend className='form__title'>{props.title}</legend>
          {props.children}
        </fieldset>
        <SubmitFormButton onClick={props.onSubmit} text={props.buttonText} />
      </form>
    </section>
  )
}

export default PopupWithForm;
