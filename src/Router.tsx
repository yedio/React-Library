import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main/Main';
import Accordion from './pages/Accordion/Accordion';
import ReduxTest from './pages/ReduxTest/ReduxTest';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/reduxtest" element={<ReduxTest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
