import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { Footer } from '../components/footer/Footer';

export const App = () => {
  return (
    <main className="main">
      <Header />
      <Outlet />
      <Footer/>
    </main>
  );
};
