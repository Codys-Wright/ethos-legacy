import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface PlatformCardProps {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
  textColor: string;
}

export function PlatformCard({
  name,
  description,
  href,
  icon: Icon,
  gradient,
  textColor
}: PlatformCardProps) {
  return (
    <Link href={href}>
      <Card className={`group h-full p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden relative ${gradient}`}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white" />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
            <Icon className={`h-6 w-6 ${textColor}`} />
          </div>
          <h2 className={`text-2xl font-semibold mb-2 ${textColor}`}>
            {name}
          </h2>
          <p className={`${textColor} opacity-90`}>
            {description}
          </p>
        </div>
      </Card>
    </Link>
  );
}