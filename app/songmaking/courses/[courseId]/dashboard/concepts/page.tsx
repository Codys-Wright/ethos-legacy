import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

const concepts = [
  {
    id: "melody",
    title: "Melody Writing",
    description: "Learn how to create memorable melodies that stick in listeners' minds",
    progress: 75,
    topics: ["Scale Selection", "Melodic Contour", "Rhythm in Melody"]
  },
  {
    id: "harmony",
    title: "Harmony Basics",
    description: "Understand chord progressions and harmonic structure",
    progress: 30,
    topics: ["Chord Types", "Progressions", "Voice Leading"]
  },
  {
    id: "rhythm",
    title: "Rhythm & Timing",
    description: "Master the fundamentals of rhythm and musical timing",
    progress: 0,
    topics: ["Beat Division", "Syncopation", "Groove"]
  }
];

export default function ConceptsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Course Concepts</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept) => (
          <Card key={concept.id} className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{concept.title}</h3>
                <Progress value={concept.progress} className="w-[100px]" />
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4">
              {concept.description}
            </p>
            
            <div className="space-y-2 mb-4">
              {concept.topics.map((topic) => (
                <div
                  key={topic}
                  className="text-sm flex items-center space-x-2"
                >
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
            
            <Button className="w-full" variant="outline" asChild>
              <Link href={`/songmaking/courses/concepts/${concept.id}`}>
                {concept.progress > 0 ? "Continue Learning" : "Start Learning"}
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}