import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bhargavi Health Care',
    short_name: 'Bhargavi HC',
    description: 'Comprehensive Cancer Screening & Multi-Speciality Diagnostic Mobile Services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#007D8C',
    icons: [
      {
        src: 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}