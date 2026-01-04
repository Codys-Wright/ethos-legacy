import { Card } from "@/components/ui/card";
import { Hash, Users } from "lucide-react";

interface ChannelHeaderProps {
  channelName: string;
}

export function ChannelHeader({ channelName }: ChannelHeaderProps) {
  const channelInfo = {
    general: {
      description: "General discussion about songwriting and music production",
      memberCount: 245
    },
    introductions: {
      description: "Introduce yourself to the community",
      memberCount: 180
    },
    announcements: {
      description: "Important updates and announcements about the course",
      memberCount: 312
    },
    help: {
      description: "Get help with your songwriting questions",
      memberCount: 198
    }
  };

  const info = channelInfo[channelName as keyof typeof channelInfo] || {
    description: `Welcome to #${channelName}`,
    memberCount: 0
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Hash className="h-6 w-6 text-muted-foreground" />
          <div>
            <h1 className="text-xl font-semibold capitalize">{channelName}</h1>
            <p className="text-sm text-muted-foreground">{info.description}</p>
          </div>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-4 w-4 mr-2" />
          {info.memberCount} members
        </div>
      </div>
    </Card>
  );
}