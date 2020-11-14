import React from 'react';
import './LoginPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../ui/FormInput/FormInput';

function LoginPopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      place='login'
      buttonText='Войти'
      title='Вход'
      name='login'
      onClickLogin={props.onClickLogin}
    >
      <label className='form__label'>Email
        <FormInput type='email' name='email' placeholder='Введите почту' />
        <span className='form__input-error form__input-error_place_email' id='email-error'></span>
      </label>
      <label className='form__label'>Пароль
        <FormInput type='password' name='password' placeholder='Введите пароль' />
        <span className='form__input-error form__input-error_place_password' id='password-error'></span>
      </label>
    </PopupWithForm>
  );
}

export default LoginPopup;
