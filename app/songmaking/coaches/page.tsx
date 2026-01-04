import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Star, MessageSquare } from "lucide-react";

const coaches = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "SJ",
    specialty: "Vocal Performance & Songwriting",
    rating: 4.9,
    reviews: 128,
    bio: "Grammy-nominated songwriter with 15+ years of industry experience",
    availability: "Available for 1-on-1 sessions"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "MC",
    specialty: "Music Production & Composition",
    rating: 4.8,
    reviews: 95,
    bio: "Platinum record producer and mixing engineer",
    availability: "Next available slot: April 20"
  }
];

export default function CoachesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Expert Coaches</h1>
        <Button>Become a Coach</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {coaches.map((coach) => (
          <Card key={coach.id} className="p-6">
            <div className="flex items-start space-x-4">
              <Avatar className="h-16 w-16">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-medium">
                  {coach.avatar}
                </div>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{coach.name}</h3>
                    <p className="text-sm text-muted-foreground">{coach.specialty}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{coach.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({coach.reviews})
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-sm">{coach.bio}</p>
                <p className="mt-1 text-sm text-muted-foreground">{coach.availability}</p>
                <div className="mt-4 flex space-x-3">
                  <Button>Book Session</Button>
                  <Button variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}