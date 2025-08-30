import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const GalleryClient = dynamic(() => import('./GalleryClient'), { ssr: false });

export const metadata: Metadata = {
  title: 'Gallery - Bhargavi Health Care',
  description: 'Explore our healthcare journey through photos of our medical team, mobile diagnostic units, community health camps, and the lives we\'ve touched.',
  keywords: ['healthcare gallery', 'medical team photos', 'community health camps', 'mobile diagnostics', 'healthcare professionals'],
};

export default function Gallery() {
  return <GalleryClient />;
}
