/* =========================================
   ORVEX STORE - CINEMATIC 3D JAVASCRIPT
   Complete Version
   ========================================= */

/* ---------- Translations ---------- */

const TXT = {
  en: {
    topbar: 'Free shipping over EGP 5,000 • Cash on delivery • Official warranty on every product',
    search: 'Search phones, TVs, washing machines...',
    cart: 'Cart',
    cartTitle: 'Shopping cart',
    total: 'Total',
    checkout: 'Checkout',
    heroTag: 'Mega Deals',
    heroTitle: 'Up to 40% off smart devices',
    heroText: 'Latest TVs, phones and home appliances with installments up to 36 months.',
    shopNow: 'Shop deals',
    m1: '📱 Phones',
    m1s: 'From EGP 4,999',
    m2: '🧊 Home appliances',
    m2s: 'Up to 30% off',
    p1: 'Fast delivery',
    p1s: 'Within 48 hours',
    p2: 'Official warranty',
    p2s: 'Up to 5 years',
    p3: 'Easy returns',
    p3s: 'Within 14 days',
    p4: '0% installments',
    p4s: 'With partner banks',
    s_def: 'Best selling',
    s_low: 'Price: low to high',
    s_high: 'Price: high to low',
    s_disc: 'Biggest discount',
    t_light: 'Light',
    t_dark: 'Dark',
    all: 'All products',
    empty: 'No matching products. Try another keyword or category.',
    emptyCart: 'Your cart is empty.',
    add: 'Add to cart',
    added: 'Added to cart',
    remove: 'Remove',
    perMonth: 'or {x} / month for 36 months',
    soon: 'Checkout page is the next step',
    f1: 'Your store for electronics and home appliances. Clear prices and after-sales service.',
    f2t: 'Customer care',
    f2: 'Hotline: 19000<br>Daily 9 AM – 9 PM',
    f3t: 'Links',
    f3: 'Return policy<br>Shipping & delivery<br>Warranty & repair',
    rights: 'All rights reserved.',
    cats: ['All', 'Phones', 'Laptops', 'TVs', 'Home appliances', 'Audio & accessories']
  },

  ar: {
    topbar: 'شحن مجاني للطلبات فوق 5,000 جنيه • الدفع عند الاستلام • ضمان رسمي على كل المنتجات',
    search: 'ابحث عن موبايل، تليفزيون، غسالة...',
    cart: 'السلة',
    cartTitle: 'سلة التسوق',
    total: 'الإجمالي',
    checkout: 'إتمام الشراء',
    heroTag: 'عروض ضخمة',
    heroTitle: 'خصم يصل إلى 40% على الأجهزة الذكية',
    heroText: 'أحدث التليفزيونات والموبايلات والأجهزة المنزلية بتقسيط حتى 36 شهر.',
    shopNow: 'تسوّق العروض',
    m1: '📱 موبايلات',
    m1s: 'ابتداءً من 4,999 ج',
    m2: '🧊 أجهزة منزلية',
    m2s: 'خصم حتى 30%',
    p1: 'توصيل سريع',
    p1s: 'خلال 48 ساعة',
    p2: 'ضمان رسمي',
    p2s: 'حتى 5 سنوات',
    p3: 'استرجاع سهل',
    p3s: 'خلال 14 يوم',
    p4: 'تقسيط بدون فوائد',
    p4s: 'مع البنوك المشاركة',
    s_def: 'الأكثر مبيعاً',
    s_low: 'السعر: الأقل أولاً',
    s_high: 'السعر: الأعلى أولاً',
    s_disc: 'الأعلى خصماً',
    t_light: 'فاتح',
    t_dark: 'داكن',
    all: 'كل المنتجات',
    empty: 'مفيش منتجات مطابقة. جرّب كلمة بحث تانية أو قسم مختلف.',
    emptyCart: 'السلة فاضية.',
    add: 'أضف إلى السلة',
    added: 'تمت الإضافة إلى السلة',
    remove: 'حذف',
    perMonth: 'أو {x} / شهر لمدة 36 شهر',
    soon: 'صفحة الدفع هي الخطوة الجاية',
    f1: 'متجرك لكل الأجهزة الإلكترونية والمنزلية. أسعار واضحة وخدمة بعد البيع.',
    f2t: 'خدمة العملاء',
    f2: 'الخط الساخن: 19000<br>يومياً من 9 ص إلى 9 م',
    f3t: 'روابط',
    f3: 'سياسة الاسترجاع<br>الشحن والتوصيل<br>الضمان والصيانة',
    rights: 'جميع الحقوق محفوظة.',
    cats: ['الكل', 'موبايلات', 'لابتوبات', 'تليفزيونات', 'أجهزة منزلية', 'سماعات وإكسسوارات']
  }
};

