import React from 'react';
import './PopupWithForm.css';
import CloseFormButton from '../ui/CloseFormButton/CloseFormButton';
import SubmitFormButton from '../ui/SubmitFormButton/SubmitFormButton';
import NavLinkButton from '../ui/NavLinkButton/NavLinkButton';

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
        noValidate
      >
        <CloseFormButton onClick={props.onClose} />
        <fieldset className="form__fieldset">
          <legend className='form__title'>{props.title}</legend>
          {props.children}
        </fieldset>
        {(props.place !== 'result') ? <SubmitFormButton onClick={props.onSubmit} text={props.buttonText} /> : ''}
        {(props.place !== 'result') ? <p className='form__text'>Или {(props.place === 'login') ? <NavLinkButton class='form__nav-link' text='Зарегистрироваться' to='/signup' /> : (props.place === 'reg') ? <NavLinkButton class='form__nav-link' text='Войти' to='/signin' /> : ''}</p> : <NavLinkButton class='form__nav-link' text='Войти' to='/signin' />}
      </form>
    </section>
  )
}

export default PopupWithForm;
