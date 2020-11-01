import React from 'react';
import './Navigation.css';
import NavLinkButton from '../ui/NavLinkButton/NavLinkButton';
import Button from '../ui/Button/Button';

function Navigation() {
  return (
    <nav className='nav'>
      <NavLinkButton class='nav-link' to='/' text='Главная' />
      <NavLinkButton class='nav-link' to='/saved-news' text='Сохранённые статьи' />
      <Button type='button' text='Максим' />
    </nav>
  )
}

export default Navigation;
