'use client';

import { useState, useEffect } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    content: "The mobile screening camp at our office was incredibly well-organized. The staff was professional and caring, and the entire process was smooth. Early detection through their service gave me peace of mind.",
    author: "Priya Sharma",
    location: "Chennai"
  },
  {
    content: "Bhargavi Health Care's mobile diagnostic services are a blessing for rural communities. They brought quality healthcare right to our village, and the doctors were very patient in explaining everything.",
    author: "Rajesh Kumar",
    location: "Coimbatore"
  },
  {
    content: "The cancer screening program was thorough and professional. The team made me feel comfortable throughout the process, and the follow-up care was excellent. Highly recommended for preventive healthcare.",
    author: "Lakshmi Devi",
    location: "Madurai"
  },
  {
    content: "As a community leader, I've organized multiple health camps with Bhargavi Health Care. Their commitment to serving underserved areas and providing quality diagnostic services is commendable.",
    author: "Dr. Suresh Babu",
    location: "Tiruchirappalli"
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="space-y-8">
      {/* Testimonial Display */}
      <div className="relative">
        <div className="grid md:grid-cols-2 gap-8">
          {[0, 1].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length;
            const testimonial = testimonials[index];
            return (
              <div key={index} className="animate-fade-in-up">
                <TestimonialCard {...testimonial} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                Math.floor(index / 2) === Math.floor(currentIndex / 2)
                  ? 'bg-brand-teal'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}