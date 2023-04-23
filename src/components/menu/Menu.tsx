import React from 'react';
import { menuLinks } from '../../utils/data';
import { Link } from 'react-router-dom';
import './Menu.scss';

export const Menu = () => {
  return (
    <div className="menu">
      {menuLinks.map((item) => (
        <Link className="links" to={item.path} key={item.id}>
          <span className="menu__item">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};
