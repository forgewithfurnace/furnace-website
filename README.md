# FURNACE Website Deployment Guide

## 🔥 Your Complete Website is Ready!

This package includes:
- `index.html` - Main website
- `styles.css` - Fire-to-ice gradient styling
- `script.js` - Medium blog integration
- `furnace_image.jpg` - Your awesome logo
- `README.md` - This file

---

## 📋 Step-by-Step Deployment (FREE with GitHub Pages)

### Step 1: Create GitHub Account
1. Go to https://github.com
2. Click "Sign up"
3. Create account (free)

### Step 2: Create Repository
1. Click green "New" button (top left)
2. Repository name: `furnace-website`
3. Description: "FURNACE - AI Coding with Persistent Memory"
4. Select **Public**
5. Check "Add a README file"
6. Click "Create repository"

### Step 3: Upload Website Files
1. In your repository, click "Add file" → "Upload files"
2. Drag and drop ALL these files:
   - index.html
   - styles.css
   - script.js
   - furnace_image.jpg
3. Commit message: "Initial website"
4. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to repository "Settings" (top right)
2. Click "Pages" in left sidebar
3. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
4. Click "Save"
5. Wait 1-2 minutes
6. Your site will be live at: `https://yourusername.github.io/furnace-website`

### Step 5: Connect Your Custom Domain
1. In GitHub Pages settings (same page as Step 4)
2. Under "Custom domain", enter your domain: `forgewithfurnace.com`
3. Click "Save"
4. Go to your domain registrar (where you bought the domain)
5. Add these DNS records:

**For root domain (forgewithfurnace.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

6. Wait 15-60 minutes for DNS propagation
7. Back in GitHub Pages settings, check "Enforce HTTPS" (for SSL)

✅ **Done!** Your site is now live at your custom domain with free SSL!

---

## 🎨 Customization

### Update Your Links
Edit `index.html` and replace:
- `yourusername` → your actual GitHub username
- `https://github.com/yourusername/furnace` → your actual FURNACE repo
- `contact@forgewithfurnace.com` → your actual email

### Update Medium Username
In `script.js`, line 6, replace:
- `@forgewithfurnace` → your actual Medium username

### Change Colors
Edit `styles.css` variables at the top:
```css
:root {
    --fire-red: #FF3D00;    /* Adjust fire colors */
    --ice-cyan: #00FFFF;    /* Adjust ice colors */
}
```

---

## 🔧 Troubleshooting

**Site not loading?**
- Wait 2-5 minutes after enabling GitHub Pages
- Check repository is Public, not Private
- Verify files are in root directory

**Custom domain not working?**
- DNS can take up to 24 hours to propagate
- Verify DNS records are correct
- Check "Enforce HTTPS" is enabled

**Blog posts not showing?**
- Verify Medium username in script.js
- Check Medium profile is public
- Try visiting: `https://medium.com/@yourusername`

**Logo not showing?**
- Verify `furnace_image.jpg` is uploaded
- File name is case-sensitive

---

## 📱 Mobile Responsive
Website automatically adapts to mobile screens!

---

## 🚀 Advanced (Optional)

### Add Google Analytics
1. Get tracking ID from analytics.google.com
2. Add to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

### Add Favicon
1. Create 32x32px icon from your logo
2. Upload as `favicon.ico`
3. Add to `index.html` in `<head>`:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

---

## 📝 Updating Your Site

To make changes:
1. Edit files locally
2. Go to your repository on GitHub
3. Click on file to edit
4. Click pencil icon (Edit)
5. Make changes
6. Commit changes
7. Changes go live in ~1 minute!

---

## 💰 Cost Breakdown

- **GitHub Pages**: FREE ✅
- **SSL Certificate**: FREE (auto) ✅
- **Bandwidth**: Unlimited ✅
- **Custom Domain**: Already paid ✅
- **Total monthly cost**: $0 🎉

---

## 🎯 Your Website Features

✅ Modern fire-to-ice gradient design  
✅ Responsive (mobile/tablet/desktop)  
✅ Auto-loading Medium blog posts  
✅ Smooth scroll animations  
✅ Fast loading (optimized)  
✅ SEO friendly  
✅ FREE hosting forever  
✅ Custom domain ready  
✅ SSL certificate (HTTPS)  

---

## 📞 Need Help?

1. Check GitHub Pages status: https://www.githubstatus.com
2. GitHub Pages docs: https://docs.github.com/en/pages
3. DNS propagation checker: https://dnschecker.org

---

## 🔥 You're All Set!

Your FURNACE website is production-ready and looks amazing!

Just follow the steps above and you'll be live in 15 minutes.

**Questions? The website design matches your logo's fire-to-ice aesthetic perfectly!**