/* ---------- Product Illustrations ---------- */

const ART = {
  phone: c => `
    <rect x="70" y="10" width="60" height="140" rx="12" fill="#1e293b"/>
    <rect x="74" y="14" width="52" height="132" rx="9" fill="${c}"/>
    <rect x="92" y="20" width="16" height="5" rx="2.5" fill="#0f172a"/>
  `,

  laptop: c => `
    <rect x="45" y="30" width="110" height="75" rx="6" fill="#1e293b"/>
    <rect x="51" y="36" width="98" height="63" rx="3" fill="${c}"/>
    <path d="M30 110h140l-10 14H40z" fill="#94a3b8"/>
  `,

  tv: c => `
    <rect x="25" y="25" width="150" height="90" rx="5" fill="#0f172a"/>
    <rect x="30" y="30" width="140" height="80" fill="${c}"/>
    <rect x="90" y="115" width="20" height="14" fill="#475569"/>
  `,

  fridge: c => `
    <rect x="62" y="8" width="76" height="144" rx="7" fill="${c}"/>
    <rect x="66" y="62" width="68" height="86" rx="4" fill="#fff" opacity=".18"/>
  `,

  washer: c => `
    <rect x="55" y="12" width="90" height="136" rx="8" fill="${c}"/>
    <circle cx="100" cy="88" r="38" fill="#cbd5e1"/>
    <circle cx="100" cy="88" r="30" fill="#1e3a5f"/>
  `,

  ac: c => `
    <rect x="20" y="40" width="160" height="56" rx="12" fill="${c}"/>
    <rect x="30" y="76" width="140" height="10" rx="5" fill="#0f172a" opacity=".5"/>
  `,

  fryer: c => `
    <rect x="55" y="25" width="90" height="100" rx="22" fill="${c}"/>
    <rect x="68" y="38" width="64" height="22" rx="8" fill="#0f172a" opacity=".55"/>
  `,

  headphones: c => `
    <path d="M50 95V80a50 50 0 0 1 100 0v15" fill="none" stroke="${c}" stroke-width="12"/>
    <rect x="38" y="85" width="28" height="48" rx="13" fill="${c}"/>
    <rect x="134" y="85" width="28" height="48" rx="13" fill="${c}"/>
  `,

  charger: c => `
    <rect x="68" y="45" width="64" height="58" rx="12" fill="${c}"/>
    <rect x="82" y="22" width="8" height="24" fill="#94a3b8"/>
    <rect x="110" y="22" width="8" height="24" fill="#94a3b8"/>
  `,

  vacuum: c => `
    <circle cx="80" cy="115" r="30" fill="${c}"/>
    <rect x="105" y="100" width="40" height="30" rx="8" fill="${c}"/>
    <path d="M118 100q0-60 40-75" stroke="#475569" stroke-width="7" fill="none"/>
  `
};

/* ---------- Products ---------- */

