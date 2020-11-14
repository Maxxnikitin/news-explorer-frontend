import React from 'react';
import './Footer.css';
import NavLinkButton from '../ui/NavLinkButton/NavLinkButton';
import iconGitHub from '../../images/footer/icon-github.svg';
import iconFB from '../../images/footer/icon-fb.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2020 Supersite, Powered by News API</p>
        <nav className='footer__nav'>
          <ul className='footer__links'>
            <li className='footer__list'><NavLinkButton class='nav__link footer__link' to='/' text='Главная' /></li>
            <li className='footer__list'><a className='nav__link footer__link' href='https://praktikum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a></li>
          </ul>
          <ul className='footer__socials'>
            <li className='footer__social'><a className='footer__social-link' href='https://github.com/Maxxnikitin' target='_blank' rel='noreferrer'><img className='footer__icon' src={iconGitHub} alt='иконка гитхаба.' /></a></li>
            <li className='footer__social'><a className='footer__social-link' href='https://www.facebook.com/yandex.praktikum' target='_blank' rel='noreferrer'><img className='footer__icon' src={iconFB} alt='иконка фэйсбука.' /></a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
