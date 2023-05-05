import React, { useContext, useMemo } from 'react';
import './Modal.scss';
import { useSelection } from '../../hooks/useSelection';
import { SelectionContext } from '../../context/selectionContext';
import { Button } from '../button/Button';
import { ModalContext } from '../../context/modalContext';
import { deliverOptions } from '../../utils/data';

export const Modal = () => {
  const {
    textMessage,
    coffeSectionsArray: { price },
    selection,
  } = useContext(SelectionContext);

  const { handleShow } = useContext(ModalContext);
  const { coffe5 } = selection;
  const priceByMonth = useMemo(
    () =>
      coffe5.value === deliverOptions.mont
        ? price.month
        : coffe5.value === deliverOptions.weeks
        ? price.weeksPrice
        : price.weekPrice,
    [selection]
  );

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={handleShow}></div>
      <div className="modal__container">
        <div className="modal__container--upper">
          <span className="order__summary">Order Summary</span>
        </div>
        <div className="modal__container--down">
          <div className="modal__description--container">
            <span
              className="summary__container"
              dangerouslySetInnerHTML={textMessage}
            ></span>
            <span className="description">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </span>
          </div>
          <div className="button__section">
            <span className="checkout__desc">{`$${priceByMonth.toFixed(2)} / mo`}</span>
            <Button
              id="button--mobile"
              label={`Checkout - $${priceByMonth} / mo`}
            />
            <Button id="button--tablet" label="Checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};
