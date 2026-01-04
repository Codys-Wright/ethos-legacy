"use client";

import { Card } from "@/components/ui/card";
import { Music, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import { COURSES } from "@/lib/config/courses";

export function CourseList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Object.values(COURSES).map((course) => (
        <Link key={course.id} href={`/songmaking/courses/${course.id}`}>
          <Card className="p-6 hover:shadow-lg transition-shadow h-full cursor-pointer">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-muted-foreground">{course.level}</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{course.shortDescription}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {course.lessons} lessons
                </div>
              </div>
              <span className="font-semibold text-primary">{course.price}</span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}