const P = [
  {
    id: 1, c: 1, b: 'Samsung',
    en: 'Galaxy S25 256GB',
    ar: 'جالاكسي S25 ذاكرة 256 جيجا',
    a: 'phone', k: '#3b82f6',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85',
    price: 38999, old: 44999, r: 4.8, n: 1240
  },
  {
    id: 2, c: 1, b: 'Xiaomi',
    en: 'Redmi Note 14 Pro 256GB',
    ar: 'ريدمي نوت 14 برو ذاكرة 256 جيجا',
    a: 'phone', k: '#14b8a6',
    img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=85',
    price: 14999, old: 17499, r: 4.6, n: 980
  },
  {
    id: 3, c: 1, b: 'Apple',
    en: 'iPhone 16 128GB',
    ar: 'آيفون 16 ذاكرة 128 جيجا',
    a: 'phone', k: '#f472b6',
    img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=85',
    price: 49999, old: 0, r: 4.9, n: 2100
  },
  {
    id: 4, c: 2, b: 'HP',
    en: 'Victus 15 Core i5, RTX 3050',
    ar: 'فيكتس 15 كور i5 كارت RTX 3050',
    a: 'laptop', k: '#7c3aed',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85',
    price: 32999, old: 36999, r: 4.7, n: 530
  },
  {
    id: 5, c: 2, b: 'Lenovo',
    en: 'IdeaPad Slim 3 Core i7, 16GB RAM',
    ar: 'ايديا باد سليم 3 كور i7 رامات 16',
    a: 'laptop', k: '#38bdf8',
    img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85',
    price: 28499, old: 31999, r: 4.5, n: 410
  },
  {
    id: 6, c: 3, b: 'Samsung',
    en: '55" 4K Smart TV',
    ar: 'تليفزيون 55 بوصة 4K سمارت',
    a: 'tv', k: '#6366f1',
    img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=85',
    price: 21999, old: 26999, r: 4.7, n: 870
  },
  {
    id: 7, c: 3, b: 'LG',
    en: '65" OLED TV',
    ar: 'تليفزيون OLED 65 بوصة',
    a: 'tv', k: '#f97316',
    img: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=800&q=85',
    price: 64999, old: 72999, r: 4.9, n: 260
  },
  {
    id: 8, c: 4, b: 'Toshiba',
    en: 'No-Frost Refrigerator 450L',
    ar: 'ثلاجة نوفروست 450 لتر',
    a: 'fridge', k: '#b6c2d1',
    img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=85',
    price: 27999, old: 31499, r: 4.6, n: 640
  },
  {
    id: 9, c: 4, b: 'Sharp',
    en: 'Automatic Washing Machine 10kg',
    ar: 'غسالة أوتوماتيك 10 كيلو',
    a: 'washer', k: '#c4cbd6',
    img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=85',
    price: 19499, old: 22999, r: 4.5, n: 720
  },
  {
    id: 10, c: 4, b: 'Carrier',
    en: '1.5HP Air Conditioner, Cool/Heat',
    ar: 'تكييف 1.5 حصان بارد/ساخن',
    a: 'ac', k: '#cfd6e0',
    img: 'https://images.unsplash.com/photo-1631545806609-8c6c4b4c1e8b?auto=format&fit=crop&w=800&q=85',
    price: 24999, old: 28999, r: 4.7, n: 950
  },
  {
    id: 11, c: 4, b: 'Tefal',
    en: 'Air Fryer 5L',
    ar: 'قلاية هوائية 5 لتر',
    a: 'fryer', k: '#1f2937',
    img: 'https://images.unsplash.com/photo-1648671402400-4a2a2d0a4c8a?auto=format&fit=crop&w=800&q=85',
    price: 3299, old: 4199, r: 4.8, n: 1800
  },
  {
    id: 12, c: 5, b: 'Sony',
    en: 'WH-1000XM5 Headphones',
    ar: 'سماعة WH-1000XM5 عازلة للضوضاء',
    a: 'headphones', k: '#334155',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85',
    price: 12999, old: 15499, r: 4.9, n: 670
  },
  {
    id: 13, c: 5, b: 'Anker',
    en: '65W GaN Fast Charger',
    ar: 'شاحن سريع 65 وات GaN',
    a: 'charger', k: '#0f172a',
    img: 'https://images.unsplash.com/photo-1609592806596-b43bada5c1c1?auto=format&fit=crop&w=800&q=85',
    price: 999, old: 1399, r: 4.6, n: 2300
  },
  {
    id: 14, c: 4, b: 'Philips',
    en: 'Vacuum Cleaner 2000W',
    ar: 'مكنسة كهربائية 2000 وات',
    a: 'vacuum', k: '#2563eb',
    img: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=85',
    price: 4799, old: 0, r: 4.4, n: 380
  }
];

