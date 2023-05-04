import { createContext, useState, useContext } from 'react';

interface ModalContextType {
  handleShow: () => void;
  show: boolean;
}

export const ModalContext = createContext<ModalContextType>({
  handleShow: () => {},
  show: false,
});

export const ModalContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const contextValue: ModalContextType = {
    handleShow,
    show,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
