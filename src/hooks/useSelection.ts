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
      `I drink my coffee ${
        selection.coffe1.value === ''
          ? '_____'
          : selection.coffe1.value === 'Capsule'
          ? 'using Capsules'
          : selection.coffe1.value === 'Espresso'
          ? 'as Espresso'
          : 'as Filter'
      } , with a ${
        selection.coffe2.value !== '' ? selection.coffe2.value : '_____'
      } type of bean. ${selection.coffe3.value} ${
        selection.coffe1.value === ''
          ? '_____'
          : selection.coffe1.value === 'Capsule'
          ? ''
          : `ground ala ${selection.coffe4.value}`
      } , sent to me ${
        selection.coffe5.value === '' ? '_____' : selection.coffe5.value
      }.`,
    [selection]
  );


  return {
    selection,
    setSelection,
    sectionDisable,
    textMessage
  };
};
