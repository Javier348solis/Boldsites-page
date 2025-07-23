import React from 'react';
import '/src/styles/paginaprincipal.css';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function PaginaPrincipal() {
  return (
    <div className="pagina-principal">
      <Hero />

      {/* Sección Bienvenida */}
      <header className="header">
        <div className="container">
          <h1>Bienvenidos a Boldsites</h1>
          <p>Transformamos ideas en sitios web impactantes.</p>
        </div>
      </header>

      {/* Servicios */}
      <section className="servicios">
        <div className="container">
          <h2>Servicios</h2>
          <ul>
            <li>Diseño de páginas web</li>
            <li>Optimización SEO</li>
            <li>Desarrollo responsivo</li>
            <li>Asesoría y soporte técnico</li>
          </ul>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="nosotros">
        <div className="container">
          <h2>Sobre nosotros</h2>
          <div className="fundadores">
            <div className="persona">
              <img src="../src/assets/photo_Javier_white.jpg" alt="Javier" />
              <p>Javier Solís<br />Desarrollador Full-Stack web</p>
            </div>
            <div className="persona">
              <img src="../src/assets/photo_naomy.jpg" alt="Naomy" />
              <p>Naomy Sandi<br />Desarrollador Full-Stack web</p>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    </div>
  );
}

export default PaginaPrincipal;
