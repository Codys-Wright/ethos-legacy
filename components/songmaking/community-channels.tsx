"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hash, Users, Bell, Megaphone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const channels = [
  { id: "general", name: "General", icon: Hash },
  { id: "introductions", name: "Introductions", icon: Users },
  { id: "announcements", name: "Announcements", icon: Megaphone },
  { id: "help", name: "Help & Support", icon: Bell }
];

export function CommunityChannels() {
  const pathname = usePathname();
  const courseId = pathname.split("/")[3];

  return (
    <Card className="p-4">
      <h2 className="font-semibold mb-4">Channels</h2>
      <div className="space-y-1">
        {channels.map((channel) => {
          const Icon = channel.icon;
          const href = `/songmaking/courses/${courseId}/dashboard/community/${channel.id}`;
          const isActive = pathname === href;

          return (
            <Button
              key={channel.id}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                isActive && "bg-accent"
              )}
              asChild
            >
              <Link href={href}>
                <Icon className="mr-2 h-4 w-4" />
                {channel.name}
              </Link>
            </Button>
          );
        })}
      </div>
    </Card>
  );
}