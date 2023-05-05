import { createContext, useMemo } from 'react';
import { useSelection } from '../hooks/useSelection';
import { SelectionState } from '../utils/types';
import { coffeSections } from '../utils/data';

interface SelectionContextType {
  sectionDisable: boolean;
  selection: SelectionState;
  setSelection: (state: SelectionState) => void;
  textMessage: { __html: string };
  coffeSectionsArray: any;
  handleInitstate: any;
}

export const SelectionContext = createContext<SelectionContextType>({
  sectionDisable: false,
  selection: [],
  setSelection: () => {},
  textMessage: { __html: '' },
  coffeSectionsArray: () => {},
  handleInitstate: () => {},
});
export const SelectionContextProvider = ({ children }: any) => {
  const {
    sectionDisable,
    selection,
    setSelection,
    textMessage,
    handleInitstate,
  } = useSelection();

  const coffeSectionsArray = useMemo(
    () => coffeSections(selection),
    [selection]
  );

  return (
    <SelectionContext.Provider
      value={{
        sectionDisable,
        selection,
        setSelection,
        textMessage,
        coffeSectionsArray,
        handleInitstate,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
