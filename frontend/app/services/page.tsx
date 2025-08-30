import { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CTA } from '@/components/CTA';

import Image from 'next/image';
import Link from 'next/link';
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
  Shield,
  CheckCircle,
  Clock,
  Award,
  MapPin,
  Phone,
  Mail,
  Zap,
  Star,
  Activity,
  FileText,
  UserCheck,
  AlertTriangle,
  TrendingUp,
  Globe,
  Building2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive healthcare services including cancer screening, mobile diagnostics, lab tests, preventive health checkups, and specialty consultations.',
  keywords: ['cancer screening', 'mobile diagnostics', 'lab tests', 'health checkups', 'medical services', 'healthcare'],
};

const services = [
  {
    title: "Cancer Screening",
    description: "Comprehensive screening programs for breast, cervical, oral, and prostate cancers with state-of-the-art equipment and expert specialists.",
    icon: <Stethoscope className="h-8 w-8 text-white" />,
    href: "/services#cancer-screening",
    features: ["Early detection", "Expert specialists", "Advanced equipment", "Comprehensive reports"],
    price: "Starting from ₹2,500"
  },
  {
    title: "Mobile Diagnostics",
    description: "Bringing advanced diagnostic services directly to your location with our fully-equipped mobile units and experienced medical team.",
    icon: <Truck className="h-8 w-8 text-white" />,
    href: "/services#mobile-diagnostics",
    features: ["On-site services", "Fully equipped units", "Experienced team", "Flexible scheduling"],
    price: "Contact for pricing"
  },
  {
    title: "Lab Tests",
    description: "Complete range of pathological and biochemical tests with quick turnaround times and accurate results from NABL-accredited labs.",
    icon: <Microscope className="h-8 w-8 text-white" />,
    href: "/services#lab-tests",
    features: ["NABL accredited", "Quick results", "Wide range", "Home collection"],
    price: "Starting from ₹500"
  },
  {
    title: "Preventive Health Checkups",
    description: "Comprehensive health packages designed for different age groups and risk factors to maintain optimal health and prevent diseases.",
    icon: <Heart className="h-8 w-8 text-white" />,
    href: "/services#health-checkups",
    features: ["Age-specific packages", "Risk assessment", "Preventive guidance", "Follow-up care"],
    price: "Starting from ₹1,500"
  },
  {
    title: "Specialty Consultations",
    description: "Expert consultations with specialist doctors across various fields including oncology, cardiology, and internal medicine.",
    icon: <Users className="h-8 w-8 text-white" />,
    href: "/services#consultations",
    features: ["Expert specialists", "Multiple specialties", "Telemedicine options", "Second opinions"],
    price: "Starting from ₹800"
  },
  {
    title: "Community Health Camps",
    description: "Organizing comprehensive health camps in communities to provide screening, education, and preventive care services.",
    icon: <Calendar className="h-8 w-8 text-white" />,
    href: "/services#community-camps",
    features: ["Community outreach", "Health education", "Screening services", "Awareness programs"],
    price: "Contact for details"
  }
];

const cancerScreeningDetails = [
  {
    type: "Breast Cancer Screening",
    description: "Early detection through mammography and clinical examination",
    icon: <Shield className="h-6 w-6 text-brand-pink" />,
    features: ["Mammography", "Clinical breast examination", "Risk assessment", "Genetic counseling"],
    recommended: "Women 40+ annually, 35+ with family history",
    price: "₹3,500"
  },
  {
    type: "Cervical Cancer Screening",
    description: "Pap smear and HPV testing for early detection",
    icon: <Shield className="h-6 w-6 text-brand-pink" />,
    features: ["Pap smear", "HPV testing", "Colposcopy if needed", "Follow-up care"],
    recommended: "Women 21-65 every 3-5 years",
    price: "₹2,500"
  },
  {
    type: "Oral Cancer Screening",
    description: "Visual examination and early detection techniques",
    icon: <Shield className="h-6 w-6 text-brand-teal" />,
    features: ["Visual examination", "Tissue biopsy", "Risk assessment", "Prevention guidance"],
    recommended: "Adults 18+ annually, high-risk every 6 months",
    price: "₹1,500"
  },
  {
    type: "Prostate Cancer Screening",
    description: "PSA testing and clinical examination for men",
    icon: <Shield className="h-6 w-6 text-brand-pink" />,
    features: ["PSA testing", "Clinical examination", "Risk assessment", "Follow-up monitoring"],
    recommended: "Men 50+ annually, 45+ with family history",
    price: "₹2,000"
  }
];

