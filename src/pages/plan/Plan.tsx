import React from 'react';
import { ImgCard, Steps } from '../../components';
import { coffeSections } from '../../utils/data';
import { Question } from '../../components/question/Question';
import { useSelection } from '../../hooks/useSelection';
import './Plan.scss';

export const Plan = () => {
  const { selection, setSelection } = useSelection();

  return (
    <div className="plan">
      <ImgCard
        section="plan"
        title="Create a plan"
        type="large"
        description="Build a subscription plan that best fits your needs. We offer an assortment of the best 
        artisan coffees from around the globe delivered fresh to your door."
      />
      <section className="setps">
        <Steps dark />
      </section>
      <section className="questions">
        <div className="questions__sections"></div>
        {coffeSections.map((item) => (
          <Question
            item={item}
            key={item.id}
            setSelection={setSelection}
            selection={selection}
          />
        ))}
      </section>
    </div>
  );
};
