"use client";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react";

interface ChannelFeedProps {
  channelName: string;
}

export function ChannelFeed({ channelName }: ChannelFeedProps) {
  const messages = [
    {
      id: 1,
      author: {
        name: "David Wilson",
        avatar: "DW"
      },
      content: "Hey everyone! Just joined the course and excited to learn songwriting!",
      timestamp: "1 hour ago",
      likes: 8,
      comments: 3
    },
    {
      id: 2,
      author: {
        name: "Lisa Chen",
        avatar: "LC"
      },
      content: "Welcome David! You're going to love this journey. Feel free to ask any questions!",
      timestamp: "30 minutes ago",
      likes: 5,
      comments: 1
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <textarea
          className="w-full p-3 rounded-lg border min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={`Message #${channelName}...`}
        />
        <div className="mt-4 flex justify-end">
          <Button>Send Message</Button>
        </div>
      </Card>

      {messages.map((message) => (
        <Card key={message.id} className="p-6">
          <div className="flex items-start space-x-4">
            <Avatar>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                {message.author.avatar}
              </div>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{message.author.name}</h3>
                <span className="text-sm text-muted-foreground">{message.timestamp}</span>
              </div>
              <p className="mt-2 text-sm">{message.content}</p>
              <div className="mt-4 flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  {message.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {message.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}