const healthPackages = [
  {
    name: "Basic Health Checkup",
    price: "₹1,500",
    duration: "2-3 hours",
    features: [
      "Complete blood count",
      "Blood sugar (fasting & PP)",
      "Kidney function tests",
      "Liver function tests",
      "ECG",
      "General physician consultation"
    ],
    icon: <Heart className="h-6 w-6 text-brand-teal" />
  },
  {
    name: "Comprehensive Health Checkup",
    price: "₹3,500",
    duration: "4-5 hours",
    features: [
      "All basic tests",
      "Lipid profile",
      "Thyroid function tests",
      "Chest X-ray",
      "Ultrasound abdomen",
      "Cardiologist consultation"
    ],
    icon: <Target className="h-6 w-6 text-brand-pink" />
  },
  {
    name: "Executive Health Checkup",
    price: "₹6,500",
    duration: "6-8 hours",
    features: [
      "All comprehensive tests",
      "Stress test",
      "Cancer markers",
      "Bone density",
      "Eye examination",
      "Dental checkup",
      "Multiple specialist consultations"
    ],
    icon: <Star className="h-6 w-6 text-brand-teal" />
  }
];

const whyChooseUs = [
  {
    icon: <Award className="h-8 w-8 text-brand-teal" />,
    title: "Quality Excellence",
    description: "NABL-accredited laboratories and certified healthcare professionals ensuring the highest standards of care."
  },
  {
    icon: <MapPin className="h-8 w-8 text-brand-pink" />,
    title: "Accessibility",
    description: "Mobile services that bring healthcare to your doorstep, breaking down geographical barriers."
  },
  {
    icon: <Clock className="h-8 w-8 text-brand-teal" />,
    title: "Quick Results",
    description: "Fast turnaround times with most results available within 24-48 hours."
  },
  {
    icon: <Users className="h-8 w-8 text-brand-pink" />,
    title: "Expert Team",
    description: "Experienced specialists and healthcare professionals dedicated to your well-being."
  }
];

