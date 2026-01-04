import { Skeleton } from "@/components/ui/skeleton";

export default function CourseLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-[400px] -mx-4 sm:-mx-6 lg:-mx-8" />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Skeleton className="h-[600px]" />
        </div>
        <div>
          <Skeleton className="h-[300px]" />
        </div>
      </div>
    </div>
  );
} 