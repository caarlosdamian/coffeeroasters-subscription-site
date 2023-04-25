import React from 'react';
import './ImgCard.scss';

export const ImgCard = ({
  section,
  type,
  title,
  description
}: {
  section: string;
  type: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={`img-card ${section}`}>
      <h1 className={`img-card__title ${type}`}>{title}</h1>
      <h2 className={`img-card__description`}>{description}</h2>
    </div>
  );
};
