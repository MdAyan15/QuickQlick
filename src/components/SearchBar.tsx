
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Service } from "@/data/services";

interface SearchBarProps {
  services: Service[];
  onSearch: (results: Service[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ services, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      onSearch([]);
      return;
    }

    const results = services.filter(
      (service) =>
        service.name.toLowerCase().includes(value.toLowerCase()) ||
        service.description.toLowerCase().includes(value.toLowerCase())
    );

    onSearch(results);
  };

  return (
    <div className="relative max-w-md w-full">
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
        size={18}
      />
      <Input
        type="text"
        placeholder="Search for services..."
        value={query}
        onChange={handleSearch}
        className="pl-10 py-6 text-base rounded-xl border-muted"
      />
    </div>
  );
};

export default SearchBar;
