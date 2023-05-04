import React, { useContext } from 'react';
import './Modal.scss';
import { useSelection } from '../../hooks/useSelection';
import { SelectionContext } from '../../context/selectionContext';
import { Button } from '../button/Button';

export const Modal = () => {
  const { selection, setSelection, sectionDisable, textMessage } =
    useContext(SelectionContext);

  console.log('====textMessage=', textMessage);
  return (
    <div className="modal">
      <div className="modal__overlay"></div>
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
              also be redeemed at the checkout.{' '}
            </span>
          </div>
          <div className="button__section">
            <span className="checkout__desc">{'$14.00 '}</span>
            <Button label="Checkout - $14.00 / mo" />
          </div>
        </div>
      </div>
    </div>
  );
};
