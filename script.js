const fullLetter = `happy birthday YASMINE AURA MARYAM 💙

you make every moment brighter just by being you.

i’m really grateful to know you.

wishing you joy, laughter, and soft moments today.

don’t overthink things that don’t matter too much.

i hope you always stay healthy and happy.

you mean everything or something to everyone around you.

— marcel


avatar
    biruu`;

// =====================
// PAGE CONTROL
// =====================
function goToPage(page) {
  document.querySelector('.card').classList.add('hidden');

  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  const next = document.getElementById('page' + page);
  if (!next) return;

  next.classList.add('active');

  // =====================
  // TEXT ANIMATION
  // =====================
  if (page === 3) {
    const el = document.getElementById("letterText");

    if (el) {
      setTimeout(() => {
        typeText(fullLetter, el, 25);
      }, 400);
    }

    startFallingSymbols();
  }
}

// =====================
// TYPEWRITER EFFECT
// =====================
function typeText(text, element, speed) {
  element.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// =====================
// EMOJI FALL EFFECT
// =====================
function startFallingSymbols() {
  setInterval(() => {
    const el = document.createElement("div");
    el.classList.add("falling");

    const emojis = ["💜", "💛", "✨", "🎉", "🥳", "🎯"];
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = (3 + Math.random() * 2) + "s";

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 6000);
  }, 300);
}

// =====================
// MUSIC CONTROL
// =====================
window.onload = function () {
  const playBtn = document.getElementById("playMusicBtn");
  const music = document.getElementById("bg-music");

  if (playBtn && music) {
    playBtn.addEventListener("click", () => {
      music.play();
      playBtn.style.display = "none";
    });
  }
};