import { VideoPlayer } from "@/components/songmaking/video-player";
import { LessonContent } from "@/components/songmaking/lesson-content";
import { LessonNavigation } from "@/components/songmaking/lesson-navigation";

interface LessonPageProps {
  params: {
    courseId: string;
    sectionId: string;
    lessonId: string;
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <VideoPlayer lessonId={params.lessonId} />
      <LessonContent lessonId={params.lessonId} />
      <LessonNavigation 
        courseId={params.courseId}
        sectionId={params.sectionId}
        lessonId={params.lessonId}
      />
    </div>
  );
}