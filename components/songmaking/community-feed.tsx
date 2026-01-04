import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react";

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "SJ"
    },
    content: "Just finished my first song using the techniques from Module 2! Would love some feedback from the community.",
    timestamp: "2 hours ago",
    likes: 12,
    comments: 4
  },
  {
    id: 2,
    author: {
      name: "Mike Chen",
      avatar: "MC"
    },
    content: "Quick tip: When writing melodies, try singing them first without any instruments. It helps ensure they're naturally singable!",
    timestamp: "5 hours ago",
    likes: 24,
    comments: 7
  }
];

export function CommunityFeed() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <textarea
          className="w-full p-3 rounded-lg border min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Share something with the community..."
        />
        <div className="mt-4 flex justify-end">
          <Button>Post</Button>
        </div>
      </Card>

      {posts.map((post) => (
        <Card key={post.id} className="p-6">
          <div className="flex items-start space-x-4">
            <Avatar>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                {post.author.avatar}
              </div>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{post.author.name}</h3>
                <span className="text-sm text-muted-foreground">{post.timestamp}</span>
              </div>
              <p className="mt-2 text-sm">{post.content}</p>
              <div className="mt-4 flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {post.comments}
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