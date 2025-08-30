interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  eyebrowColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  centered = false,
  eyebrowColor = "text-brand-pink",
  titleColor = "text-gray-900",
  descriptionColor = "text-gray-600"
}: SectionHeadingProps) {
  const alignment = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`space-y-4 ${alignment} ${centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {eyebrow && (
        <div className={`${eyebrowColor} font-semibold text-sm uppercase tracking-wider`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold font-poppins ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${descriptionColor} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
}