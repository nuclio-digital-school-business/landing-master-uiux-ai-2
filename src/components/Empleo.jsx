import Split from './Split';

const PERFILES = ['UX Researcher', 'UX/UI Designer', 'Product Designer', 'Design Consultant', 'UX Strategist'];

export default function Empleo() {
  return (
    <section className="sec empleo">
      <div className="wrap">
        <Split
          imageFirst
          imageUrl="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1100"
        >
          <div className="eyebrow" style={{ color: 'var(--yellow)' }}>
            Después del máster
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
          <div className="chips">
            {PERFILES.map((p) => (
              <span className="chip" key={p}>
                {p}
              </span>
            ))}
          </div>
        </Split>
      </div>
    </section>
  );
}