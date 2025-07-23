import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Boldsites – Todos los derechos reservados</p>
        <p>San José, Costa Rica</p>
      </div>
    </footer>
  );
}
