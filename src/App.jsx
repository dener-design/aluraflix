import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NovoVideo from './pages/NovoVideo';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo-video" element={<NovoVideo />} />
      </Routes>
    </>
  );
};

export default App;
