import React from 'react';
import './Navigation.css';
import NavLinkButton from '../ui/NavLinkButton/NavLinkButton';
import Button from '../ui/Button/Button';

function Navigation(props) {
  const navLinkClassName = (
    `${(props.theme === 'white') ? 'nav__link nav__link_theme_white' : 'nav__link'}`
  );
  return (
    <nav className='nav'>
      <NavLinkButton theme={props.theme} class={navLinkClassName} activeClass={props.activeClass} to='/' text='Главная' />
      <NavLinkButton theme={props.theme} class={navLinkClassName} activeClass={props.activeClass} to='/saved-news' text='Сохранённые статьи' />
      <Button theme={props.theme} type='button' text='Максим' />
    </nav>
  )
}

export default Navigation;
