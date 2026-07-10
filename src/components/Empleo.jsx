import Icon from './Icon';

const PERFILES = ['UX Researcher', 'UX/UI Designer', 'Product Designer', 'Design Consultant', 'UX Strategist'];

export default function Empleo() {
  return (
    <section className="sec empleo">
      <div className="wrap">
        <div className="empleo-txt reveal">
          <div className="eyebrow" style={{ color: 'var(--yellow)' }}>
            <Icon name="rocket" /> Después del máster
          </div>
          <h2>Al terminar, <span className="accent">seguimos contigo</span></h2>
          <p>
            Con el servicio <strong>Career &amp; Talent</strong> trabajamos tu CV, tu portfolio y
            tu LinkedIn, te preparamos para la búsqueda de empleo y te damos acceso a nuestra
            bolsa y a las empresas del ecosistema. Cada año celebramos el{' '}
            <strong>Hiring Day</strong>, donde tienes entrevistas el mismo día con partners del
            sector.
          </p>
          <p style={{ marginTop: 18, fontWeight: 600, color: '#fff' }}>
            Perfiles a los que te prepara este máster:
          </p>
          <div className="chips reveal-stagger">
            {PERFILES.map((p) => (
              <span className="chip" key={p}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}