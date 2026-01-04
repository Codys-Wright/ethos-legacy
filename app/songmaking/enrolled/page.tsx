import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock, Award } from "lucide-react";
import Link from "next/link";

const enrolledCourses = [
  {
    id: "songwriting-101",
    title: "Songwriting 101",
    progress: 45,
    lastAccessed: "2 days ago",
    nextLesson: "Creating Melodies",
    certificateEligible: false
  },
  {
    id: "advanced-composition",
    title: "Advanced Composition",
    progress: 100,
    lastAccessed: "1 week ago",
    nextLesson: "Course Completed",
    certificateEligible: true
  }
];

export default function EnrolledPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Courses</h1>

      <div className="grid gap-6">
        {enrolledCourses.map((course) => (
          <Card key={course.id} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{course.title}</h2>
                  <span className="text-sm text-muted-foreground">
                    Last accessed {course.lastAccessed}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Progress value={course.progress} className="flex-1" />
                  <span className="text-sm font-medium">{course.progress}%</span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Next: {course.nextLesson}
                  </div>
                  {course.certificateEligible && (
                    <div className="flex items-center text-primary">
                      <Award className="h-4 w-4 mr-1" />
                      Certificate Available
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <Button asChild>
                  <Link href={`/songmaking/courses/${course.id}/dashboard`}>
                    <PlayCircle className="h-4 w-4 mr-2" />
                    {course.progress === 100 ? "Review Course" : "Continue Learning"}
                  </Link>
                </Button>
                {course.certificateEligible && (
                  <Button variant="outline">Get Certificate</Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}