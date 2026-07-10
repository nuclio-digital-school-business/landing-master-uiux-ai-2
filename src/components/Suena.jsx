import { useFormModal } from '../context/FormModalContext';
import ImageCarousel from './ImageCarousel';
import Icon from './Icon';

const ITEMS = [
  'Quieres entrar en UX/UI y diseño de producto, pero no tienes un portfolio que enseñar.',
  'Vienes de diseño gráfico, marketing, comunicación o negocio y quieres reconvertirte a UX/UI.',
  'Te preocupa competir como perfil junior sin experiencia real.',
  'Usas alguna herramienta de IA, pero no sabes integrarla de verdad en tu proceso de diseño.',
  'No sabes cómo se trabaja dentro de un equipo de producto: priorizar, hablar con desarrollo o preparar un handoff.',
  'Necesitas formarte sin dejar tu trabajo y salir con algo demostrable.',
];

const IMAGES = [
  '/images/DSC_0661.jpg',
  '/images/IMG_3237.jpg',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

export default function Suena() {
  const { openModal } = useFormModal();

  return (
    <section className="sec suena">
      <div className="wrap">
        <div className="suena-banner">
          <ImageCarousel images={IMAGES} />
          <div className="suena-banner__overlay">
            <h2>¿Es este máster <span className="accent">para ti</span>?</h2>
          </div>
        </div>

        <div className="suena-grid reveal-stagger">
          {ITEMS.map((text) => (
            <div className="suena-check" key={text}>
              <Icon name="check" className="arrowbadge sm suena-check__icon" />
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="cta-center">
          <button type="button" className="btn btn-yellow" onClick={openModal}>
            Quiero dar el siguiente paso
          </button>
        </div>
      </div>
    </section>
  );
}