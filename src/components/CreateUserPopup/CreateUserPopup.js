import React from 'react';
import './CreateUserPopup.css';
// import { useHistory } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../ui/FormInput/FormInput';
import { registration } from '../../utils/auth';

function CreateUserPopup(props) {
//  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    registration(email, password, name)
      .then((res) => {
        if (res) {
          props.openResPopup();
        //  history.push('/');
        } else {
          console.log('err');
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      place='reg'
      buttonText='Зарегистрироваться'
      title='Регистрация'
      onClickReg={props.onClickReg}
      onSubmit={handleSubmit}
      name='registration'
    >
      <label className='form__label'>Email<FormInput type='email' name='email' placeholder='Введите почту' onChange={handleEmail} /></label>
      <label className='form__label'>Пароль<FormInput type='password' name='password' placeholder='Введите пароль' onChange={handlePassword} /></label>
      <label className='form__label'>Имя<FormInput type='string' name='name' placeholder='Введите своё имя' onChange={handleName} /></label>
    </PopupWithForm>
  );
}

export default CreateUserPopup;