/* ---------- Helpers ---------- */

const $ = id => document.getElementById(id);

const store = {
  get(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value ?? fallback;
    } catch {
      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Storage unavailable:', error);
    }
  }
};

const t = key => TXT[lang][key];

const money = number =>
  lang === 'en'
    ? 'EGP ' + number.toLocaleString('en-US')
    : number.toLocaleString('en-US') + ' ج';

const disc = p =>
  p.old ? (p.old - p.price) / p.old : 0;

const imgSrc = p => {
  if (!p.img) return '';
  return /^https?:\/\//i.test(p.img)
    ? p.img
    : 'images/' + p.img;
};

const escapeHTML = value =>
  String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);

const imgTag = p => p.img
  ? `<img
       src="${escapeHTML(imgSrc(p))}"
       alt="${escapeHTML(p[lang])}"
       loading="lazy"
       onerror="this.style.display='none';this.parentElement.classList.add('image-failed')"
     >`
  : '';

/* ---------- Application State ---------- */

let lang = store.get('lang', 'en');
let theme = store.get('theme', 'light');
let cart = store.get('cart', []);

if (!['en', 'ar'].includes(lang)) lang = 'en';
if (!['light', 'dark'].includes(theme)) theme = 'light';
if (!Array.isArray(cart)) cart = [];

cart = cart.filter(item =>
  item &&
  P.some(product => product.id === Number(item.id)) &&
  Number.isInteger(Number(item.q)) &&
  Number(item.q) > 0
).map(item => ({
  id: Number(item.id),
  q: Number(item.q)
}));

let st = {
  cat: 0,
  q: '',
  sort: 'def'
};

/* ---------- Product Artwork ---------- */

const art = p => {
  if (p.img) return '';

  const drawing = ART[p.a];

  return drawing
    ? `<svg viewBox="0 0 200 160" aria-hidden="true">${drawing(p.k)}</svg>`
    : '';
};

/* ---------- Static Text ---------- */

function applyStatic() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dataset.theme = theme;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TXT[lang][key] !== undefined) {
      el.innerHTML = t(key);
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (TXT[lang][key] !== undefined) {
      el.placeholder = t(key);
    }
  });

  if ($('lang')) {
    $('lang').textContent = lang === 'en' ? 'العربية' : 'English';
  }

  if ($('theme')) $('theme').value = theme;
  if ($('sort')) $('sort').value = st.sort;

  document.title =
    'ORVEX | ' +
    (lang === 'en'
      ? 'Electronics & Home Appliances'
      : 'أجهزة إلكترونية ومنزلية');
}

/* ---------- Categories ---------- */

function renderCats() {
  if (!$('cats')) return;

  $('cats').innerHTML = t('cats')
    .map((category, index) => `
      <button class="${index === st.cat ? 'on' : ''}" data-c="${index}">
        ${category}
      </button>
    `).join('');
}

/* ---------- Product Grid ---------- */

