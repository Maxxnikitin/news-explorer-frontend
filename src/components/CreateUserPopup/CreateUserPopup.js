import React from 'react';
import './CreateUserPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../ui/FormInput/FormInput';

function CreateUserPopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      place='reg'
      buttonText='Зарегистрироваться'
      title='Регистрация'
      onClickReg={props.onClickReg}
      onSubmit={props.onSubmit}
      name='registration'
    >
      <label className='form__label'>Email<FormInput type='email' name='email' placeholder='Введите почту' /></label>
      <label className='form__label'>Пароль<FormInput type='password' name='password' placeholder='Введите пароль' /></label>
      <label className='form__label'>Имя<FormInput type='string' name='name' placeholder='Введите своё имя' /></label>
    </PopupWithForm>
  );
}

export default CreateUserPopup;
