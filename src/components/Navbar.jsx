import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/Boldsites blue and black.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + texto */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Boldsites Logo" />
          <span className="logo-text">Boldsites</span>
        </Link>

        {/* Toggle para móvil */}
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">☰</label>

        {/* Links */}
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/portafolio">Portafolio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}
