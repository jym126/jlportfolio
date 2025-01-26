import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-dark text-light py-4 px-6 flex justify-between items-center sticky top-0 z-10 shadow-lg">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:text-accent transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-accent transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-accent transition">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-accent transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
