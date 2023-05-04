import { createContext } from 'react';
import { useSelection } from '../hooks/useSelection';
import { SelectionState } from '../utils/types';


interface SelectionContextType {
  sectionDisable: boolean;
  selection: SelectionState;
  setSelection: (state: SelectionState) => void;
  textMessage: { __html: string };
}



export const SelectionContext = createContext<SelectionContextType>({
  sectionDisable: false,
  selection: {},
  setSelection: () => {},
  textMessage: { __html: '' },
});
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
