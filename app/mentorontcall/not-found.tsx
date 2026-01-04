"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function MentorOnCallNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-amber-400 to-orange-500">
      <div className="text-center">
        <Phone className="h-16 w-16 mb-6 text-white mx-auto" />
        <h1 className="text-4xl font-bold mb-2 text-white">404 - MentorOnCall Page Not Found</h1>
        <p className="text-white/90 mb-8 text-lg">
          This mentoring session isn't available yet.
        </p>
        <Button 
          asChild 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
        >
          <Link href="/mentorontcall">
            Return to MentorOnCall
          </Link>
        </Button>
      </div>
    </div>
  );
}