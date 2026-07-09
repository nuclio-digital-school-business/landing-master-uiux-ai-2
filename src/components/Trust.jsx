const LOGOS = [
  { src: '/images/VUELING-LOGO.webp', alt: 'Vueling' },
  { src: '/images/TOUS-LOGO.webp', alt: 'TOUS' },
  { src: '/images/SEAT-LOGO-300x82-1.webp', alt: 'SEAT' },
  { src: '/images/NESTLE-LOGO.webp', alt: 'Nestlé' },
  { src: '/images/AMAZON-LOGO.webp', alt: 'Amazon' },
  { src: '/images/GLOVO-LOGO.webp', alt: 'Glovo' },
  { src: '/images/PFIZER-LOGO.webp', alt: 'Pfizer' },
  { src: '/images/NTT-DATA-LOGO.webp', alt: 'NTT Data' },
];

export default function Trust() {
  // Duplicamos la lista para que el bucle del carrusel sea invisible
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section className="sec trust">
      <div className="wrap">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          Dónde trabajan nuestros alumnos
        </div>
        <p className="trust-sub">
          Formación alineada con herramientas líderes del ecosistema digital como Figma o Condens.
        </p>
        <div className="logo-carousel">
          <div className="logo-track">
            {doubled.map((logo, i) => (
              <span className="logo-badge" key={`${logo.alt}-${i}`} aria-hidden={i >= LOGOS.length}>
                <img src={logo.src} alt={i < LOGOS.length ? logo.alt : ''} className="logo-img" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}