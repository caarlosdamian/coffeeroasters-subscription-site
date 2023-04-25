import React from 'react';
import { ImgCard } from '../../components';
import './Plan.scss';

export const Plan = () => {
  return (
    <div className="plan">
      <ImgCard
        section="plan"
        title="Create a plan"
        type="large"
        description="Build a subscription plan that best fits your needs. We offer an assortment of the best 
        artisan coffees from around the globe delivered fresh to your door."
      />
    </div>
  );
};
