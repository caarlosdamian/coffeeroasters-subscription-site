import React, { useEffect, useState } from 'react';
import { hamburger, logo } from '../../assets';
import { Menu } from '../menu/Menu';
import { close } from '../../assets';
import './Header.scss';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setShow(false);
  }, [pathname]);

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
