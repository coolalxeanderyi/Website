// ================== 資料 ==================
// 新增作品：在 PROJECTS 加一筆，圖片放 assets/img/
const CATS = {
  club:  { zh: '公設會所', en: 'CLUBHOUSE' },
  sales: { zh: '接待中心', en: 'SALES GALLERY' },
  show:  { zh: '樣品屋 實品', en: 'SHOW FLAT' },
  other: { zh: '其他', en: 'OTHERS' }
};
const PROJECTS = [
  { id: 'p01', cat: 'sales', img: 'lobby',     title: '霧砂之境',   city: '台北市', year: 2026, size: '182 坪', text: '以深色石材包覆整個接待大廳，挑高中央懸掛水晶棒吊燈。燈光只打在需要被看見的地方，讓訪客一走進來就放慢腳步。' },
  { id: 'p02', cat: 'club',  img: 'bar',       title: '夜曲吧台',   city: '新北市', year: 2025, size: '96 坪',  text: '公設酒吧分成三個場域：前景弧形吧台強化品飲的儀式感，中景方桌適合小型聚會，遠景沙發區容納所有自在時刻。' },
  { id: 'p03', cat: 'show',  img: 'coast',     title: '鹽白海岸',   city: '桃園市', year: 2025, size: '42 坪',  text: '石灰白與砂岩米為底，降低藍色飽和度，再以霧金細線收邊，把地中海的明亮轉成更沉靜的海感。' },
  { id: 'p04', cat: 'show',  img: 'arch',      title: '鼠尾草拱門', city: '台中市', year: 2024, size: '35 坪',  text: '圓拱門框出餐廳的畫面，鼠尾草綠牆面搭配淺橡木地坪與洞石餐桌，讓日常多一點儀式。' },
  { id: 'p05', cat: 'sales', img: 'reception', title: '石序',       city: '新竹縣', year: 2024, size: '220 坪', text: '整塊白色大理石量體作為接待櫃台，背後的木格柵把午後側光切成一道道陰影。' },
  { id: 'p06', cat: 'club',  img: 'library',   title: '水岸閱覽室', city: '台北市', year: 2023, size: '64 坪',  text: '面向河岸的閱覽室，整面書牆搭配軌道燈，低矮座椅讓視線自然停在窗外。' },
  { id: 'p07', cat: 'other', img: 'corporate', title: '企業總部大廳', city: '台北市', year: 2023, size: '150 坪', text: '深色木格柵與黃銅吊燈建立企業形象，同時用皮革座椅保留等候區的溫度。' },
  { id: 'p08', cat: 'show',  img: 'storage',   title: '暖灰日常',   city: '高雄市', year: 2023, size: '28 坪',  text: '小坪數樣品屋用整面隱藏把手收納牆與黑框玻璃隔間，讓空間看起來比實際更大。' }
];
const IMG = n => `assets/img/${n}.jpg?v=3`;
const ARROW = '<svg viewBox="0 0 22 10"><path d="M0 5h21M16 1l5 4-5 4"/></svg>';

// ================== 共用外框 ==================
const here = location.pathname.split('/').pop() || 'index.html';
const isHome = here === 'index.html';
document.documentElement.classList.add('js');
if (!isHome) document.body.classList.add('inner');

const ICON = {
  yt: '<svg viewBox="0 0 24 24"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3-5.8 3z"/></svg>',
  ig: '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z"/></svg>',
  web: '<svg viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm7.9 7h-3.4a18 18 0 0 0-1.5-4.7A10 10 0 0 1 19.9 7zM12 2c.9 1.3 1.7 3 2.2 5H9.8c.5-2 1.3-3.7 2.2-5zM2.3 14a10 10 0 0 1 0-4h3.9a20 20 0 0 0 0 4H2.3zm.8 2h3.4a18 18 0 0 0 1.5 4.7A10 10 0 0 1 3.1 16zm3.4-9H3.1A10 10 0 0 1 8 2.3 18 18 0 0 0 6.5 7zM12 22c-.9-1.3-1.7-3-2.2-5h4.4c-.5 2-1.3 3.7-2.2 5zm2.6-7H9.4a18 18 0 0 1 0-4h5.2a18 18 0 0 1 0 4zm.4 6.7a18 18 0 0 0 1.5-4.7h3.4a10 10 0 0 1-4.9 4.7zM17.8 14a20 20 0 0 0 0-4h3.9a10 10 0 0 1 0 4h-3.9z"/></svg>'
};
const SOCIAL = `<ul class="social">
  <li><a href="https://www.youtube.com/@coolalexanderyi" target="_blank" rel="noopener" aria-label="YouTube">${ICON.yt}</a></li>
  <li><a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">${ICON.ig}</a></li>
  <li><a href="https://www.coolalexanderyi.com/" target="_blank" rel="noopener" aria-label="個人網站">${ICON.web}</a></li>
</ul>`;
const MONO = (cls = '') => `<a class="mono ${cls}" href="index.html" aria-label="壓力山大空間設計 首頁"><b>A</b><span>壓力山大</span></a>`;
const cur = (f) => here === f || (f === 'portfolio.html' && here === 'project.html') ? ' aria-current="page"' : '';

