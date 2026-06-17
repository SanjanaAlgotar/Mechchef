// ============================================
//  MechChef — Shared JavaScript (main.js)
//  Loaded by ALL pages
// ============================================

// ── SUPABASE CONFIG ──
const SUPABASE_URL  = 'https://ccatfstzthkwridxwzfg.supabase.co';
const SUPABASE_ANON = 'sb_publishable_B2MAOdQRfp8Zf9HR1GIhUA_VFmUax0-';
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON);
const GOOGLE_GEO_KEY = 'AIzaSyAvomPdUJ1vXY4O41eZOYF_5mjnTzwcyfY';

let currentUser = null;

// ── AUTH ──
async function initAuth() {
  const { data: { user } } = await db.auth.getUser();
  currentUser = user;
  const role = user?.user_metadata?.role;
  const navAuth = document.getElementById('nav-auth');
  if (!navAuth) return;
  if (user) {
    const name = user.user_metadata?.full_name || user.email.split('@')[0];
    navAuth.innerHTML = `
      <span style="font-size:13px;font-weight:600;color:var(--text)">👋 Hi, ${name}</span>
      <button class="btn btn-ghost" onclick="window.location.href='customer-dashboard.html'" style="font-size:12px;padding:7px 14px">My Account</button>
      <button class="btn btn-ghost" onclick="signOut()" style="font-size:12px;padding:7px 14px">Log out</button>
    `;
    const mobAuth = document.getElementById('mob-auth-links'); const mobUser = document.getElementById('mob-user-links'); if(mobAuth) mobAuth.style.display='none'; if(mobUser){ mobUser.style.display='block'; mobUser.insertAdjacentHTML('afterbegin','<div style="padding:12px 16px;font-size:14px;font-weight:700;color:var(--dark)">👋 Hi, '+name+'</div>'); }
    if (role === 'cook') window.location.href = 'cook-dashboard.html';
    if (role === 'admin') window.location.href = 'admin.html';
  }
}

async function signOut() {
  await db.auth.signOut();
  window.location.reload();
}

// ── TOAST ──
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast-el');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('on'), 2600);
}

// ── CART (shared state via localStorage) ──
let cart = JSON.parse(localStorage.getItem('mc_cart') || '[]');
const fmt = n => `£${n.toFixed(2)}`;

function addToCart(meal, qty) {
  if (!meal) return;
  const ex = cart.find(i => String(i.id) === String(meal.id));
  if (ex) ex.qty += qty; else cart.push({ ...meal, qty });
  localStorage.setItem('mc_cart', JSON.stringify(cart));
  renderCart();
  toast(`✅ Added ${meal.n.split(' ').slice(0, 4).join(' ')}…`);
}

function changeQty(id, d) {
  const i = cart.findIndex(x => String(x.id) === String(id));
  if (i < 0) return;
  cart[i].qty += d;
  if (cart[i].qty <= 0) cart.splice(i, 1);
  localStorage.setItem('mc_cart', JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const sub = cart.reduce((s, i) => s + i.p * i.qty, 0);
  const cnt = cart.reduce((s, i) => s + i.qty, 0);
  const cn = document.getElementById('cn');
  if (cn) { cn.textContent = cnt; cn.style.display = cnt ? 'flex' : 'none'; } const cn2 = document.getElementById('cn2'); if (cn2) { cn2.textContent = cnt; cn2.style.display = cnt ? 'flex' : 'none'; }
  const body = document.getElementById('cp-body');
  const foot = document.getElementById('cp-foot');
  if (!body) return;
  if (!cart.length) {
    body.innerHTML = `<div class="cp-empty"><div>🛒</div><p>Your basket is empty.<br>Browse meals and add something delicious!</p></div>`;
    if (foot) foot.style.display = 'none';
    return;
  }
  body.innerHTML = cart.map(i => `<div class="ci">
    <div class="ci-em">${i.e || '🍽️'}</div>
    <div class="ci-inf">
      <div class="ci-name">${i.n}</div>
      <div class="ci-sub">by ${i.cook}</div>
      <div class="ci-ctrl">
        <button class="qbtn" onclick="changeQty('${i.id}',-1)">−</button>
        <span style="font-size:14px;font-weight:700;min-width:20px;text-align:center">${i.qty}</span>
        <button class="qbtn" onclick="changeQty(${i.id},1)">+</button>
      </div>
    </div>
    <div class="ci-price">${fmt(i.p * i.qty)}</div>
  </div>`).join('');
  if (foot) foot.style.display = 'block';
  const cpSub = document.getElementById('cp-sub');
  const cpTot = document.getElementById('cp-tot');
  if (cpSub) cpSub.textContent = fmt(sub);
  if (cpTot) cpTot.textContent = fmt(sub + 1.99);
}

function toggleCart() {
  document.getElementById('cart')?.classList.toggle('on');
  document.getElementById('overlay')?.classList.toggle('on');
}

// ── FOOTER MODALS ──
function showComingSoon(feature) {
  const title = document.getElementById('cs-title');
  const modal = document.getElementById('coming-soon-modal');
  if (title) title.textContent = feature + ' — Coming Soon!';
  if (modal) modal.style.display = 'flex';
}
function closeComingSoon() {
  document.getElementById('coming-soon-modal').style.display = 'none';
}

// Close modals on background click
document.addEventListener('DOMContentLoaded', () => {
  ['coming-soon-modal'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', function (e) {
      if (e.target === this) this.style.display = 'none';
    });
  });
  renderCart();
  initAuth();
});

// ── ESCAPE HTML ──
function esc(v) {
  return String(v ?? '').replace(/[&<>"']/g, ch => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
  ));
}
