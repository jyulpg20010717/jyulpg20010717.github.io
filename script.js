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
        src="https://www.google.com/maps?q=%E8%87%BA%E4%B8%AD%E5%B8%82%E6%B2%99%E9%B9%BF%E5%8D%80%E4%B8%AD%E5%B1%B1%E8%B7%AF24%E8%99%9F%E4%B9%8B30&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen>
      </iframe>
      <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=%E8%87%BA%E4%B8%AD%E5%B8%82%E6%B2%99%E9%B9%BF%E5%8D%80%E4%B8%AD%E5%B1%B1%E8%B7%AF24%E8%99%9F%E4%B9%8B30" target="_blank" rel="noopener">在 Google 地圖中開啟　→</a>`;
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
