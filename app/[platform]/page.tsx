import { notFound } from 'next/navigation';
import { platformThemes } from '@/lib/themes';

const VALID_PLATFORMS = [
  'songmaking',
  'indieland',
  'myartisttype',
  'fasttrackstudio',
  'mentorontcall',
  'makermatch'
];

export default function PlatformPage({
  params
}: {
  params: { platform: string }
}) {
  if (!VALID_PLATFORMS.includes(params.platform)) {
    notFound();
  }

  const theme = platformThemes[`${params.platform}.com`] || platformThemes['songmaking.com'];

  return (
    <main className="min-h-screen bg-background">
      <div className={theme?.spacing.container || 'max-w-7xl mx-auto px-4'}>
        <div className={theme?.spacing.section || 'py-12'}>
          <h1 className="text-4xl font-bold text-primary">
            Welcome to {params.platform}
          </h1>
        </div>
      </div>
    </main>
  );
}