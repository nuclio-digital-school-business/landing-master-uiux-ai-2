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