import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

export function ServiceCard({ title, description, icon, href = '#' }: ServiceCardProps) {
  return (
    <Card className="group hover-lift border-0 shadow-lg bg-white hover:border-brand-teal/20 transition-all duration-300">
      <CardContent className="p-8 space-y-6">
        <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-pink rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-bold font-poppins text-visible group-hover:text-brand-teal transition-colors">
            {title}
          </h3>
          <p className="text-visible-secondary leading-relaxed">
            {description}
          </p>
        </div>

        <Button asChild variant="ghost" className="text-brand-pink hover:text-brand-pink hover:bg-brand-pink/10 p-0">
          <Link href={href} className="flex items-center gap-2">
            Learn More
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}