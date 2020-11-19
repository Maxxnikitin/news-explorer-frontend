import React from "react";
import "./LoginPopup.css";
import { useHistory } from "react-router-dom";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import FormInput from "../ui/FormInput/FormInput";
import { authorize } from "../../utils/auth";
import { useFormWithValidation } from "../../utils/Validation";

function LoginPopup(props) {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const validate = useFormWithValidation();

  function handleEmail(e) {
    setEmail(e.target.value);
    validate.handleChange(e);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    validate.handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    authorize(email, password)
      .then((data) => {
        if (data) {
          localStorage.setItem("token", data.token);
          setEmail("");
          setPassword("");
          props.tokenCheck(data.token);
          props.onClose();
          history.push("/");
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
      place="login"
      buttonText="Войти"
      title="Вход"
      name="login"
      onClickLogin={props.onClickLogin}
      onSubmit={handleSubmit}
      disabled={!validate.isValid}
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
          id="email-error"
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
          id="password-error"
        >
          {validate.errors.password}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default LoginPopup;
