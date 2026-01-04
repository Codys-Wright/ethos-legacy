"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Users, 
  Calendar,
  GraduationCap,
  LayoutDashboard,
  MessageSquare
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
    name: "Community",
    href: "/songmaking/community",
    icon: MessageSquare
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
    <nav className="hidden md:ml-8 md:flex md:space-x-6">
      {navigation.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
              pathname === item.href
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <Icon className="h-4 w-4 mr-2" />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
} 