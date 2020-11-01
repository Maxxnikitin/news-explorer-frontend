import React from 'react';
import './Header.css';
import NavLinkButton from '../ui/NavLinkButton/NavLinkButton';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <NavLinkButton class='nav-link nav-link__logo' to='/' text='News Explorer' />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
