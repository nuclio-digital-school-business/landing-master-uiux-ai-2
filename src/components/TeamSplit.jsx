import Split from './Split';

export default function TeamSplit() {
  return (
    <section className="sec" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <Split imageUrl="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1100">
          <div className="eyebrow">
            Quién te acompaña
          </div>
          <h2>Aprendes con <span className="accent">profesionales en activo</span> que diseñan producto cada día</h2>
          <p>
            El máster lo dirigen <strong>Laura González</strong>, Manager Design Researcher en
            BBVA, y <strong>Paula Jarque</strong>, product designer y co-fundadora de My Fitbro.
            Detrás hay un claustro de profesionales en activo en empresas como Adevinta, SCRM
            Lidl o Massimo Dutti.
          </p>
          <p>
            No aprendes solo a diseñar pantallas: aprendes cómo se trabaja hoy en un equipo de
            producto, a priorizar, comunicarte con desarrollo, documentar decisiones y apoyarte
            en la IA y en los datos.
          </p>
          <div className="who">
            <div className="av">
              <span
                className="avatar"
                style={{
                  backgroundImage:
                    "url('https://nuclio.school/wp-content/uploads/2026/02/Frame-2233.png')",
                }}
              />
              <span
                className="avatar"
                style={{
                  backgroundImage:
                    "url('https://nuclio.school/wp-content/uploads/2026/02/Frame-2234.png')",
                }}
              />
            </div>
            <span>Laura y Paula, co-directoras del máster</span>
          </div>
        </Split>
      </div>
    </section>
  );
}