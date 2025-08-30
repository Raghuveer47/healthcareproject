"use client";
import { SectionHeading } from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTA } from '@/components/CTA';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import {
  Camera,
  Users,
  Heart,
  Stethoscope,
  Award,
  MapPin,
  Calendar,
  Shield,
  Activity,
  FileText,
  UserCheck,
  TrendingUp,
  Globe,
  Building2,
  ArrowRight,
  Star
} from 'lucide-react';
import React from 'react';

function AnimatedOnScroll({
  children,
  className = '',
  variant = 'up',
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'up' | 'left' | 'right' | 'scale';
  delayMs?: number;
}) {
  const { elementRef, isVisible } = useScrollAnimation();
  const baseClass =
    variant === 'left'
      ? 'scroll-animate-left'
      : variant === 'right'
      ? 'scroll-animate-right'
      : variant === 'scale'
      ? 'scroll-animate-scale'
      : 'scroll-animate-up';

  return (
    <div
      ref={elementRef as unknown as React.RefObject<HTMLDivElement> | any}
      className={`${baseClass} ${isVisible ? 'animate-in' : ''} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

const galleryCategories = [
  {
    name: 'Our Medical Team',
    description: 'Meet our dedicated healthcare professionals',
    icon: <Users className="h-6 w-6" />,
    count: 12,
  },
  {
    name: 'Mobile Diagnostic Units',
    description: 'Our fully-equipped mobile healthcare vans',
    icon: <MapPin className="h-6 w-6" />,
    count: 8,
  },
  {
    name: 'Community Health Camps',
    description: 'Serving communities across the region',
    icon: <Heart className="h-6 w-6" />,
    count: 15,
  },
  {
    name: 'Medical Equipment',
    description: 'State-of-the-art diagnostic technology',
    icon: <Stethoscope className="h-6 w-6" />,
    count: 10,
  },
];

const featuredImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Doctor examining patient',
    category: 'Medical Team',
    title: 'Dr. Bhargavi Srinivasan examining a patient',
    description: 'Our founder providing compassionate care during a community health camp',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Healthcare professionals in mobile unit',
    category: 'Mobile Diagnostics',
    title: 'Mobile Diagnostic Team',
    description: 'Our healthcare professionals working in our fully-equipped mobile unit',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Community health camp',
    category: 'Health Camps',
    title: 'Community Health Camp',
    description: 'Bringing healthcare services directly to underserved communities',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/8376300/pexels-photo-8376300.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Medical consultation',
    category: 'Medical Team',
    title: 'Patient Consultation',
    description: 'Expert medical consultation in our mobile diagnostic unit',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Medical equipment',
    category: 'Medical Equipment',
    title: 'Advanced Diagnostic Equipment',
    description: 'State-of-the-art medical equipment for accurate diagnosis',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Healthcare team',
    category: 'Medical Team',
    title: 'Our Healthcare Team',
    description: 'Dedicated professionals committed to community health',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mobile healthcare van',
    category: 'Mobile Diagnostics',
    title: 'Mobile Healthcare Unit',
    description: 'Our fully-equipped mobile diagnostic van ready for service',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Community outreach',
    category: 'Health Camps',
    title: 'Community Outreach',
    description: 'Educating communities about preventive healthcare',
  },
];

const teamMembers = [
  {
    name: 'Dr. Bhargavi Srinivasan',
    role: 'Founder & Chief Medical Officer',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Oncology & Preventive Care',
    experience: '15+ Years',
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Head of Mobile Diagnostics',
    image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Community Health',
    experience: '12+ Years',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Senior Pathologist',
    image: 'https://images.pexels.com/photos/8376300/pexels-photo-8376300.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Laboratory Medicine',
    experience: '10+ Years',
  },
  {
    name: 'Dr. Amit Patel',
    role: 'Mobile Healthcare Specialist',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Family Medicine',
    experience: '8+ Years',
  },
];

export default function GalleryClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-brand-teal/5 via-white to-brand-pink/5 lotus-bg">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Logo */}
            <div className="flex justify-center animate-fade-in-up">
              <Image
                src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png"
                alt="BHARGVI HEALTH CARE Logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <SectionHeading
                eyebrow="Our Gallery"
                title="Capturing Moments of Care and Compassion"
                description="Explore our healthcare journey through photos that showcase our dedicated team, mobile diagnostic services, community health camps, and the lives we've touched across Tamil Nadu."
                centered
              />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Every image tells a story of our commitment to making quality healthcare accessible to every community, regardless of location or economic status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            <AnimatedOnScroll className="text-center" variant="up">
              <SectionHeading
                eyebrow="Explore Our Work"
                title="Gallery Categories"
                description="Browse through different aspects of our healthcare services and community outreach programs."
                centered
              />
            </AnimatedOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {galleryCategories.map((category, index) => (
                <AnimatedOnScroll key={index} variant="up" delayMs={index * 150}>
                  <Card className="group hover-lift border-0 shadow-lg bg-white hover:border-brand-teal/20 transition-all duration-300">
                    <CardContent className="p-6 sm:p-8 space-y-4 text-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-teal to-brand-pink rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold font-poppins text-gray-900 group-hover:text-brand-teal transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-brand-teal font-semibold">
                          <Camera className="h-4 w-4" />
                          <span className="text-sm">{category.count} Photos</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            <AnimatedOnScroll className="text-center" variant="up">
              <SectionHeading
                eyebrow="Featured Photos"
                title="Highlights from Our Healthcare Journey"
                description="A collection of our most impactful moments serving communities across the region."
                centered
              />
            </AnimatedOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {featuredImages.map((image, index) => (
                <AnimatedOnScroll key={image.id} variant="up" delayMs={index * 150}>
                  <Card className="group hover-lift border-0 shadow-lg bg-white overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6 space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-brand-pink bg-brand-pink/10 px-2 py-1 rounded-full">
                            {image.category}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold font-poppins text-gray-900 line-clamp-2">
                          {image.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                          {image.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            <AnimatedOnScroll className="text-center" variant="up">
              <SectionHeading
                eyebrow="Our Medical Team"
                title="Meet Our Healthcare Professionals"
                description="Dedicated doctors and healthcare professionals committed to providing the highest quality care to every community we serve."
                centered
              />
            </AnimatedOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedOnScroll key={index} variant="up" delayMs={index * 200}>
                  <Card className="group hover-lift border-0 shadow-lg bg-white overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6 space-y-3">
                      <div className="text-center space-y-2">
                        <h3 className="text-lg font-bold font-poppins text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-brand-teal font-medium text-sm">{member.role}</p>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600">{member.specialty}</p>
                          <p className="text-xs text-brand-pink font-medium">{member.experience}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brand-teal to-brand-teal-light text-white">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedOnScroll className="space-y-6 sm:space-y-8" variant="left">
              <SectionHeading
                eyebrow="Community Impact"
                title="Transforming Healthcare Access"
                description="Our mobile diagnostic services have reached thousands of patients across Tamil Nadu, providing early detection and preventive care where it's needed most."
                eyebrowColor="text-white"
                titleColor="text-white"
                descriptionColor="text-white/90"
              />

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <AnimatedOnScroll className="space-y-2 bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm" variant="up" delayMs={0}>
                  <Users className="h-6 w-6 text-brand-pink" />
                  <h3 className="font-semibold text-lg">10,000+ Patients</h3>
                  <p className="text-sm text-white/90">Screened across communities</p>
                </AnimatedOnScroll>
                <AnimatedOnScroll className="space-y-2 bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm" variant="up" delayMs={150}>
                  <MapPin className="h-6 w-6 text-brand-pink" />
                  <h3 className="font-semibold text-lg">500+ Camps</h3>
                  <p className="text-sm text-white/90">Organized in rural areas</p>
                </AnimatedOnScroll>
                <AnimatedOnScroll className="space-y-2 bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm" variant="up" delayMs={300}>
                  <Heart className="h-6 w-6 text-brand-pink" />
                  <h3 className="font-semibold text-lg">Early Detection</h3>
                  <p className="text-sm text-white/90">Saving countless lives</p>
                </AnimatedOnScroll>
                <AnimatedOnScroll className="space-y-2 bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm" variant="up" delayMs={450}>
                  <Award className="h-6 w-6 text-brand-pink" />
                  <h3 className="font-semibold text-lg">Quality Care</h3>
                  <p className="text-sm text-white/90">NABL accredited services</p>
                </AnimatedOnScroll>
              </div>

              <Button asChild className="bg-white text-brand-teal hover:bg-gray-50 text-sm sm:text-base py-2 sm:py-3">
                <a href="/contact">
                  Organize a Health Camp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </AnimatedOnScroll>

            <AnimatedOnScroll className="relative" variant="right">
              <img
                src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community healthcare"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/10 to-transparent rounded-3xl" />
            </AnimatedOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to See More of Our Work?"
        description="Contact us to learn more about our healthcare services, organize a community health camp, or join our mission to make healthcare accessible to all."
        primaryCTA={{
          text: 'Contact Us',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'View Services',
          href: '/services',
        }}
        background="white"
      />
    </>
  );
}


