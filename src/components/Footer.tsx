
const Footer: React.FC = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;