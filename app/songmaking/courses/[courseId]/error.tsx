"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CourseError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-muted-foreground mb-8">
        We couldn't load the course information. Please try again later.
      </p>
      <Button asChild>
        <Link href="/songmaking/courses">
          Return to Courses
        </Link>
      </Button>
    </div>
  );
} 