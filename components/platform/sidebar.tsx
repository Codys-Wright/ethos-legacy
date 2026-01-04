"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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

export function PlatformSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block w-64 border-r min-h-[calc(100vh-3.5rem)]">
      <div className="flex flex-col gap-2 p-6">
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);

            return (
              <Button
                key={item.name}
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  isActive && "bg-accent"
                )}
                asChild
              >
                <Link href={item.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}