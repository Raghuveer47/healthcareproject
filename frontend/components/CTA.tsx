import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';

interface CTAProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  background?: 'teal' | 'pink' | 'white';
}

export function CTA({ 
  title = "Ready to Get Started?", 
  description = "Contact us today to learn more about our services and book your appointment.",
  primaryCTA = { text: "Contact Us", href: "/contact" },
  secondaryCTA,
  background = 'teal' 
}: CTAProps) {
  const backgroundClasses = {
    teal: 'bg-gradient-to-r from-brand-teal to-brand-teal-light text-white lotus-bg',
    pink: 'bg-gradient-to-r from-brand-pink to-brand-pink-light text-white lotus-bg',
    white: 'bg-white text-gray-900 border border-gray-200'
  };

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${backgroundClasses[background]}`}>
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
            {/* Logo */}
            <div className="flex justify-center">
              <Image 
                src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png"
                alt="BHARGAVI HEALTH CARE Logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-black">
                {title}
              </h2>
              <p className="text-base sm:text-lg sm:text-xl leading-relaxed text-black font-medium">
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold shadow-lg text-sm sm:text-base py-2 sm:py-3">
              <Link href={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>

            {secondaryCTA && (
              <Button asChild variant="outline" size="lg" className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold shadow-lg text-sm sm:text-base py-2 sm:py-3">
                <Link href={secondaryCTA.href}>
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {secondaryCTA.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}