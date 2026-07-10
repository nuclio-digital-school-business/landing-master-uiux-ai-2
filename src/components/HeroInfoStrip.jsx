/**
 * Combina en un solo bloque compacto:
 *  - Los datos de convocatoria (antes en la caja vertical .meta del Hero)
 *  - La frase que antes vivía en Intro.jsx
 *
 * Sustituye visualmente a ambos sin borrar los componentes originales
 * (Hero.jsx e Intro.jsx se quedan en el proyecto, simplemente dejan de
 * usarse en favor de este).
 */
export default function HeroInfoStrip() {
  return (
    <div className="info-strip reveal">
      <div className="info-strip__row">
        <span className="info-pill">
          Online: <b>Septiembre 2026</b>
        </span>
        <span className="info-pill">
          Barcelona: <b>Octubre 2026</b>
        </span>
        <span className="info-pill">
          Duración: <b>25 semanas</b>
        </span>
        <span className="info-pill">
          Modalidad: <b>Online y presencial</b>
        </span>
        <span className="info-pill">
          Bonificación: <b>Fundae</b>
        </span>
        <span className="info-pill">
          Campus <b>vitalicio</b>
        </span>
      </div>
      <p className="info-strip__phrase">
        Aprende diseño UX/UI e IA con proyectos reales, un equipo docente en activo y la IA
        integrada en todo el proceso. Sin necesidad de programar.
      </p>
    </div>
  );
}