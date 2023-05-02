import { useState } from 'react';

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

  return {
    selection,
    setSelection,
  };
};
