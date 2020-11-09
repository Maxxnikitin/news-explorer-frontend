import React from 'react';
import './RegOkPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegOkPopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      place='result'
      title='Пользователь успешно зарегистрирован!'
      onClickReg={props.onClickReg}
      name='reg-ok'
    />
  );
}

export default RegOkPopup;
