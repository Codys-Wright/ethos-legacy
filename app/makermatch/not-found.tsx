"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UsersRound } from 'lucide-react';

export default function MakerMatchNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="text-center">
        <UsersRound className="h-16 w-16 mb-6 text-white mx-auto" />
        <h1 className="text-4xl font-bold mb-2 text-white">404 - MakerMatch Page Not Found</h1>
        <p className="text-white/90 mb-8 text-lg">
          This creative collaboration hasn't started yet.
        </p>
        <Button 
          asChild 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
        >
          <Link href="/makermatch">
            Return to MakerMatch
          </Link>
        </Button>
      </div>
    </div>
  );
}