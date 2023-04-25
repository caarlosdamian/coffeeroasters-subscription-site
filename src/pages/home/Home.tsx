import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Button, Steps } from '../../components';
import { featureInfo, homeCoffes } from '../../utils/data';
import { HomeCoffes } from '../../utils/types';
import { Link } from 'react-router-dom';
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
              <div className="collection__item">
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
      <div className="features">
        <div className="features__container">
          <div className="features__container--info">
            <span className="title">Why choose us?</span>
            <span className="subtitle">
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </span>
          </div>
          <div className="features__container--grid">
            {featureInfo.map((feature: HomeCoffes) => (
              <Fade triggerOnce key={feature.img}>
                <div className="feature__wrapper">
                  <img src={feature.img} alt={feature.title} />
                  <div className="feature__info">
                    <span className="title">{feature.title}</span>
                    <span className="subtitle">{feature.desc}</span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
      <div className="works">
        <div className="works__title">
          <span className="title">How it works</span>
        </div>
        <Steps />
        <Link to="/plan" className="links">
          <Button label="Create your plan" />
        </Link>
      </div>
    </div>
  );
};
