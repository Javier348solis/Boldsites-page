import { Link } from "react-router-dom";
import "/src/styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Boldsites</Link>
      <div className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/portafolio">Portafolio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}
