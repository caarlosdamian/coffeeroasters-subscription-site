import { useState } from 'react';

export const useSelection = () => {
  const [selection, setSelection] = useState({
    coffe1: '',
    coffe2: '',
    coffe3: '',
    coffe4: '',
  });
console.log(selection)
  return {
    selection,
    setSelection,
  };
};
