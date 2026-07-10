import ContactFormCard from './ContactFormCard';

export default function Signup() {
  return (
    <section className="sec signup" id="solicita">
      <div className="wrap">
        <div className="signup-grid">
          <div className="reveal">
            <h2><span className="accent">¿Hablamos?</span></h2>
            <p>
              Déjanos tus datos y un asesor se pondrá en contacto contigo para resolver tus dudas
              y acompañarte durante todo el proceso. Sin compromiso.
            </p>
            <div className="mini">
              <div>
                <div className="k">Próxima edición</div>
                <div className="v">Oct 2026 (BCN) · Sep 2026 (Online)</div>
              </div>
              <div>
                <div className="k">Duración</div>
                <div className="v">25 semanas</div>
              </div>
              <div>
                <div className="k">Modalidad</div>
                <div className="v">Online y presencial</div>
              </div>
            </div>
          </div>
          <ContactFormCard
            targetId="hs-form-signup"
            subtitle="Te contamos precio, becas y próximas fechas."
          />
        </div>
      </div>
    </section>
  );
}