import React from 'react';
import './Navigation.css';
import NavLinkButton from '../ui/NavLinkButton/NavLinkButton';
import Button from '../ui/Button/Button';
import imgBlack from '../../images/button/logout-black.svg';
import imgWhite from '../../images/button/logout-white.svg';

function Navigation(props) {
  const navLinkClassName = (
    `${(props.theme === 'white') ? 'nav__link nav__link_theme_white' : 'nav__link'}`
  );
  const buttonImg = (
    `${(props.theme === 'white') ? imgWhite : imgBlack}`
  );

  return (
    <nav className='nav'>
      <NavLinkButton theme={props.theme} class={navLinkClassName} activeClass={props.activeClass} to='/' text='Главная' />
      <NavLinkButton theme={props.theme} class={navLinkClassName} activeClass={props.activeClass} to='/saved-news' text='Сохранённые статьи' />
      {(props.isLogged === true) ?
      <Button theme={props.theme} type='button' text='Максим' onClick={props.onClick}>
        <img className='button__icon' src={buttonImg} alt='выход.' />
      </Button> :
      <Button theme={props.theme} type='button' text='Авторизоваться' onClick={props.onClick} />}
    </nav>
  )
}

export default Navigation;
