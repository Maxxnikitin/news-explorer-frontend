import React from "react";
import "./Navigation.css";
import NavLinkButton from "../ui/NavLinkButton/NavLinkButton";
import Button from "../ui/Button/Button";
import imgBlack from "../../images/button/logout-black.svg";
import imgWhite from "../../images/button/logout-white.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Navigation(props) {
  const user = React.useContext(CurrentUserContext);
  const navLinkClassName = `${
    props.theme === "white" ? "nav__link nav__link_theme_white" : "nav__link"
  }`;
  const buttonImg = `${props.theme === "white" ? imgWhite : imgBlack}`;

  return (
    <nav className={`${props.place === "mobile" ? "nav nav-mobile" : "nav"}`}>
      <NavLinkButton
        theme={props.theme}
        class={navLinkClassName}
        activeClass={props.activeClass}
        to="/"
        text="Главная"
      />
      {props.isLogged === true ? (
        <>
          <NavLinkButton
            theme={props.theme}
            class={navLinkClassName}
            activeClass={props.activeClass}
            to="/saved-news"
            text="Сохранённые статьи"
          />
          <Button
            theme={props.theme}
            type="button"
            text={user.name}
            onClick={props.signOut}
          >
            <img className="button__icon" src={buttonImg} alt="выход." />
          </Button>
        </>
      ) : (
        <Button
          theme={props.theme}
          type="button"
          text="Авторизоваться"
          onClick={props.onClick}
        />
      )}
    </nav>
  );
}

export default Navigation;
