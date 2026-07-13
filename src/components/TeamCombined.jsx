import Icon from './Icon';

/**
 * "Quién te acompaña" sin foto grande: las dos co-directoras destacadas
 * en formato vertical (foto + nombre + rol + empresa resaltada), y el
 * resto del equipo docente más pequeño debajo.
 */
const DIRECTORS = [
  {
    initials: 'LG',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Frame-2233.png',
    name: 'Laura González',
    title: 'Co-directora',
    role: 'Design Researcher',
    company: 'BBVA',
    linkedin: 'https://www.linkedin.com/in/laura-gonz%C3%A1lez-d%C3%ADaz-67918283/',
  },
  {
    initials: 'PJ',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Frame-2234.png',
    name: 'Paula Jarque',
    title: 'Co-directora',
    role: 'Product Designer',
    company: 'My Fitbro',
    linkedin: 'https://www.linkedin.com/in/paulajarque-designer/',
  },
];

const TEAM = [
  {
    initials: 'EM',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Elisabeth-Martinez.png',
    name: 'Elisabeth Martínez',
    role: 'Senior Product Designer',
    company: 'Adevinta',
    linkedin: 'https://www.linkedin.com/in/elisabeth-mh/',
  },
  {
    initials: 'KS',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Katerina-Spranger.png',
    name: 'Katerina Spranger',
    role: 'CEO',
    company: 'Oxford Heartbeat',
    linkedin: 'https://www.linkedin.com/in/katerina-spranger-phd-54257267/',
  },
  {
    initials: 'JL',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Jordi-Lloret.png',
    name: 'Jordi Lloret',
    role: 'Product Design Lead',
    company: 'SCRM Lidl',
    linkedin: 'https://www.linkedin.com/in/jordilloret/',
  },
  {
    initials: 'OS',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Oriol-Santacruz.png',
    name: 'Oriol Santacruz',
    role: 'Digital Product Manager',
    company: 'Massimo Dutti',
    linkedin: 'https://www.linkedin.com/in/oriol-santacruz/',
  },
];

export default function TeamCombined() {
  return (
    <section className="sec sec-team" style={{ background: '#fff' }}>
      <div className="wrap">
        <div className="team-top">
          <div className="team-intro">
            <div className="eyebrow">
              <Icon name="people" /> Quién te acompaña
            </div>
            <h2>
              Aprendes con <span className="accent">profesionales en activo</span> que diseñan
              producto cada día
            </h2>
            <p>
              El máster lo dirigen <strong>Laura González</strong> (<span className="company">BBVA</span>) y{' '}
              <strong>Paula Jarque</strong> (<span className="company">My Fitbro</span>), con un
              claustro que trabaja hoy mismo en <span className="company">Adevinta</span>,{' '}
              <span className="company">SCRM Lidl</span>,{' '}
              <span className="company">Oxford Heartbeat</span> o{' '}
              <span className="company">Massimo Dutti</span> — aprendes cómo se diseña producto de
              verdad, no solo teoría.
            </p>
          </div>

          <div className="directors reveal-stagger">
            {DIRECTORS.map((d) => (
              <a
                className="director-card"
                href={d.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                key={d.name}
              >
                <span className="director-card__ava" data-i={d.initials}>
                  <img src={d.img} alt={d.name} onError={(e) => e.currentTarget.remove()} />
                </span>
                <div>
                  <h3>{d.name}</h3>
                  <span className="director-title">{d.title}</span>
                  <p>
                    {d.role} en <span className="company">{d.company}</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="team-combined">
          <span className="team-combined__label">Resto del equipo docente</span>
          <div className="team-small reveal-stagger">
            {TEAM.map((t) => (
              <a
                className="tm-small"
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                key={t.name}
              >
                <span className="ava-small" data-i={t.initials}>
                  <img src={t.img} alt={t.name} onError={(e) => e.currentTarget.remove()} />
                </span>
                <div>
                  <h4>{t.name}</h4>
                  <span>
                    {t.role} · <span className="company">{t.company}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}