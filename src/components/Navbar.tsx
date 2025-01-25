import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">My Portfolio</h1>
      <ul className="nav-links">
        <li><Link to="/jlportfolio/jlportfolio">Home</Link></li>
        <li><Link to="/jlportfolio/about">About</Link></li>
        <li><Link to="/jlportfolio/projects">Projects</Link></li>
        <li><Link to="/jlportfolio/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
