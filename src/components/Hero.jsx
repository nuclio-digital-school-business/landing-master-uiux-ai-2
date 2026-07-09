import ContactFormCard from './ContactFormCard';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="kicker">Acreditado por EUNEIZ (30 ECTS)</span>
            <h1>
              Máster en
              <br />
              UXUI &amp; <span className="accent">AI Design</span>
            </h1>
            <p className="lead">
              Aprende diseño UX/UI e IA con proyectos reales, un equipo docente en activo y la
              IA integrada en todo el proceso. Sin necesidad de programar.
            </p>
            <div className="meta reveal">
              <span className="full">
                Próximas convocatorias:
                <br />
                Online: <b>Septiembre 2026</b>
                <br />
                Barcelona: <b>Octubre 2026</b>
              </span>
              <span>
                Duración: <b>25 semanas</b>
              </span>
              <span>
                Modalidad: <b>Online y presencial</b>
              </span>
              <span>
                Bonificación: <b>Fundae</b>
              </span>
              <span>
                Acceso al <b>campus vitalicio</b>
              </span>
            </div>
          </div>
          <ContactFormCard targetId="hs-form-hero" />
        </div>
      </div>
    </section>
  );
}