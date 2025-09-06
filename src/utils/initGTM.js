export function initGTM() {
  const gtmId = import.meta.env.VITE_GTM_ID;
  if (!gtmId) {
    console.warn("⚠️ GTM ID is missing in .env");
    return;
  }

  // ---- Add <script> to <head> ----
  const gtmScript = document.createElement("script");
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(gtmScript);

  // Add GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js"
  });

  // ---- Add <noscript> to start of <body> ----
  const noscript = document.createElement("noscript");
  noscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.prepend(noscript);
}
