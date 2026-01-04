interface HeroSectionProps {
  title: string;
  subtitle: string;
  gradient: string;
  textColor?: string;
}

export function HeroSection({ title, subtitle, gradient, textColor = "text-white" }: HeroSectionProps) {
  return (
    <div className={`py-24 ${gradient}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-5xl font-bold mb-6 ${textColor}`}>{title}</h1>
          <p className={`text-xl ${textColor} opacity-90`}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}