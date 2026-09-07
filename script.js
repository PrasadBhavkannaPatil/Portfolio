// Interactive Ambient Cursor Follower Glow
const glow = document.getElementById('ambientGlow');

window.addEventListener('mousemove', (e) => {
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});

// Intersection Observer for Smooth Scroll Reveal Animations
const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px',
  }
);

document.querySelectorAll('.fade-in').forEach((el) => {
  appearOnScroll.observe(el);
});
