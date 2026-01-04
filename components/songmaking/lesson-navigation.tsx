import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface LessonNavigationProps {
  courseId: string;
  sectionId: string;
  lessonId: string;
}

export function LessonNavigation({ courseId, sectionId, lessonId }: LessonNavigationProps) {
  return (
    <div className="flex justify-between items-center pt-6 border-t">
      <Button variant="outline" asChild>
        <Link href={`/songmaking/courses/${courseId}`}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Course
        </Link>
      </Button>
      <Button asChild>
        <Link href={`/songmaking/courses/${courseId}/${sectionId}/next-lesson`}>
          Next Lesson
          <ChevronRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
}