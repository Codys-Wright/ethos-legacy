import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PLATFORMS = [
  'songmaking',
  'indieland',
  'myartisttype',
  'fasttrackstudio',
  'mentorontcall',
  'makermatch'
];

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const path = url.pathname;
  
  // Check if the path contains any platform name
  const platform = PLATFORMS.find(p => path.includes(`/${p}`));
  
  if (platform) {
    // If it's already a not-found route, don't process further
    if (path.endsWith('/not-found')) {
      return NextResponse.next();
    }

    try {
      // Try to dynamically import the page
      await import(`app${path}/page.tsx`);
      return NextResponse.next();
    } catch {
      // If the page doesn't exist, redirect to platform's 404
      return NextResponse.rewrite(new URL(`/${platform}/not-found`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    // Skip all files with extensions (.jpg, .png, etc)
    '/((?!api|_next|.*\\..*).*)',
  ],
}