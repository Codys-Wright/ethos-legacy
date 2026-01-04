import { CourseCard } from "@/components/songmaking/course-card";

const courses = [
  {
    id: "songwriting-fundamentals",
    title: "Songwriting Fundamentals",
    subtitle: "Master the Basics of Modern Songwriting",
    startDate: "Jan 15, 2024",
    duration: "8 weeks",
    instructor: "Sarah Anderson",
    enrolledCount: 1234,
    imageUrl: "https://placehold.co/800x600/1a1a1a/e9d8b4.png?text=Songwriting+Fundamentals",
    href: "/songmaking/courses/songwriting-fundamentals"
  },
  {
    id: "advanced-composition",
    title: "Advanced Composition",
    subtitle: "Professional Techniques & Industry Secrets",
    startDate: "Feb 1, 2024",
    duration: "12 weeks",
    instructor: "Michael Wright",
    enrolledCount: 856,
    imageUrl: "https://placehold.co/800x600/1a1a1a/e9d8b4.png?text=Advanced+Composition",
    href: "/songmaking/courses/advanced-composition"
  },
  {
    id: "production-essentials",
    title: "Production Essentials",
    subtitle: "From Demo to Radio-Ready",
    startDate: "Jan 20, 2024",
    duration: "10 weeks",
    instructor: "David Chen",
    enrolledCount: 2156,
    imageUrl: "https://placehold.co/800x600/1a1a1a/e9d8b4.png?text=Production+Essentials",
    href: "/songmaking/courses/production-essentials"
  },
  {
    id: "vocal-writing",
    title: "Vocal Writing & Melody",
    subtitle: "Create Memorable Hooks & Melodies",
    startDate: "Feb 15, 2024",
    duration: "6 weeks",
    instructor: "Emma Davis",
    enrolledCount: 945,
    imageUrl: "https://placehold.co/800x600/1a1a1a/e9d8b4.png?text=Vocal+Writing",
    href: "/songmaking/courses/vocal-writing"
  }
];

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Available Courses</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            subtitle={course.subtitle}
            startDate={course.startDate}
            duration={course.duration}
            instructor={course.instructor}
            enrolledCount={course.enrolledCount}
            imageUrl={course.imageUrl}
            href={course.href}
          />
        ))}
      </div>
    </div>
  );
}