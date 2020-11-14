import React from 'react';
import './LoginPopup.css';
// import { useHistory } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormInput from '../ui/FormInput/FormInput';
import { authorize } from '../../utils/auth';

function LoginPopup(props) {
//  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    authorize(email, password)
      .then((data) => {
        if (data.token) {
          setEmail('');
          setPassword('');
          props.tokenCheck();
          props.onClose();
        //  history.push('/');
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      place='login'
      buttonText='Войти'
      title='Вход'
      name='login'
      onClickLogin={props.onClickLogin}
      onSubmit={handleSubmit}
    >
      <label className='form__label'>Email
        <FormInput type='email' name='email' placeholder='Введите почту' onChange={handleEmail} />
        <span className='form__input-error form__input-error_place_email' id='email-error'></span>
      </label>
      <label className='form__label'>Пароль
        <FormInput type='password' name='password' placeholder='Введите пароль' onChange={handlePassword} />
        <span className='form__input-error form__input-error_place_password' id='password-error'></span>
      </label>
    </PopupWithForm>
  );
}

export default LoginPopup;
