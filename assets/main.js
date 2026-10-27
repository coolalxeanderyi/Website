// 共用資料與元件 —— 作品資料都在這裡，新增作品只要加一筆
const CATS = {
  club:  { zh: '公設會所', en: 'CLUBHOUSE' },
  sales: { zh: '接待中心', en: 'SALES GALLERY' },
  show:  { zh: '樣品屋 實品', en: 'SHOW FLAT' },
  other: { zh: '其他', en: 'OTHERS' }
};
const PROJECTS = [
  { id: 'p01', cat: 'sales', title: '霧砂之境', city: '台北市', year: 2026, size: '182 坪', tone: ['#b9b6ab','#8d8b80'], text: '以洞石與霧面金屬鋪陳接待動線，入口挑高的光牆讓訪客在第一步就放慢腳步。' },
  { id: 'p02', cat: 'club',  title: '夜曲吧台', city: '新北市', year: 2025, size: '96 坪',  tone: ['#5d5f57','#9c8659'], text: '公設酒吧分成弧形吧台、方桌區與沙發島三個場域，照顧熱鬧與安靜兩種需求。' },
  { id: 'p03', cat: 'show',  title: '鹽白海岸', city: '桃園市', year: 2025, size: '42 坪',  tone: ['#d8d6cc','#8fa3ad'], text: '石灰白與砂岩米為底，降低藍色飽和度，再以霧金細線收邊，做出沉靜的海感。' },
  { id: 'p04', cat: 'show',  title: '鼠尾草拱門', city: '台中市', year: 2024, size: '35 坪', tone: ['#9fae95','#6f7a68'], text: '圓拱門串起客廳與餐廳，鼠尾草綠牆面搭配淺橡木地坪。' },
  { id: 'p05', cat: 'sales', title: '石序', city: '新竹縣', year: 2024, size: '220 坪', tone: ['#8a8676','#c9c4b3'], text: '整塊大理石量體作為接待櫃台，背後的格柵引入午後側光。' },
  { id: 'p06', cat: 'club',  title: '水岸閱覽室', city: '台北市', year: 2023, size: '64 坪', tone: ['#6b6d65','#b9b6ab'], text: '面向河岸的閱覽室，整面書牆與低矮座椅讓視線停在窗外。' },
  { id: 'p07', cat: 'other', title: '企業總部大廳', city: '台北市', year: 2023, size: '150 坪', tone: ['#4b4b43','#a99569'], text: '以深色木格柵與黃銅燈具建立企業形象，同時保留等候區的溫度。' },
  { id: 'p08', cat: 'show',  title: '暖灰日常', city: '高雄市', year: 2023, size: '28 坪', tone: ['#a39e8c','#d8d3c2'], text: '小坪數樣品屋用整面收納牆與玻璃隔間，讓空間看起來比實際大。' },
  { id: 'p09', cat: 'sales', title: '光之廊', city: '台南市', year: 2022, size: '168 坪', tone: ['#c9c4b3','#5d5f57'], text: '長廊兩側以間接燈帶引導，盡頭是模型區與整片落地窗。' }
];

const NAV = [
  ['portfolio.html', '作品項目'], ['about.html', '關於壓力山大'], ['contact.html', '聯絡我們']
];
const here = location.pathname.split('/').pop() || 'index.html';

document.getElementById('site-header').innerHTML = `
<nav class="wrap nav" aria-label="主選單">
  <a class="logo" href="index.html"><b>壓力山大空間</b><small>ALEXANDER INTERIOR</small></a>
  <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="links">選單</button>
  <ul class="links" id="links">
    ${NAV.map(([h, t]) => `<li><a href="${h}"${here.startsWith(h.replace('.html','')) || (h==='portfolio.html'&&here==='project.html') ? ' aria-current="page"' : ''}>${t}</a></li>`).join('')}
  </ul>
</nav>`;

document.getElementById('site-footer').innerHTML = `
<div class="wrap">
  <div class="foot">
    <div><a class="logo" href="index.html"><b>壓力山大空間</b><small>ALEXANDER INTERIOR</small></a></div>
    <div><h4>PHONE</h4><p>02-2000-0000</p></div>
    <div><h4>MAIL</h4><p>hello@alexander.example</p></div>
    <div><h4>VISIT</h4><p>台北市某區示範路 1 號 1 樓<br>（虛構地址）</p></div>
  </div>
  <div class="copy"><span>© 2026 Alexander Interior Design · 作品與地址為示範內容</span><button id="toTop">回到頂端</button></div>
</div>`;

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const btn = document.getElementById('menuBtn'), links = document.getElementById('links');
btn.addEventListener('click', () => { const o = links.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
document.getElementById('toTop').addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

// 色塊示意圖（換成真照片時改成 background-image）
const swatch = (p, angle = 160) => `background:linear-gradient(${angle}deg,${p.tone[0]} 0 58%,${p.tone[1]} 58%)`;
