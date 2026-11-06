import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/product/:id" element={<Product />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;