# Bhargavi Health Care - Marketing Website

A modern, responsive marketing website for Bhargavi Health Care, built with Next.js 14 and featuring a warm medical aesthetic with baby pink and teal blue color scheme.

## 🚀 Features

- **Modern Design**: Clean, professional medical website with warm color palette
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Built with Next.js 14 for optimal performance and SEO
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **Interactive**: Smooth animations, hover effects, and micro-interactions
- **Contact Forms**: Functional contact forms with validation
- **PWA Ready**: Progressive Web App capabilities with manifest and service worker support

## 🎨 Design System

### Colors
- **Primary Teal**: `#007D8C` - Main brand color
- **Accent Pink**: `#F28AB2` - Secondary brand color
- **Text**: `#0F172A` - Primary text color
- **Background**: `#F8FAFC` - Light background

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

### Components
Built with shadcn/ui components including:
- Cards, Buttons, Forms
- Navigation, Accordion, Tabs
- Toast notifications
- Sheet/Drawer for mobile menu

## 📱 Pages

- **Home** (`/`) - Hero, services overview, testimonials
- **About** (`/about`) - Mission, vision, team, values
- **Services** (`/services`) - Comprehensive service listings including cancer screening and mobile diagnostics
- **Gallery** (`/gallery`) - Photo gallery with masonry layout
- **Contact** (`/contact`) - Contact form and information

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm/pnpm
- Basic understanding of Next.js and React

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Logo Replacement
Replace the placeholder logo at `/public/logo-bhargavi.svg` with your actual logo while maintaining the same dimensions and format.

### Color Scheme Updates
Update colors in:
1. `app/globals.css` - CSS custom properties
2. `tailwind.config.ts` - Tailwind theme colors

### Content Updates
- Contact information in `components/SiteHeader.tsx`
- Service descriptions throughout components
- Team member information in `app/about/page.tsx`
- Testimonials in `components/TestimonialCarousel.tsx`

### Images
Replace Pexels placeholder images with your actual photos:
- Team photos
- Service images
- Gallery images
- Hero section images

## 📊 SEO & Analytics

### Built-in SEO
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Proper heading hierarchy

### Analytics Setup
To add analytics:

1. **Google Analytics 4**:
   ```javascript
   // Add to app/layout.tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   // Add component with your GA4 ID
   <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
   ```

2. **Vercel Analytics**:
   ```bash
   npm install @vercel/analytics
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
The site is configured for static export and can be deployed to:
- Netlify
- GitHub Pages
- Any static hosting service

## 📱 PWA Features

The site includes:
- Web App Manifest (`app/manifest.ts`)
- Service Worker ready structure
- Responsive design
- Offline capability scaffolding

## 🔧 Development

### Project Structure
```
app/
├── (routes)/          # App router pages
├── api/              # API routes
├── globals.css       # Global styles
└── layout.tsx        # Root layout

components/
├── ui/               # shadcn/ui components
├── SiteHeader.tsx    # Main navigation
├── Footer.tsx        # Site footer
└── ...               # Page components

public/
├── logo-bhargavi.svg # Placeholder logo
└── ...               # Static assets
```

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: react-hook-form + zod
- **Fonts**: Google Fonts (Poppins, Inter)

## 🤝 Support

For support or questions about this website:
- Email: info@bhargavihealthcare.com
- Phone: +91 98765 43210

---

**Built with ❤️ for Bhargavi Health Care**