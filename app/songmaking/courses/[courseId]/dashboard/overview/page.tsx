import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Clock, BookOpen } from "lucide-react";

export default function CourseOverviewPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Course Overview</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Award className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Progress</p>
              <p className="text-2xl font-bold">45%</p>
            </div>
          </div>
          <Progress value={45} className="mt-4" />
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Clock className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Time Spent</p>
              <p className="text-2xl font-bold">12h 30m</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Lessons Completed</p>
              <p className="text-2xl font-bold">8/24</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Completed Lesson 3</p>
                <p className="text-sm text-muted-foreground">Song Structure Basics</p>
              </div>
              <p className="text-sm text-muted-foreground">2 days ago</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Started Lesson 4</p>
                <p className="text-sm text-muted-foreground">Creating Melodies</p>
              </div>
              <p className="text-sm text-muted-foreground">1 day ago</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Next Up</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Lesson 5: Chord Progressions</p>
              <p className="text-sm text-muted-foreground">Duration: 25 minutes</p>
            </div>
            <div>
              <p className="font-medium">Assignment: Write a Verse</p>
              <p className="text-sm text-muted-foreground">Due in 3 days</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}