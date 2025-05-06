
import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
  logo: string;
  url: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  logo,
  url,
  description,
}) => {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="service-card group" onClick={handleClick}>
      <div className="w-16 h-16 rounded-lg mb-3 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className="object-cover w-full h-full"
        />
      </div>
      <h4 className="font-medium text-center">{name}</h4>
      <p className="text-xs text-muted-foreground text-center mt-1">
        {description}
      </p>
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-accent">
        <span className="text-xs mr-1">Visit</span>
        <ArrowRight size={12} />
      </div>
    </Card>
  );
};

export default ServiceCard;
