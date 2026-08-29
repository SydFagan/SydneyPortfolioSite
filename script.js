document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        // if this reveal contains skill bars, trigger their fill
        e.target.querySelectorAll('.level-bar .fill').forEach(fill => {
          const target = fill.getAttribute('data-level');
          if (target) fill.style.width = target + '%';
        });
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Ambient falling leaves (home hero only)
  const heroLeaves = document.getElementById('heroLeaves');
  if (heroLeaves) {
    const leafColors = ['#C1502E', '#D9A441', '#74803D', '#6B2E3D', '#A23F22'];
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      for (let i = 0; i < 14; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'drift leaf';
        const size = 10 + Math.random() * 14;
        leaf.style.width = size + 'px';
        leaf.style.height = size + 'px';
        leaf.style.left = Math.random() * 100 + '%';
        leaf.style.background = leafColors[i % leafColors.length];
        leaf.style.animationDuration = (10 + Math.random() * 12) + 's';
        leaf.style.animationDelay = (Math.random() * -20) + 's';
        heroLeaves.appendChild(leaf);
      }
    }
  }
});
