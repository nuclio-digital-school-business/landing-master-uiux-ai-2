import { useState } from 'react';
import { useFormModal } from '../context/FormModalContext';

const LAB_ARROW =
  'https://nuclio.school/wp-content/uploads/2026/01/Arrow-19.png';

const MODULES = [
  {
    title: 'Módulo 1. Project Management & Tools',
    body: (
      <>
        <p>
          Aprende a <strong>gestionar proyectos de diseño digital</strong> desde sus fundamentos
          hasta la ejecución.
        </p>
        <p>
          En este módulo abordarás las fases del proyecto UX/UI, la priorización de tareas y el
          trabajo en entornos <strong>Agile</strong>, utilizando herramientas de Project
          Management e identificando usos reales de la <strong>IA en el ciclo de vida del
          proyecto</strong>.
        </p>
      </>
    ),
  },
  {
    title: 'Módulo 2. Investigación UX',
    body: (
      <>
        <p>
          Aprende a <strong>investigar las necesidades de usuarios reales</strong> para generar
          insights accionables.
        </p>
        <p>
          Trabajarás técnicas de investigación cualitativas y cuantitativas como entrevistas,
          surveys o desk research, además de métodos de síntesis como{' '}
          <strong>User Persona o Customer Journey</strong>.
        </p>
        <p>
          <img className="nuclio-lab-arrow" src={LAB_ARROW} alt="" />
          <strong>Lab 1: Asistente de IA para Product Designers</strong>
          <br />
          Creación de asistentes de IA personalizados para apoyar el research y el diseño de
          producto.
        </p>
      </>
    ),
  },
  {
    title: 'Módulo 3. Estrategia de producto',
    body: (
      <>
        <p>
          Define una <strong>estrategia de producto</strong> alineada con las necesidades del
          usuario y los objetivos de negocio.
        </p>
        <p>Aprenderás técnicas de ideación, priorización de funcionalidades y definición de propuesta de valor.</p>
        <p>
          <img className="nuclio-lab-arrow" src={LAB_ARROW} alt="" />
          <strong>Lab 2: Sprint exprés: de la propuesta de valor a la priorización</strong>
          <br />
          Sprint práctico para idear, priorizar y prototipar una solución UX con impacto real.
        </p>
      </>
    ),
  },
  {
    title: 'Módulo 4. UX Design',
    body: (
      <>
        <p>
          Diseña experiencias digitales <strong>estructuradas, intuitivas y centradas en las
          personas</strong>.
        </p>
        <p>Trabajarás arquitectura de la información, diseño de flujos de usuario, sesgos cognitivos aplicados al diseño y creación de wireframes.</p>
        <p>
          <img className="nuclio-lab-arrow" src={LAB_ARROW} alt="" />
          <strong>Lab 3: Sesgos cognitivos aplicados &amp; Arquitectura de la información</strong>
          <br />
          Aplicación de sesgos cognitivos y estructura de la información para optimizar la
          experiencia de usuario.
        </p>
        <p>
          <img className="nuclio-lab-arrow" src={LAB_ARROW} alt="" />
          <strong>Lab 4: Wireframes con foco en usabilidad y accesibilidad</strong>
          <br />
          Evaluación y mejora de wireframes aplicando heurísticas de usabilidad y accesibilidad.
        </p>
      </>
    ),
  },
  {
    title: 'Módulo 5. UI Design',
    body: (
      <>
        <p>
          Crea interfaces visuales <strong>coherentes, escalables y alineadas con sistemas de
          diseño</strong>.
        </p>
        <p>Aprenderás design systems, desarrollo de prototipos de alta fidelidad y diseño responsive.</p>
        <p>
          <img className="nuclio-lab-arrow" src={LAB_ARROW} alt="" />
          <strong>Lab 5: Design systems: librerías vs. componentes propios</strong>
          <br />
          Adaptación de librerías y sistemas de diseño para crear interfaces coherentes y
          escalables.
        </p>
        <p>
          <img className="nuclio-lab-arrow" src={LAB_ARROW} alt="" />
          <strong>Lab 6: Prototipado con IA: comparativa y toma de decisiones</strong>
          <br />
          Análisis práctico de herramientas de prototipado con IA para elegir la más adecuada
          según el proyecto.
        </p>
      </>
    ),
  },
  {
    title: 'Módulo 6. UX Research evaluativa',
    body: (
      <>
        <p>
          Valida productos digitales con <strong>usuarios reales</strong> para mejorar la
          experiencia.
        </p>
        <p>Aprenderás a realizar user testing, analizar resultados y utilizar herramientas como heatmaps o análisis asistidos con IA.</p>
      </>
    ),
  },
  {
    title: 'Módulo 7. Analytics & User Experience',
    body: (
      <>
        <p>
          Aprende a <strong>tomar decisiones de diseño basadas en datos</strong>.
        </p>
        <p>Explorarás analítica UX, experimentación A/B e interpretación de datos para mejorar la experiencia de usuario.</p>
      </>
    ),
  },
  {
    title: 'Módulo 8. Presentación del proyecto final',
    body: (
      <>
        <p>
          Aprende a <strong>comunicar tu trabajo de forma clara y profesional</strong>.
        </p>
        <p>
          Trabajarás técnicas de oratoria, elevator pitch, creación de portfolio y presentación
          del proyecto final en el <strong>Demo Day</strong>.
        </p>
      </>
    ),
  },
];

function AccordionItem({ mod, index, isOpen, onToggle }) {
  const triggerId = `trigger-modulo-${index + 1}`;
  const panelId = `modulo-${index + 1}`;

  return (
    <div className="nuclio-accordion__item">
      <button
        className="nuclio-accordion__trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={triggerId}
        onClick={onToggle}
      >
        <span className="nuclio-accordion__title">{mod.title}</span>
        <span className="nuclio-accordion__icon" aria-hidden="true" />
      </button>
      <div
        className={`nuclio-accordion__content${isOpen ? ' is-open' : ''}`}
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
      >
        <div className="nuclio-accordion__content-inner">{mod.body}</div>
      </div>
    </div>
  );
}

export default function Temario() {
  const [openIndex, setOpenIndex] = useState(null);
  const { openModal } = useFormModal();

  return (
    <section className="sec temario">
      <div className="wrap">
        <h2>¿Qué <span className="accent">aprenderás</span>?</h2>
        <p className="subt">
          25 semanas, un pre-work de Figma y 6 labs prácticos repartidos por todo el programa.
          Aprendes haciendo, sin necesidad de programar.
        </p>

        <div className="nuclio-accordion reveal">
          {MODULES.map((mod, i) => (
            <AccordionItem
              key={mod.title}
              mod={mod}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <button type="button" className="btn btn-yellow" onClick={() => openModal('download')}>
            Descárgate el plan de estudios completo
          </button>
        </div>
      </div>
    </section>
  );
}