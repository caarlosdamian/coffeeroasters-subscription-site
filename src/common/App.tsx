import React, { useContext } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { Footer } from '../components/footer/Footer';
import { Modal } from '../components/modal/Modal';
import { ModalContext } from '../context/modalContext';

export const App = () => {
  const { show } = useContext(ModalContext);
  return (
    <main className="main">
      {show && <Modal />}
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
