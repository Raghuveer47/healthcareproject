'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  User,
  MessageSquare
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  preferredDate: z.string().min(1, { message: "Please select a preferred date." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  'Cancer Screening',
  'Mobile Diagnostics',
  'Lab Tests',
  'Preventive Health Checkups',
  'Specialty Consultations',
  'Organize Community Camp',
  'Other'
];

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Phone',
    details: ['+91 98765 43210', '+91 87654 32109'],
    action: 'tel:+919876543210'
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    details: ['info@bhargavihealthcare.com', 'appointments@bhargavihealthcare.com'],
    action: 'mailto:info@bhargavihealthcare.com'
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Address',
    details: ['123 Health Street', 'Medical District, Andhra - 600001'],
    action: '#'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Hours',
    details: ['Mon - Sat: 8:00 AM - 6:00 PM', 'Sun: 9:00 AM - 2:00 PM'],
    action: '#'
  }
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 sm:py-12 lg:py-20">
      {/* Hero Section */}
      <section className="pb-8 sm:pb-12 lg:pb-16">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
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
            
            <SectionHeading
              eyebrow="Get In Touch"
              title="Contact Us Today"
              description="Ready to take the first step towards better health? Contact us to schedule your appointment or learn more about our services."
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <Card className="shadow-2xl border-0">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">Book an Appointment</h3>
                    <p className="text-sm sm:text-base text-gray-600">Fill out the form below and we'll contact you to confirm your appointment.</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2 text-sm sm:text-base">
                          <User className="h-4 w-4" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          {...register('name')}
                          className={`text-sm sm:text-base touch-target ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && (
                          <p className="text-xs sm:text-sm text-red-500 mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2 text-sm sm:text-base">
                          <Mail className="h-4 w-4" />
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          {...register('email')}
                          className={`text-sm sm:text-base touch-target ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && (
                          <p className="text-xs sm:text-sm text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2 text-sm sm:text-base">
                          <Phone className="h-4 w-4" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          {...register('phone')}
                          className={`text-sm sm:text-base touch-target ${errors.phone ? 'border-red-500' : ''}`}
                        />
                        {errors.phone && (
                          <p className="text-xs sm:text-sm text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-sm sm:text-base">Service Required</Label>
                        <Select onValueChange={(value) => setValue('service', value)}>
                          <SelectTrigger className={`text-sm sm:text-base touch-target ${errors.service ? 'border-red-500' : ''}`}>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.service && (
                          <p className="text-xs sm:text-sm text-red-500 mt-1">{errors.service.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate" className="flex items-center gap-2 text-sm sm:text-base">
                        <Calendar className="h-4 w-4" />
                        Preferred Date
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        {...register('preferredDate')}
                        className={`text-sm sm:text-base touch-target ${errors.preferredDate ? 'border-red-500' : ''}`}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      {errors.preferredDate && (
                        <p className="text-xs sm:text-sm text-red-500 mt-1">{errors.preferredDate.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2 text-sm sm:text-base">
                        <MessageSquare className="h-4 w-4" />
                        Additional Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your requirements or any special needs..."
                        rows={4}
                        {...register('message')}
                        className={`text-sm sm:text-base touch-target ${errors.message ? 'border-red-500' : ''}`}
                      />
                      {errors.message && (
                        <p className="text-xs sm:text-sm text-red-500 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-brand-teal hover:bg-brand-teal/90 text-sm sm:text-base py-3 sm:py-3 touch-target"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">Contact Information</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Get in touch with us through any of the following methods. Our team is ready to assist you with your healthcare needs.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-l-4 border-l-brand-teal hover-lift">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1 space-y-1 sm:space-y-2 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-xs sm:text-sm text-gray-600 break-words">
                              {info.action.startsWith('tel:') || info.action.startsWith('mailto:') ? (
                                <a href={info.action} className="hover:text-brand-teal transition-colors">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden shadow-lg">
                <div className="h-48 sm:h-64 bg-gradient-to-br from-brand-teal/10 to-brand-pink/10 flex items-center justify-center">
                  <div className="text-center space-y-2 p-4">
                    <MapPin className="h-8 w-8 sm:h-12 sm:w-12 text-brand-teal mx-auto" />
                    <p className="text-xs sm:text-sm text-gray-600">Interactive map will be embedded here</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container px-4 sm:px-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-poppins">Emergency Contact</h3>
            <p className="text-sm sm:text-base text-red-100">For medical emergencies, please call immediately</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild className="bg-white text-red-600 font-semibold shadow-lg text-sm sm:text-base py-2 sm:py-3">
                <a href="tel:108">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Emergency: 108
                </a>
              </Button>
              <Button asChild className="bg-white text-red-600 font-semibold shadow-lg text-sm sm:text-base py-2 sm:py-3">
                <a href="tel:+919876543210">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Bhargavi Health Care: </span>+91 98765 43210
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}