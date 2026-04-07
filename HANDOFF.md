# Memorial Trail Ice House - Project Handoff

## What Was Built
A complete 7-page website for Memorial Trail Ice House, a craft bar in Houston, TX.

## Pages
- **index.html** - Home page with hero, about section, hours, and CTA
- **menu.html** - Full drink menu (cocktails, drafts, wine, food)
- **events.html** - Weekly events calendar with happy hour, live music, trivia
- **gallery.html** - Photo gallery with lightbox functionality
- **story.html** - Bar's origin story and neighborhood history
- **contact.html** - Location, hours, contact info, map
- **deck.html** - Deck/patio section (additional promotional page)

## Technologies Used
- Pure HTML5, CSS3, JavaScript (no frameworks)
- Google Fonts (Playfair Display, DM Sans, Oswald)
- Responsive design (mobile, tablet, desktop)
- CSS Grid and Flexbox layouts

## File Structure
```
memorial-trail/
├── index.html
├── menu.html
├── events.html
├── gallery.html
├── story.html
├── contact.html
├── deck.html
├── style.css
├── script.js
├── images/         (17+ photos)
│   └── gallery/    (gallery subdirectory)
├── videos/         (3 .mp4 files)
├── DEPLOYMENT.md   (this file)
└── HANDOFF.md
```

## How to Make Common Updates

### Update Hours
Edit in `index.html` or `contact.html`. Look for:
```html
<div class="hours-item">
  <span class="hours-day">Mon – Fri</span>
  <span class="hours-time">Noon – Late</span>
</div>
```

### Update Menu Prices/Items
Edit `menu.html`. Each drink follows this pattern:
```html
<div class="menu-item">
  <div class="item-name">Old Fashioned</div>
  <div class="item-price">$14</div>
  <div class="item-desc">Bourbon, bitters, orange</div>
</div>
```

### Add Event Photos
Add images to `/images/gallery/` and reference in `events.html`.

### Change Contact Info
Edit in `contact.html`:
- Address: Look for "info-secondary" class
- Hours: Look for "hours-table" class

## Notes for Client
- **Address:** Currently shows "Houston, TX" — update with actual street address
- **Phone:** No phone number added yet — add to contact.html
- **SEO:** Basic meta tags added; consider adding Google Analytics

## Support
For questions about this site, contact the developer.