export default function Services() {
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
                alt="BHARGAVI HEALTH CARE Logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <SectionHeading
                eyebrow="Our Services"
                title="Comprehensive Healthcare Solutions"
                description="From cancer screening to mobile diagnostics, we provide a full range of medical services designed to detect health issues early and provide peace of mind."
                centered
              />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Our mission is to make quality healthcare accessible to every community through innovative mobile diagnostic services and comprehensive screening programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center animate-fade-in-up">
              <SectionHeading
                eyebrow="What We Offer"
                title="Complete Range of Healthcare Services"
                description="Choose from our comprehensive suite of medical services, each designed with your health and convenience in mind."
                centered
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover-lift border-0 shadow-lg bg-white hover:border-brand-teal/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-teal to-brand-pink rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold font-poppins text-gray-900 group-hover:text-brand-teal transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-brand-teal">{service.price}</span>
                        <Button asChild variant="ghost" className="text-brand-pink hover:text-brand-pink hover:bg-brand-pink/10 p-0 text-sm">
                          <Link href={service.href} className="flex items-center gap-2">
                            Learn More
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cancer Screening Details */}
      <section id="cancer-screening" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brand-pink to-brand-pink-light text-white lotus-bg">
        <div className="container px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center space-y-6 animate-fade-in-up">
              <SectionHeading
                eyebrow="Specialized Care"
                title="Early Cancer Detection Saves Lives"
                description="Our comprehensive cancer screening programs are designed to detect cancer in its earliest stages when treatment is most effective."
                centered
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {cancerScreeningDetails.map((screening, index) => (
                <Card key={index} className="bg-white border-0 shadow-xl animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-pink/10 rounded-xl flex items-center justify-center text-brand-pink flex-shrink-0">
                        {screening.icon}
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg sm:text-xl font-bold font-poppins text-gray-900">
                            {screening.type}
                          </h3>
                          <span className="text-lg font-bold text-brand-pink">{screening.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{screening.description}</p>
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-brand-teal">Recommended: {screening.recommended}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {screening.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                <span className="text-xs text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center animate-fade-in-up">
              <Button asChild className="bg-white text-brand-pink hover:bg-gray-50 text-sm sm:text-base py-2 sm:py-3">
                <Link href="/contact">
                  Book Your Screening
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Health Checkup Packages */}
      <section id="health-checkups" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center animate-fade-in-up">
              <SectionHeading
                eyebrow="Preventive Care"
                title="Comprehensive Health Checkup Packages"
                description="Choose from our range of health checkup packages designed for different needs and age groups."
                centered
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {healthPackages.map((pkg, index) => (
                <Card key={index} className="group hover-lift border-0 shadow-lg bg-white hover:border-brand-teal/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-6 sm:p-8 space-y-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-pink rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        {pkg.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-poppins text-gray-900">{pkg.name}</h3>
                        <div className="flex items-center justify-center gap-4 mt-2">
                          <span className="text-2xl font-bold text-brand-teal">{pkg.price}</span>
                          <span className="text-sm text-gray-500">• {pkg.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full bg-brand-teal hover:bg-brand-teal/90 text-sm sm:text-base py-2 sm:py-3">
                      <Link href="/contact">
                        Book Package
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center animate-fade-in-up">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Excellence in Healthcare Delivery"
                description="We are committed to providing the highest quality healthcare services with a focus on accessibility, accuracy, and compassion."
                centered
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover-lift transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-teal/10 to-brand-pink/10 rounded-2xl flex items-center justify-center mx-auto">
                      {reason.icon}
                    </div>
                    <h3 className="text-lg font-bold font-poppins text-gray-900">{reason.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Diagnostics Highlight */}
      <section id="mobile-diagnostics" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brand-teal to-brand-teal-light text-white">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in-left">
              <SectionHeading
                eyebrow="Mobile Services"
                title="Healthcare at Your Doorstep"
                description="Our fully-equipped mobile diagnostic units bring comprehensive healthcare services directly to your community, workplace, or home."
              />

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                  <Truck className="h-6 w-6 text-brand-pink" />
                  <h3 className="font-semibold text-lg">Fully Equipped Units</h3>
                  <p className="text-sm text-white/90">Advanced diagnostic equipment in mobile vans</p>
                </div>
                <div className="space-y-2 bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                  <Users className="h-6 w-6 text-brand-pink" />
                  <h3 className="font-semibold text-lg">Expert Team</h3>
                  <p className="text-sm text-white/90">Experienced healthcare professionals</p>
                </div>
                <div className="space-y-2 bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <Clock className="h-6 w-6 text-brand-pink" />
                  <h3 className="font-semibold text-lg">Flexible Scheduling</h3>
                  <p className="text-sm text-white/90">Convenient timing for your community</p>
                </div>
                <div className="space-y-2 bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '450ms' }}>
                  <MapPin className="h-6 w-6 text-brand-pink" />
                  <h3 className="font-semibold text-lg">Wide Coverage</h3>
                  <p className="text-sm text-white/90">Serving multiple communities and locations</p>
                </div>
              </div>

              <Button asChild className="bg-white text-brand-teal hover:bg-gray-50 text-sm sm:text-base py-2 sm:py-3">
                <Link href="/contact">
                  Organize a Camp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative animate-fade-in-right">
              <img 
                src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mobile healthcare unit"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/10 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Lab Tests Section */}
      <section id="lab-tests" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            <div className="text-center animate-fade-in-up">
              <SectionHeading
                eyebrow="Laboratory Services"
                title="Comprehensive Lab Testing Solutions"
                description="Get accurate and reliable results from our NABL-accredited laboratories with quick turnaround times and home collection services."
                centered
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="border-0 shadow-lg hover-lift transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                <CardContent className="p-6 sm:p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-teal/10 to-brand-pink/10 rounded-2xl flex items-center justify-center">
                    <Microscope className="h-8 w-8 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900">Pathology Tests</h3>
                  <p className="text-gray-600">Complete blood count, biochemistry, and specialized tests with accurate results.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">NABL accredited</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Quick results</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Home collection</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover-lift transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6 sm:p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-teal/10 to-brand-pink/10 rounded-2xl flex items-center justify-center">
                    <Activity className="h-8 w-8 text-brand-pink" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900">Biochemistry Tests</h3>
                  <p className="text-gray-600">Comprehensive metabolic panels, liver function, kidney function, and lipid profiles.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-500">Advanced equipment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-500">Quality assurance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-500">Expert analysis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover-lift transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <CardContent className="p-6 sm:p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-teal/10 to-brand-pink/10 rounded-2xl flex items-center justify-center">
                    <FileText className="h-8 w-8 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900">Specialized Tests</h3>
                  <p className="text-gray-600">Cancer markers, hormone tests, allergy testing, and genetic screening services.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Specialized panels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Expert consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Detailed reports</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center animate-fade-in-up">
              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-sm sm:text-base py-2 sm:py-3">
                <Link href="/contact">
                  Book Lab Tests
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Take Control of Your Health?"
        description="Book your appointment today and experience our comprehensive healthcare services. Early detection saves lives."
        primaryCTA={{
          text: "Book Appointment",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Call Us Now",
          href: "tel:+919876543210"
        }}
        background="teal"
      />
    </>
  );
}
