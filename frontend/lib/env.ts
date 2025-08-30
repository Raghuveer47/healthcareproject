// Environment variables utility
export const env = {
  // Backend URL - accessible on both client and server
  NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://healthcareproject-39oy.onrender.com',
  
  // Backend URL - server-side only
  BACKEND_URL: process.env.BACKEND_URL || 'https://healthcareproject-39oy.onrender.com',
  
  // Environment
  NODE_ENV: process.env.NODE_ENV || 'production',
  
  // Check if we're in development
  isDevelopment: process.env.NODE_ENV === 'development',
  
  // Check if we're in production
  isProduction: process.env.NODE_ENV === 'production',
};

// Validate required environment variables
export function validateEnv() {
  const required = ['NEXT_PUBLIC_BACKEND_URL', 'BACKEND_URL'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(', ')}`);
    console.warn('Using default values from env.ts');
  }
  
  return env;
}

// Get the appropriate backend URL based on environment
export function getBackendUrl(): string {
  if (env.isDevelopment) {
    return 'http://localhost:4000';
  }
  return env.NEXT_PUBLIC_BACKEND_URL;
}

export default env;
