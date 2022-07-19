import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main/Main';
import Accordion from './pages/Accordion/Accordion';
import Cookie from './pages/Cookie/Cookie';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
