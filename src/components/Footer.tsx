const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-gray-900 text-gray-500 text-center py-4">
      <p>© {year} Jose L. Martínez. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
