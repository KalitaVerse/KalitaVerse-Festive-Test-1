function playSound(name) {
  new Audio(`assets/sounds/${name}.mp3`).play();
}

function diwaliMode() {
  playSound("sparkle");
  document.body.classList.add("diwali-glow");
}

function holiMode() {
  playSound("pop");
  for (let i = 0; i < 20; i++) {
    const splash = document.createElement("div");
    splash.className = "holi-splash";
    splash.style.left = Math.random() * 100 + "vw";
    splash.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(splash);
    setTimeout(() => splash.remove(), 1000);
  }
}

function navratriMode() {
  playSound("pop");
  document.body.classList.add("navratri-shake");
  setTimeout(() => {
    document.body.classList.remove("navratri-shake");
  }, 800);
}

function eidMode() {
  playSound("sparkle");
  document.body.style.boxShadow = "inset 0 0 80px rgba(0,255,180,0.4)";
  setTimeout(() => {
    document.body.style.boxShadow = "";
  }, 1500);
}
