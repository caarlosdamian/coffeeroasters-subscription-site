import React, { useEffect, useState } from 'react';
import { hamburger, logo } from '../../assets';
import { Menu } from '../menu/Menu';
import { close } from '../../assets';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import { menuLinks } from '../../utils/data';

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
      <div className="header__menu--desktop" onClick={() => setShow(!show)}>
      {menuLinks.map((item) => (
        <Link className="links" to={item.path} key={item.id}>
          <span className="menu__item">{item.label}</span>
        </Link>
      ))}
      </div>
    </nav>
  );
};
