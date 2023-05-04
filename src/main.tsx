import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './common/App';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { SelectionContextProvider } from './context/selectionContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SelectionContextProvider>
      <RouterProvider router={router} />
    </SelectionContextProvider>
  </React.StrictMode>
);
