import { createContext } from 'react';
import { useSelection } from '../hooks/useSelection';

export const SelectionContext = createContext({});

export const SelectionContextProvider = ({ children }: any) => {
  const { sectionDisable, selection, setSelection, textMessage } =
    useSelection();
  return (
    <SelectionContext.Provider
      value={{
        sectionDisable,
        selection,
        setSelection,
        textMessage,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
