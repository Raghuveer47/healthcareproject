'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail, MapPin, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Strip */}
      <div className="bg-brand-teal text-white py-2 px-4 hidden md:block">
        <div className="container flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-brand-pink-light transition-colors">
              <Phone size={14} />
              <span className="hidden xs:inline">+91 98765 43210</span>
            </a>
            <a href="mailto:info@bhargavihealthcare.com" className="flex items-center gap-1 hover:text-brand-pink-light transition-colors">
              <Mail size={14} />
              <span className="hidden md:inline">info@bhargavihealthcare.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1 mt-1 sm:mt-0">
            <MapPin size={14} />
            <span className="hidden sm:inline">Serving across Andhra Pradesh & Telangana</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300 hidden md:block',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white'
      )}>
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <Image 
              src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png"
              alt="BHARGVI HEALTH CARE Logo"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <span className="font-poppins font-bold text-lg sm:text-xl text-brand-teal hidden sm:inline">
              BHARGVI HEALTH CARE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-teal relative',
                  pathname === item.href 
                    ? 'text-brand-teal' 
                    : 'text-gray-700'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-pink rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button asChild className="hidden md:inline-flex bg-brand-teal hover:bg-brand-teal/90 text-sm">
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Floating Navigation Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="default" 
              size="icon" 
              className="h-12 w-12 rounded-full bg-brand-teal hover:bg-brand-teal/90 shadow-lg"
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 sm:w-96">
            <div className="flex flex-col space-y-4 mt-8">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-poppins font-bold text-lg text-brand-teal">Menu</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-lg font-medium py-3 px-4 rounded-lg transition-colors',
                    pathname === item.href 
                      ? 'bg-brand-pink/10 text-brand-teal' 
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-6 bg-brand-teal hover:bg-brand-teal/90">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}