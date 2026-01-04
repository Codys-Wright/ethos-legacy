"use client";

import { Calendar, Clock, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  subtitle: string;
  startDate: string;
  duration: string;
  instructor: string;
  enrolledCount: number;
  imageUrl: string;
  href: string;
}

export function CourseCard({
  title,
  subtitle,
  startDate,
  duration,
  instructor,
  enrolledCount,
  imageUrl,
  href
}: CourseCardProps) {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative">
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              FEATURED
            </span>
          </div>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>{startDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              <span>{enrolledCount.toLocaleString()} enrolled</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <h2 className="text-lg font-semibold leading-tight line-clamp-2">
              {title}
            </h2>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              By {instructor}
            </span>
            <Link 
              href={href}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View details →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 