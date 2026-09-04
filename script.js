const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

const pageRoutes = {
  '關於今元由': 'company-intro',
  '公司簡介': 'company-intro',
  '公司沿革': 'company-history',
  '經營理念': 'business-philosophy',
  '公司組織': 'organization',
  '專業瓦斯安全服務': 'gas-safety',
  '公司位置': 'company-location',
  '營業與服務項目': 'gas-sales',
  '液化石油氣、丙烷瓦斯銷售': 'gas-sales',
  '液化石油氣、丙烷瓦斯分裝': 'gas-filling',
  '家庭用、工業用瓦斯配送': 'gas-delivery',
  '工業用瓦斯配管': 'gas-piping',
  '瓦斯儲槽規劃及施工': 'gas-tank',
  '鋼瓶銷售與驗瓶': 'gas-bottle',
  '瓦斯設備與安全諮詢': 'gas-equipment',
  '新聞中心': 'company-news',
  '公司最新消息': 'company-news',
  '瓦斯產業資訊': 'industry-news',
  '安全宣導資訊': 'safety-news',
  '客戶服務與支援': 'lpg-knowledge',
  '認識液化石油氣': 'lpg-knowledge',
  '丙烷與丁烷特性': 'gas-properties',
  '瓦斯流量表換算係數': 'flow-rate',
  '液化石油氣批售價格': 'lpg-price',
  '液化石油氣使用安全須知': 'gas-safety',
  '液化石油氣安全資料表（SDS）': 'lpg-sds',
  '瓦斯常見問與答（Q&A）': 'gas-qa',
  '人才招募': 'benefits',
  '薪資與福利': 'benefits',
  '最新職缺': 'jobs',
  '關係企業': 'partners',
  '今元由關係企業': 'partners',
  '合作夥伴': 'cooperation',
  '聯絡我們': 'contact-info',
  'LPG牌價': 'lpg-price'
};

if (mainNav) {
  mainNav.querySelectorAll('a').forEach((link) => {
    const label = link.textContent.replace('⌄', '').trim();
    if (pageRoutes[label]) {
      const route = pageRoutes[label];
      link.href = route.includes('#') ? route : `pages.html#${route}`;
    }
  });
}

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
