import { Button, ImgCard, Steps } from '../../components';
import { coffeSections } from '../../utils/data';
import { Question } from '../../components/question/Question';
import { useSelection } from '../../hooks/useSelection';
import './Plan.scss';

export const Plan = () => {
  const { selection, setSelection, sectionDisable, textMessage } =
    useSelection();

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
          {coffeSections.map((item, i) => (
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
          {coffeSections.map((item) => (
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
        <div  className='summary__container' dangerouslySetInnerHTML={textMessage}></div>
      </section>
      <section className="summary__button">
        <Button label='Create my plan!' />
      </section>
    </div>
  );
};
