import { useEffect } from 'react';

/**
 * Observa todos los elementos con la clase `.reveal` presentes en el DOM
 * y les añade `.is-visible` en cuanto entran en el viewport, disparando
 * la animación de fade-in-up definida en index.css.
 *
 * Incluye una red de seguridad: si por cualquier motivo el navegador no
 * llega a disparar el IntersectionObserver a tiempo (herramientas de
 * captura de pantalla, navegadores antiguos, etc.), el contenido se
 * revela igualmente pasado un segundo para que nunca quede invisible.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!elements.length) return;

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );
      elements.forEach((el) => observer.observe(el));
    } else {
      // Sin soporte de IntersectionObserver: revela directamente
      elements.forEach((el) => el.classList.add('is-visible'));
    }

    // Red de seguridad: garantiza que nada quede invisible para siempre
    const fallback = setTimeout(() => {
      elements.forEach((el) => el.classList.add('is-visible'));
    }, 1200);

    return () => {
      if (observer) observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);
}