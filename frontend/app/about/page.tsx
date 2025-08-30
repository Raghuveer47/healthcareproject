import { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { CTA } from '@/components/CTA';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  MapPin,
  Calendar,
  Shield,
  Stethoscope,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Bhargavi Health Care\'s mission to provide accessible, quality healthcare through mobile diagnostic services and community outreach programs.',
};

const values = [
  {
    icon: <Heart className="h-8 w-8 text-brand-pink" />,
    title: 'Compassionate Care',
    description: 'We treat every patient with empathy, respect, and dignity, ensuring they feel comfortable and supported throughout their healthcare journey.'
  },
  {
    icon: <Shield className="h-8 w-8 text-brand-teal" />,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards of medical care through state-of-the-art equipment, certified professionals, and accredited partnerships.'
  },
  {
    icon: <Users className="h-8 w-8 text-brand-pink" />,
    title: 'Community First',
    description: 'Our mobile services are designed to reach underserved communities, breaking down barriers to essential healthcare services.'
  },
  {
    icon: <BookOpen className="h-8 w-8 text-brand-teal" />,
    title: 'Education & Awareness',
    description: 'We believe in empowering communities through health education and awareness programs that promote preventive care.'
  }
];

const stats = [
  { number: '10,000+', label: 'Patients Screened', icon: <Stethoscope className="h-6 w-6" /> },
  { number: '500+', label: 'Mobile Camps', icon: <MapPin className="h-6 w-6" /> },
  { number: '50+', label: 'Healthcare Professionals', icon: <Users className="h-6 w-6" /> },
  { number: '5+', label: 'Years of Service', icon: <Calendar className="h-6 w-6" /> },
];

const team = [
  {
    name: 'Dr. Bhargavi Srinivasan',
    role: 'Founder & Chief Medical Officer',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Board-certified oncologist with over 15 years of experience in cancer prevention and early detection.'
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Head of Mobile Diagnostics',
    image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Specialist in community health with expertise in mobile healthcare delivery systems.'
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Director',
    image: 'https://images.pexels.com/photos/8376300/pexels-photo-8376300.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Healthcare administrator with 10+ years experience in managing large-scale health programs.'
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-teal/5 via-white to-brand-pink/5 lotus-bg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start">
                <Image 
                  src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1756286989/BHARGVI-HEALTH-CARE-LOGO-14_ivaxuv.png"
                  alt="BHARGVI HEALTH CARE Logo"
                  width={100}
                  height={100}
                  className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
                />
              </div>
              
              <SectionHeading
                eyebrow="About Bhargavi Health Care"
                title="Dedicated to Your Health and Well-being"
                description="Since our founding, we have been committed to making quality healthcare accessible to every community. Our innovative approach combines advanced medical technology with compassionate care to deliver comprehensive health services where they're needed most."
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
            </div>

            <div className="relative animate-fade-in-right">
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

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-16">
            <div className="text-center animate-fade-in-up">
              <SectionHeading
                eyebrow="Our Values"
                title="What Drives Us Forward"
                description="These core values guide every decision we make and every action we take in serving our communities."
                centered
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover-lift transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-teal/10 to-brand-pink/10 rounded-2xl flex items-center justify-center mx-auto">
                      {value.icon}
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-visible">
                      {value.title}
                    </h3>
                    <p className="text-visible-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-16">
            <div className="text-center animate-fade-in-up">
              <SectionHeading
                eyebrow="Our Impact"
                title="Numbers That Tell Our Story"
                description="These statistics represent the real impact we've made in communities across the region."
                centered
                eyebrowColor="text-brand-pink"
                titleColor="text-gray-900"
                descriptionColor="text-gray-600"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white border border-gray-100 shadow-lg hover-lift rounded-2xl p-6 text-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-teal/10 to-brand-pink/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-16">
            <div className="text-center animate-fade-in-up">
              <SectionHeading
                eyebrow="Our Team"
                title="Meet Our Healthcare Professionals"
                description="Our experienced team of doctors, nurses, and healthcare professionals are dedicated to providing the highest quality care to every patient."
                centered
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover-lift overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8 space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold font-poppins text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-brand-teal font-medium">{member.role}</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-teal-light lotus-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl animate-fade-in-scale">
              <SectionHeading
                eyebrow="Our Story"
                title="A Journey of Care and Compassion"
                description=""
                eyebrowColor="text-brand-pink"
                titleColor="text-gray-900"
                descriptionColor="text-gray-600"
              />
              <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-medium">
                <p>
                  Bhargavi Health Care was born from a simple yet powerful vision: to make quality healthcare accessible to every community, regardless of location or economic status. Our founder, Dr. Bhargavi Srinivasan, recognized that many rural and underserved communities lacked access to essential screening and diagnostic services.
                </p>
                <p>
                  Starting with a single mobile unit in 2019, we have grown to serve thousands of patients across Andhra Pradesh & Telangana. Our journey has been marked by countless stories of early detection, successful treatment, and lives saved through preventive care.
                </p>
                <p>
                  Today, we continue to expand our reach and enhance our services, always guided by our core belief that everyone deserves access to quality healthcare. Join us as we work towards a healthier future for all communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Experience Our Care?"
        description="Whether you need a health screening, diagnostic service, or want to organize a community health camp, we're here to help."
        primaryCTA={{
          text: "Book Appointment",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Call Us Today",
          href: "tel:+919876543210"
        }}
        background="white"
      />
    </>
  );
}