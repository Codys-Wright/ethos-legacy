"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LayoutDashboard } from 'lucide-react';

export default function RootNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="text-center">
        <LayoutDashboard className="h-16 w-16 mb-6 text-white mx-auto" />
        <h1 className="text-4xl font-bold mb-2 text-white">404 - Page Not Found</h1>
        <p className="text-white/90 mb-8 text-lg">
          The page you're looking for doesn't exist. Please check the URL and try again.
        </p>
        <Button 
          asChild 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
        >
          <Link href="/">
            Return to Platform Hub
          </Link>
        </Button>
      </div>
    </div>
  );
}