import { useEffect, useRef } from 'react';

const HS_PORTAL_ID = '5009969';
const HS_FORM_ID = '30035742-033a-4945-90c1-f2d8d9928b72';
const HS_REGION = 'na1';

// CSS que HubSpot inyecta DENTRO del iframe del formulario.
// Es la única vía soportada para estilizar un form embebido en iframe
// (el CSS/JS de la página no puede tocar el interior del iframe por CORS).
const HS_FORM_CSS = `
  body{font-family:'Manrope',-apple-system,Arial,sans-serif;}
  .hs-form-field{margin-bottom:14px;}
  .hs-form-field label{font-size:13.5px;font-weight:600;color:#333;margin-bottom:4px;display:block;}
  input.hs-input:not([type=checkbox]):not([type=radio]),
  select.hs-input,
  textarea.hs-input{width:100%;padding:13px 15px;border:1px solid #d5d5d5;border-radius:9px;font-size:15px;color:#141414;background:#fff;box-sizing:border-box;}
  input.hs-input:not([type=checkbox]):not([type=radio]):focus,
  select.hs-input:focus,
  textarea.hs-input:focus{outline:none;border-color:#FFC630;box-shadow:0 0 0 3px rgba(255,198,48,.25);}
  .hs-button{background:#FFC630;color:#141414;border:0;border-radius:50px;padding:15px 26px;font-weight:700;font-size:16px;cursor:pointer;width:100%;margin-top:4px;}
  .hs-button:hover{background:#ffcf4a;}
  .legal-consent-container, .hs-richtext{font-size:11px;color:#8a8a8a;line-height:1.45;}
  .hs-error-msgs label{color:#e0393e;font-size:12px;font-weight:500;}
  .hs-form-booleancheckbox-display{display:flex;align-items:flex-start;gap:8px;font-size:12px;color:#555;font-weight:400;cursor:pointer;}
  .hs-form-booleancheckbox-display input.hs-input{width:auto;flex:0 0 auto;margin:2px 0 0;}
  .hs-form-booleancheckbox-display span{flex:1;}
`;

let scriptLoadingPromise = null;
function loadHsFormsScript() {
  if (window.hbspt && window.hbspt.forms) return Promise.resolve();
  if (scriptLoadingPromise) return scriptLoadingPromise;
  scriptLoadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
  return scriptLoadingPromise;
}

/**
 * Embebe un formulario real de HubSpot dentro de un contenedor.
 * Oculta automáticamente el `.lead-form` (maqueta de fallback) hermano,
 * si existe, en cuanto el formulario real está listo.
 */
export default function HubspotForm({ targetId, formId = HS_FORM_ID }) {
  const containerRef = useRef(null);
  const createdRef = useRef(false);

  useEffect(() => {
    if (createdRef.current) return;
    createdRef.current = true;

    loadHsFormsScript().then(() => {
      if (!window.hbspt || !containerRef.current) return;
      window.hbspt.forms.create({
        portalId: HS_PORTAL_ID,
        formId,
        region: HS_REGION,
        target: `#${targetId}`,
        css: HS_FORM_CSS,
        onFormReady: () => {
          const el = containerRef.current;
          if (el) {
            const fallback = el.parentElement?.querySelector('.lead-form');
            if (fallback) fallback.style.display = 'none';
          }
        },
      });
    });
  }, [targetId, formId]);

  return <div id={targetId} ref={containerRef} className="hs-form-frame" />;
}