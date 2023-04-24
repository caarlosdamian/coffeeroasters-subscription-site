import React from 'react';
import { worksSteps } from '../../utils/data';
import { Fade } from 'react-awesome-reveal';
import { StepsWorks } from '../../utils/types';
import './Steps.scss'

export const Steps = () => {
  return (
    <div className="steps">
      <div className="steps__line">
        <div className="dot" id="dot1"></div>
        <div className="dot" id="dot2"></div>
        <div className="dot" id="dot3"></div>
      </div>
      <div className="steps__grid">
        {worksSteps.map((step: StepsWorks) => (
          <Fade triggerOnce key={step.id}>
            <div className="step__container">
              <span className="step__container--number">{step.id}</span>
              <span className="step__container--title">{step.title}</span>
              <span className="step__container--desc">{step.desc}</span>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};
