# Deployment Guide for AJ Drones Website

## Quick Deployment Options

### Option 1: Netlify (Recommended)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [Netlify](https://www.netlify.com)
   - Drag and drop the `build` folder
   - Or connect your Git repository for automatic deployments

3. **Routing:**
   - The `public/_redirects` file is already included
   - This ensures all routes work correctly on Netlify

### Option 2: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Routing:**
   - Vercel automatically handles React Router routing
   - No additional configuration needed

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add to scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

3. **Add homepage:**
   ```json
   "homepage": "https://yourusername.github.io/aj-drones"
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

   **Note:** For GitHub Pages, you may need to switch to HashRouter in `src/App.js`:
   ```javascript
   import { HashRouter as Router } from 'react-router-dom';
   ```

### Option 4: Traditional Web Hosting

1. **Build:**
   ```bash
   npm run build
   ```

2. **Upload:**
   - Upload the contents of the `build` folder to your web server
   - Ensure your server is configured to serve `index.html` for all routes

3. **Apache (.htaccess):**
   Create `.htaccess` in the build folder:
   ```apache
   Options -MultiViews
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.html [QR,L]
   ```

4. **Nginx:**
   Add to your nginx config:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

## Environment Variables (Optional)

If you need to add environment variables:

1. Create `.env` file:
   ```
   REACT_APP_API_URL=your_api_url
   ```

2. Access in code:
   ```javascript
   process.env.REACT_APP_API_URL
   ```

## Post-Deployment Checklist

- [ ] Test all routes work correctly
- [ ] Verify images load properly
- [ ] Check mobile responsiveness
- [ ] Test contact form (if backend is connected)
- [ ] Verify workshop data displays correctly
- [ ] Check navigation on all pages
- [ ] Test on different browsers

## Custom Domain

1. **Netlify/Vercel:**
   - Go to domain settings
   - Add your custom domain
   - Update DNS records as instructed

2. **Update base URL if needed:**
   - If using a subdirectory, update routing configuration

## Troubleshooting

### Routes return 404
- Ensure redirect rules are configured (Netlify: `_redirects`, Apache: `.htaccess`, Nginx: config)
- For GitHub Pages, use HashRouter instead of BrowserRouter

### Images not loading
- Check image URLs in `workshopdata.js`
- Ensure images are accessible (use CDN or host images)
- Check browser console for errors

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (requires Node 14+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

