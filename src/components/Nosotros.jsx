import '../styles/Nosotros.css';

export default function AboutPage() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>Sobre Nosotros</h2>
        <p className="about-intro">
          En <strong>Boldsites</strong> transformamos ideas en sitios web modernos y funcionales.
          Somos un equipo de desarrolladores apasionados por crear experiencias digitales
          que ayuden a nuestros clientes a crecer en línea.
        </p>

        <div className="team-grid">
          <div className="team-member">
            <img src="/src/assets/photo_Javier_white.jpg" alt="Javier Solís" />
            <h3>Javier Solís</h3>
            <p>Desarrollador Full-Stack web con enfoque en interfaces modernas y optimización.</p>
          </div>

          <div className="team-member">
            <img src="/src/assets/photo_naomy.jpg" alt="Naomy Sandi" />
            <h3>Naomy Sandi</h3>
            <p>Desarrolladora Full-Stack especializada en diseño responsive y experiencia de usuario.</p>
          </div>
        </div>
      </div>
    </section>
  );
}