"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Music, 
  Palette, 
  User, 
  ClipboardList, 
  Phone, 
  UsersRound,
  Globe,
  Settings,
  UserCircle,
  CreditCard,
  BarChart
} from "lucide-react";

const platforms = [
  { name: 'SongMaking', href: '/admin/songmaking', icon: Music },
  { name: 'IndieLand', href: '/admin/indieland', icon: Palette },
  { name: 'MyArtistType', href: '/admin/myartisttype', icon: User },
  { name: 'FastTrackStudio', href: '/admin/fasttrack', icon: ClipboardList },
  { name: 'MentorOnCall', href: '/admin/mentorontcall', icon: Phone },
  { name: 'MakerMatch', href: '/admin/makermatch', icon: UsersRound },
];

const adminLinks = [
  { name: 'Domains', href: '/admin/domains', icon: Globe },
  { name: 'Users', href: '/admin/users', icon: UserCircle },
  { name: 'Billing', href: '/admin/billing', icon: CreditCard },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex flex-col gap-2 p-6">
        <div className="flex h-[60px] items-center px-6 text-lg font-medium">
          Admin Dashboard
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Platforms
            </h2>
            <div className="space-y-1">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <Link
                    key={platform.name}
                    href={platform.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                      pathname === platform.href 
                        ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" 
                        : ""
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {platform.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Administration
            </h2>
            <div className="space-y-1">
              {adminLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                      pathname === link.href 
                        ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" 
                        : ""
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}