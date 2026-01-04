"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Palette, Music, User, ClipboardList, Phone, UsersRound, LayoutDashboard } from 'lucide-react';

const platforms = [
  { name: 'SongMaking', href: '/platforms/songmaking', icon: Music, color: 'text-pink-500' },
  { name: 'IndieLand', href: '/platforms/indieland', icon: Palette, color: 'text-purple-500' },
  { name: 'MyArtistType', href: '/platforms/myartisttype', icon: User, color: 'text-blue-500' },
  { name: 'FastTrackStudio', href: '/platforms/fasttrackstudio', icon: ClipboardList, color: 'text-green-500' },
  { name: 'MentorOnCall', href: '/platforms/mentorontcall', icon: Phone, color: 'text-yellow-500' },
  { name: 'MakerMatch', href: '/platforms/makermatch', icon: UsersRound, color: 'text-red-500' },
];

export function PlatformNav() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <LayoutDashboard className="h-6 w-6" />
            <span className="font-bold">Creative Platform</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center space-x-4">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <Link
                key={platform.name}
                href={platform.href}
                className={`inline-flex items-center space-x-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${platform.color}`}
              >
                <Icon className="h-4 w-4" />
                <span>{platform.name}</span>
              </Link>
            );
          })}
          <Link
            href="/admin"
            className={`inline-flex items-center space-x-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ml-auto ${
              isAdmin ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}