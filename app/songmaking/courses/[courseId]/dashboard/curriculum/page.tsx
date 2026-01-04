import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, PlayCircle } from "lucide-react";
import Link from "next/link";

const curriculum = [
  {
    id: 1,
    title: "Getting Started",
    completed: true,
    lessons: [
      { id: "intro", title: "Introduction to Songwriting", completed: true, duration: "10:00" },
      { id: "tools", title: "Essential Tools & Setup", completed: true, duration: "15:00" }
    ]
  },
  {
    id: 2,
    title: "Song Structure",
    completed: false,
    lessons: [
      { id: "verse", title: "Writing Verses", completed: false, duration: "20:00" },
      { id: "chorus", title: "Crafting Choruses", completed: false, duration: "25:00" }
    ]
  }
];

export default function CurriculumPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Course Curriculum</h1>
        <div className="flex items-center space-x-2">
          <Progress value={33} className="w-[100px]" />
          <span className="text-sm text-muted-foreground">33% Complete</span>
        </div>
      </div>

      <div className="space-y-6">
        {curriculum.map((section) => (
          <Card key={section.id} className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              {section.completed ? (
                <CheckCircle2 className="h-5 w-5 text-primary" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            
            <div className="space-y-4">
              {section.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-accent"
                >
                  <div className="flex items-center space-x-3">
                    {lesson.completed ? (
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    ) : (
                      <PlayCircle className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{lesson.title}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">
                      {lesson.duration}
                    </span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/songmaking/courses/${section.id}/${lesson.id}`}>
                        {lesson.completed ? "Review" : "Start"}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}