// ============================================
//  MechChef — Home Page JS (home.js)
//  Only loaded by index.html
// ============================================

// ── DATA ──
const CUISINES = [
  {n:'All',img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=120&h=120&fit=crop',c:null},
  {n:'Indian',img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=120&h=120&fit=crop',c:280},
  {n:'Pakistani',img:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=120&h=120&fit=crop',c:190},
  {n:'Caribbean',img:'https://images.unsplash.com/photo-1544025162-d76694265947?w=120&h=120&fit=crop',c:130},
  {n:'Italian',img:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=120&h=120&fit=crop',c:160},
  {n:'Chinese',img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=120&h=120&fit=crop',c:175},
  {n:'Turkish',img:'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=120&h=120&fit=crop',c:110},
  {n:'Mediterranean',img:'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=120&h=120&fit=crop',c:95},
  {n:'Thai',img:'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=120&h=120&fit=crop',c:85},
  {n:'British',img:'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=120&h=120&fit=crop',c:70},
  {n:'Bangladeshi',img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=120&h=120&fit=crop',c:120},
];

const DIETS = ['All','Vegan','Vegetarian','Halal','Gluten Free','Under £10','Bestsellers'];

const MEALS = [
  {id:1,n:'Butter Chicken & Basmati Rice',cook:'Coming Soon',cid:1,cui:'Indian',img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop',p:8.50,tags:['Halal','Non-Veg'],desc:'Tender chicken in a rich, creamy tomato-butter sauce slow-cooked with aromatic spices. Served with fragrant basmati rice.',badge:'Bestseller',badgeC:'badge-hot',available_days:[]},
  {id:2,n:'Jerk Chicken & Rice & Peas',cook:'Coming Soon',cid:2,cui:'Caribbean',img:'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',p:9.00,tags:['Gluten Free','Non-Veg'],desc:'Authentic Jamaican jerk chicken marinated overnight in Scotch bonnet, allspice and thyme. Served with coconut rice and kidney beans.',badge:'Popular',badgeC:'badge-hot',available_days:[]},
  {id:3,n:'Homemade Lasagne al Forno',cook:'Coming Soon',cid:3,cui:'Italian',img:'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&h=400&fit=crop',p:7.50,tags:['Non-Veg'],desc:'Classic Italian lasagne layered with slow-cooked beef ragù, béchamel sauce, and three cheeses.',badge:'New',badgeC:'badge-new',available_days:[]},
  {id:4,n:'Steamed Dim Sum Basket (12 pcs)',cook:'Coming Soon',cid:4,cui:'Chinese',img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&h=400&fit=crop',p:6.50,tags:['Non-Veg'],desc:'Hand-folded pork and prawn dim sum dumplings with ginger and spring onion. Steamed fresh.',badge:'Popular',badgeC:'badge-hot',available_days:[]},
  {id:5,n:'Dal Makhani & Garlic Naan',cook:'Coming Soon',cid:1,cui:'Indian',img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop',p:7.00,tags:['Vegetarian','Halal'],desc:'Slow-cooked black lentils in a creamy tomato-butter sauce. Served with freshly baked garlic naan.',available_days:[]},
  {id:6,n:'Adana Lamb Kebab Wrap',cook:'Coming Soon',cid:5,cui:'Turkish',img:'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=400&fit=crop',p:8.00,tags:['Halal','Non-Veg'],desc:"Hand-minced lamb and beef adana kebab with sumac onions, roasted peppers and garlic yoghurt in a warm lavash wrap.",badge:"Today's Special",badgeC:'badge-special',available_days:[]},
  {id:7,n:'Dum Chicken Biryani',cook:'Coming Soon',cid:6,cui:'Pakistani',img:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop',p:9.50,tags:['Halal','Non-Veg'],desc:'Slow-cooked dum biryani with fragrant basmati, saffron, and tender chicken. Served with raita.',badge:'Bestseller',badgeC:'badge-hot',available_days:[]},
  {id:8,n:'Pad Thai with Silken Tofu',cook:'Coming Soon',cid:7,cui:'Thai',img:'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&h=400&fit=crop',p:6.99,tags:['Vegan','Gluten Free'],desc:'Classic street-style pad thai with rice noodles, silken tofu, bean sprouts, and roasted peanuts.',available_days:[]},
  {id:9,n:'Slow-Cooked Lamb Karahi',cook:'Coming Soon',cid:6,cui:'Pakistani',img:'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&h=400&fit=crop',p:10.00,tags:['Halal','Non-Veg'],desc:'Tender lamb cooked in a cast-iron karahi with tomatoes, green chillies, ginger, and whole spices.',badge:"Chef's Pick",badgeC:'badge-hot',available_days:[]},
  {id:10,n:'Classic Sunday Roast Chicken',cook:'Coming Soon',cid:8,cui:'British',img:'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600&h=400&fit=crop',p:9.99,tags:['Non-Veg'],desc:'Traditional British Sunday roast with free-range chicken, roasties, Yorkshire pudding, seasonal veg, and gravy.',badge:'Weekend Special',badgeC:'badge-special',available_days:[]},
  {id:11,n:'Wood-Fired Margherita Pizza',cook:'Coming Soon',cid:3,cui:'Italian',img:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',p:7.99,tags:['Vegetarian'],desc:'48-hour fermented dough with San Marzano tomato sauce, fresh mozzarella, and torn basil.',available_days:[]},
  {id:12,n:'Lemon Herb Mezze Bowl',cook:'Coming Soon',cid:9,cui:'Mediterranean',img:'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&h=400&fit=crop',p:6.50,tags:['Vegan','Gluten Free'],desc:'Organic quinoa with roasted courgette, aubergine, olives, and a lemon-herb tahini dressing.',badge:'New',badgeC:'badge-new',available_days:[]},
];

const COOK_PLACEHOLDERS = [
  {id:1,area:'Harrow'},{id:2,area:'Newham'},{id:3,area:'Harrow'},
  {id:4,area:'Newham'},{id:5,area:'Harrow'},{id:6,area:'Newham'},
];
let COOKS = COOK_PLACEHOLDERS.map((c, i) => ({
  id: c.id,
  full_name: 'Home Chef ' + (i + 1),
  cuisine: CUISINES[(i % 5) + 1]?.n || 'Home Cook',
  area: c.area,
  bio: 'Verified local home cook preparing fresh, homestyle meals for MechChef customers.',
  avatar_url: '',
}));

// ── STATE ──
let activeCui = 'All', activeDiet = 'All', curMeal = null, mqtyV = 1, promoOn = false;

// ── STRIPE CONFIG ──
const STRIPE_PK = 'pk_test_51TXzmGKFQGalj4g8btJktdM6Kbd5K9jWx4I7SAunjHBAKi7nx0j6qa4DlVK5CDWlCWQAWjZn44KUAM7QD38dSz8G00ve8nMlaV';
let stripe = null, stripeElements = null, stripeCardEl = null, selectedPayMethod = 'card';

// ── INIT ──
window.onload = async () => {
  try {
    buildCuisines('home-cs', true);
    buildCuisines('browse-cs', false);
    buildFilters();
    renderHomeMeals();
    renderHomeCooks();
    renderBrowse();
    renderAllCooks();
    initStripe();
  } catch(e) {
    console.error('Init error:', e);
  }
  await loadMealsFromSupabase();
  await loadCooksFromSupabase();
};

// ── SUPABASE LOADERS ──
async function loadMealsFromSupabase() {
  try {
    const { data, error } = await db.from('meals').select('*').eq('status', 'approved').eq('is_available', true);
    if (error || !data || data.length === 0) return;
    MEALS.length = 0;
    data.forEach(m => {
      MEALS.push({
        id: m.id, n: m.name, e: m.emoji || '🍽️', cook: m.cook_name || 'Local Chef',
        cid: m.cook_id, cui: m.cuisine || 'Indian',
        img: m.photo_url || m.image_url || 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop',
        p: parseFloat(m.price), tags: m.tags || [], desc: m.description || '',
        badge: m.badge || '', badgeC: m.badge_color || 'badge-hot',
        available_days: m.available_days || [],
      });
    });
    renderHomeMeals();
    renderBrowse();
  } catch(e) {
    console.log('Supabase meals load failed, using demo data', e);
  }
}

async function loadCooksFromSupabase() {
  try {
    const { data, error } = await db.from('profiles')
      .select('id, full_name, cuisine, address, bio, avatar_url, approval_status')
      .eq('role', 'cook').eq('approval_status', 'approved');
    if (error) { console.error('Cooks error:', error); return; }
    if (!data || !data.length) return;
    COOKS = data.map(c => ({
      id: c.id, full_name: c.full_name, bio: c.bio || '',
      cuisine: c.cuisine || '', area: c.address || 'London', avatar_url: c.avatar_url || '',
    }));
    const cookCards = COOKS.map(ckCard);
    document.getElementById('home-cooks').innerHTML = cookCards.slice(0, 4).join('');
    document.getElementById('all-cooks').innerHTML = cookCards.join('');
    const hd = document.getElementById('cooks-subhd');
    if (hd) hd.textContent = data.length + ' home cook' + (data.length > 1 ? 's' : '') + ' ready to cook for you';
  } catch(e) {
    console.log('Cooks load failed:', e);
  }
}

// ── STRIPE ──
function initStripe() {
  if (!STRIPE_PK.startsWith('pk_')) return;
  try {
    stripe = Stripe(STRIPE_PK);
    stripeElements = stripe.elements({
      fonts: [{ cssSrc: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap' }],
    });
    stripeCardEl = stripeElements.create('card', {
      style: {
        base: { fontFamily:"'DM Sans', system-ui, sans-serif", fontSize:'14px', fontWeight:'500', color:'#1a1a18', '::placeholder':{ color:'#b0ada6' } },
        invalid: { color:'#c0392b' },
      },
      hidePostalCode: true,
    });
    stripeCardEl.mount('#stripe-card-element');
    stripeCardEl.on('change', e => {
      const errEl = document.getElementById('stripe-card-errors');
      if (e.error) { errEl.textContent = e.error.message; errEl.style.display = 'block'; }
      else { errEl.style.display = 'none'; }
      document.getElementById('stripe-card-element').style.borderColor =
        e.error ? '#c0392b' : e.complete ? 'var(--green)' : 'var(--border)';
    });
  } catch(e) { console.warn('Stripe init failed:', e); }
}

function selPay(el, method) {
  document.querySelectorAll('.payopt').forEach(x => x.classList.remove('on'));
  el.classList.add('on');
  selectedPayMethod = method || 'card';
  document.getElementById('stripe-card-section').style.display = method === 'card' ? 'block' : 'none';
  document.getElementById('alt-pay-section').style.display = method !== 'card' ? 'block' : 'none';
  if (method !== 'card') {
    document.getElementById('alt-pay-section').innerHTML = `
      <div style="font-size:28px;margin-bottom:8px">${method === 'apple' ? '🍎' : '🅿️'}</div>
      <div style="font-weight:600;margin-bottom:4px">${method === 'apple' ? 'Apple Pay' : 'PayPal'}</div>
      <div style="font-size:12px;color:var(--muted)">You'll be redirected to complete payment after confirming your order.</div>`;
  }
}

// ── NAVIGATION ──
function go(p) {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  const pageEl = document.getElementById('page-' + p);
  if (!pageEl) { console.warn('Missing page:', p); return; }
  pageEl.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(x => x.classList.remove('active'));
  const navKey = p === 'become-cook' ? 'cook' : p;
  const nl = document.getElementById('nl-' + navKey);
  if (nl) nl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── CUISINES & FILTERS ──
function buildCuisines(id, limited) {
  const el = document.getElementById(id);
  if (!el) return;
  const list = limited ? CUISINES.slice(0, 9) : CUISINES;
  el.innerHTML = list.map(c => `<div class="c-pill ${c.n === activeCui && id === 'browse-cs' ? 'on' : ''}" onclick="setCuisineClick('${c.n}','${id}')">
    <div class="c-pill-img"><img src="${c.img}" alt="${c.n}" loading="lazy"/></div>
    <div class="nm">${c.n}</div>${c.c ? `<div class="cnt">Coming Soon</div>` : ''}
  </div>`).join('');
}
function setCuisineClick(n, from) { if (from === 'home-cs') { setCuisine(n); go('browse'); return; } setCuisine(n); buildCuisines('browse-cs', false); renderBrowse(); }
function setCuisine(n) { activeCui = n; buildCuisines('browse-cs', false); }

function buildFilters() {
  document.getElementById('browse-fbar').innerHTML = DIETS.map(d =>
    `<div class="fpill ${d === activeDiet ? 'on' : ''}" onclick="setDiet('${d}')">${d}</div>`
  ).join('');
}
function setDiet(d) { activeDiet = d; buildFilters(); renderBrowse(); }

// ── MEAL CARD ──
function mCard(m) {
  const vT = ['Vegan', 'Vegetarian', 'Gluten Free'];
  return `<div class="mcard" onclick="openModal('${m.id}')">
    <div class="mcard-img" style="background:#f0ede8;overflow:hidden;padding:0">
      ${m.badge ? `<div class="mcard-badge ${m.badgeC || 'badge-hot'}">${m.badge}</div>` : ''}
      <button class="mcard-fav" onclick="event.stopPropagation();toast('❤️ Saved to favourites!')">🤍</button>
      <img src="${m.img}" alt="${m.n}" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy"/>
    </div>
    <div class="mcard-body">
      <div class="mcard-tags">${m.tags.map(t => `<span class="mtag ${vT.includes(t) ? 'v' : ''}">${t}</span>`).join('')}</div>
      <div class="mcard-name">${m.n}</div>
      <div class="mcard-cook">🍳 ${m.cook} · Harrow & Newham</div>
      ${m.available_days && m.available_days.length ? `<div class="mcard-days" style="font-size:11px;color:var(--muted);margin-top:3px">📅 ${m.available_days.join(" · ")}</div>` : ""}
      <div class="mcard-foot">
        <div class="mcard-price">${fmt(m.p)}</div>
        <div class="mcard-meta">
          <div class="mcard-rating" style="font-size:11px;color:var(--muted)">Pre-order</div>
          <button class="add-circle" onclick="event.stopPropagation();quickAdd('${m.id}')" aria-label="Add to basket">+</button>
        </div>
      </div>
    </div>
  </div>`;
}

function renderHomeMeals() { document.getElementById('home-meals').innerHTML = MEALS.slice(0, 8).map(mCard).join(''); }
function renderBrowse() {
  let f = [...MEALS];
  if (activeCui !== 'All') f = f.filter(m => m.cui === activeCui);
  if (activeDiet === 'Vegan') f = f.filter(m => m.tags.includes('Vegan'));
  else if (activeDiet === 'Vegetarian') f = f.filter(m => m.tags.includes('Vegetarian') || m.tags.includes('Vegan'));
  else if (activeDiet === 'Halal') f = f.filter(m => m.tags.includes('Halal'));
  else if (activeDiet === 'Gluten Free') f = f.filter(m => m.tags.includes('Gluten Free'));
  else if (activeDiet === 'Under £10') f = f.filter(m => m.p <= 10);
  else if (activeDiet === 'Bestsellers') f = f.filter(m => m.badge === 'Bestseller' || m.badge === 'Popular');
  const el = document.getElementById('browse-meals'), nr = document.getElementById('no-results');
  if (!f.length) { el.innerHTML = ''; nr.style.display = 'block'; }
  else { nr.style.display = 'none'; el.innerHTML = f.map(mCard).join(''); }
}

function searchMeals(q) {
  const s = q.toLowerCase().trim();
  let f = [...MEALS];
  if (activeCui !== 'All') f = f.filter(m => m.cui === activeCui);
  if (s) f = f.filter(m => m.n.toLowerCase().includes(s) || m.cook.toLowerCase().includes(s) || m.cui.toLowerCase().includes(s) || m.tags.some(t => t.toLowerCase().includes(s)));
  const el = document.getElementById('browse-meals'), nr = document.getElementById('no-results');
  if (!f.length) { el.innerHTML = ''; nr.style.display = 'block'; }
  else { nr.style.display = 'none'; el.innerHTML = f.map(mCard).join(''); }
}

function sortMeals(v) {
  let f = [...MEALS];
  if (activeCui !== 'All') f = f.filter(m => m.cui === activeCui);
  if (v === 'price-asc') f.sort((a, b) => a.p - b.p);
  else if (v === 'price-desc') f.sort((a, b) => b.p - a.p);
  else if (v === 'popular') f.sort((a, b) => a.p - b.p);
  document.getElementById('browse-meals').innerHTML = f.map(mCard).join('');
}

// ── COOK CARD ──
function ckCard(c) {
  const initials = (c.full_name || 'Chef').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const cuisine = c.cuisine || 'Home Cook';
  const area = c.area || c.address || 'London';
  const topContent = c.avatar_url
    ? `<img src="${esc(c.avatar_url)}" alt="${esc(c.full_name)}" style="width:100%;height:100%;object-fit:cover">`
    : `<span style="font-family:'Playfair Display',serif;font-weight:700;color:var(--red);font-size:32px">${esc(initials)}</span>`;
  return `<div class="ckcard" onclick="openProfile('${esc(c.id)}')">
    <div class="ckcard-top" style="background:linear-gradient(135deg,#ffedd5,#fed7aa);display:flex;align-items:center;justify-content:center;overflow:hidden">${topContent}</div>
    <div class="ckcard-body">
      <div class="ck-name">${esc(c.full_name || 'Home Chef')}</div>
      <div class="ck-meta">${esc(cuisine)} · ${esc(area)}</div>
      ${c.bio ? `<p style="font-size:12px;color:var(--muted);margin-top:6px;line-height:1.5">${esc(c.bio.slice(0, 80))}${c.bio.length > 80 ? '...' : ''}</p>` : ''}
      <button class="btn btn-red" style="width:100%;margin-top:12px;padding:10px;font-size:13px" onclick="event.stopPropagation();filterByCook('${esc(c.id)}')">View Meals →</button>
    </div>
  </div>`;
}

function renderHomeCooks() { document.getElementById('home-cooks').innerHTML = COOKS.slice(0, 4).map(ckCard).join(''); }
function renderAllCooks() { document.getElementById('all-cooks').innerHTML = COOKS.map(ckCard).join(''); }

function filterByCook(cookId) {
  activeCui = 'All'; activeDiet = 'All';
  const cook = COOKS.find(c => String(c.id) === String(cookId));
  const cookName = cook?.full_name || 'This cook';
  const filtered = MEALS.filter(m => String(m.cid) === String(cookId));
  go('browse');
  setTimeout(() => {
    const el = document.getElementById('browse-meals'), nr = document.getElementById('no-results');
    if (!filtered.length) { el.innerHTML = `<div style="text-align:center;padding:40px;color:var(--muted)"><div style="font-size:36px;margin-bottom:10px">🍽️</div><p>${esc(cookName)} has no meals yet</p></div>`; nr.style.display = 'none'; }
    else { nr.style.display = 'none'; el.innerHTML = filtered.map(mCard).join(''); }
    const hd = document.querySelector('#page-browse h2');
    if (hd) hd.textContent = '🍳 ' + cookName + "'s Meals";
  }, 50);
}

function openProfile(id) {
  const cook = COOKS.find(c => String(c.id) === String(id)) || COOKS[0];
  if (!cook) { go('cooks'); return; }
  const meals = MEALS.filter(m => String(m.cid) === String(cook.id));
  const initials = (cook.full_name || 'Chef').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const av = cook.avatar_url
    ? `<img src="${esc(cook.avatar_url)}" alt="${esc(cook.full_name)}">`
    : `<span style="font-family:'Playfair Display',serif;font-weight:800;color:var(--red);font-size:28px">${esc(initials)}</span>`;
  document.getElementById('phero').innerHTML = `<div class="prof-top">
    <div class="prof-av">${av}</div>
    <div class="prof-info">
      <h1>${esc(cook.full_name || 'Home Chef')}</h1>
      <div class="sub">${esc(cook.cuisine || 'Home Cook')} · ${esc(cook.area || cook.address || 'London')}</div>
      <div class="prof-pills">
        <span class="ppill hl">Verified Cook</span>
        <span class="ppill">${meals.length} meal${meals.length === 1 ? '' : 's'}</span>
        <span class="ppill">Pre-order</span>
      </div>
    </div>
  </div>
  <div class="prof-bio">${esc(cook.bio || 'Fresh home-cooked meals prepared by a local MechChef cook.')}</div>`;
  document.getElementById('pstats').innerHTML = [
    ['4.9', 'Rating'], [meals.length, 'Meals'], ['£1.99', 'Delivery'], ['Fresh', 'Made to order'],
  ].map(s => `<div class="pst"><strong>${esc(s[0])}</strong><span>${esc(s[1])}</span></div>`).join('');
  document.getElementById('pmtitle').textContent = (cook.full_name || 'Cook') + "'s Menu";
  document.getElementById('profile-meals').innerHTML = meals.length
    ? meals.map(mCard).join('')
    : '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted)"><div style="font-size:36px;margin-bottom:10px">🍽️</div><p>This cook has no meals yet.</p></div>';
  go('profile');
}

// ── MEAL MODAL ──
function openModal(id) {
  curMeal = MEALS.find(m => String(m.id) === String(id)); mqtyV = 1;
  const m = curMeal, vT = ['Vegan', 'Vegetarian', 'Gluten Free'];
  document.getElementById('mimg').style.background = '#f0ede8';
  document.getElementById('mimg').style.padding = '0';
  document.getElementById('mimg').innerHTML = `${m.badge ? `<div class="mcard-badge ${m.badgeC || 'badge-hot'}" style="position:absolute;top:12px;left:12px;z-index:2">${m.badge}</div>` : ''}<img src="${m.img}" alt="${m.n}" style="width:100%;height:100%;object-fit:cover;display:block"/>`;
  document.getElementById('mname').textContent = m.n;
  document.getElementById('mcook').textContent = `by ${m.cook} · ${m.cui}`;
  document.getElementById('mtags').innerHTML = m.tags.map(t => `<span class="mtag ${vT.includes(t) ? 'v' : ''}">${t}</span>`).join('');
  document.getElementById('mdesc').textContent = m.desc;
  document.getElementById('mprice').textContent = fmt(m.p);
  document.getElementById('mqty').textContent = 1;
  document.getElementById('mwrap').classList.add('on');
}
function closeModal() { document.getElementById('mwrap').classList.remove('on'); }
function mQty(d) { mqtyV = Math.max(1, mqtyV + d); document.getElementById('mqty').textContent = mqtyV; }
function addFromModal() { addToCart(curMeal, mqtyV); closeModal(); }
function quickAdd(id) { addToCart(MEALS.find(m => String(m.id) === String(id)), 1); }

// ── CHECKOUT ──
async function goCheckout() { toggleCart(); buildCoSummary(); go('checkout'); await buildSlots(); }

function buildCoSummary() {
  const ALL_DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  document.getElementById('co-items').innerHTML = cart.map(i => {
    const days = i.available_days || [];
    const daysHtml = days.length
      ? `<div style="display:flex;gap:3px;flex-wrap:wrap;margin-top:4px">${ALL_DAYS.map(d => `<span style="font-size:9px;font-weight:700;padding:2px 5px;border-radius:4px;${days.includes(d) ? 'background:#fdecea;color:#c0392b;border:1px solid #f5c6cb' : 'background:#f5f5f0;color:#ccc;border:1px solid #eee'}">${d}</span>`).join('')}</div>` : '';
    return `<div class="osi"><div class="osi-em">${i.e || '🍽️'}</div><div style="flex:1"><div class="osi-name">${i.qty}× ${i.n}</div>${daysHtml}</div><div class="osi-price">${fmt(i.p * i.qty)}</div></div>`;
  }).join('');
  updateCoTotals();
}

function updateCoTotals() {
  const sub = cart.reduce((s, i) => s + i.p * i.qty, 0);
  const disc = promoOn ? sub * .2 : 0;
  const vat = (sub - disc) * .2;
  const tot = sub - disc + 1.99 + vat;
  document.getElementById('co-sub').textContent = fmt(sub);
  document.getElementById('co-tax').textContent = fmt(vat);
  document.getElementById('co-disc').textContent = `-${fmt(sub * .2)}`;
  document.getElementById('co-total').textContent = fmt(tot);
  document.getElementById('co-disc-row').style.display = promoOn ? 'flex' : 'none';
}

function applyPromo() {
  const v = document.getElementById('promo-inp').value.trim().toUpperCase();
  if (v === 'MECH20' && !promoOn) { promoOn = true; updateCoTotals(); toast('🎉 20% discount applied!'); }
  else if (promoOn) toast('Promo already applied!');
  else toast('❌ Invalid code. Try MECH20');
}

// ── COOK SCHEDULE & SLOTS ──
let cookScheduleData = null;
const DAY_SHORT = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const LUNCH_SLOTS = ['11:00 – 12:00','12:00 – 13:00','13:00 – 14:00'];
const DINNER_SLOTS = ['17:00 – 18:00','18:00 – 19:00','19:00 – 20:00'];

async function loadCookSchedule(cookId) {
  if (!cookId) return null;
  try {
    const { data } = await db.from('profiles').select('schedule_data, advance_days, prep_time').eq('id', cookId).single();
    return data || null;
  } catch(e) { return null; }
}

async function buildSlots() {
  const el = document.getElementById('coslots');
  el.innerHTML = '<div style="font-size:12px;color:var(--muted);padding:8px">Loading availability...</div>';
  const cookId = cart[0]?.cid || null;
  const profile = cookId ? await loadCookSchedule(cookId) : null;
  cookScheduleData = profile;
  const scheduleData = (profile?.schedule_data && Object.keys(profile.schedule_data).length > 0) ? profile.schedule_data : (profile?.schedule || {});
  const hasSchedule = scheduleData && Object.keys(scheduleData).length > 0;
  const advanceDays = parseInt(profile?.advance_days || 1);
  const mealDaysArrays = cart.map(item => item.available_days || []).filter(d => d.length > 0);
  const commonMealDays = mealDaysArrays.length > 0 ? mealDaysArrays.reduce((acc, days) => acc.filter(d => days.includes(d))) : null;
  const today = new Date(); today.setHours(0,0,0,0);
  const availableDates = [];
  for (let offset = advanceDays; offset <= advanceDays + 13; offset++) {
    const d = new Date(today); d.setDate(today.getDate() + offset);
    const dayIdx = d.getDay(); const dayKey = DAY_SHORT[dayIdx];
    const mealAllows = !commonMealDays || commonMealDays.includes(dayKey);
    const dayData = hasSchedule ? (scheduleData[dayKey] || scheduleData[dayKey.toLowerCase()] || null) : null;
    const scheduleAllows = !hasSchedule ? true : (dayData ? dayData.on !== false : false);
    if (mealAllows && scheduleAllows) availableDates.push({ date: new Date(d), dayKey, dayData });
    if (availableDates.length >= 7) break;
  }
  if (!availableDates.length) {
    el.innerHTML = `<div style="padding:16px;background:#fef2f2;border-radius:10px;font-size:13px;color:#991b1b;text-align:center">⚠️ This cook has no available delivery days in the next two weeks. Please try another cook.</div>`;
    return;
  }
  const advanceNote = advanceDays >= 1 ? `<div style="background:#fef3c7;border:1px solid #fcd34d;border-radius:9px;padding:10px 14px;font-size:12px;color:#92400e;margin-bottom:14px;display:flex;align-items:center;gap:8px">⏰ <strong>Pre-order required:</strong> Orders must be placed at least <strong>${advanceDays} day${advanceDays > 1 ? 's' : ''}</strong> in advance.</div>` : '';
  el.outerHTML = `<div id="coslots">
    ${advanceNote}
    <div style="margin-bottom:12px">
      <div style="font-size:11px;font-weight:700;color:var(--muted);letter-spacing:.5px;text-transform:uppercase;margin-bottom:8px">Select Delivery Date</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap" id="date-pills">
        ${availableDates.map((d, i) => {
          const label = d.date.toLocaleDateString('en-GB', { weekday:'short', day:'numeric', month:'short' });
          return `<div class="slot date-pill${i === 0 ? ' on' : ''}" data-date="${d.date.toISOString()}" data-daykey="${d.dayKey}" onclick="selDate(this)">${label}</div>`;
        }).join('')}
      </div>
    </div>
    <div>
      <div style="font-size:11px;font-weight:700;color:var(--muted);letter-spacing:.5px;text-transform:uppercase;margin-bottom:8px">Select Time Slot</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px" id="time-slots"></div>
    </div>
  </div>`;
  renderTimeSlots(availableDates[0].dayKey, availableDates[0].dayData);
}

function selDate(el) {
  document.querySelectorAll('.date-pill').forEach(d => d.classList.remove('on'));
  el.classList.add('on');
  const dayKey = el.dataset.daykey;
  const sd = (cookScheduleData?.schedule_data && Object.keys(cookScheduleData.schedule_data).length > 0) ? cookScheduleData.schedule_data : (cookScheduleData?.schedule || {});
  renderTimeSlots(dayKey, sd[dayKey] || sd[dayKey.toLowerCase()] || null);
}

function renderTimeSlots(dayKey, dayData) {
  const el = document.getElementById('time-slots');
  if (!el) return;
  let slots = [];
  if (dayData) { if (dayData.lunch !== false) slots.push(...LUNCH_SLOTS); if (dayData.dinner !== false) slots.push(...DINNER_SLOTS); }
  else { slots = [...LUNCH_SLOTS, ...DINNER_SLOTS]; }
  if (!slots.length) { el.innerHTML = `<div style="grid-column:1/-1;font-size:12px;color:#991b1b;padding:8px;background:#fef2f2;border-radius:8px">No time slots available for this day.</div>`; return; }
  el.innerHTML = slots.map((s, i) => `<div class="slot${i === 0 ? ' on' : ''}" onclick="selSlot(this)">${s}</div>`).join('');
}

function selSlot(el) { document.querySelectorAll('#time-slots .slot').forEach(s => s.classList.remove('on')); el.classList.add('on'); }

function getSelectedDelivery() {
  const datePill = document.querySelector('.date-pill.on');
  const timeSlot = document.querySelector('#time-slots .slot.on');
  const date = datePill ? new Date(datePill.dataset.date).toLocaleDateString('en-GB', { weekday:'long', day:'numeric', month:'long' }) : '';
  const time = timeSlot ? timeSlot.textContent : '';
  return date && time ? `${date}, ${time}` : (time || '');
}

// ── PLACE ORDER ──
async function placeOrder() {
  const sub = cart.reduce((s, i) => s + i.p * i.qty, 0);
  const disc = promoOn ? sub * .2 : 0;
  const vat = (sub - disc) * .2;
  const tot = sub - disc + 1.99 + vat;
  const slot = getSelectedDelivery() || '12:00 – 13:00';
  const btn = document.querySelector('.cp-cta');
  if (!cart.length) { toast('Your basket is empty!'); return; }
  let user = null;
  try { const r = await db.auth.getUser(); user = r.data.user; } catch(e) {}
  if (!user) { toast('Please log in to place an order!'); setTimeout(() => window.location.href = 'auth.html', 1500); return; }
  if (btn) { btn.disabled = true; btn.textContent = 'Processing payment...'; }
  try {
    if (selectedPayMethod === 'card' && stripe && stripeCardEl) {
      const name = document.getElementById('stripe-name')?.value.trim() || user.email;
      const { paymentMethod, error: pmErr } = await stripe.createPaymentMethod({ type:'card', card:stripeCardEl, billing_details:{ name, email:user.email } });
      if (pmErr) { if (btn) { btn.disabled = false; btn.textContent = 'Place Order 🎉'; } document.getElementById('stripe-card-errors').textContent = pmErr.message; document.getElementById('stripe-card-errors').style.display = 'block'; toast('❌ Card error: ' + pmErr.message); return; }
      const payRes = await fetch('https://ccatfstzthkwridxwzfg.supabase.co/functions/v1/stripe-payment', { method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer sb_publishable_B2MAOdQRfp8Zf9HR1GIhUA_VFmUax0-'}, body:JSON.stringify({payment_method_id:paymentMethod.id, amount:tot, currency:'gbp'}) }); const payData = await payRes.json(); if(!payData.success){ if(btn){btn.disabled=false;btn.textContent='Place Order 🎉';} toast('❌ Payment failed: '+(payData.error||'Try again')); return; } await db.from('orders').insert([{ customer_id:user.id, cook_id:cart[0]?.cid||null, items:cart.map(i=>({id:i.id,name:i.n,qty:i.qty,price:i.p,cook:i.cook,cook_id:i.cid})), total:parseFloat(tot.toFixed(2)), subtotal:parseFloat(sub.toFixed(2)), delivery_fee:1.99, vat:parseFloat(vat.toFixed(2)), slot, status:'paid', promo:promoOn?'MECH20':null, payment_method:'stripe_card', stripe_pm_id:paymentMethod.id, created_at:new Date().toISOString() }]);
    } else {
      await db.from('orders').insert([{ customer_id:user.id, cook_id:cart[0]?.cid||null, items:cart.map(i=>({id:i.id,name:i.n,qty:i.qty,price:i.p,cook:i.cook})), total:parseFloat(tot.toFixed(2)), subtotal:parseFloat(sub.toFixed(2)), delivery_fee:1.99, vat:parseFloat(vat.toFixed(2)), slot, status:'pending', payment_method:selectedPayMethod, promo:promoOn?'MECH20':null, created_at:new Date().toISOString() }]);
    }
  } catch(e) { if (btn) { btn.disabled = false; btn.textContent = 'Place Order 🎉'; } toast('Order failed: ' + (e.message || 'Try again')); return; }
  document.getElementById('succ-info').innerHTML = `<div><span>Subtotal</span><span>${fmt(sub)}</span></div>${promoOn ? `<div style="color:var(--green)"><span>Promo (MECH20)</span><span>-${fmt(sub*.2)}</span></div>` : ''}<div><span>Delivery fee</span><span>£1.99</span></div><div><span>VAT (20%)</span><span>${fmt(vat)}</span></div><div><span>Total Paid</span><span style="color:var(--green);font-weight:800">${fmt(tot)}</span></div><div><span>Slot</span><span>${slot}</span></div><div><span>Payment</span><span>${selectedPayMethod === 'card' ? '💳 Card' : '🔗 ' + selectedPayMethod}</span></div>`;
  cart = []; promoOn = false; renderCart();
  if (btn) { btn.disabled = false; btn.textContent = 'Place Order 🎉'; }
  go('success');
}

// ── REVIEWS ──
function openRevModal() { document.getElementById('rev-modal-wrap').classList.add('on'); }
function closeRevModal() { document.getElementById('rev-modal-wrap').classList.remove('on'); }
function setRevStar(n) { document.querySelectorAll('.star-pick span').forEach((s, i) => { s.textContent = i < n ? '★' : '☆'; }); document.getElementById('rev-star-val').value = n; }
function submitReview() {
  const txt = document.getElementById('rev-text-inp').value.trim();
  if (!txt) { toast('Please write your review first!'); return; }
  closeRevModal();
  toast('🎉 Review submitted! Thank you for your feedback.');
}

// ── HERO SEARCH ──
function heroSearch() { const cui = document.getElementById('h-cuisine').value; if (cui) setCuisine(cui); go('browse'); renderBrowse(); }

// ── COOK INTEREST FORM ──
async function submitCookInterest() {
  const name = document.getElementById('cook-name')?.value.trim();
  const email = document.getElementById('cook-email')?.value.trim();
  const phone = document.getElementById('cook-phone')?.value.trim() || '';
  const area = document.getElementById('cook-area')?.value || '';
  const cuisine = document.getElementById('cook-cuisine')?.value || '';
  const hygiene = document.getElementById('cook-hygiene')?.checked || false;
  if (!name || !email) { toast('Please enter your name and email'); return; }
  try {
    await db.from('cook_waitlist').insert([{ name, email, phone, area, cuisine, hygiene, submitted_at: new Date().toISOString(), status: 'pending' }]);
  } catch(e) { console.warn('Waitlist save failed:', e); }
  toast("🎉 You're on the list! We'll be in touch soon.");
  ['cook-name','cook-email','cook-phone'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
}
