"use client";

import Link from "next/link";
import { Palette, Heart, MessageSquare, Bell } from "lucide-react";

const navItems = [
  { name: "Feed", href: "/indieland/feed", icon: Heart },
  { name: "Messages", href: "/indieland/messages", icon: MessageSquare },
  { name: "Notifications", href: "/indieland/notifications", icon: Bell },
];

export function IndieLandNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/indieland" className="flex items-center space-x-2">
          <Palette className="h-6 w-6" />
          <span className="font-bold">IndieLand</span>
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