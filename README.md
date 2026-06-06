# MechChef — Refactored Project Structure

## What changed from original

| Before | After |
|--------|-------|
| 5 HTML files, all inline CSS/JS | 10 HTML files + separate CSS/JS |
| Everything crammed into index.html | Each section is its own page |
| CSS repeated in every file | One shared css/style.css |
| JS mixed inside HTML tags | js/main.js (shared) + js/home.js (page JS) |
| No folder structure | Clean css/, js/, assets/ folders |

## Complete File Structure

```
Mechchef/
├── index.html              ← Homepage (hero, cuisines, meals, cooks, how-it-works, reviews)
├── meals.html              ← Browse all meals (NEW)
├── cooks.html              ← Find home cooks (NEW)
├── how-it-works.html       ← How MechChef works + FAQ (NEW)
├── reviews.html            ← Customer reviews + write review (NEW)
├── cook-with-us.html       ← Cook registration & waitlist (NEW)
├── auth.html               ← Login / Sign up
├── cook-dashboard.html     ← Cook dashboard
├── customer-dashboard.html ← Customer dashboard
├── admin.html              ← Admin panel
│
├── css/
│   └── style.css           ← Shared styles (ALL pages link to this)
│
├── js/
│   ├── main.js             ← Shared JS: cart, auth, toast, modals
│   └── home.js             ← index.html JS: meals data, cooks, checkout, Stripe
│
└── assets/
    └── images/             ← Put your images here
```

## What each HTML page links to

Every page `<head>` includes:
```html
<link rel="stylesheet" href="css/style.css">
```

Every page before `</body>` includes:
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
<script src="js/main.js"></script>
```

index.html additionally includes:
```html
<script src="https://js.stripe.com/v3/"></script>
<script src="js/home.js"></script>
```

## How to deploy to GitHub + Vercel

1. Download and unzip this file
2. Delete everything in your GitHub repo (keep the repo itself)
3. Upload all files maintaining the same folder structure
4. Vercel auto-deploys on every push ✅

## Navbar links (all pages are now connected)

- Home → index.html
- Browse Meals → meals.html
- Find Cooks → cooks.html
- How It Works → how-it-works.html
- Reviews → reviews.html
- Cook with us → cook-with-us.html
- Cook Dashboard → cook-dashboard.html
- Customer Dashboard → customer-dashboard.html
- Admin → admin.html
