import Icon from './Icon';

/**
 * Formato de cita: son respuestas reales extraídas de las encuestas de
 * satisfacción de alumnos (no testimoniales con foto, por eso no hay
 * avatar ni nombre — solo la categoría de la encuesta de origen).
 */
const QUOTES = [
  {
    tag: 'Metodología',
    quote: 'Desde la primera semana ya estás haciendo cosas de verdad, no solo apuntando teoría. El proyecto final es lo mejor que me llevo.',
  },
  {
    tag: 'Docentes',
    quote: 'Los profesores trabajan en esto de verdad, no solo lo explican. Se nota en cómo dan las clases.',
  },
  {
    tag: 'Contenido',
    quote: 'Me ha servido para poner al día lo que sabía, con contenido que va con lo que se pide ahora mismo en el mercado.',
  },
];

export default function Valoran() {
  return (
    <section className="sec valoran">
      <div className="wrap">
        <div className="head reveal">
          <div className="eyebrow">
            <Icon name="quote" /> Lo que cuentan quienes ya lo hicieron
          </div>
          <h2>Lo que más <span className="accent">destacan</span> nuestros alumnos</h2>
        </div>

        <div className="quote-grid reveal-stagger">
          {QUOTES.map((q) => (
            <div className="quote-card" key={q.tag}>
              <svg className="quote-card__mark" viewBox="0 0 60 48" aria-hidden="true">
                <path
                  d="M0 48V29.5C0 12.9 9.6 2.3 24 0l2.6 6.8C17.4 9.6 12.3 15.6 11.6 24h13.2v24H0Zm34.2 0V29.5C34.2 12.9 43.8 2.3 58.2 0l2.6 6.8c-9.2 2.8-14.3 8.8-15 17.2h13.2v24H34.2Z"
                  fill="currentColor"
                />
              </svg>
              <p className="quote-card__text">“{q.quote}”</p>
              <span className="quote-card__tag">{q.tag}</span>
            </div>
          ))}
        </div>

        <p className="note">Basado en las valoraciones de estudiantes de ediciones anteriores.</p>

        <p className="valoran-closing reveal">
          Construye un <span className="accent">portfolio completo</span> para dar el salto.
        </p>
      </div>
    </section>
  );
}