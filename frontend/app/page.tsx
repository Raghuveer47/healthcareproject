import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { CTA } from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Stethoscope, 
  Truck, 
  Microscope, 
  Heart, 
  Users, 
  Calendar,
  ArrowRight,
  Target,
  Eye,
  Shield
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="About Us"
                title="Dedicated to Your Health and Well-being"
                description="Bhargavi Health Care delivers early detection and diagnostic services through modern, mobile, and clinic-based setups. Our mission is to make quality screenings accessible and affordable, because early detection saves lives."
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-brand-pink/5 to-brand-pink/10 border-brand-pink/20">
                  <CardContent className="p-6 text-center space-y-3">
                    <Target className="h-8 w-8 text-brand-pink mx-auto" />
                    <h3 className="font-poppins font-semibold text-visible">Our Mission</h3>
                    <p className="text-sm text-visible-secondary">Making quality healthcare accessible to every community through innovative mobile diagnostic services.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-brand-teal/5 to-brand-teal/10 border-brand-teal/20">
                  <CardContent className="p-6 text-center space-y-3">
                    <Eye className="h-8 w-8 text-brand-teal mx-auto" />
                    <h3 className="font-poppins font-semibold text-visible">Our Vision</h3>
                    <p className="text-sm text-visible-secondary">A world where early detection and preventive care reduce the impact of serious diseases on communities.</p>
                  </CardContent>
                </Card>
              </div>

              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Healthcare professionals"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/10 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="space-y-16">
            {/* Logo */}
            <div className="flex justify-center">
              <Image 
                src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png"
                alt="BHARGVI HEALTH CARE Logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>
            
            <SectionHeading
              eyebrow="Our Services"
              title="Comprehensive Healthcare Solutions"
              description="From cancer screening to mobile diagnostics, we provide a full range of medical services designed to detect health issues early and provide peace of mind."
              centered
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Cancer Screening"
                description="Comprehensive screening programs for breast, cervical, oral, and prostate cancers with state-of-the-art equipment and expert specialists."
                icon={<Stethoscope className="h-8 w-8 text-white" />}
                href="/services#cancer-screening"
              />

              <ServiceCard
                title="Mobile Diagnostics"
                description="Bringing advanced diagnostic services directly to your location with our fully-equipped mobile units and experienced medical team."
                icon={<Truck className="h-8 w-8 text-white" />}
                href="/services#mobile-diagnostics"
              />

              <ServiceCard
                title="Lab Tests"
                description="Complete range of pathological and biochemical tests with quick turnaround times and accurate results from NABL-accredited labs."
                icon={<Microscope className="h-8 w-8 text-white" />}
                href="/services#lab-tests"
              />

              <ServiceCard
                title="Preventive Health Checkups"
                description="Comprehensive health packages designed for different age groups and risk factors to maintain optimal health and prevent diseases."
                icon={<Heart className="h-8 w-8 text-white" />}
                href="/services#health-checkups"
              />

              <ServiceCard
                title="Specialty Consultations"
                description="Expert consultations with specialist doctors across various fields including oncology, cardiology, and internal medicine."
                icon={<Users className="h-8 w-8 text-white" />}
                href="/services#consultations"
              />

              <ServiceCard
                title="Awareness Programs"
                description="Community health awareness programs and educational campaigns to promote preventive care and healthy lifestyle choices."
                icon={<Calendar className="h-8 w-8 text-white" />}
                href="/services#awareness"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cancer Screening Highlight */}
      <section className="py-20 bg-gradient-to-r from-brand-pink to-brand-pink-light text-white lotus-bg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Specialized Care"
                title="Early Cancer Detection Saves Lives"
                description="Our comprehensive cancer screening programs are designed to detect cancer in its earliest stages when treatment is most effective."
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <Shield className="h-6 w-6 text-brand-pink" />
                  <h3 className="font-semibold text-black text-lg">Breast Cancer Screening</h3>
                  <p className="text-black text-sm font-medium">Mammography and clinical breast examination</p>
                </div>
                <div className="space-y-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <Shield className="h-6 w-6 text-brand-pink" />
                  <h3 className="font-semibold text-black text-lg">Cervical Cancer Screening</h3>
                  <p className="text-black text-sm font-medium">Pap smear and HPV testing</p>
                </div>
                <div className="space-y-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <Shield className="h-6 w-6 text-black" />
                  <h3 className="font-semibold text-black text-lg">Oral Cancer Screening</h3>
                  <p className="text-black text-sm font-medium">Visual examination and early detection</p>
                </div>
                <div className="space-y-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <Shield className="h-6 w-6 text-brand-pink" />
                  <h3 className="font-semibold text-black text-lg">Prostate Cancer Screening</h3>
                  <p className="text-black text-sm font-medium">PSA testing and clinical examination</p>
                </div>
              </div>

              <Button asChild className="bg-white text-brand-pink hover:bg-gray-50">
                <Link href="/services#cancer-screening">
                  Learn More About Screening
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Cancer screening equipment"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-16">
            {/* Logo */}
            <div className="flex justify-center">
              <Image 
                src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png"
                alt="BHARGVI HEALTH CARE Logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>
            
            <SectionHeading
              eyebrow="Our Impact"
              title="Serving Communities Across Andhra Pradesh & Telangana"
              description="Take a look at our mobile health camps and community outreach programs that are making healthcare accessible to underserved areas."
              centered
            />

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl group">
                  <img 
                    src="https://images.pexels.com/photos/8378730/pexels-photo-8378730.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Mobile health camp"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">Mobile Health Camp - Rural Andhra Pradesh & Telangana</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl group">
                  <img 
                    src="https://images.pexels.com/photos/6814190/pexels-photo-6814190.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Cancer awareness program"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">Cancer Awareness Program</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl group">
                  <img 
                    src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Community screening"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">Community Health Screening</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
                <Link href="/gallery">
                  View Full Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="space-y-16">
            {/* Logo */}
            <div className="flex justify-center">
              <Image 
                src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png"
                alt="BHARGVI HEALTH CARE Logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>
            
            <SectionHeading
              eyebrow="Patient Stories"
              title="Trusted by Thousands Across Andhra Pradesh & Telangana"
              description="Hear from our patients and community partners about their experience with our healthcare services."
              centered
            />
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Bring Our Mobile Diagnostic Services to Your Area"
        description="Partner with us to organize a health camp in your community. We bring comprehensive screening and diagnostic services directly to your location."
        primaryCTA={{
          text: "Organize a Camp",
          href: "/contact?service=organize-camp"
        }}
        secondaryCTA={{
          text: "Call Us Now",
          href: "tel:+919876543210"
        }}
      />
    </>
  );
}