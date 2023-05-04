import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { Footer } from '../components/footer/Footer';
import { Modal } from '../components/modal/Modal';

export const App = () => {
  return (
    <main className="main">
      <Modal/>
      <Header />
      <Outlet />
      <Footer/>
    </main>
  );
};
