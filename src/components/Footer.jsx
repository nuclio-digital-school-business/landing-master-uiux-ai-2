export default function Footer() {
  return (
    <div className="foot">
      <div className="wrap">
        <div className="logo">
          <img
            className="logo-img"
            src="https://nuclio.school/wp-content/uploads/2026/05/NDS_Negative.webp"
            alt="Nuclio Digital School"
            onError={(e) => e.currentTarget.closest('.logo')?.classList.add('no-img')}
          />
          <span className="logo-text">
            <span className="logo-word">
              nuclio<span className="logo-deg"></span>
            </span>
            <span className="logo-sub">digital school</span>
          </span>
        </div>
        <span>Máster en UXUI &amp; AI Design · Acreditado por EUNEIZ (30 ECTS)</span>
      </div>
    </div>
  );
}