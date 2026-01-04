import { Card } from "@/components/ui/card";

interface VideoPlayerProps {
  lessonId: string;
}

export function VideoPlayer({ lessonId }: VideoPlayerProps) {
  return (
    <Card className="aspect-video w-full overflow-hidden rounded-lg">
      <div className="h-full w-full bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Video player for lesson: {lessonId}</p>
      </div>
    </Card>
  );
}