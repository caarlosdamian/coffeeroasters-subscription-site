import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './common/App';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { SelectionContextProvider } from './context/selectionContext';
import { ModalContextProvider } from './context/modalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalContextProvider>
      <SelectionContextProvider>
        <RouterProvider router={router} />
      </SelectionContextProvider>
    </ModalContextProvider>
  </React.StrictMode>
);
