import Split from './Split';
import Icon from './Icon';

/**
 * Fusiona en un único bloque:
 *  - La narrativa de "Quién te acompaña" (antes en TeamSplit.jsx)
 *  - La rejilla de fotos del equipo docente (antes en Docentes.jsx)
 *
 * Sustituye visualmente a ambos sin borrarlos (TeamSplit.jsx y
 * Docentes.jsx se conservan en el proyecto, simplemente dejan de
 * usarse en App.jsx en favor de este componente).
 */
const TEAM = [
  {
    initials: 'LG',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Frame-2233.png',
    name: 'Laura González',
    role: 'Co-directora · Design Researcher en BBVA',
    linkedin: 'https://www.linkedin.com/in/laura-gonz%C3%A1lez-d%C3%ADaz-67918283/',
  },
  {
    initials: 'PJ',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Frame-2234.png',
    name: 'Paula Jarque',
    role: 'Co-directora · Product Designer',
    linkedin: 'https://www.linkedin.com/in/paulajarque-designer/',
  },
  {
    initials: 'EM',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Elisabeth-Martinez.png',
    name: 'Elisabeth Martínez',
    role: 'Senior Product Designer en Adevinta',
    linkedin: 'https://www.linkedin.com/in/elisabeth-mh/',
  },
  {
    initials: 'JL',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Jordi-Lloret.png',
    name: 'Jordi Lloret',
    role: 'Product Design Lead en SCRM Lidl',
    linkedin: 'https://www.linkedin.com/in/jordilloret/',
  },
];

export default function TeamCombined() {
  return (
    <section className="sec sec-team" style={{ background: '#fff' }}>
      <div className="wrap">
        <Split imageUrl="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1100">
          <div className="eyebrow">
            <Icon name="people" /> Quién te acompaña
          </div>
          <h2>
            Aprendes con <span className="accent">profesionales en activo</span> que diseñan
            producto cada día
          </h2>
          <p>
            El máster lo dirigen <strong>Laura González</strong> (BBVA) y{' '}
            <strong>Paula Jarque</strong> (My Fitbro), con un claustro que trabaja hoy mismo en
            Adevinta, SCRM Lidl o Massimo Dutti — aprendes cómo se diseña producto de verdad, no
            solo teoría.
          </p>
        </Split>

        <div className="team-combined">
          <span className="team-combined__label">Nuestro equipo docente</span>
          <div className="team reveal-stagger">
            {TEAM.map((t) => (
              <div className="tm" key={t.name}>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${t.name}`}
                >
                  <span className="ava" data-i={t.initials}>
                    <img src={t.img} alt={t.name} onError={(e) => e.currentTarget.remove()} />
                  </span>
                </a>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}