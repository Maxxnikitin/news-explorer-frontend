import React from 'react';
import './NavLinkButton.css';
import { NavLink } from 'react-router-dom';

function NavLinkButton(props) {
  return (
    <NavLink className={props.class} to={props.to}>{props.text}</NavLink>
  );
}

export default NavLinkButton
