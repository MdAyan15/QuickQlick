
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

  const filteredServices = selectedCategory
    ? services.filter((service) => service.categoryId === selectedCategory)
    : [];

  const selectedCategoryName = selectedCategory
    ? categories.find((category) => category.id === selectedCategory)?.name
    : "";

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
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
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
        </section>

        {isSearchActive && (
          <section className="animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Search Results</h2>
            {searchResults.length > 0 ? (
              <ServiceGrid services={searchResults} />
            ) : (
              <p className="text-center text-muted-foreground">
                No services found matching your search.
              </p>
            )}
          </section>
        )}

        {selectedCategory && (
          <section className="animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">{selectedCategoryName} Services</h2>
            {filteredServices.length > 0 ? (
              <ServiceGrid services={filteredServices} />
            ) : (
              <p className="text-center text-muted-foreground">
                No services available for this category.
              </p>
            )}
          </section>
        )}

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
