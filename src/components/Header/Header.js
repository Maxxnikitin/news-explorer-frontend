import React from 'react';
import './Header.css';
import NavLinkButton from '../ui/NavLinkButton/NavLinkButton';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const navLinkClassName = (
    `${(props.theme === 'white') ? 'nav__link nav__link_logo nav__link_theme_white' : 'nav__link nav__link_logo'}`
  );
  return (
    <header className='header'>
      <div className='header__container'>
        <NavLinkButton class={navLinkClassName} to='/' text='News Explorer' />
        <Navigation theme={props.theme} activeClass={props.activeClass} onClick={props.onClick} />
      </div>
    </header>
  );
}

export default Header;
