document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  // Initial state for mobile
  if (window.innerWidth <= 768) {
    navLinks.setAttribute('aria-hidden', 'true');
  }

  function toggleMenu(forceClose = false) {
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    const shouldOpen = forceClose ? false : !isExpanded;

    navLinks.classList.toggle('mobile-active', shouldOpen);
    body.classList.toggle('menu-open', shouldOpen);
    mobileToggle.setAttribute('aria-expanded', shouldOpen);
    navLinks.setAttribute('aria-hidden', !shouldOpen);

    // Update icon
    mobileToggle.innerHTML = shouldOpen
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';

    lucide.createIcons();
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMenu());
  }

  // Close menu when clicking a link
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('mobile-active')) {
        toggleMenu(true);
      }
    });
  });

  // Handle resize to clean up attributes if switching to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.removeAttribute('aria-hidden');
      mobileToggle.setAttribute('aria-expanded', 'false');
      body.classList.remove('menu-open');
      navLinks.classList.remove('mobile-active');
      mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
      lucide.createIcons();
    } else if (!navLinks.classList.contains('mobile-active')) {
      navLinks.setAttribute('aria-hidden', 'true');
    }
  });
});
