document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const headlineLetters = gsap.utils.toArray('.headline span');
    const statItems = gsap.utils.toArray('.stat-item');

    gsap.fromTo(
      '.hero-copy',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }
    );

    gsap.fromTo(
      headlineLetters,
      { opacity: 0, y: 44, filter: 'blur(12px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.25,
      }
    );

    gsap.fromTo(
      statItems,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power2.out',
        stagger: 0.12,
        delay: 0.9,
      }
    );

    gsap.fromTo(
      '.hero-visual-wrap',
      { opacity: 0, y: 42, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'expo.out',
        delay: 0.55,
      }
    );

    gsap.to('.hero-copy', {
      y: () => window.innerHeight * 0.08,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

    gsap.to('.hero-visual', {
      y: () => window.innerHeight * 0.18,
      x: () => -window.innerWidth * 0.04,
      rotate: -8,
      scale: 1.12,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

    gsap.fromTo(
      '.content-panel',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.content-panel',
          start: 'top 82%',
        },
      }
    );
  } else {
    document.querySelectorAll('.headline span, .stat-item, .hero-visual-wrap').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
    });
  }
});
