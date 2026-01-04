"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

export default function MyArtistTypeNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-violet-500 to-purple-600">
      <div className="text-center">
        <User className="h-16 w-16 mb-6 text-white mx-auto" />
        <h1 className="text-4xl font-bold mb-2 text-white">404 - MyArtistType Page Not Found</h1>
        <p className="text-white/90 mb-8 text-lg">
          This artistic path hasn't been discovered yet.
        </p>
        <Button 
          asChild 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
        >
          <Link href="/myartisttype">
            Return to MyArtistType
          </Link>
        </Button>
      </div>
    </div>
  );
}