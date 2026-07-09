import { useFormModal } from '../context/FormModalContext';

const ITEMS = [
  'Quieres entrar en UX/UI y diseño de producto, pero no tienes un portfolio que enseñar.',
  'Vienes de diseño gráfico, marketing, comunicación o negocio y quieres reconvertirte a UX/UI.',
  'Te preocupa competir como perfil junior sin experiencia real.',
  'Usas alguna herramienta de IA, pero no sabes integrarla de verdad en tu proceso de diseño.',
  'No sabes cómo se trabaja dentro de un equipo de producto: priorizar, hablar con desarrollo o preparar un handoff.',
  'Necesitas formarte sin dejar tu trabajo y salir con algo demostrable.',
];

export default function Suena() {
  const { openModal } = useFormModal();

  return (
    <section className="sec suena">
      <div className="wrap">
        <h2>¿Es este máster <span className="accent">para ti</span>?</h2>
        <div className="suena-list reveal-stagger">
          {ITEMS.map((text) => (
            <div className="suena-item" key={text}>
              {text}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <button type="button" className="btn btn-yellow" onClick={openModal}>
            Quiero dar el siguiente paso
          </button>
        </div>
      </div>
    </section>
  );
}