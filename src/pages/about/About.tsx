import React from 'react';
import { ImgCard } from '../../components';
import './About.scss';

export const About = () => {
  return (
    <div className="about">
      <ImgCard
        section="about"
        title="About Us"
        type="small"
        description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
      />
    </div>
  );
};
