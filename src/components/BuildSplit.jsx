import Split from './Split';

export default function BuildSplit() {
  return (
    <section className="sec sec-white" style={{ background: '#fff' }}>
      <div className="wrap">
        <Split
          imageFirst
          imageUrl="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1100"
        >
          <div className="eyebrow">
            Lo que te llevas
          </div>
          <h2>Construye un <span className="accent">portfolio completo</span> para dar el salto</h2>
          <p>
            Durante el máster desarrollas un <strong>Core Project</strong> transversal: diseñas
            un producto digital completo, lo prototipas en alta fidelidad, lo testeas con
            usuarios reales y lo presentas en la <strong>Demo Day</strong>.
          </p>
          <p>
            A eso se suman <strong>6 UX/UI Design Labs</strong> 100% prácticos, donde cada sesión
            se convierte en una pieza concreta. Al acabar no tienes "un proyecto": tienes un caso
            de estudio completo y seis entregables listos para defender en entrevistas.
          </p>
        </Split>
      </div>
    </section>
  );
}