function renderGrid() {
  if (!$('grid')) return;

  const query = st.q.trim().toLowerCase();

  let list = P.filter(product => {
    const matchesCategory =
      st.cat === 0 || product.c === st.cat;

    const searchText =
      (product.en + ' ' + product.ar + ' ' + product.b).toLowerCase();

    return matchesCategory && searchText.includes(query);
  });

  if (st.sort === 'low') {
    list.sort((a, b) => a.price - b.price);
  }

  if (st.sort === 'high') {
    list.sort((a, b) => b.price - a.price);
  }

  if (st.sort === 'disc') {
    list.sort((a, b) => disc(b) - disc(a));
  }

  $('secTitle').textContent =
    st.cat ? t('cats')[st.cat] : t('all');

  $('grid').innerHTML = list.length
    ? list.map((product, index) => `
      <article class="card" style="--card-index:${index}">
        ${product.old
          ? `<span class="badge">-${Math.round(disc(product) * 100)}%</span>`
          : ''}

        <div class="pic">
          ${art(product)}
          ${imgTag(product)}
        </div>

        <div class="info">
          <span class="brand">${escapeHTML(product.b)}</span>

          <h3 class="name">${escapeHTML(product[lang])}</h3>

          <span class="rate">
            ★ ${product.r}
            <small>(${product.n.toLocaleString('en-US')})</small>
          </span>

          <div class="price">
            ${money(product.price)}
            ${product.old
              ? `<span class="old">${money(product.old)}</span>`
              : ''}
          </div>

          <span class="inst">
            ${t('perMonth').replace(
              '{x}',
              money(Math.ceil(product.price / 36))
            )}
          </span>
        </div>

        <button class="add" data-id="${product.id}">
          ${t('add')}
        </button>
      </article>
    `).join('')
    : `<p class="empty">${t('empty')}</p>`;

  initProduct3D();
}

/* ---------- Shopping Cart ---------- */

function renderCart() {
  if (!$('cartItems')) return;

  let total = 0;

  if ($('cartCount')) {
    $('cartCount').textContent =
      cart.reduce((sum, item) => sum + item.q, 0);
  }

  $('cartItems').innerHTML = cart.length
    ? cart.map(item => {
      const product = P.find(p => p.id === item.id);
      if (!product) return '';

      total += product.price * item.q;

      return `
        <div class="item">
          <div class="t">
            ${art(product)}
            ${imgTag(product)}
          </div>

          <div>
            <b>${escapeHTML(product[lang])}</b>
            <small>${money(product.price)}</small>

            <div class="qty">
              <button data-d="-1" data-id="${product.id}">−</button>
              <span>${item.q}</span>
              <button data-d="1" data-id="${product.id}">+</button>
            </div>
          </div>

          <button class="rm" data-rm="${product.id}">
            ${t('remove')}
          </button>
        </div>
      `;
    }).join('')
    : `<p class="empty">${t('emptyCart')}</p>`;

  if ($('cartTotal')) {
    $('cartTotal').textContent = money(total);
  }
}

/* ---------- Render Everything ---------- */

function renderAll() {
  applyStatic();
  renderCats();
  renderGrid();
  renderCart();
}

/* ---------- Save Cart ---------- */

function saveCart() {
  store.set('cart', cart);
  renderCart();
}

/* ---------- Notifications ---------- */

function toast(message) {
  const element = $('toast');
  if (!element) return;

  element.textContent = message;
  element.classList.add('show');

  clearTimeout(toast.timer);

  toast.timer = setTimeout(() => {
    element.classList.remove('show');
  }, 2200);
}

/* ---------- Cart Drawer ---------- */

function drawer(open) {
  if (!$('drawer') || !$('overlay')) return;

  $('drawer').classList.toggle('show', open);
  $('overlay').classList.toggle('show', open);
}

/* =========================================
   CINEMATIC 3D SYSTEM
   ========================================= */

const motionAllowed = !window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

/* ---------- Hero 3D Mouse Movement ---------- */

