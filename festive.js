/* =========================
   SOUND HELPER
   ========================= */

function playSound(name) {
  const audio = new Audio(`assets/sounds/${name}.mp3`);
  audio.volume = 0.7;
  audio.play();
}

/* =========================
   MAIN FESTIVAL HANDLER
   ========================= */

function fest(name) {
  // Reset effects
  document.body.className = "";

  playSound("pop");

  switch (name) {

    case "diwali":
      playSound("sparkle");
      document.body.classList.add("diwali-glow");
      break;

    case "holi":
      for (let i = 0; i < 20; i++) {
        const splash = document.createElement("div");
        splash.className = "holi-splash";
        splash.style.left = Math.random() * 100 + "vw";
        splash.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(splash);
        setTimeout(() => splash.remove(), 1000);
      }
      break;

    case "dussehra":
      document.body.style.boxShadow =
        "inset 0 0 80px rgba(255,80,0,0.5)";
      setTimeout(() => {
        document.body.style.boxShadow = "";
      }, 1200);
      break;

    case "navratri":
      document.body.classList.add("navratri-shake");
      setTimeout(() => {
        document.body.classList.remove("navratri-shake");
      }, 900);
      break;

    case "bihu":
      playSound("dhol");
      document.body.classList.add("bihu-dance","bihu-glow");
      break;

    case "kumbh":
      playSound("bell");
      document.body.classList.add("kumbh-glow","kumbh-wave");
      break;

    case "pongal":
      document.body.style.background =
        "linear-gradient(135deg,#f1f8e9,#dcedc8)";
      break;

    case "onam":
      document.body.style.background =
        "linear-gradient(135deg,#1b5e20,#a5d6a7)";
      break;

    case "eid":
      document.body.style.boxShadow =
        "inset 0 0 70px rgba(0,200,150,0.45)";
      break;

    case "christmas":
      playSound("sparkle");
      document.body.classList.add("snow");
      break;
  }
}
