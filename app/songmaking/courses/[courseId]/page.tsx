import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, BookOpen, Award } from "lucide-react";
import Image from "next/image";

// This would typically come from a database
const courses = {
  "songwriting-fundamentals": {
    title: "Songwriting Fundamentals",
    subtitle: "Master the Basics of Modern Songwriting",
    startDate: "Jan 15, 2024",
    duration: "8 weeks",
    instructor: "Sarah Anderson",
    enrolledCount: 1234,
    imageUrl: "https://placehold.co/1200x400/1a1a1a/e9d8b4.png?text=Songwriting+Fundamentals",
    description: "Learn the essential elements of songwriting from the ground up. This comprehensive course covers everything from basic song structure to advanced lyric writing techniques.",
    topics: [
      "Song Structure and Form",
      "Melody Writing",
      "Lyric Writing Fundamentals",
      "Chord Progressions",
      "Hook Development",
      "Song Analysis"
    ],
    requirements: [
      "No prior songwriting experience needed",
      "Basic understanding of music helpful but not required",
      "Passion for music and creativity"
    ],
    price: "$199"
  },
  "advanced-composition": {
    title: "Advanced Composition",
    subtitle: "Professional Techniques & Industry Secrets",
    startDate: "Feb 1, 2024",
    duration: "12 weeks",
    instructor: "Michael Wright",
    enrolledCount: 856,
    imageUrl: "https://placehold.co/1200x400/1a1a1a/e9d8b4.png?text=Advanced+Composition",
    description: "Take your songwriting to the professional level with advanced composition techniques. Learn from industry experts and develop your unique style.",
    topics: [
      "Advanced Harmony",
      "Complex Song Structures",
      "Genre-Specific Techniques",
      "Production Integration",
      "Commercial Songwriting",
      "Collaboration Skills"
    ],
    requirements: [
      "Basic songwriting experience",
      "Understanding of music theory fundamentals",
      "Completed Songwriting Fundamentals or equivalent experience"
    ],
    price: "$299"
  }
  // ... other courses
};

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses[params.courseId as keyof typeof courses];

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-[300px] lg:h-[400px] -mx-4 sm:-mx-6 lg:-mx-8">
        <Image
          src={course.imageUrl}
          alt={course.title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-muted-foreground">{course.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About this Course</h2>
            <p className="text-muted-foreground mb-6">{course.description}</p>
            
            <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
            <ul className="grid gap-2 mb-6">
              {course.topics.map((topic) => (
                <li key={topic} className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4 text-primary" />
                  {topic}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-3">Requirements</h3>
            <ul className="grid gap-2">
              {course.requirements.map((req) => (
                <li key={req} className="flex items-center gap-2 text-muted-foreground">
                  <Award className="h-4 w-4 text-primary" />
                  {req}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6 sticky top-24">
            <div className="text-3xl font-bold mb-6">{course.price}</div>
            
            <Button className="w-full mb-6" size="lg">
              Enroll Now
            </Button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Starts {course.startDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{course.enrolledCount.toLocaleString()} students enrolled</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}