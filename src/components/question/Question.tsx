import React, { useState } from 'react';
import { arrow } from '../../assets';
import { CoffeSection } from '../../utils/types';

interface QuestionProps {
  item: CoffeSection;
  setSelection: React.Dispatch<
    React.SetStateAction<{
      coffe1: string;
      coffe2: string;
      coffe3: string;
      coffe4: string;
    }>
  >;
  selection: { [key: string]: string };
}
export const Question = ({ item, selection, setSelection }: QuestionProps) => {
  const [isOpen, setisOpen] = useState(false);

  const isSelected = (title: string, id: string) => {
    return title === selection[id] ? 'selected' : '';
  };

  return (
    <div className={`questions__container ${isOpen && 'open'}`}>
      <div
        className="questions__container--drop"
        onClick={() => setisOpen(!isOpen)}
      >
        <span className="question__title">{item.question}</span>
        <img
          src={arrow}
          alt="arrow"
          className={`question__arrow ${isOpen && 'open'}`}
          onClick={() => setisOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="questions__container--answers">
          {item.options.map((option) => (
            <div
              kay={option.id}
              className={`question__container ${isSelected(
                option.title,
                item.id
              )}`}
              onClick={() =>
                setSelection({ ...selection, [item.id]: option.title })
              }
            >
              <span
                className={`option__title ${isSelected(option.title, item.id)}`}
              >
                {option.title}
              </span>
              <span
                className={`option__desc ${isSelected(option.title, item.id)}`}
              >
                {option.desc}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
