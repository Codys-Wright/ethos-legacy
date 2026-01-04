import { PlatformCard } from './platform-card';
import { Palette, Music, User, ClipboardList, Phone, UsersRound, LayoutDashboard } from 'lucide-react';

const platforms = [
  { 
    name: 'SongMaking',
    description: 'A feature-complete online course system for musicians',
    href: '/songmaking',
    icon: Music,
    gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
    textColor: 'text-white'
  },
  { 
    name: 'IndieLand',
    description: 'Distribution platform for exclusive creator content',
    href: '/indieland',
    icon: Palette,
    gradient: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    textColor: 'text-white'
  },
  { 
    name: 'MyArtistType',
    description: 'Discover your unique artist personality',
    href: '/myartisttype',
    icon: User,
    gradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
    textColor: 'text-white'
  },
  { 
    name: 'FastTrackStudio',
    description: 'Project management designed for musicians',
    href: '/fasttrackstudio',
    icon: ClipboardList,
    gradient: 'bg-gradient-to-br from-emerald-500 to-green-600',
    textColor: 'text-white'
  },
  { 
    name: 'MentorOnCall',
    description: 'Book 1-on-1 sessions with creative mentors',
    href: '/mentorontcall',
    icon: Phone,
    gradient: 'bg-gradient-to-br from-amber-400 to-orange-500',
    textColor: 'text-white'
  },
  { 
    name: 'MakerMatch',
    description: 'Connect with creative collaborators',
    href: '/makermatch',
    icon: UsersRound,
    gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    textColor: 'text-white'
  }
];

export function PlatformGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {platforms.map((platform) => (
        <PlatformCard key={platform.name} {...platform} />
      ))}
      
      <PlatformCard
        name="Admin Dashboard"
        description="Manage all platforms and settings"
        href="/admin"
        icon={LayoutDashboard}
        gradient="bg-gradient-to-br from-gray-700 to-gray-800"
        textColor="text-white"
      />
    </div>
  );
}