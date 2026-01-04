"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Music, 
  Palette, 
  User, 
  ClipboardList, 
  Phone, 
  UsersRound 
} from 'lucide-react';

const platformConfig = {
  songmaking: {
    icon: Music,
    name: 'SongMaking',
    message: 'Looks like this part of SongMaking is still in production.',
    gradient: 'from-red-500 to-pink-600'
  },
  indieland: {
    icon: Palette,
    name: 'IndieLand',
    message: 'This IndieLand creation hasn\'t been released yet.',
    gradient: 'from-blue-500 to-indigo-600'
  },
  myartisttype: {
    icon: User,
    name: 'MyArtistType',
    message: 'This artistic path hasn\'t been discovered yet.',
    gradient: 'from-violet-500 to-purple-600'
  },
  fasttrackstudio: {
    icon: ClipboardList,
    name: 'FastTrackStudio',
    message: 'This FastTrackStudio project is still in development.',
    gradient: 'from-emerald-500 to-green-600'
  },
  mentorontcall: {
    icon: Phone,
    name: 'MentorOnCall',
    message: 'This mentoring session isn\'t available yet.',
    gradient: 'from-amber-400 to-orange-500'
  },
  makermatch: {
    icon: UsersRound,
    name: 'MakerMatch',
    message: 'This creative collaboration hasn\'t started yet.',
    gradient: 'from-cyan-500 to-blue-600'
  }
};

export default function PlatformNotFound({
  params
}: {
  params: { platform: string }
}) {
  const config = platformConfig[params.platform as keyof typeof platformConfig];
  
  if (!config) {
    return null;
  }

  const Icon = config.icon;

  return (
    <div className={`flex min-h-screen flex-col items-center justify-center bg-gradient-to-br ${config.gradient}`}>
      <div className="text-center">
        <Icon className="h-16 w-16 mb-6 text-white mx-auto" />
        <h1 className="text-4xl font-bold mb-2 text-white">
          404 - {config.name} Page Not Found
        </h1>
        <p className="text-white/90 mb-8 text-lg">
          {config.message}
        </p>
        <Button 
          asChild 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
        >
          <Link href={`/${params.platform}`}>
            Return to {config.name}
          </Link>
        </Button>
      </div>
    </div>
  );
}