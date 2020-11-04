import React from 'react';
import './LoginPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../ui/FormInput/FormInput';

function LoginPopup(props) {
  return (
    <PopupWithForm isOpen={props.isOpen} buttonText='Войти' title='Вход'>
      <label className='form__label'>Email<FormInput type='email' name='email' placeholder='Введите почту' /></label>
      <label className='form__label'>Пароль<FormInput type='password' name='password' placeholder='Введите пароль' /></label>
    </PopupWithForm>
  );
}

export default LoginPopup;
