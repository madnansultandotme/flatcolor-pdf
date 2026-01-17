# Deployment Guide

This guide covers deploying Flatcolor PDF to various hosting platforms.

## Pre-Deployment Checklist

- [ ] Run `npm run build` locally to ensure no build errors
- [ ] Test the production build with `npm run preview`
- [ ] Update environment variables if needed
- [ ] Ensure all dependencies are up to date
- [ ] Test on multiple devices (mobile, tablet, desktop)

## Netlify Deployment

### Option 1: Deploy via Git (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider and select your repository
5. Configure build settings:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### Custom Domain on Netlify

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Vercel Deployment

### Option 1: Deploy via Git (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## GitHub Pages Deployment

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts` to set the base path:
```typescript
export default defineConfig({
  base: '/flatcolor-pdf/', // Replace with your repo name
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root

## AWS S3 + CloudFront

### 1. Build the project
```bash
npm run build
```

### 2. Create S3 Bucket
```bash
aws s3 mb s3://flatcolor-pdf
aws s3 website s3://flatcolor-pdf --index-document index.html --error-document index.html
```

### 3. Upload files
```bash
aws s3 sync dist/ s3://flatcolor-pdf --delete
```

### 4. Set up CloudFront (optional but recommended)
- Create a CloudFront distribution
- Set origin to your S3 bucket
- Configure SSL certificate
- Set default root object to `index.html`

## Docker Deployment

### Create Dockerfile
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

### Create nginx.conf
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### Build and run
```bash
docker build -t flatcolor-pdf .
docker run -p 8080:80 flatcolor-pdf
```

## Environment Variables

For production deployments, set these environment variables in your hosting platform:

- `VITE_APP_NAME`: Application name
- `VITE_APP_DESCRIPTION`: Application description

## Performance Optimization

### Enable Compression
Most hosting platforms enable gzip/brotli compression by default. Verify with:
```bash
curl -H "Accept-Encoding: gzip" -I https://your-domain.com
```

### CDN Configuration
- Enable CDN on your hosting platform
- Set appropriate cache headers
- Use HTTP/2 or HTTP/3 if available

### Monitoring
Consider adding:
- Google Analytics or Plausible for usage tracking
- Sentry for error tracking
- Lighthouse CI for performance monitoring

## Troubleshooting

### Build Fails
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist`
- Check Node.js version: `node --version` (should be 16+)

### 404 on Refresh
Configure your hosting platform to redirect all routes to `index.html`:

**Netlify**: Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Images Not Loading
- Ensure images are in the `public` folder
- Check file paths are relative
- Verify CORS settings if loading from external sources

## Post-Deployment

- [ ] Test all features on production
- [ ] Verify mobile responsiveness
- [ ] Check page load speed with Lighthouse
- [ ] Test PDF generation functionality
- [ ] Verify all links work correctly
- [ ] Set up monitoring and analytics

## Support

For deployment issues, check:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- Platform-specific documentation
- GitHub Issues

---

Happy deploying! 🚀
