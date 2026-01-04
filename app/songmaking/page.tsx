import { HeroSection } from "@/features/platforms/components/hero-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Award, 
  Play, 
  Headphones,
  Music,
  Trophy,
  Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Expert-Led Courses",
    description: "Learn from industry professionals and Grammy-winning songwriters",
    icon: BookOpen,
    href: "/songmaking/courses"
  },
  {
    title: "1-on-1 Coaching",
    description: "Get personalized guidance from experienced mentors",
    icon: Users,
    href: "/songmaking/coaches"
  },
  {
    title: "Live Events",
    description: "Join workshops, feedback sessions, and networking events",
    icon: Calendar,
    href: "/songmaking/events"
  },
  {
    title: "Certification",
    description: "Earn recognized certificates upon course completion",
    icon: Award,
    href: "/songmaking/enrolled"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Independent Artist",
    content: "SongMaking transformed my approach to music. The courses are incredibly detailed and practical.",
    avatar: "https://placehold.co/48x48/FF6B6B/FFF.png?text=SJ"
  },
  {
    name: "Mike Chen",
    role: "Music Producer",
    content: "The mentorship program is outstanding. I've learned techniques I use in my productions every day.",
    avatar: "https://placehold.co/48x48/4ECDC4/FFF.png?text=MC"
  },
  {
    name: "Emma Davis",
    role: "Songwriter",
    content: "From beginner to professional, this platform has everything you need to succeed in songwriting.",
    avatar: "https://placehold.co/48x48/45B7D1/FFF.png?text=ED"
  }
];

const stats = [
  { number: "50K+", label: "Students", icon: Users },
  { number: "200+", label: "Courses", icon: BookOpen },
  { number: "1M+", label: "Songs Created", icon: Music },
  { number: "95%", label: "Success Rate", icon: Trophy }
];

export default function SongMakingPage() {
  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-600/20 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold tracking-tight">
                Master the Art of{" "}
                <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                  Songwriting
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Learn from industry experts and turn your musical ideas into professional songs. Join thousands of aspiring songwriters and producers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/songmaking/courses">
                    <Play className="mr-2 h-4 w-4" /> Start Learning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/songmaking/courses">
                    <Headphones className="mr-2 h-4 w-4" /> Browse Courses
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:block">
              <Image
                src="https://placehold.co/1200x800/FF6B6B/FFF.png?text=Modern+Studio+Setup&font=raleway"
                alt="Studio Setup"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools and resources for your musical journey
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.title} href={feature.href}>
                  <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied students worldwide
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                    unoptimized
                  />
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of aspiring songwriters and music producers
          </p>
          <Button size="lg" asChild>
            <Link href="/songmaking/courses">
              <Play className="mr-2 h-4 w-4" /> Get Started Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}