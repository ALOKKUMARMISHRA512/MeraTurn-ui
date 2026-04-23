# 🚀 Deployment Guide

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Preview Production Build Locally

```bash
npm run preview
```

## Deployment Options

### 1. Vercel (Recommended)

**Easiest deployment for React apps**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Import your repository
3. Vercel auto-detects Vite
4. Deploy!

**Configuration**: No config needed, Vercel auto-detects Vite.

---

### 2. Netlify

**Great for static sites**

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Or drag & drop:
1. Go to [netlify.com](https://netlify.com)
2. Drag the `dist/` folder
3. Done!

**Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

**Free hosting on GitHub**

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/meraturn",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/meraturn/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. Firebase Hosting

**Google's hosting solution**

```bash
# Install Firebase CLI
npm i -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy
```

**Configuration** (`firebase.json`):
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

### 5. AWS S3 + CloudFront

**Enterprise-grade hosting**

1. Build the app:
```bash
npm run build
```

2. Create S3 bucket:
```bash
aws s3 mb s3://meraturn-app
```

3. Upload files:
```bash
aws s3 sync dist/ s3://meraturn-app --delete
```

4. Enable static website hosting in S3 console

5. (Optional) Set up CloudFront for CDN

---

### 6. Docker

**Containerized deployment**

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Build and run:
```bash
docker build -t meraturn .
docker run -p 80:80 meraturn
```

---

## Environment Variables

If you need environment variables:

1. Create `.env.production`:
```env
VITE_API_URL=https://api.meraturn.com
VITE_APP_NAME=MeraTurn
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Add to `.gitignore`:
```
.env.production
```

---

## Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Check all routes work correctly
- [ ] Verify responsive design on mobile
- [ ] Test all interactive features
- [ ] Check browser console for errors
- [ ] Optimize images if needed
- [ ] Update meta tags in `index.html`
- [ ] Add favicon
- [ ] Set up analytics (optional)

---

## Performance Optimization

### 1. Code Splitting
Already handled by Vite automatically.

### 2. Image Optimization
```bash
# Install image optimizer
npm install --save-dev vite-plugin-image-optimizer

# Add to vite.config.ts
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    ViteImageOptimizer()
  ]
});
```

### 3. Compression
Most hosting providers (Vercel, Netlify) handle this automatically.

For custom servers, enable gzip/brotli compression.

---

## Custom Domain

### Vercel
1. Go to project settings
2. Add custom domain
3. Update DNS records

### Netlify
1. Go to domain settings
2. Add custom domain
3. Netlify provides DNS or use external DNS

### GitHub Pages
1. Add `CNAME` file to `public/` folder:
```
meraturn.com
```
2. Update DNS records

---

## SSL Certificate

All recommended hosting providers (Vercel, Netlify, Firebase) provide free SSL certificates automatically.

---

## Monitoring & Analytics

### Google Analytics
Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Sentry (Error Tracking)
```bash
npm install @sentry/react
```

---

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Troubleshooting

### Routes not working after deployment
Add redirect rules (see hosting-specific configs above).

### Assets not loading
Check `base` path in `vite.config.ts`.

### Build fails
- Clear `node_modules` and reinstall
- Check Node.js version (18+)
- Review build logs for specific errors

### Large bundle size
- Use code splitting
- Lazy load routes
- Optimize images
- Remove unused dependencies

---

## Post-Deployment

1. **Test thoroughly** on production URL
2. **Monitor performance** using Lighthouse
3. **Set up error tracking** (Sentry)
4. **Add analytics** (Google Analytics)
5. **Share with stakeholders**

---

## Quick Deploy Commands

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod --dir=dist

# GitHub Pages
npm run deploy

# Firebase
firebase deploy
```

---

**Recommended for this project**: Vercel or Netlify for easiest deployment with zero configuration.

**For production apps**: Consider AWS S3 + CloudFront or custom server with Docker.

---

Need help? Check the hosting provider's documentation or create an issue in the repository.
