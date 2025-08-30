# Render Deployment Guide

## 🚀 Frontend Deployment Issues

### Current Status:
- ✅ **Backend**: Working at `https://healthcareproject-39oy.onrender.com`
- ❌ **Frontend**: Not working at `https://healthcareproject2.onrender.com` (503 error)

## 🔧 Render Configuration

### Frontend Service Setup:

1. **Service Type**: Web Service (not Static Site)
2. **Environment**: Node.js
3. **Build Command**: `cd frontend && npm install && npm run build`
4. **Start Command**: `cd frontend && npm start`
5. **Root Directory**: `/` (root of repository)

### Environment Variables for Frontend:

```bash
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_BACKEND_URL=https://healthcareproject-39oy.onrender.com
BACKEND_URL=https://healthcareproject-39oy.onrender.com
```

### Backend Service Setup:

1. **Service Type**: Web Service
2. **Environment**: Node.js
3. **Build Command**: `cd backend && npm install`
4. **Start Command**: `cd backend && npm start`
5. **Root Directory**: `/` (root of repository)

### Environment Variables for Backend:

```bash
NODE_ENV=production
PORT=3001
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email
SMTP_PASS=your-password
MAIL_FROM=your-from-email
ADMIN_EMAIL=admin@example.com
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_ID=your-spreadsheet-id
GOOGLE_SHEETS_TAB=sheet dxoc
```

## 🚨 Troubleshooting Steps

### 1. Check Render Dashboard
- Go to your Render dashboard
- Check the frontend service logs
- Look for build or runtime errors

### 2. Verify Service Configuration
- Ensure the service is set to "Web Service" not "Static Site"
- Check that the build and start commands are correct
- Verify environment variables are set

### 3. Common Issues

#### Issue: 503 Service Unavailable
**Solution**: 
- Check if the service is running
- Verify the start command: `cd frontend && npm start`
- Check logs for Node.js errors

#### Issue: Build Failures
**Solution**:
- Ensure all dependencies are in package.json
- Check that the build command works locally
- Verify Node.js version compatibility

#### Issue: Environment Variables Not Loading
**Solution**:
- Set all required environment variables in Render dashboard
- Restart the service after adding variables
- Check that variable names match exactly

### 4. Manual Deployment Steps

1. **Connect Repository**:
   - Link your GitHub repository to Render
   - Use the root directory (`/`)

2. **Create Frontend Service**:
   - Service Type: Web Service
   - Environment: Node.js
   - Build Command: `cd frontend && npm install && npm run build`
   - Start Command: `cd frontend && npm start`

3. **Set Environment Variables**:
   - Add all required environment variables
   - Include backend URL: `https://healthcareproject-39oy.onrender.com`

4. **Deploy**:
   - Click "Create Web Service"
   - Wait for build to complete
   - Check logs for any errors

## 📋 Health Checks

### Backend Health Check:
```bash
curl https://healthcareproject-39oy.onrender.com/health
```

### Frontend Health Check:
```bash
curl https://healthcareproject2.onrender.com/
```

## 🔄 Auto-Deploy

- Enable auto-deploy in Render dashboard
- Push changes to GitHub main branch
- Render will automatically rebuild and deploy

## 📞 Support

If issues persist:
1. Check Render service logs
2. Verify all environment variables
3. Test build locally first
4. Contact Render support if needed