function initHero3D() {
  const scene = document.querySelector('.cinematic-scene');
  const hero = document.querySelector('.hero-main');

  if (!scene || !hero || !motionAllowed) return;

  const desktop = window.matchMedia(
    '(hover: hover) and (pointer: fine)'
  );

  if (!desktop.matches) return;

  hero.addEventListener('pointermove', event => {
    const rect = hero.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 14;
    const rotateX = (0.5 - y) * 10;

    scene.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;

    const glow = scene.querySelector('.scene-glow');

    if (glow) {
      glow.style.left = `${x * 65}%`;
      glow.style.top = `${y * 65}%`;
    }

    scene.querySelectorAll('.floating-product').forEach((product, i) => {
      const depth = (i + 1) * 7;

      product.style.transform = `
        translate3d(
          ${(x - 0.5) * depth}px,
          ${(y - 0.5) * depth}px,
          ${depth}px
        )
      `;
    });
  });

  hero.addEventListener('pointerleave', () => {
    scene.style.transform =
      'perspective(1200px) rotateX(0deg) rotateY(0deg)';

    scene.querySelectorAll('.floating-product').forEach(product => {
      product.style.transform = '';
    });

    const glow = scene.querySelector('.scene-glow');

    if (glow) {
      glow.style.left = '';
      glow.style.top = '';
    }
  });
}

/* ---------- Product 3D Cards ---------- */

