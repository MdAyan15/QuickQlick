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
    description: "Streaming services, video platforms, and more",
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: "shopping-cart",
    description: "E-commerce platforms and online stores",
  },
  {
    id: "food",
    name: "Food Delivery",
    icon: "utensils",
    description: "Food delivery services for all your cravings",
  },
  {
    id: "groceries",
    name: "Instant Delivery",
    icon: "clock",
    description: "Quick delivery services for groceries and essentials",
  },
  {
    id: "travel",
    name: "Travel",
    icon: "map-pin",
    description: "Airlines, hotels, and travel booking services",
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: "gamepad",
    description: "Online gaming platforms and services",
  },
  {
    id: "flights",
    name: "Flight Booking",
    icon: "plane",
    description: "Flight booking and airline services",
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: "home",
    description: "Find your perfect home or property",
  },
  {
    id: "business",
    name: "Business Services",
    icon: "briefcase",
    description: "Business consulting and professional services",
  },
  {
    id: "finance",
    name: "Finance",
    icon: "chart-line",
    description: "Stock trading and financial services",
  },
  {
    id: "ai",
    name: "AI Services",
    icon: "robot",
    description: "Advanced AI tools and services",
  },
  {
    id: "healthcare",
    name: "Online Healthcare",
    icon: "stethoscope",
    description: "Online doctor consultations and healthcare services",
  },
  {
    id: "education",
    name: "Education & Learning",
    icon: "graduation-cap",
    description: "Online courses and interview preparation",
  },
  {
    id: "property",
    name: "Property Services",
    icon: "building",
    description: "Property listings, PG and hostel finder",
  },
  {
    id: "utilities",
    name: "Payment Utilities",
    icon: "bolt",
    description: "Bill payments and utility services",
  },
  {
    id: "marketplace",
    name: "Marketplace",
    icon: "store",
    description: "Buy and sell used items",
  },
];

