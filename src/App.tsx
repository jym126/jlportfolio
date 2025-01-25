import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <div className="app">
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
    </div>
  );
};

export default App;
