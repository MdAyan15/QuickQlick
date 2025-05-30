import React, { useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import ServiceGrid from "@/components/ServiceGrid";
import SearchBar from "@/components/SearchBar";
import { categories, services } from "@/data/services";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<typeof services>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
      setIsSearchActive(false);
      setSearchResults([]);
    }
  };

  const handleSearch = (results: typeof services) => {
    setSearchResults(results);
    setIsSearchActive(results.length > 0);
    if (results.length > 0) {
      setSelectedCategory(null);
    }
  };

  const getCategoryServices = (categoryId: string) => {
    return services.filter((service) => service.categoryId === categoryId);
  };

  // Calculate the index of the selected category
  const selectedIndex = selectedCategory 
    ? categories.findIndex(cat => cat.id === selectedCategory)
    : -1;

  // Calculate how many items should be in each row
  const itemsPerRow = 6; // For large screens

  // Split categories into rows
  const rows = [];
  for (let i = 0; i < categories.length; i += itemsPerRow) {
    rows.push(categories.slice(i, i + itemsPerRow));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-8">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              <img src="/logo_final.jpg" alt="Quick Qlick Logo" className="w-20 h-10 mr-5" />
              <span style={{ color: "#E6E6FA" }}>Quick</span> <span style={{ color: "rgb(33, 150, 243)" }}>Qlick</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Your gateway to all essential online services in one place
            </p>
            <div className="flex justify-center mb-6">
              <SearchBar services={services} onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {isSearchActive && (
          <section className="animate-fade-in mb-10">
            <h2 className="text-2xl font-semibold mb-6">Search Results</h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {searchResults.map((service) => (
                  <div
                    key={service.id}
                    className="service-card group cursor-pointer"
                    onClick={() => window.open(service.url, "_blank", "noopener,noreferrer")}
                  >
                    <div className="w-16 h-16 rounded-lg mb-3 overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src={service.logo}
                        alt={`${service.name} logo`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h4 className="font-medium text-center">{service.name}</h4>
                    <p className="text-xs text-muted-foreground text-center mt-1">
                      {service.description}
                    </p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-accent">
                      <span className="text-xs mr-1">Visit</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">
                No services found matching your search.
              </p>
            )}
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Browse Categories</h2>
          <div className="space-y-8">
            {rows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {/* Category Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {row.map((category) => (
                    <CategoryCard
                      key={category.id}
                      name={category.name}
                      icon={category.icon}
                      description={category.description}
                      isActive={selectedCategory === category.id}
                      onClick={() => handleCategoryClick(category.id)}
                    />
                  ))}
                </div>

                {/* Services section - show if a category from this row is selected */}
                {selectedCategory && row.some(cat => cat.id === selectedCategory) && (
                  <div className="animate-fade-in">
                    <ServiceGrid services={getCategoryServices(selectedCategory)} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {!selectedCategory && !isSearchActive && (
          <section className="animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Popular Services</h2>
            <ServiceGrid
              services={services.slice(0, 8)}
              title="Trending This Week"
            />
          </section>
        )}
      </main>

      <footer className="bg-white border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Quick Qlick. All rights reserved.</p>
          <p className="mt-2">Your one-stop gateway to online services</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
