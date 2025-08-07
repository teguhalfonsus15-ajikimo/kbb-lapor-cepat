import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: string;
  value: string;
  label: string;
  className?: string;
}

export function MetricCard({ icon, value, label, className }: MetricCardProps) {
  return (
    <Card className={cn("bg-gradient-card shadow-soft border-0", className)}>
      <CardContent className="p-6">
        <div className="text-3xl mb-2">{icon}</div>
        <div className="text-2xl font-bold text-gov-primary mb-1">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}