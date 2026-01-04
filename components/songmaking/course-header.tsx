import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, BookOpen, BarChart } from "lucide-react";

interface CourseHeaderProps {
  courseId: string;
}

const COURSE_DATA = {
  "songwriting-101": {
    title: "Songwriting 101",
    description: "Learn the fundamentals of songwriting from industry experts",
    duration: "8 weeks",
    lessons: 24,
    level: "Beginner",
    price: "$199"
  },
  "advanced-composition": {
    title: "Advanced Composition",
    description: "Master complex songwriting techniques and advanced composition methods",
    duration: "12 weeks",
    lessons: 36,
    level: "Advanced",
    price: "$299"
  }
};

export function CourseHeader({ courseId }: CourseHeaderProps) {
  const course = COURSE_DATA[courseId as keyof typeof COURSE_DATA];

  if (!course) {
    return null;
  }

  return (
    <Card className="p-8">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-muted-foreground max-w-2xl">{course.description}</p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              {course.duration}
            </div>
            <div className="flex items-center text-muted-foreground">
              <BookOpen className="h-4 w-4 mr-2" />
              {course.lessons} lessons
            </div>
            <div className="flex items-center text-muted-foreground">
              <BarChart className="h-4 w-4 mr-2" />
              {course.level}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="text-2xl font-bold">{course.price}</p>
          <Button size="lg">Enroll Now</Button>
        </div>
      </div>
    </Card>
  );
}