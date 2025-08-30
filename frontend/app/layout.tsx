import './globals.css';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Bhargavi Health Care - Your Health, Our Priority',
    template: '%s | Bhargavi Health Care'
  },
  description: 'Comprehensive Cancer Screening & Multi-Speciality Diagnostic Mobile Services. Compassionate care, closer to your community.',
  keywords: ['cancer screening', 'mobile diagnostics', 'health care', 'medical services', 'preventive health'],
  authors: [{ name: 'Bhargavi Health Care' }],
  creator: 'Bhargavi Health Care',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhargavihealthcare.com',
    title: 'Bhargavi Health Care - Your Health, Our Priority',
    description: 'Comprehensive Cancer Screening & Multi-Speciality Diagnostic Mobile Services',
    siteName: 'Bhargavi Health Care',
    images: [
      {
        url: 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png',
        width: 1200,
        height: 630,
        alt: 'BHARGVI HEALTH CARE Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhargavi Health Care - Your Health, Our Priority',
    description: 'Comprehensive Cancer Screening & Multi-Speciality Diagnostic Mobile Services',
    images: ['https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png',
    shortcut: 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png',
    apple: 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}