import { useMemo, useState } from 'react';

export const useSelection = () => {
  const [selection, setSelection] = useState({
    coffe1: {
      value: '',
      selected: false,
    },
    coffe2: {
      value: '',
      selected: false,
    },
    coffe3: {
      value: '',
      selected: false,
    },
    coffe4: {
      value: '',
      selected: false,
    },
    coffe5: {
      value: '',
      selected: false,
    },
  });

  const sectionDisable = useMemo(
    () => selection.coffe1.value === 'Capsule',
    [selection.coffe1.value]
  );

  const textMessage = useMemo(
    () =>
      `<span class='summary__message'> “I drink my coffee <strong>${
        selection.coffe1.value === ''
          ? '_____'
          : selection.coffe1.value === 'Capsule'
          ? 'using Capsules'
          : selection.coffe1.value === 'Espresso'
          ? 'as Espresso'
          : 'as Filter'
      }</strong> , with a <strong>${
        selection.coffe2.value !== '' ? selection.coffe2.value : '_____'
      }</strong> type of bean. <strong>${selection.coffe3.value} ${
        selection.coffe1.value === ''
          ? '_____'
          : selection.coffe1.value === 'Capsule'
          ? ''
          : `groundala ${selection.coffe4.value}`
      }</strong> , sent to me <strong>${
        selection.coffe5.value === '' ? '_____' : selection.coffe5.value
      }</strong>.”</span>`,
    [selection]
  );

  return {
    selection,
    setSelection,
    sectionDisable,
    textMessage: { __html: textMessage },
  };
};
