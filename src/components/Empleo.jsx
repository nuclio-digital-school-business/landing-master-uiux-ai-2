import Icon from './Icon';

const PERFILES = ['UX Researcher', 'UX/UI Designer', 'Product Designer', 'Design Consultant', 'UX Strategist'];

const SERVICIOS = [
  {
    img: '/images/Rectangle-4673-1.png',
    title: 'Career & Talent',
    text: 'Acompañamiento integral orientado a maximizar la empleabilidad de nuestros estudiantes. Incluye recursos y formación en habilidades clave, herramientas y estrategias para la búsqueda de empleo, desarrollo de marca personal (CV, portfolio y LinkedIn), acceso a oportunidades profesionales y conexión con el ecosistema empresarial y emprendedor. Diseñado para impulsar una transición efectiva al mercado laboral.',
  },
  {
    img: '/images/IMG_9989.png',
    title: 'Hiring Day',
    text: 'Evento anual de empleabilidad organizado por la escuela, donde los estudiantes conectan directamente con empresas, conocen vacantes activas y pueden realizar entrevistas en el mismo día mediante el formato de speed dating. Participan partners como Desigual, Amphora, VML, CaixaBank, NTT Data, Jellyfish, Apiux, InPost, Garaje de Ideas, entre otros.',
  },
];

export default function Empleo() {
  return (
    <section className="sec empleo">
      <div className="wrap">
        <div className="empleo-txt reveal">
          <div className="eyebrow" style={{ color: 'var(--yellow)' }}>
            <Icon name="rocket" /> Después del máster
          </div>
          <h2>Al terminar, <span className="accent">seguimos contigo</span></h2>
          <p>Nuestro compromiso no acaba en la última sesión: seguimos contigo hasta que consigas ese primer paso profesional.</p>
        </div>

        <div className="servicios reveal-stagger">
          {SERVICIOS.map((s) => (
            <div className="servicio-card" key={s.title}>
              <img src={s.img} alt="" className="servicio-card__img" />
              <div className="servicio-card__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="empleo-perfiles-label">Perfiles a los que te prepara este máster:</p>
        <div className="chips reveal-stagger">
          {PERFILES.map((p) => (
            <span className="chip" key={p}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}