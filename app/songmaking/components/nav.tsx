"use client";

import Link from "next/link";
import { Music, BookOpen, Users, Settings } from "lucide-react";

const navItems = [
  { name: "Courses", href: "/songmaking/courses", icon: BookOpen },
  { name: "Community", href: "/songmaking/community", icon: Users },
  { name: "Settings", href: "/songmaking/settings", icon: Settings },
];

export function SongMakingNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/songmaking" className="flex items-center space-x-2">
          <Music className="h-6 w-6" />
          <span className="font-bold">SongMaking</span>
        </Link>
        <nav className="flex items-center space-x-6 ml-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}