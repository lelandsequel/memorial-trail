# Memorial Trail Ice House - Deployment Guide

## Live URL
**Production:** https://memorial-trail-9hgjr2vfc-lelandsequel-0aae5153.vercel.app

## Hosting
- **Platform:** Vercel
- **Project:** memorial-trail
- **Owner:** lelandsequel

## How to Update Content

### Option 1: Edit HTML Files Directly
All content is in the HTML files in `/memorial-trail/`. Simply edit the relevant `.html` file and redeploy:
```bash
cd /Users/sokpyeon/.openclaw/workspace/memorial-trail
vercel --prod --yes
```

### Option 2: Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select "memorial-trail" project
3. Upload new files or connect to GitHub for auto-deploys

## Adding Events/Menu Items

### Menu Items (menu.html)
Search for the menu section you want to add to (e.g., "COCKTAILS", "DRAFTS"). Add new items following this format:
```html
<div class="menu-item">
  <div class="item-name">Your New Drink</div>
  <div class="item-price">$12</div>
  <div class="item-desc">Description here</div>
</div>
```

### Events (events.html)
Events are in the weekly schedule grid. Add new events in the appropriate day column.

## Analytics Setup
To add Google Analytics or other tracking:
1. Edit each `.html` file
2. Add your analytics script before the closing `</body>` tag

## Custom Domain (Optional)
To connect a custom domain:
1. Go to Vercel Dashboard → memorial-trail → Settings → Domains
2. Add your domain and follow DNS configuration instructions

## Need Help?
Contact: Your developer
