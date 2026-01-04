import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, MapPin, Filter } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Songwriting Workshop",
    description: "Join us for a live workshop on crafting memorable melodies",
    date: "2024-04-15",
    time: "2:00 PM EST",
    duration: "90 minutes",
    attendees: 45,
    location: "Online",
    type: "workshop"
  },
  {
    id: 2,
    title: "Community Feedback Session",
    description: "Share your work and get feedback from peers and instructors",
    date: "2024-04-18",
    time: "3:30 PM EST",
    duration: "120 minutes",
    attendees: 28,
    location: "Online",
    type: "feedback"
  },
  {
    id: 3,
    title: "Industry Expert Q&A",
    description: "Live Q&A session with Grammy-winning songwriter Sarah Johnson",
    date: "2024-04-20",
    time: "1:00 PM EST",
    duration: "60 minutes",
    attendees: 156,
    location: "Online",
    type: "qa"
  }
];

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Events</h1>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            Add to Calendar
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="registered">Registered</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6 mt-6">
          {events.map((event) => (
            <Card key={event.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <p className="text-muted-foreground">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time} ({event.duration})
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} attending
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button>Register Now</Button>
                  <Button variant="outline">Add to Calendar</Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="registered">
          <div className="flex flex-col items-center justify-center text-center py-12">
            <p className="text-muted-foreground">You haven't registered for any upcoming events.</p>
            <Button className="mt-4" variant="outline">Browse Events</Button>
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="flex flex-col items-center justify-center text-center py-12">
            <p className="text-muted-foreground">No past events to display.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}