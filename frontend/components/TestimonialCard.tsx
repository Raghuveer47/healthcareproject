import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  location: string;
  rating?: number;
}

export function TestimonialCard({ content, author, location, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="bg-white shadow-lg border-0 hover-lift">
      <CardContent className="p-8 space-y-6">
        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-gray-700 leading-relaxed italic">
          "{content}"
        </blockquote>

        {/* Author */}
        <div className="border-t border-gray-100 pt-6">
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{location}</div>
        </div>
      </CardContent>
    </Card>
  );
}