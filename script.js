window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      header.style.backgroundColor = '#f0f0f0'; /* Change background color on scroll */
    } else {
      header.style.backgroundColor = 'transparent'; /* Reset to transparent if scrolled to top */
    }
  });