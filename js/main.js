document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpened = navLinks.classList.toggle('mobile-active');
      body.classList.toggle('menu-open');
      
      // Update aria-expanded attribute for accessibility
      mobileToggle.setAttribute('aria-expanded', isOpened);
      
      // Update icon
      mobileToggle.innerHTML = isOpened 
        ? '<i data-lucide="x"></i>' 
        : '<i data-lucide="menu"></i>';
      
      // Guard lucide initialization
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  }

  // Close menu when clicking a link
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('mobile-active')) {
        navLinks.classList.remove('mobile-active');
        body.classList.remove('menu-open');
        
        // Update aria-expanded when closing
        if (mobileToggle) {
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
        
        mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
        
        // Guard lucide initialization
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
          lucide.createIcons();
        }
      }
    });
  });

  // Initialize lucide icons on page load
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
});
