import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';

export const App = () => {
  return (
    <main className="main">
      <Header />
      <Outlet />
    </main>
  );
};
