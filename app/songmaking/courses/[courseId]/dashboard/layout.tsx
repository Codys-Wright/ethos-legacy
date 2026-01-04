"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  BookOpen, 
  Lightbulb, 
  Users, 
  Calendar 
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: {
    courseId: string;
  };
}

export default function DashboardLayout({ children, params }: DashboardLayoutProps) {
  const pathname = usePathname();

  const navigation = [
    {
      name: "Overview",
      href: `/songmaking/courses/${params.courseId}/dashboard/overview`,
      icon: LayoutDashboard
    },
    {
      name: "Curriculum",
      href: `/songmaking/courses/${params.courseId}/dashboard/curriculum`,
      icon: BookOpen
    },
    {
      name: "Concepts",
      href: `/songmaking/courses/${params.courseId}/dashboard/concepts`,
      icon: Lightbulb
    },
    {
      name: "Community",
      href: `/songmaking/courses/${params.courseId}/dashboard/community`,
      icon: Users
    },
    {
      name: "Events",
      href: `/songmaking/courses/${params.courseId}/dashboard/events`,
      icon: Calendar
    }
  ];

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2 p-6">
          <div className="flex h-[60px] items-center px-6 text-lg font-medium">
            Course Dashboard
          </div>
          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href && "bg-gray-200 dark:bg-gray-800"
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
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}