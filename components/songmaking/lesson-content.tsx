import { Card } from "@/components/ui/card";

interface LessonContentProps {
  lessonId: string;
}

export function LessonContent({ lessonId }: LessonContentProps) {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-4">Introduction to Songwriting</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Welcome to your first lesson in songwriting! In this session, we'll cover the fundamental
          principles that make a great song. We'll explore the basic elements of songwriting and
          how they work together to create memorable music.
        </p>
        <h2>What You'll Learn</h2>
        <ul>
          <li>Understanding song structure</li>
          <li>Basic melody writing</li>
          <li>Rhythm and timing</li>
          <li>Introduction to lyrics</li>
        </ul>
      </div>
    </Card>
  );
}