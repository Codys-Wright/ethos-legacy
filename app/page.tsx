import { PlatformGrid } from "@/features/platforms/components/platform-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            ETHOS CREATIVE Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose your creative platform
          </p>
        </div>

        <PlatformGrid />
      </div>
    </main>
  );
}