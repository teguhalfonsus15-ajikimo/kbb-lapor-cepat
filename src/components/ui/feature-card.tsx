import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="bg-gradient-card shadow-soft border-0 h-full">
      <CardContent className="p-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-secondary-foreground" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gov-neutral mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}