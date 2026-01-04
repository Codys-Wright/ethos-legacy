import { Card } from "@/components/ui/card";
import { 
  BarChart,
  Users,
  Globe,
  CreditCard
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "12,345",
    change: "+2.5% from last month",
    icon: Users
  },
  {
    title: "Active Domains",
    value: "867",
    change: "+12 new this week",
    icon: Globe
  },
  {
    title: "Revenue",
    value: "$48,234",
    change: "+15.3% from last month",
    icon: CreditCard
  },
  {
    title: "Platform Growth",
    value: "23.8%",
    change: "+4.3% from last quarter",
    icon: BarChart
  }
];

export function StatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-gray-500" />
              <h3 className="text-sm font-medium">{stat.title}</h3>
            </div>
            <p className="mt-2 text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.change}</p>
          </Card>
        );
      })}
    </div>
  );
}