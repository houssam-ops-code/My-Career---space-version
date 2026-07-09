import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <NavLink to="/" className="footer-brand">Houssam.dev ⭐</NavLink>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Houssam BENRBIB. Tous droits r&eacute;serv&eacute;s.
        </div>
        <nav className="footer-nav">
          <NavLink to="/" className="footer-link">
            Accueil
          </NavLink>
          <NavLink to="/skills" className="footer-link">
            Skills
          </NavLink>
          <NavLink to="/about" className="footer-link">
            About
          </NavLink>
          <NavLink to="/contact" className="footer-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
