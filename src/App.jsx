import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NovoVideo from './pages/NovoVideo';
import Header from './components/Header';
import Footer from './components/Footer'; // Importar Footer

const App = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 140px)', paddingBottom: '140px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo-video" element={<NovoVideo />} />
        </Routes>
      </main>
      <Footer /> {/* Adicionar Footer */}
    </>
  );
};

export default App;
