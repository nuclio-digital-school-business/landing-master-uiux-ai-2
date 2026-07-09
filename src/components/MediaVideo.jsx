export default function MediaVideo() {
  return (
    <section className="media">
      <video className="media-bg" autoPlay muted loop playsInline>
        <source
          src="https://nuclio.school/wp-content/uploads/2026/05/outputcompress-video-online.com_.mp4"
          type="video/mp4"
        />
      </video>
      <div className="media-ov" />
      <div className="wrap">
        <h2 className="media-title reveal">
          Formación 100% orientada al mercado. Aprende a trabajar en{' '}
          <span className="accent">equipos de producto reales</span>, comunicándote con
          desarrollo y tomando decisiones con stakeholders.
        </h2>
      </div>
    </section>
  );
}