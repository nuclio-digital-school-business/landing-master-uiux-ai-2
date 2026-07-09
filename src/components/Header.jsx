import { useFormModal } from '../context/FormModalContext';

export default function Header() {
  const { openModal } = useFormModal();

  return (
    <header className="topbar">
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
        <button type="button" className="btn btn-yellow" onClick={openModal}>
          Solicita información
        </button>
      </div>
    </header>
  );
}
