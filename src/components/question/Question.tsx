import React, { useEffect, useMemo, useState } from 'react';
import { arrow } from '../../assets';
import { CoffeSection } from '../../utils/types';
import './Question.scss'

interface QuestionProps {
  item: CoffeSection;
  setSelection: React.Dispatch<any>;
  //@ts-ignore
  selection: { [key: string]: { value: String; selected: boolean } };
  disable: boolean;
}
export const Question = ({
  item,
  selection,
  setSelection,
  disable,
}: QuestionProps) => {
  const [isOpen, setisOpen] = useState(false);

  const isSelected = (title: string, id: string) => {
    return title === selection[id].value ? 'selected' : '';
  };

  useEffect(() => {
    if (selection[item.id]?.selected) {
      setisOpen(true);
    }
  }, [selection]);

  return (
    <div className={`questions__container ${isOpen && 'open'}`} id={item.id}>
      <div
        className="questions__container--drop"
        onClick={() => setisOpen(disable ? false : !isOpen)}
      >
        <span className={`question__title ${disable ? 'disable' : ''}`}>
          {item.question}
        </span>
        <img
          src={arrow}
          alt="arrow"
          className={`question__arrow ${disable ? 'disable' : ''} ${
            isOpen && 'open'
          }`}
          onClick={() => setisOpen(disable ? false : !isOpen)}
        />
      </div>
      {isOpen && !disable && (
        <div className="questions__container--answers">
          {item.options.map((option) => (
            <div
              key={option.id}
              className={`question__container ${isSelected(
                option.title,
                item.id
              )}`}
              onClick={() =>
                setSelection((prevState: any) => ({
                  ...prevState,
                  [item.id]: {
                    ...prevState[item.id],
                    value: option.title,
                  },
                }))
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
