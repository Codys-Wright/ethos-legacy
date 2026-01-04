import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BookOpen, 
  Calendar,
  DollarSign,
  TrendingUp,
  MessageSquare
} from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "1,234",
    change: "+12% from last month",
    icon: Users
  },
  {
    title: "Active Courses",
    value: "8",
    change: "+2 this quarter",
    icon: BookOpen
  },
  {
    title: "Upcoming Events",
    value: "12",
    change: "Next event in 2 days",
    icon: Calendar
  },
  {
    title: "Revenue",
    value: "$12,345",
    change: "+18% from last month",
    icon: DollarSign
  }
];

const recentActivity = [
  {
    id: 1,
    type: "enrollment",
    message: "New enrollment in Songwriting 101",
    time: "5 minutes ago"
  },
  {
    id: 2,
    type: "feedback",
    message: "New course feedback received",
    time: "1 hour ago"
  },
  {
    id: 3,
    type: "event",
    message: "Workshop registration opened",
    time: "2 hours ago"
  }
];

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button>Download Report</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-sm font-medium">{stat.title}</h3>
              </div>
              <p className="mt-2 text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {activity.type === "enrollment" && <Users className="h-4 w-4 text-primary" />}
                  {activity.type === "feedback" && <MessageSquare className="h-4 w-4 text-primary" />}
                  {activity.type === "event" && <Calendar className="h-4 w-4 text-primary" />}
                  <span>{activity.message}</span>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Performance Overview</h2>
            <Button variant="ghost" size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              Analytics
            </Button>
          </div>
          <div className="h-[200px] flex items-center justify-center text-muted-foreground">
            Chart placeholder
          </div>
        </Card>
      </div>
    </div>
  );
}