export const services: Service[] = [
  // Entertainment
  {
    id: "netflix",
    name: "Netflix",
    logo: "/netflix.png",
    url: "https://www.netflix.com",
    description: "Stream TV shows and movies",
    categoryId: "entertainment",
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "/spotify.png",
    url: "https://www.spotify.com",
    description: "Music streaming service",
    categoryId: "entertainment",
  },
  {
    id: "youtube",
    name: "YouTube",
    logo: "/youtube.jpg",
    url: "https://www.youtube.com",
    description: "Video sharing platform",
    categoryId: "entertainment",
  },
  {
    id: "disney",
    name: "Jio Hotstar",
    logo: "/hotstar.jpeg",
    url: "https://www.disneyplus.com",
    description: "Movie, Series and TV streaming service",
    categoryId: "entertainment",
  },

  // Shopping
  {
    id: "amazon",
    name: "Amazon",
    logo: "/amazon.jpg",
    url: "https://www.amazon.com",
    description: "Online shopping platform",
    categoryId: "shopping",
  },
  {
    id: "flipkart",
    name: "Flipkart",
    logo: "/flipkart.png",
    url: "https://www.flipkart.com",
    description: "E-commerce shopping website",
    categoryId: "shopping",
  },
  {
    id: "etsy",
    name: "Myntra",
    logo: "/myntra.png",
    url: "https://www.myntra.com",
    description: "E-commerce shopping platform",
    categoryId: "shopping",
  },
  {
    id: "ebay",
    name: "eBay",
    logo: "/ebay.png",
    url: "https://www.ebay.com",
    description: "Online auction and shopping",
    categoryId: "shopping",
  },

  // Food
  {
    id: "swiggy",
    name: "Swiggy",
    logo: "/Swiggy_logo.png",
    url: "https://www.swiggy.com",
    description: "Online food delivery",
    categoryId: "food",
  },
  {
    id: "zomato",
    name: "Zomato",
    logo: "/zomato.jpg",
    url: "https://www.zomato.com",
    description: "Restaurant finder and food delivery",
    categoryId: "food",
  },
  {
    id: "doordash",
    name: "MagicPin",
    logo: "/magicpin.png",
    url: "https://www.magicpin.com/",
    description: "Food delivery service",
    categoryId: "food",
  },
  {
    id: "ubereats",
    name: "Eat Sure",
    logo: "/eatsure.jpeg",
    url: "https://www.eatsure.com",
    description: "Food delivery platform",
    categoryId: "food",
  },

  // Groceries
  {
    id: "zepto",
    name: "Zepto",
    logo: "/zepto.png",
    url: "https://www.zepto.com",
    description: "10-minute grocery delivery",
    categoryId: "groceries",
  },
  {
    id: "blinkit",
    name: "Blinkit",
    logo: "/blinkit.png",
    url: "https://www.blinkit.com",
    description: "Quick commerce platform",
    categoryId: "groceries",
  },
  {
    id: "instacart",
    name: "Swiggy Instamart",
    logo: "/swiggy_insta.jpeg",
    url: "https://www.swiggy.com/instamart",
    description: "Grocery delivery service",
    categoryId: "groceries",
  },
  {
    id: "gopuff",
    name: "Big Basket",
    logo: "/bb.png",
    url: "https://www.bigbasket.com",
    description: "Instant needs delivery",
    categoryId: "groceries",
  },

  // Travel
  {
    id: "booking",
    name: "Booking.com",
    logo: "/booking.svg",
    url: "https://www.booking.com",
    description: "Hotel reservations",
    categoryId: "travel",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    logo: "/airbnb-logo.png",
    url: "https://www.airbnb.com",
    description: "Vacation rentals",
    categoryId: "travel",
  },
  {
    id: "expedia",
    name: "Expedia",
    logo: "/Expedia_Icon_2022.svg.png",
    url: "https://www.expedia.com",
    description: "Travel booking website",
    categoryId: "travel",
  },
  {
    id: "makemytrip",
    name: "MakeMyTrip",
    logo: "/mmt.png",
    url: "https://www.makemytrip.com",
    description: "Travel company",
    categoryId: "travel",
  },

  // Gaming
  {
    id: "steam",
    name: "Steam",
    logo: "/steam.png",
    url: "https://store.steampowered.com",
    description: "Digital game distribution",
    categoryId: "gaming",
  },
  {
    id: "epicgames",
    name: "Epic Games",
    logo: "/Epic_Games_logo.png",
    url: "https://www.epicgames.com",
    description: "Game store and engine creator",
    categoryId: "gaming",
  },
  {
    id: "xboxgamepass",
    name: "Xbox Game Pass",
    logo: "/xbox-game-pass-logo-png_seeklogo-389147.png",
    url: "https://www.xbox.com/xbox-game-pass",
    description: "Game subscription service",
    categoryId: "gaming",
  },
  {
    id: "playstation",
    name: "PlayStation",
    logo: "/ps.png",
    url: "https://www.playstation.com",
    description: "Gaming platform",
    categoryId: "gaming",
  },

  // Flight Booking
  {
    id: "cleartrip",
    name: "Cleartrip",
    logo: "/clear-trip.png",
    url: "https://www.cleartrip.com",
    description: "Flight booking platform",
    categoryId: "flights",
  },
  {
    id: "indigo",
    name: "IndiGo",
    logo: "/indigo.png",
    url: "https://www.goindigo.in",
    description: "Airline booking service",
    categoryId: "flights",
  },
  {
    id: "airasia",
    name: "AirAsia",
    logo: "/Air-Asisa.png",
    url: "https://www.airasia.com",
    description: "Budget airline booking",
    categoryId: "flights",
  },

  // Real Estate
  {
    id: "housing",
    name: "Housing.com",
    logo: "/housing_com.png",
    url: "https://www.housing.com",
    description: "Find your dream home",
    categoryId: "realestate",
  },
  {
    id: "magicbricks",
    name: "MagicBricks",
    logo: "/magic_bricks.jpg",
    url: "https://www.magicbricks.com",
    description: "Real estate platform",
    categoryId: "realestate",
  },
  {
    id: "99acres",
    name: "99acres",
    logo: "/99acres.png",
    url: "https://www.99acres.com",
    description: "Property search platform",
    categoryId: "realestate",
  },

  // Business Consulting
  {
    id: "kpmg",
    name: "KPMG",
    logo: "/kpmg.png",
    url: "https://www.kpmg.com",
    description: "Professional services firm",
    categoryId: "business",
  },
  {
    id: "deloitte",
    name: "Deloitte",
    logo: "/deloitte.png",
    url: "https://www.deloitte.com",
    description: "Business consulting services",
    categoryId: "business",
  },
  {
    id: "pwc",
    name: "PwC",
    logo: "/PWC.png",
    url: "https://www.pwc.com",
    description: "Professional services network",
    categoryId: "business",
  },

  // Stock Brokers
  {
    id: "zerodha",
    name: "Zerodha",
    logo: "/Zerodha.png",
    url: "https://zerodha.com",
    description: "Stock trading platform",
    categoryId: "finance",
  },
  {
    id: "upstox",
    name: "Upstox",
    logo: "/upstox.png",
    url: "https://upstox.com",
    description: "Online trading platform",
    categoryId: "finance",
  },
  {
    id: "groww",
    name: "Groww",
    logo: "/groww.png",
    url: "https://groww.in",
    description: "Investment platform",
    categoryId: "finance",
  },

  // AI Services
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "/chatgpt.png",
    url: "https://chat.openai.com",
    description: "Advanced AI chatbot",
    categoryId: "ai",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    logo: "/midjourney.png",
    url: "https://www.midjourney.com",
    description: "AI image generation",
    categoryId: "ai",
  },
  {
    id: "claude",
    name: "Claude",
    logo: "/calude.png",
    url: "https://claude.ai",
    description: "AI assistant",
    categoryId: "ai",
  },

  // Online Doctor Consultation
  {
    id: "practo",
    name: "Practo",
    logo: "/practo.png",
    url: "https://www.practo.com",
    description: "Online doctor consultation platform",
    categoryId: "healthcare",
  },
  {
    id: "apollo247",
    name: "Apollo 24/7",
    logo: "/appolo.png",
    url: "https://www.apollo247.com",
    description: "Healthcare and pharmacy services",
    categoryId: "healthcare",
  },
  {
    id: "mfine",
    name: "MFine",
    logo: "/mfine_logo.jpeg",
    url: "https://www.mfine.co",
    description: "Online doctor consultation app",
    categoryId: "healthcare",
  },
  {
    id: "1mg",
    name: "1mg",
    logo: "/1mg.png",
    url: "https://www.1mg.com",
    description: "Healthcare and medicine delivery",
    categoryId: "healthcare",
  },

  // Interview Preparation
  {
    id: "interviewbit",
    name: "InterviewBit",
    logo: "/interviewbit.jpeg",
    url: "https://www.interviewbit.com",
    description: "Coding interview preparation",
    categoryId: "education",
  },
  {
    id: "prepinsta",
    name: "PrepInsta",
    logo: "/PrepInsta.png",
    url: "https://prepinsta.com",
    description: "Placement preparation platform",
    categoryId: "education",
  },
  {
    id: "geeksforgeeks",
    name: "GeeksforGeeks",
    logo: "/gfg.png",
    url: "https://www.geeksforgeeks.org",
    description: "Coding practice and interview prep",
    categoryId: "education",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    logo: "/Leetcode.png",
    url: "https://leetcode.com",
    description: "Coding interview preparation",
    categoryId: "education",
  },

  // Online Courses
  {
    id: "coursera",
    name: "Coursera",
    logo: "/coursera.png",
    url: "https://www.coursera.org",
    description: "Online courses from top universities",
    categoryId: "education",
  },
  {
    id: "udemy",
    name: "Udemy",
    logo: "/udemy.png",
    url: "https://www.udemy.com",
    description: "Online learning platform",
    categoryId: "education",
  },
  {
    id: "upgrad",
    name: "upGrad",
    logo: "/upgrad.png",
    url: "https://www.upgrad.com",
    description: "Higher education platform",
    categoryId: "education",
  },
  {
    id: "simplilearn",
    name: "Simplilearn",
    logo: "/simplilear.jpg",
    url: "https://www.simplilearn.com",
    description: "Professional certification courses",
    categoryId: "education",
  },

  // Property Listings
  {
    id: "nobroker",
    name: "NoBroker",
    logo: "/nobroker.png",
    url: "https://www.nobroker.in",
    description: "No broker property listings",
    categoryId: "property",
  },
  {
    id: "squareyards",
    name: "Square Yards",
    logo: "/sy-logo.jpg",
    url: "https://www.squareyards.com",
    description: "Real estate platform",
    categoryId: "property",
  },
  
  {
    id: "99acres",
    name: "99acres",
    logo: "/99acres.png",
    url: "https://www.99acres.com",
    description: "Property search platform",
    categoryId: "property",
  },

  // PG & Hostel Finder
  {
    id: "zolo",
    name: "Zolo",
    logo: "/zolo.jpg",
    url: "https://zolostays.com",
    description: "PG and hostel booking platform",
    categoryId: "property",
  },
  {
    id: "stanza",
    name: "Stanza Living",
    logo: "/stanza.png",
    url: "https://stanzaliving.com",
    description: "Student accommodation platform",
    categoryId: "property",
  },
  {
    id: "colive",
    name: "Colive",
    logo: "/colive.png",
    url: "https://www.colive.in",
    description: "Co-living spaces",
    categoryId: "property",
  },
  

  // Bill Payments
  {
    id: "paytm",
    name: "Paytm",
    logo: "/paytm.png",
    url: "https://paytm.com",
    description: "Digital payments and bill payments",
    categoryId: "utilities",
  },
  {
    id: "phonepe",
    name: "PhonePe",
    logo: "/phonepe.png",
    url: "https://www.phonepe.com",
    description: "UPI payments and bill payments",
    categoryId: "utilities",
  },
  {
    id: "amazonpay",
    name: "Amazon Pay",
    logo: "/amazonpay.png",
    url: "https://pay.amazon.in",
    description: "Digital payments platform",
    categoryId: "utilities",
  },
  {
    id: "googlepay",
    name: "Google Pay",
    logo: "/gpay.png",
    url: "https://pay.google.com",
    description: "UPI payments and bill payments",
    categoryId: "utilities",
  },

  // Marketplace for Used Items
  {
    id: "olx",
    name: "OLX",
    logo: "/olx.png",
    url: "https://www.olx.in",
    description: "Buy and sell used items",
    categoryId: "marketplace",
  },
  {
    id: "quikr",
    name: "Quikr",
    logo: "/quikr.png",
    url: "https://www.quikr.com",
    description: "Classifieds marketplace",
    categoryId: "marketplace",
  },
  {
    id: "cashify",
    name: "Cashify",
    logo: "/cashify.avif",
    url: "https://www.cashify.in",
    description: "Sell used electronics",
    categoryId: "marketplace",
  },
  {
    id: "renewbuy",
    name: "RenewBuy",
    logo: "/renewbuyofficial_logo.jpeg",
    url: "https://www.renewbuy.com",
    description: "Used items marketplace",
    categoryId: "marketplace",
  },
];
 