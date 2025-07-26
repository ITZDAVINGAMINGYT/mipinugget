// Animate product cards on scroll
const products = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('pop-in');
    }
  });
}, {
  threshold: 0.5
});

products.forEach(card => observer.observe(card));

// Hover interaction (extra spice)
products.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});

// Optional: Fake deal countdown
function generateFakeCountdown() {
  const now = new Date();
  const end = new Date(now.getTime() + Math.random() * 3600000); // 0–1 hr

  const h = String(end.getHours()).padStart(2, '0');
  const m = String(end.getMinutes()).padStart(2, '0');
  const s = String(end.getSeconds()).padStart(2, '0');

  return `${h}:${m}:${s}`;
}

document.querySelectorAll('.deal-timer').forEach(el => {
  el.innerText = `🔥 Deal Ends In: ${generateFakeCountdown()}`;
});
