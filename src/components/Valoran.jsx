import Icon from './Icon';

const CARDS = [
  {
    tag: 'Metodología',
    title: 'Aprendes haciendo',
    text: 'Práctica desde la primera semana, con proyectos que suman directamente a tu portfolio. El proyecto final es su punto fuerte favorito.',
  },
  {
    tag: 'Docentes',
    title: 'Profes en activo',
    text: 'Profesores implicados y con nivel real: profesionales en activo que enseñan lo que aplican cada día.',
  },
  {
    tag: 'Contenido',
    title: 'Alineado con el mercado',
    text: 'Enfocado y actualizado, alineado con lo que pide el mercado y con bases sólidas para seguir creciendo por tu cuenta.',
  },
];

export default function Valoran() {
  return (
    <section className="sec valoran">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">
            <Icon name="quote" /> Lo que cuentan quienes ya lo hicieron
          </div>
          <h2>Lo que más <span className="accent">destacan</span> nuestros alumnos</h2>
        </div>
        <div className="val-grid">
          {CARDS.map((c) => (
            <div className="val-card" key={c.title}>
              <span className="val-tag">{c.tag}</span>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <p className="note">Basado en las valoraciones de estudiantes de ediciones anteriores.</p>
      </div>
    </section>
  );
}