document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
      body.classList.toggle('menu-open');
      
      // Update icon
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('mobile-active')) {
        icon.setAttribute('data-lucide', 'x');
      } else {
        icon.setAttribute('data-lucide', 'menu');
      }
      lucide.createIcons();
    });
  }

  // Close menu when clicking a link
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-active');
      body.classList.remove('menu-open');
      const icon = mobileToggle.querySelector('i');
      icon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
});
