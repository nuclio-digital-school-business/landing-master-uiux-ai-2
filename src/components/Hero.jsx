import ContactFormCard from './ContactFormCard';
import HeroInfoStrip from './HeroInfoStrip';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="kicker load-in load-in-1">Acreditado por EUNEIZ (30 ECTS)</span>
            <h1 className="load-in load-in-2">
              Máster en
              <br />
              UXUI &amp; <span className="accent">AI Design</span>
            </h1>
            <p className="lead lead--big load-in load-in-3">
              Un máster 100% práctico para convertirte en UX/UI Designer{' '}
              <span className="accent">y salir con un portfolio que puedes defender.</span>
            </p>
            <div className="load-in load-in-4">
              <HeroInfoStrip />
            </div>
          </div>

          <div className="hero-partners load-in">
            <span className="lbl">Partners &amp; herramientas:</span>
            <span className="logo-badge">
              <img src="/images/figma.png" alt="Figma" className="logo-img-sm" />
            </span>
            <span className="logo-badge">
              <img src="/images/image-190-1.png" alt="Condens" className="logo-img-sm" />
            </span>
          </div>

          <div className="load-in load-in-5">
            <ContactFormCard targetId="hs-form-hero" />
          </div>
        </div>
      </div>
    </section>
  );
}