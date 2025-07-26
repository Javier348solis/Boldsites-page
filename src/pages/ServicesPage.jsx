import '../styles/Services.css';

export default function ServicesSection() {
  const services = [
    {
      title: "Creación de Páginas Web",
      description:
        "Diseñamos y desarrollamos sitios modernos, rápidos y adaptados a tus necesidades, desde landing pages hasta tiendas en línea. Tu negocio tendrá presencia profesional en internet.",
    },
    {
      title: "Optimización SEO",
      description:
        "Mejoramos tu visibilidad en Google y otros buscadores para atraer más clientes. Implementamos estrategias que te ayuden a destacar frente a la competencia.",
    },
    {
      title: "Asesoría en Presencia Digital",
      description:
        "Te guiamos para construir una marca sólida en internet. Analizamos tu negocio, te damos recomendaciones y te ayudamos a tomar decisiones para crecer en línea.",
    },
    {
      title: "Mantenimiento y Soporte Web",
      description:
        "Nos encargamos de que tu sitio siempre esté actualizado, seguro y funcionando sin problemas. Resolvemos errores y añadimos mejoras cuando las necesites.",
    },
    {
      title: "Integraciones y Automatización",
      description:
        "Conectamos tu página con herramientas externas: pagos en línea, formularios, redes sociales y más, para que tu negocio funcione de manera más eficiente.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
