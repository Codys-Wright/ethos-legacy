"use client";

import { COURSES, type CourseId } from "@/lib/config/courses";
import { notFound } from "next/navigation";

interface CourseLayoutProps {
  children: React.ReactNode;
  params: {
    courseId: string;
  };
}

export default function CourseLayout({ children, params }: CourseLayoutProps) {
  // Validate that the courseId exists
  if (!COURSES[params.courseId as CourseId]) {
    notFound();
  }

  return <div className="container">{children}</div>;
}