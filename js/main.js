document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpened = navLinks.classList.toggle('mobile-active');
      body.classList.toggle('menu-open');
      
      // Update icon
      mobileToggle.innerHTML = isOpened 
        ? '<i data-lucide="x"></i>' 
        : '<i data-lucide="menu"></i>';
      
      lucide.createIcons();
    });
  }

  // Close menu when clicking a link
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('mobile-active')) {
        navLinks.classList.remove('mobile-active');
        body.classList.remove('menu-open');
        mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
      }
    });
  });
});
