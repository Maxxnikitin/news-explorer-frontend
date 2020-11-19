import React from "react";
import "./Header.css";
import NavLinkButton from "../ui/NavLinkButton/NavLinkButton";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const navLinkClassName = `${
    props.theme === "white"
      ? "nav__link nav__link_logo nav__link_theme_white"
      : "nav__link nav__link_logo"
  }`;
  const menuButtonClassName = `${
    props.theme === "white"
      ? "header__menu-button-img header__menu-button-img_theme_white"
      : "header__menu-button-img"
  }`;
  return (
    <header className="header">
      <div className="header__container">
        <NavLinkButton class={navLinkClassName} to="/" text="News Explorer" />
        <Navigation
          theme={props.theme}
          activeClass={props.activeClass}
          onClick={props.onClick}
          isLogged={props.isLogged}
          name={props.name}
          signOut={props.signOut}
        />
        <button
          className="header__menu-button"
          type="button"
          onClick={props.mobileMenuClick}
        >
          <span className={menuButtonClassName}></span>
        </button>
      </div>
      <section
        className={`header__popup-mobile ${
          props.menuIsOpen && "header__popup-mobile_opened"
        }`}
      >
        <div className="header__overlay"></div>
        <div className="header__mobile-menu">
          <Navigation
            place="mobile"
            theme="white"
            activeClass={props.activeClass}
            onClick={props.onClick}
            isLogged={props.isLogged}
          />
        </div>
      </section>
    </header>
  );
}

export default Header;
