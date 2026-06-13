// Auto-update year in footer
document.getElementById('year')?.textContent = new Date().getFullYear();

// Auto-update "Last updated" date on policy pages
const updateDate = document.getElementById('update-date');
if (updateDate) {
  updateDate.textContent = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Smooth scroll for anchor links (only on index.html)
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
