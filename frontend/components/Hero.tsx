'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Heart, Users, Award, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-brand-teal/5 via-white to-brand-pink/5 lotus-bg overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <Image 
                src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png"
                alt="BHARGVI HEALTH CARE Logo"
                width={120}
                height={120}
                className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                <span className="text-gradient">Your Health,</span><br />
                <span className="text-visible">Our Priority.</span>
              </h1>
              <p className="text-xl text-visible-secondary max-w-2xl leading-relaxed">
                Comprehensive Cancer Screening & Multi-Speciality Diagnostic Mobile Services. 
                Early detection saves lives, and we bring quality healthcare closer to your community.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8">
              <Link href="/contact">
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white px-8">
              <Link href="/services">
                Know More
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-brand-teal/10 rounded-full mb-2 mx-auto">
                <Users className="h-6 w-6 text-brand-teal" />
              </div>
              <div className="font-bold text-lg text-brand-teal">10,000+</div>
              <div className="text-sm text-visible-secondary">Screenings</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-brand-pink/10 rounded-full mb-2 mx-auto">
                <Award className="h-6 w-6 text-brand-pink" />
              </div>
              <div className="font-bold text-lg text-brand-pink">NABL</div>
              <div className="text-sm text-visible-secondary">Grade Partners</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-brand-teal/10 rounded-full mb-2 mx-auto">
                <MapPin className="h-6 w-6 text-brand-teal" />
              </div>
              <div className="font-bold text-lg text-brand-teal">500+</div>
              <div className="text-sm text-visible-secondary">Mobile Camps</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-brand-pink/10 rounded-full mb-2 mx-auto">
                <Heart className="h-6 w-6 text-brand-pink" />
              </div>
              <div className="font-bold text-lg text-brand-pink">50+</div>
              <div className="text-sm text-visible-secondary">Expert Specialists</div>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Medical professional with mobile diagnostic van"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/20 to-transparent" />
          </div>
          
          {/* Floating Cards */}
          <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-lg max-w-xs hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-pink/10 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-brand-pink" />
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">Cancer Screening</div>
                <div className="text-xs text-gray-700">Early detection saves lives</div>
              </div>
            </div>
          </div>
          
          <div className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-lg max-w-xs hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-teal/10 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-brand-teal" />
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">Mobile Services</div>
                <div className="text-xs text-gray-700">Healthcare at your doorstep</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}