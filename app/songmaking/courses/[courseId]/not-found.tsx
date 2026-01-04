"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function CourseNotFound() {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-red-500 to-pink-600">
      <div className="text-center">
        <Music className="h-16 w-16 mb-6 text-white mx-auto" />
        <h1 className="text-4xl font-bold mb-2 text-white">404 - Course Not Found</h1>
        <p className="text-white/90 mb-2 text-lg">
          The course you're looking for doesn't exist.
        </p>
        <p className="text-white/75 mb-8 text-sm">
          Attempted URL: {pathname}
        </p>
        <Button 
          asChild 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
        >
          <Link href="/songmaking/courses">
            Browse Available Courses
          </Link>
        </Button>
      </div>
    </div>
  );
}