import React from 'react';
import './Navigation.css';
import NavLinkButton from '../ui/NavLinkButton/NavLinkButton';
import Button from '../ui/Button/Button';

function Navigation() {
  return (
    <nav className='nav'>
      <NavLinkButton class='nav__link' activeClass='nav__link_active' to='/' text='Главная' />
      <NavLinkButton class='nav__link' activeClass='nav__link_active' to='/saved-news' text='Сохранённые статьи' />
      <Button type='button' text='Максим' />
    </nav>
  )
}

export default Navigation;
