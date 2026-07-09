const TEAM = [
  {
    initials: 'LG',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Frame-2233.png',
    name: 'Laura González',
    role: 'Co-directora · Design Researcher en BBVA',
  },
  {
    initials: 'PJ',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Frame-2234.png',
    name: 'Paula Jarque',
    role: 'Co-directora · Product Designer',
  },
  {
    initials: 'EM',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Elisabeth-Martinez.png',
    name: 'Elisabeth Martínez',
    role: 'Senior Product Designer en Adevinta',
  },
  {
    initials: 'JL',
    img: 'https://nuclio.school/wp-content/uploads/2026/02/Jordi-Lloret.png',
    name: 'Jordi Lloret',
    role: 'Product Design Lead en SCRM Lidl',
  },
];

export default function Docentes() {
  return (
    <section className="sec docentes">
      <div className="wrap">
        <h2>Parte del <span className="accent">equipo docente</span></h2>
        <p className="subt">
          Profesionales en activo que integran la IA en proyectos reales de diseño y producto.
        </p>
        <div className="team reveal-stagger">
          {TEAM.map((t) => (
            <div className="tm" key={t.name}>
              <span className="ava" data-i={t.initials}>
                <img src={t.img} alt={t.name} onError={(e) => e.currentTarget.remove()} />
              </span>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}