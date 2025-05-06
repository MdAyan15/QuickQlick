
import React from "react";
import { cn } from "@/lib/utils";
import { Home, ShoppingCart, Utensils, Clock, MapPin, Gamepad, Tv } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const icons = {
  home: Home,
  "shopping-cart": ShoppingCart,
  utensils: Utensils,
  clock: Clock,
  "map-pin": MapPin,
  gamepad: Gamepad,
  tv: Tv,
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  icon,
  description,
  isActive,
  onClick,
}) => {
  // Get the icon component or use Home as fallback
  const IconComponent = icons[icon as keyof typeof icons] || Home;

  return (
    <div
      className={cn(
        "category-card",
        isActive && "border-accent border-2"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center mb-4",
          isActive ? "bg-accent text-white" : "bg-secondary text-accent"
        )}
      >
        <IconComponent size={32} />
      </div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-muted-foreground text-sm text-center">{description}</p>
    </div>
  );
};

export default CategoryCard;
