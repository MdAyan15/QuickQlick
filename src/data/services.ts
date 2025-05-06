
export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type Service = {
  id: string;
  name: string;
  logo: string;
  url: string;
  description: string;
  categoryId: string;
};

export const categories: Category[] = [
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "tv",
    description: "Streaming services, video platforms, and more"
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: "shopping-cart",
    description: "E-commerce platforms and online stores"
  },
  {
    id: "food",
    name: "Food Delivery",
    icon: "utensils",
    description: "Food delivery services for all your cravings"
  },
  {
    id: "groceries",
    name: "Instant Delivery",
    icon: "clock",
    description: "Quick delivery services for groceries and essentials"
  },
  {
    id: "travel",
    name: "Travel",
    icon: "map-pin",
    description: "Airlines, hotels, and travel booking services"
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: "gamepad",
    description: "Online gaming platforms and services"
  }
];

export const services: Service[] = [
  // Entertainment
  {
    id: "netflix",
    name: "Netflix",
    logo: "public/netflix.png",
    url: "https://www.netflix.com",
    description: "Stream TV shows and movies",
    categoryId: "entertainment"
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "public/spotify.png",
    url: "https://www.spotify.com",
    description: "Music streaming service",
    categoryId: "entertainment"
  },
  {
    id: "youtube",
    name: "YouTube",
    logo: "public/youtube.jpg",
    url: "https://www.youtube.com",
    description: "Video sharing platform",
    categoryId: "entertainment"
  },
  {
    id: "disney",
    name: "Jio Hotstar",
    logo: "public/hotstar.jpeg",
    url: "https://www.disneyplus.com",
    description: "Movie , Series and TV streaming service",
    categoryId: "entertainment"
  },
  
  // Shopping
  {
    id: "amazon",
    name: "Amazon",
    logo: "public/amazon.jpg",
    url: "https://www.amazon.com",
    description: "Online shopping platform",
    categoryId: "shopping"
  },
  {
    id: "flipkart",
    name: "Flipkart",
    logo: "public/flipkart.png",
    url: "https://www.flipkart.com",
    description: "E-commerce shopping website",
    categoryId: "shopping"
  },
  {
    id: "etsy",
    name: "Myntra",
    logo: "public/myntra.png",
    url: "https://www.myntra.com",
    description: "E commerce shopping platform",
    categoryId: "shopping"
  },
  {
    id: "ebay",
    name: "eBay",
    logo: "public/ebay.png",
    url: "https://www.ebay.com",
    description: "Online auction and shopping",
    categoryId: "shopping"
  },
  
  // Food
  {
    id: "swiggy",
    name: "Swiggy",
    logo: "public/Swiggy_logo.png",
    url: "https://www.swiggy.com",
    description: "Online food delivery",
    categoryId: "food"
  },
  {
    id: "zomato",
    name: "Zomato",
    logo: "public/zomato.jpg",
    url: "https://www.zomato.com",
    description: "Restaurant finder and food delivery",
    categoryId: "food"
  },
  {
    id: "doordash",
    name: "MagicPin",
    logo: "public/magicpin.png",
    url: "https://www.magicpin.com/",
    description: "Food delivery service",
    categoryId: "food"
  },
  {
    id: "ubereats",
    name: "Eat Sure",
    logo: "public/eatsure.jpeg",
    url: "https://www.eatsure.com",
    description: "Food delivery platform",
    categoryId: "food"
  },
  
  // Groceries/Instant Delivery
  {
    id: "zepto",
    name: "Zepto",
    logo: "public/zepto.png",
    url: "https://www.zepto.com",
    description: "10-minute grocery delivery",
    categoryId: "groceries"
  },
  {
    id: "blinkit",
    name: "Blinkit",
    logo: "public/blinkit.png",
    url: "https://www.blinkit.com",
    description: "Quick commerce platform",
    categoryId: "groceries"
  },
  {
    id: "instacart",
    name: "Swiggy Instamart",
    logo: "public/swiggy_insta.jpeg",
    url: "https://www.swiggy.com/instamart",
    description: "Grocery delivery service",
    categoryId: "groceries"
  },
  {
    id: "gopuff",
    name: "Big Basket",
    logo: "public/bb.png",
    url: "https://www.bigbasket.com",
    description: "Instant needs delivery",
    categoryId: "groceries"
  },
  
  // Travel
  {
    id: "booking",
    name: "Booking.com",
    logo: " public/booking.svg",
    url: "https://www.booking.com",
    description: "Hotel reservations",
    categoryId: "travel"
  },
  {
    id: "airbnb",
    name: "Airbnb",
    logo: " public/airbnb-logo.png",
    url: "https://www.airbnb.com",
    description: "Vacation rentals",
    categoryId: "travel"
  },
  {
    id: "expedia",
    name: "Expedia",
    logo: "public/Expedia_Icon_2022.svg.png",
    url: "https://www.expedia.com",
    description: "Travel booking website",
    categoryId: "travel"
  },
  {
    id: "makemytrip",
    name: "MakeMyTrip",
    logo: "public/mmt.png",
    url: "https://www.makemytrip.com",
    description: "Travel company",
    categoryId: "travel"
  },
  
  // Gaming
  {
    id: "steam",
    name: "Steam",
    logo: "public/steam.png",
    url: "https://store.steampowered.com",
    description: "Digital game distribution",
    categoryId: "gaming"
  },
  {
    id: "epicgames",
    name: "Epic Games",
    logo: "public/Epic_Games_logo.png",
    url: "https://www.epicgames.com",
    description: "Game store and engine creator",
    categoryId: "gaming"
  },
  {
    id: "xboxgamepass",
    name: "Xbox Game Pass",
    logo: "public/xbox-game-pass-logo-png_seeklogo-389147.png",
    url: "https://www.xbox.com/xbox-game-pass",
    description: "Game subscription service",
    categoryId: "gaming"
  },
  {
    id: "playstation",
    name: "PlayStation",
    logo: "public/ps.png",
    url: "https://www.playstation.com",
    description: "Gaming platform",
    categoryId: "gaming"
  }
];
