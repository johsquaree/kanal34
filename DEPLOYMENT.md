# 🚀 Deployment Guide

This guide explains how to deploy the Kanal 34 News Portal to various platforms.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git repository access
- Platform account (Vercel, Netlify, etc.)

## 🏗️ Build Process

### 1. Install Dependencies
```bash
# Navigate to the latest version
cd gun20

# Install dependencies
npm install
```

### 2. Build for Production
```bash
# Create production build
npm run build

# The build will be created in the .next directory
```

### 3. Test Production Build
```bash
# Start production server locally
npm start

# Visit http://localhost:3000
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository

2. **Configure Project**
   - Root Directory: `gun20`
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Select your repository

2. **Configure Build**
   - Base Directory: `gun20`
   - Build Command: `npm run build`
   - Publish Directory: `gun20/.next`

3. **Deploy**
   - Click "Deploy site"
   - Wait for deployment to complete

### Option 3: Traditional Hosting

1. **Build the Project**
   ```bash
   cd gun20
   npm run build
   npm run export  # If using static export
   ```

2. **Upload Files**
   - Upload the `.next` directory to your server
   - Configure your web server (Apache/Nginx)
   - Set up Node.js environment

3. **Configure Server**
   - Install Node.js on your server
   - Install PM2 for process management
   - Set up reverse proxy

## 🔧 Environment Configuration

### Environment Variables
Create a `.env.local` file in the `gun20` directory:

```env
# Optional: Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_API_URL=https://api.your-domain.com
```

### Build Configuration
The project uses Next.js default configuration. You can customize it in `next.config.ts`:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your custom configuration here
  output: 'standalone', // For Docker deployment
  images: {
    domains: ['picsum.photos'], // Add external image domains
  },
}

module.exports = nextConfig
```

## 🐳 Docker Deployment

### 1. Create Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY gun20/package*.json ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY gun20/package*.json ./
RUN npm ci
COPY gun20/ .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### 2. Build and Run
```bash
# Build Docker image
docker build -t kanal34-news-portal .

# Run container
docker run -p 3000:3000 kanal34-news-portal
```

## 📊 Performance Optimization

### 1. Enable Compression
```javascript
// next.config.ts
const nextConfig = {
  compress: true,
  // ... other config
}
```

### 2. Configure Caching
```javascript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

### 3. Image Optimization
```javascript
// next.config.ts
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
}
```

## 🔍 Monitoring & Analytics

### 1. Add Analytics
```javascript
// pages/_app.tsx or app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 2. Error Monitoring
```javascript
// Add Sentry or similar service
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
})
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (18+)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Deployment Fails**
   - Verify build command
   - Check environment variables
   - Review platform logs

3. **Performance Issues**
   - Enable compression
   - Optimize images
   - Check bundle size

### Debug Commands
```bash
# Check build locally
npm run build

# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build

# Check for TypeScript errors
npx tsc --noEmit
```

## 📞 Support

If you encounter issues during deployment:

1. Check the [GitHub Issues](https://github.com/yourusername/kanal34/issues)
2. Review the [Documentation](./README.md)
3. Contact the development team

---

**Happy Deploying! 🚀**