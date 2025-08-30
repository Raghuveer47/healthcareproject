import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  { name: 'Lab Tests', href: '/services#lab-tests' },
  { name: 'Health Checkups', href: '/services#health-checkups' },
  { name: 'Specialty Consultations', href: '/services#consultations' },
  { name: 'Community Health Camps', href: '/services#community-camps' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image 
                src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png"
                alt="BHARGVI HEALTH CARE Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-poppins font-bold text-xl">BHARGAVI</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Compassionate care, closer to your community. We deliver early detection and diagnostic services through modern, mobile, and clinic-based setups.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-teal transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-brand-pink transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-brand-pink transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-gray-300 hover:text-brand-pink transition-colors">
                <Phone className="h-5 w-5 mt-0.5" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@bhargavihealthcare.com" className="flex items-start gap-3 text-gray-300 hover:text-brand-pink transition-colors">
                <Mail className="h-5 w-5 mt-0.5" />
                <span>info@bhargavihealthcare.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>
                  123 Health Street,<br />
                  Medical District,<br />
                  Chennai - 600001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © {currentYear} Bhargavi Health Care. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-brand-pink transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand-pink transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}