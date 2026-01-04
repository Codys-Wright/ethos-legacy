export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  level: string;
  price: string;
  instructor: string;
  topics: string[];
  shortDescription?: string;
}

export const COURSES: Record<string, Course> = {
  "advanced-composition": {
    id: "advanced-composition",
    title: "Advanced Composition",
    description: "Master complex songwriting techniques and take your compositions to the next level. Designed for experienced songwriters looking to refine their craft.",
    shortDescription: "Master complex songwriting techniques",
    duration: "12 weeks",
    lessons: 36,
    level: "Advanced",
    price: "$299",
    instructor: "Michael Chen",
    topics: [
      "Advanced Harmony",
      "Complex Song Structures",
      "Genre-Specific Techniques",
      "Production Integration",
      "Professional Workflow"
    ]
  },
  "songwriting-101": {
    id: "songwriting-101",
    title: "Songwriting 101",
    description: "Learn the fundamentals of songwriting from industry experts. This comprehensive course covers everything from basic melody writing to advanced composition techniques.",
    shortDescription: "Learn the fundamentals of songwriting",
    duration: "8 weeks",
    lessons: 24,
    level: "Beginner",
    price: "$199",
    instructor: "Sarah Johnson",
    topics: [
      "Understanding Song Structure",
      "Melody Writing Basics",
      "Lyric Writing Techniques",
      "Chord Progressions",
      "Song Arrangement"
    ]
  }
} as const;

export type CourseId = keyof typeof COURSES;