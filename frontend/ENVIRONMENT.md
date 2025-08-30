# Frontend Environment Configuration

This document explains how to set up environment variables for the Bhargavi Healthcare frontend.

## 🚀 Environment Variables

### Required Variables

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `NEXT_PUBLIC_BACKEND_URL` | Backend API URL (client-side accessible) | `https://healthcareproject-39oy.onrender.com` |
| `BACKEND_URL` | Backend API URL (server-side only) | `https://healthcareproject-39oy.onrender.com` |
| `NODE_ENV` | Environment mode | `production` |

### Environment Files

#### Development (`.env.local`)
```bash
# Copy env.example to .env.local and modify for local development
NEXT_PUBLIC_BACKEND_URL=http://localhost:4000
BACKEND_URL=http://localhost:4000
NODE_ENV=development
```

#### Production (`.env.production`)
```bash
NEXT_PUBLIC_BACKEND_URL=https://healthcareproject-39oy.onrender.com
BACKEND_URL=https://healthcareproject-39oy.onrender.com
NODE_ENV=production
```

## 📁 File Structure

```
frontend/
├── .env.local          # Local development (gitignored)
├── .env.production      # Production environment (gitignored)
├── env.example          # Environment template
├── lib/env.ts           # Environment utility
└── next.config.js       # Next.js configuration
```

## 🔧 Setup Instructions

### 1. Local Development

```bash
# Copy the example file
cp env.example .env.local

# Edit .env.local for local development
nano .env.local
```

### 2. Production Deployment

For Render/Vercel/Netlify, set these environment variables in your hosting platform:

```bash
NEXT_PUBLIC_BACKEND_URL=https://healthcareproject-39oy.onrender.com
BACKEND_URL=https://healthcareproject-39oy.onrender.com
NODE_ENV=production
```

### 3. Environment Utility

The `lib/env.ts` file provides utilities for environment management:

```typescript
import { getBackendUrl, env } from '@/lib/env';

// Get the appropriate backend URL
const backendUrl = getBackendUrl();

// Check environment
if (env.isDevelopment) {
  console.log('Running in development mode');
}
```

## 🧪 Testing

### Test Environment Variables

```bash
# Start development server
npm run dev

# Check console logs for backend URL
# Should show: [API] Using backend URL: http://localhost:4000
```

### Test Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Check console logs for backend URL
# Should show: [API] Using backend URL: https://healthcareproject-39oy.onrender.com
```

## 🔒 Security Notes

- `.env.local` and `.env.production` are gitignored
- Only `NEXT_PUBLIC_*` variables are accessible on the client-side
- Server-side variables (`BACKEND_URL`) are only available in API routes
- Never commit sensitive information to version control

## 🚨 Troubleshooting

### Common Issues

1. **Backend URL not working**: Check if the backend is running and accessible
2. **Environment variables not loading**: Restart the development server
3. **Build errors**: Ensure all required variables are set in production

### Debug Commands

```bash
# Check environment variables
echo $NEXT_PUBLIC_BACKEND_URL

# Test backend connectivity
curl https://healthcareproject-39oy.onrender.com/health
```
