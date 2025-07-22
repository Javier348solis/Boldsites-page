import Hero from "../components/Hero";
import photoJavier from "../assets/photo_Javier_white.jpg";
import photoNaomy from "../assets/photo_naomy.jpg";
import "/src/styles/paginaprincipal.css";

function PaginaPrincipal() {
  return (
    <div className="pagina-principal">
      <Hero />

      <header className="header">
        <h1>Bienvenidos a Boldsites</h1>
        <p>Transformamos ideas en sitios web impactantes.</p>
      </header>

      <section className="servicios">
        <h2>Servicios</h2>
        <ul>
          <li>Diseño de páginas web</li>
          <li>Optimización SEO</li>
          <li>Desarrollo responsivo</li>
          <li>Asesoría y soporte técnico</li>
        </ul>
      </section>

      <section className="nosotros">
        <h2>Sobre nosotros</h2>
        <div className="fundadores">
          <div className="persona">
            <img src={photoJavier} alt="Javier Solís" />
            <p>
              Javier Solís
              <br />
              Desarrollador Full-Stack web
            </p>
          </div>
          <div className="persona">
            <img src={photoNaomy} alt="Naomy Sandi" />
            <p>
              Naomy Sandi
              <br />
              Desarrollador Full-Stack web
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaginaPrincipal;
