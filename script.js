const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900 && link.parentElement.classList.contains('nav-group')) {
        return;
      }
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  mainNav.querySelectorAll('.nav-group > a').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (window.innerWidth <= 900) {
        event.preventDefault();
        link.parentElement.classList.toggle('expanded');
      }
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  const contactBox = contactForm.closest('.contact-box');
  if (contactBox) {
    contactBox.innerHTML = `
      <div class="map-heading">
        <span class="map-pin">●</span>
        <div><h3>公司位置</h3><p>今元由實業股份有限公司</p></div>
      </div>
      <iframe
        title="今元由實業股份有限公司 Google 地圖位置"
        src="https://www.google.com/maps?q=24.2460235,120.5862587&z=16&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen>
      </iframe>
      <a class="map-link" href="https://www.google.com/maps/place/%E4%BB%8A%E5%85%83%E7%94%B1%E5%AF%A6%E6%A5%AD%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@24.2460235,120.5836838,16z/data=!3m1!4b1!4m6!3m5!1s0x346914fc8114eaa7:0x9eed2725e8ad8713!8m2!3d24.2460235!4d120.5862587!16s%2Fg%2F1pzpv_l6b?entry=ttu&amp;g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener">在 Google 地圖中開啟　→</a>`;
  }

}

const legacyContactForm = document.querySelector('.contact-form');
if (legacyContactForm) {
  legacyContactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = legacyContactForm.querySelector('button');
    if (button) {
      button.textContent = '已送出';
      button.disabled = true;
    }
  });
}
