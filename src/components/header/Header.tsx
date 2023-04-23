import React, { useState } from 'react';
import { hamburger, logo } from '../../assets';
import { Menu } from '../menu/Menu';
import { close } from '../../assets';
import './Header.scss';

export const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <nav className="header">
      {show && <Menu />}
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__menu" onClick={() => setShow(!show)}>
        <img src={show ? close : hamburger} alt={show ? close : hamburger} />
      </div>
    </nav>
  );
};
