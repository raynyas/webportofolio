// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Efek mengetik pada satu baris hero (satu momen animasi, sesuai brief)
const typeTarget = document.getElementById('typeTarget');
const message = 'membangun sesuatu yang berguna, satu baris kode pada satu waktu.';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeText(el, text, speed = 40) {
  let i = 0;
  function step() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}

if (typeTarget) {
  if (prefersReducedMotion) {
    typeTarget.textContent = message;
  } else {
    typeText(typeTarget, message);
  }
}

// Salin alamat email saat diklik, sebagai tambahan (bukan pengganti) mailto
const emailLink = document.getElementById('emailLink');
if (emailLink) {
  emailLink.addEventListener('click', function (e) {
    const email = emailLink.textContent.trim();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).catch(() => {});
    }
  });
}
