
import React from "react";
import { Service } from "@/data/services";
import ServiceCard from "./ServiceCard";

interface ServiceGridProps {
  services: Service[];
  title?: string;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, title }) => {
  return (
    <div className="w-full animate-fade-in">
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            logo={service.logo}
            url={service.url}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
