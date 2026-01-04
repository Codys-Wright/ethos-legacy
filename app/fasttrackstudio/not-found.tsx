"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ClipboardList } from 'lucide-react';

export default function FastTrackStudioNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-emerald-500 to-green-600">
      <div className="text-center">
        <ClipboardList className="h-16 w-16 mb-6 text-white mx-auto" />
        <h1 className="text-4xl font-bold mb-2 text-white">404 - FastTrackStudio Page Not Found</h1>
        <p className="text-white/90 mb-8 text-lg">
          This FastTrackStudio project is still in development.
        </p>
        <Button 
          asChild 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
        >
          <Link href="/fasttrackstudio">
            Return to FastTrackStudio
          </Link>
        </Button>
      </div>
    </div>
  );
}