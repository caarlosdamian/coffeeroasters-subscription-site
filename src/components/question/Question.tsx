import React, { useEffect, useMemo, useState } from 'react';
import { arrow } from '../../assets';
import { CoffeSection } from '../../utils/types';

interface QuestionProps {
  item: CoffeSection;
  setSelection: React.Dispatch<any>;
  selection: { [key: string]: { value: String; selected: boolean } };
  disable: boolean;
}
export const Question = ({ item, selection, setSelection, disable }: QuestionProps) => {
  const [isOpen, setisOpen] = useState(false);

  const isSelected = (title: string, id: string) => {
    return title === selection[id].value ? 'selected' : '';
  };

  useEffect(() => {
    if (selection[item.id]?.selected) {
      setisOpen(true);
    }
  }, [selection]);

  // const sectionDisable = useMemo(() => selection.coffe1.value === 'Capsule' && item.id === 'coffe4', [selection.coffe1.value])
console.log('====disable===',disable,item.id)

  return (
    <div className={`questions__container ${isOpen && 'open'}`} id={item.id}>
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
