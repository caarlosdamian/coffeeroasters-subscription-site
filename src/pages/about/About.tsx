import React from 'react';
import { ImgCard } from '../../components';
import './About.scss';
import { headQuartrsInfo } from '../../utils/data';

export const About = () => {
  return (
    <div className="about">
      <ImgCard
        section="about"
        title="About Us"
        type="small"
        description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
      />
      <section className="commitment">
        <div className="commitment__img"></div>
        <div className="commitment__info">
          <span className="commitment__info--title">Our commitment</span>
          <span className="commitment__info--desc">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </span>
        </div>
      </section>
      <section className="quality">
        <div className="quality__img"></div>
        <span className="quality__title"> Uncompromising quality</span>
        <span className="quality__desc">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </span>
      </section>
      <section className="headquarters">
        <span className="headquarters__title">Our headquarters</span>
        <div className="headquarters__info">
          {headQuartrsInfo.map((item) => (
            <div className="headquarters__info--item" key={item.id}>
              <img src={item.img} alt={item.country} />
              <span className="headquarters__info--title">{item.country}</span>
              <div className="address__info">
                {item.address.map((address) => (
                  <span className="address__info--item" key={address.id}>
                    {address.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
