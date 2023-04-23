import React from 'react';
import './Home.scss';
import { Button } from '../../components/button/Button';

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
      <div className="collection">collection</div>
      <div className="features">features</div>
      <div className="works">works</div>
    </div>
  );
};
