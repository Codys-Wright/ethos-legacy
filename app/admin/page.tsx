import { StatsGrid } from "@/features/admin/components/stats-grid";
import { Card } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <StatsGrid />

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-medium">Recent Activity</h3>
          {/* Activity content will go here */}
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium">Platform Status</h3>
          {/* Status content will go here */}
        </Card>
      </div>
    </div>
  );
}