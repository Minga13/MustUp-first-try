import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Partnership from './pages/Partnership';
import Privacy from './pages/Privacy';
import Offer from './pages/Offer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200 font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/offer" element={<Offer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;