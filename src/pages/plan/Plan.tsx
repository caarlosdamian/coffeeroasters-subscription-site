import { Button, ImgCard, Steps } from '../../components';
import { Question } from '../../components/question/Question';
import { useCallback, useContext, useMemo } from 'react';
import { SelectionContext } from '../../context/selectionContext';
import { ModalContext } from '../../context/modalContext';
import './Plan.scss';

export const Plan = () => {
  const {
    selection,
    setSelection,
    sectionDisable,
    textMessage,
    coffeSectionsArray,
  } = useContext(SelectionContext);
  const { handleShow } = useContext(ModalContext);
  const arrayOfObj = Object.entries(selection).map((e) => ({ [e[0]]: e[1] }));
  const keys = Object.keys(selection);
  const arrayOfSelections = arrayOfObj.map((item, i) => item[keys[i]]);
  const buttonDisable = useMemo(() => {
    let selectionsFilter = sectionDisable
      ? arrayOfSelections.filter((item) => item.value !== 'Capsule')
      : arrayOfSelections;

    return sectionDisable
      ? selectionsFilter.filter((item) => item.value !== '').length !== 3
      : selectionsFilter.filter((item) => item.value !== '').length !== 5;
  }, [arrayOfSelections, sectionDisable]);

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
        <div className="questions__sections">
          {coffeSectionsArray.coffeSections.map((item, i) => (
            <div className="section__container" key={Math.random()}>
              <span
                className={`section__number ${
                  //@ts-ignore
                  selection[item.id]?.value !== '' && 'completed'
                  //@ts-ignore
                } ${selection[item.id]?.selected && 'selected'}`}
              >{`0${i + 1}`}</span>
              <a
                className={`section__title ${
                  //@ts-ignore
                  selection[item.id]?.selected && 'selected'
                }`}
                href={`#${item.id}`}
                onClick={() =>
                  //@ts-ignore
                  setSelection((prevState) => ({
                    ...prevState,
                    [item.id]: {
                      //@ts-ignore
                      ...prevState[item.id],
                      selected: true,
                    },
                  }))
                }
              >
                {item.section}
              </a>
            </div>
          ))}
        </div>
        <div className="questions__drops">
          {coffeSectionsArray.coffeSections.map((item) => (
            <Question
              item={item}
              key={item.id}
              setSelection={setSelection}
              selection={selection}
              disable={sectionDisable && item.id === 'coffe4'}
            />
          ))}
        </div>
      </section>
      <section className="summary">
        <span className="summary__title">Order Summary</span>
        <div
          className="summary__container"
          dangerouslySetInnerHTML={textMessage}
        ></div>
      </section>
      <section className="summary__button">
        <Button
          label="Create my plan!"
          disabled={buttonDisable}
          onClick={handleShow}
        />
      </section>
    </div>
  );
};
