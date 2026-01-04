import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Lock } from "lucide-react";
import Link from "next/link";

interface CourseSectionsProps {
  courseId: string;
}

const COURSE_SECTIONS = {
  "songwriting-101": [
    {
      id: "basics",
      title: "The Basics",
      lessons: [
        { id: "intro", title: "Introduction to Songwriting", duration: "10:00", locked: false },
        { id: "structure", title: "Song Structure", duration: "15:00", locked: true },
        { id: "melody", title: "Creating Melodies", duration: "20:00", locked: true }
      ]
    },
    {
      id: "writing",
      title: "Writing Techniques",
      lessons: [
        { id: "lyrics", title: "Lyric Writing", duration: "25:00", locked: true },
        { id: "hooks", title: "Creating Hooks", duration: "18:00", locked: true }
      ]
    }
  ],
  "advanced-composition": [
    {
      id: "advanced-theory",
      title: "Advanced Music Theory",
      lessons: [
        { id: "harmony", title: "Complex Harmony", duration: "30:00", locked: false },
        { id: "modulation", title: "Key Modulation", duration: "25:00", locked: true }
      ]
    },
    {
      id: "arrangement",
      title: "Professional Arrangement",
      lessons: [
        { id: "orchestration", title: "Orchestration Basics", duration: "40:00", locked: true },
        { id: "production", title: "Production Techniques", duration: "35:00", locked: true }
      ]
    }
  ]
};

export function CourseSections({ courseId }: CourseSectionsProps) {
  const sections = COURSE_SECTIONS[courseId as keyof typeof COURSE_SECTIONS] || [];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Course Content</h2>
      {sections.map((section) => (
        <Card key={section.id} className="p-6">
          <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
          <div className="space-y-3">
            {section.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-accent"
              >
                <div className="flex items-center space-x-3">
                  {lesson.locked ? (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <PlayCircle className="h-5 w-5 text-primary" />
                  )}
                  <span>{lesson.title}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                  {!lesson.locked && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/songmaking/courses/${courseId}/${section.id}/${lesson.id}`}>
                        Start
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}