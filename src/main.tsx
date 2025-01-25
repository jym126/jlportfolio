import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
      <div className="content">
        <Routes>
          <Route path="/jlportfolio/jlportfolio" element={<Home />} />
          <Route path="/jlportfolio/about" element={<About />} />
          <Route path="/jlportfolio/projects" element={<Projects />} />
          <Route path="/jlportfolio/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
