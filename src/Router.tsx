import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main/Main';
import Accordion from './pages/Accordion/Accordion';
import Cookie from './pages/Cookie/Cookie';
import Xlsx from './pages/Xlsx/Xlsx';
import BcWallet from './pages/BcWallet/BcWallet';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/xlsx" element={<Xlsx />} />
        <Route path="/bcwallet" element={<BcWallet />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
