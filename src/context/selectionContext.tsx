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
}

export const SelectionContext = createContext<SelectionContextType>({
  sectionDisable: false,
  selection: {},
  setSelection: () => {},
  textMessage: { __html: '' },
  coffeSectionsArray: () => {},
});
export const SelectionContextProvider = ({ children }: any) => {
  const { sectionDisable, selection, setSelection, textMessage } =
    useSelection();

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
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
