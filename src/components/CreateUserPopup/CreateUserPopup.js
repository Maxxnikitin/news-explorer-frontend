import React from "react";
import "./CreateUserPopup.css";
// import { useHistory } from 'react-router-dom';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import FormInput from "../ui/FormInput/FormInput";
import { registration } from "../../utils/auth";
import { useFormWithValidation } from "../../utils/Validation";

function CreateUserPopup(props) {
  // const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const validate = useFormWithValidation();
  const [formSend, setFormSend] = React.useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
    validate.handleChange(e);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    validate.handleChange(e);
  }

  function handleName(e) {
    setName(e.target.value);
    validate.handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormSend(true);
    registration(email, password, name)
      .then((res) => {
        if (res) {
          props.openResPopup();
          // history.push('/');
        } else {
          console.log("err");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <PopupWithForm
      btnClassName={
        validate.isValid
          ? "submit-button submit-button_active"
          : "submit-button"
      }
      isOpen={props.isOpen}
      onClose={props.onClose}
      place="reg"
      buttonText="Зарегистрироваться"
      title="Регистрация"
      onClickReg={props.onClickReg}
      onSubmit={handleSubmit}
      name="registration"
      disabled={!validate.isValid || formSend}
    >
      <label className="form__label">
        Email
        <FormInput
          type="email"
          name="email"
          placeholder="Введите почту"
          onChange={handleEmail}
        />
        <span
          className="form__input-error form__input-error_place_email"
          id="reg-email-error"
        >
          {validate.errors.email}
        </span>
      </label>
      <label className="form__label">
        Пароль
        <FormInput
          type="password"
          name="password"
          placeholder="Введите пароль"
          onChange={handlePassword}
          minLength="8"
        />
        <span
          className="form__input-error form__input-error_place_password"
          id="reg-password-error"
        >
          {validate.errors.password}
        </span>
      </label>
      <label className="form__label">
        Имя
        <FormInput
          type="string"
          name="name"
          placeholder="Введите своё имя"
          onChange={handleName}
        />
        <span
          className="form__input-error form__input-error_place_reg-name"
          id="password-error"
        >
          {validate.errors.name}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default CreateUserPopup;
