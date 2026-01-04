"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Users, 
  Calendar,
  GraduationCap,
  LayoutDashboard
} from "lucide-react";

const navigation = [
  {
    name: "Courses",
    href: "/songmaking/courses",
    icon: BookOpen
  },
  {
    name: "Enrolled",
    href: "/songmaking/enrolled",
    icon: GraduationCap
  },
  {
    name: "Coaches",
    href: "/songmaking/coaches",
    icon: Users
  },
  {
    name: "Events",
    href: "/songmaking/events",
    icon: Calendar
  },
  {
    name: "Admin",
    href: "/songmaking/admin",
    icon: LayoutDashboard
  }
];

export function SongMakingNav() {
  const pathname = usePathname();

  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center space-x-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}