document.body.insertAdjacentHTML('afterbegin', `
<aside class="side">${MONO()}${SOCIAL}</aside>
<header class="top">
  ${MONO('mono-s')}
  <nav aria-label="主選單"><ul class="menu">
    <li><a href="portfolio.html"${cur('portfolio.html')}>項目</a>
      <ul class="sub">${Object.entries(CATS).map(([k, c]) => `<li><a href="portfolio.html?cat=${k}">${c.zh}</a></li>`).join('')}</ul></li>
    <li><a href="about.html"${cur('about.html')}>關於壓力山大</a></li>
    <li><a href="news.html"${cur('news.html')}>相關消息</a></li>
    <li><a href="contact.html"${cur('contact.html')}>聯絡我們</a></li>
  </ul></nav>
  <span class="tag">ALEXANDER INTERIOR DESIGN</span>
  <button class="burger" aria-label="開啟選單" aria-expanded="false"><span></span></button>
</header>
<nav class="mnav" aria-label="手機選單">
  <button class="x" aria-label="關閉選單">×</button>
  <a href="index.html">首頁</a>
  <a href="portfolio.html">項目</a>
  ${Object.entries(CATS).map(([k, c]) => `<small><a href="portfolio.html?cat=${k}">— ${c.zh}</a></small>`).join('')}
  <a href="about.html">關於壓力山大</a>
  <a href="news.html">相關消息</a>
  <a href="contact.html">聯絡我們</a>
</nav>`);

document.body.insertAdjacentHTML('beforeend', `
<footer class="foot">
  <canvas aria-hidden="true"></canvas>
  <div class="container">
    <div class="fgrid">
      <div>${MONO()}<div class="slogan">讓空間先被感受，再被看見。</div></div>
      <div><h4>Phone</h4><ul><li>02-2000-0000</li><li>02-2000-0001</li></ul></div>
      <div><h4>Write</h4><ul><li>hello@alexander.example</li></ul></div>
      <div><h4>Visit</h4><ul><li>台北市某區示範路 1 號 1 樓</li><li>（示範地址）</li></ul></div>
    </div>
    <div class="fbar"><span>Copyright © 2026 Alexander Interior Design. 作品與地址為示範內容。</span><button class="totop">TO TOP</button></div>
  </div>
</footer>`);
// 頁尾固定在底層：內容區最後加一段等高留白，捲到底時露出頁尾
const wrapper = document.querySelector('.wrapper');
const spacer = document.createElement('div'); spacer.className = 'spacer';
wrapper.after(spacer);
const foot = document.querySelector('.foot');
const sizeFoot = () => document.documentElement.style.setProperty('--fh', foot.offsetHeight + 'px');
sizeFoot(); addEventListener('resize', sizeFoot);

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
addEventListener('load', () => document.body.classList.add('loaded'));
setTimeout(() => document.body.classList.add('loaded'), 2500);

// 選單
const mnav = document.querySelector('.mnav'), burger = document.querySelector('.burger');
burger.onclick = () => { mnav.classList.add('open'); burger.setAttribute('aria-expanded', 'true'); };
mnav.querySelector('.x').onclick = () => { mnav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); };
document.querySelector('.totop').onclick = () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

// 捲動：導覽列變色、視差、淡入
const par = [];
function collectPar() { par.length = 0; document.querySelectorAll('[data-par]').forEach(el => par.push(el)); }
function onScroll() {
  document.body.classList.toggle('scrolled', scrollY > 40);
  if (reduce) return;
  const vh = innerHeight;
  for (const el of par) {
    const r = el.parentElement.getBoundingClientRect();
    if (r.bottom < -100 || r.top > vh + 100) continue;
    const p = (r.top + r.height / 2 - vh / 2) / vh; // -1 ~ 1
    const k = parseFloat(el.dataset.par);
    el.style.transform = `translate3d(0,${(-p * k).toFixed(1)}px,0)` + (el.tagName === 'IMG' ? ' scale(1.12)' : '');
  }
}
let ticking = false;
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { onScroll(); ticking = false; }); } }, { passive: true });

function initReveal() {
  const els = document.querySelectorAll('.rv:not(.in)');
  if (reduce || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  els.forEach(e => io.observe(e));
}
// 各頁內容寫完後呼叫
function ready() { collectPar(); onScroll(); initReveal(); sizeFoot(); }

// 數字跑動
function counters() {
  document.querySelectorAll('[data-to]').forEach(el => {
    const to = +el.dataset.to;
    if (reduce || !('IntersectionObserver' in window)) { el.textContent = to; return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      (function f(t) { const p = Math.min(1, (t - t0) / 1800); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4))); if (p < 1) requestAnimationFrame(f); })(t0);
    }, { threshold: .5 });
    io.observe(el);
  });
}

// 頁尾粒子連線
(function particles() {
  const c = foot.querySelector('canvas'), x = c.getContext('2d');
  let W, H, pts = [];
  const fit = () => { W = c.width = c.offsetWidth * devicePixelRatio; H = c.height = c.offsetHeight * devicePixelRatio; pts = Array.from({ length: Math.min(70, Math.round(W * H / 26000)) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 })); };
  fit(); addEventListener('resize', fit);
  const D = 130 * devicePixelRatio;
  function draw() {
    x.clearRect(0, 0, W, H);
    for (const p of pts) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; x.fillStyle = 'rgba(255,255,255,.5)'; x.fillRect(p.x, p.y, 1.6 * devicePixelRatio, 1.6 * devicePixelRatio); }
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < D) { x.strokeStyle = `rgba(255,255,255,${(.18 * (1 - d / D)).toFixed(3)})`; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke(); }
    }
    if (!reduce) requestAnimationFrame(draw);
  }
  draw();
})();
