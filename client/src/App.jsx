import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpdatesBar from './components/UpdatesBar';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import Notices from './components/Notices';
import ServicePlaceholder from './components/ServicePlaceholder';
import './index.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <UpdatesBar />
      <Services />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
};

function App() {
  return (
    <>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/services/:serviceType" element={<ServicePlaceholder />} />
      </Routes>
    </>
  );
}

export default App;