function initProduct3D() {
  if (!motionAllowed) return;

  const cards = document.querySelectorAll('.card');

  const desktop = window.matchMedia(
    '(hover: hover) and (pointer: fine)'
  );

  cards.forEach(card => {
    if (card.dataset.tiltReady) return;

    card.dataset.tiltReady = 'true';

    card.addEventListener('pointermove', event => {
      if (!desktop.matches) return;

      const rect = card.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 12;
      const rotateX = (0.5 - y) * 12;

      card.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-7px)
      `;

      const image = card.querySelector('.pic img');

      if (image) {
        image.style.transform = `
          translateZ(30px)
          scale(1.07)
        `;
      }
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';

      const image = card.querySelector('.pic img');

      if (image) image.style.transform = '';
    });
  });
}

/* ---------- Scroll Reveal ---------- */

function initScrollReveal() {
  if (!motionAllowed || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  document.querySelectorAll(
    '.card, .feature, .category-card, .banner'
  ).forEach(element => {
    element.classList.add('reveal-item');
    observer.observe(element);
  });
}

/* ---------- Floating Scene Animation ---------- */

function initSceneAnimations() {
  const scene = document.querySelector('.cinematic-scene');

  if (!scene || !motionAllowed) return;

  scene.querySelectorAll('.orbit').forEach((orbit, index) => {
    orbit.style.animationDelay = `${index * -2}s`;
  });

  scene.querySelectorAll('.floating-product').forEach((product, index) => {
    product.style.animationDelay = `${index * -0.8}s`;
  });
}

/* ---------- Ambient Particles ---------- */

function initParticles() {
  const scene = document.querySelector('.cinematic-scene');

  if (!scene || scene.querySelector('.generated-particles')) return;

  const container = document.createElement('div');
  container.className = 'generated-particles';
  container.setAttribute('aria-hidden', 'true');

  for (let i = 0; i < 16; i++) {
    const particle = document.createElement('span');

    particle.className = 'generated-particle';

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.animationDuration = `${3 + Math.random() * 5}s`;

    container.appendChild(particle);
  }

  scene.appendChild(container);
}

/* ---------- Extra 3D Styles ---------- */

function add3DStyles() {
  if ($('orvex-3d-styles')) return;

  const style = document.createElement('style');
  style.id = 'orvex-3d-styles';

  style.textContent = `
    .cinematic-scene {
      transform-style: preserve-3d;
      transition: transform .25s ease-out;
      will-change: transform;
    }

    .floating-product {
      transform-style: preserve-3d;
      transition: transform .25s ease-out;
      will-change: transform;
    }

    .orbit {
      transform-style: preserve-3d;
      will-change: transform;
    }

    .card {
      transform-style: preserve-3d;
      transition:
        transform .25s ease,
        box-shadow .3s ease;
      will-change: transform;
    }

    .card:hover {
      box-shadow:
        0 20px 45px rgba(150, 60, 255, .18),
        0 0 20px rgba(150, 60, 255, .08);
    }

    .pic img {
      transition: transform .35s ease;
      transform-style: preserve-3d;
    }

    .generated-particles {
      position: absolute;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
      z-index: 1;
    }

    .generated-particle {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #c084fc;
      box-shadow: 0 0 12px #a855f7;
      animation: orvexParticleFloat 5s ease-in-out infinite alternate;
    }

    @keyframes orvexParticleFloat {
      from {
        transform: translate3d(0, 0, 0) scale(.7);
        opacity: .25;
      }
      to {
        transform: translate3d(15px, -35px, 20px) scale(1.5);
        opacity: 1;
      }
    }

    .reveal-item {
      opacity: 0;
      transform: translateY(25px);
      transition:
        opacity .65s ease,
        transform .65s ease;
    }

    .reveal-item.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (hover: none), (pointer: coarse) {
      .card:hover {
        transform: none;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .generated-particle,
      .reveal-item,
      .cinematic-scene,
      .floating-product {
        animation: none !important;
        transition: none !important;
      }

      .reveal-item {
        opacity: 1;
        transform: none;
      }
    }
  `;

  document.head.appendChild(style);
}

/* =========================================
   EVENT LISTENERS
   ========================================= */

if ($('cats')) {
  $('cats').addEventListener('click', event => {
    const category = event.target.closest('[data-c]');

    if (!category) return;

    st.cat = Number(category.dataset.c);

    renderCats();
    renderGrid();
  });
}

if ($('search')) {
  $('search').addEventListener('input', event => {
    st.q = event.target.value;
    renderGrid();
  });
}

if ($('sort')) {
  $('sort').addEventListener('change', event => {
    st.sort = event.target.value;
    renderGrid();
  });
}

if ($('theme')) {
  $('theme').addEventListener('change', event => {
    theme = event.target.value;
    store.set('theme', theme);
    applyStatic();
  });
}

if ($('lang')) {
  $('lang').addEventListener('click', () => {
    lang = lang === 'en' ? 'ar' : 'en';

    store.set('lang', lang);

    renderAll();
  });
}

if ($('grid')) {
  $('grid').addEventListener('click', event => {
    const button = event.target.closest('[data-id]');

    if (!button) return;

    const id = Number(button.dataset.id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
      existing.q++;
    } else {
      cart.push({ id, q: 1 });
    }

    saveCart();
    toast(t('added'));
  });
}

if ($('cartItems')) {
  $('cartItems').addEventListener('click', event => {
    const removeButton = event.target.closest('[data-rm]');
    const changeButton = event.target.closest('[data-d][data-id]');

    if (removeButton) {
      cart = cart.filter(item =>
        item.id !== Number(removeButton.dataset.rm)
      );

      saveCart();
      return;
    }

    if (changeButton) {
      const item = cart.find(i =>
        i.id === Number(changeButton.dataset.id)
      );

      if (!item) return;

      item.q += Number(changeButton.dataset.d);

      if (item.q <= 0) {
        cart = cart.filter(i => i.id !== item.id);
      }

      saveCart();
    }
  });
}

if ($('openCart')) {
  $('openCart').addEventListener('click', () => drawer(true));
}

if ($('closeCart')) {
  $('closeCart').addEventListener('click', () => drawer(false));
}

if ($('overlay')) {
  $('overlay').addEventListener('click', () => drawer(false));
}

if ($('shopNow')) {
  $('shopNow').addEventListener('click', () => {
    $('products')?.scrollIntoView({
      behavior: motionAllowed ? 'smooth' : 'auto'
    });
  });
}

if ($('checkout')) {
  $('checkout').addEventListener('click', () => {
    toast(cart.length ? t('soon') : t('emptyCart'));
  });
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') drawer(false);
});

/* =========================================
   START ORVEX STORE
   ========================================= */

add3DStyles();
renderAll();

initHero3D();
initSceneAnimations();
initParticles();
initScrollReveal();

console.log('ORVEX Store loaded successfully!');
console.log('Cinematic 3D system activated!');