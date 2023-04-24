import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Button } from '../../components/button/Button';
import { homeCoffes } from '../../utils/data';
import { HomeCoffes } from '../../utils/types';
import './Home.scss';

export const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <span className="hero__title">Great coffee made simple.</span>
        <span className="hero__subtitle">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </span>
        <Button label="Create your plan" />
      </div>
      <div className="collection">
        <span className="collection__title">our collection</span>
        <div className="collection__grid">
          {homeCoffes.map((coffe: HomeCoffes) => (
            <Fade triggerOnce key={coffe.img}>
              <div className="collection__item" >
                <img
                  className="collection__item--img"
                  src={coffe.img}
                  alt={coffe.title}
                />
                <div className="collection__info">
                  <span className="collection__item--title">{coffe.title}</span>
                  <span className="collection__item--desc">{coffe.desc}</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <div className="features">features</div>
      <div className="works">works</div>
    </div>
  );
};
