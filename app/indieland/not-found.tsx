"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

export default function IndieLandNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="text-center">
        <Palette className="h-16 w-16 mb-6 text-white mx-auto" />
        <h1 className="text-4xl font-bold mb-2 text-white">404 - IndieLand Page Not Found</h1>
        <p className="text-white/90 mb-8 text-lg">
          This IndieLand creation hasn't been released yet.
        </p>
        <Button 
          asChild 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
        >
          <Link href="/indieland">
            Return to IndieLand
          </Link>
        </Button>
      </div>
    </div>
  );
}