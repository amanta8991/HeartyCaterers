// Mock data for Hearty Caterers website

export const heroData = {
  title: "Hearty Caterers",
  subtitle: "Creating Unforgettable Culinary Experiences",
  description: "Premier catering services for weddings, corporate events, and celebrations across Kerala",
  ctaText: "Book Your Event",
  ctaSecondary: "View Our Menu",
  heroImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
};

export const aboutData = {
  title: "About Hearty Caterers",
  description: "With years of excellence in the catering industry, Hearty Caterers has become Kerala's trusted name for exceptional culinary experiences. We specialize in creating memorable events through exquisite cuisine, impeccable service, and stunning presentation.",
  highlights: [
    { number: "500+", label: "Events Catered" },
    { number: "50K+", label: "Happy Guests" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" }
  ],
  image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
};

export const servicesData = [
  {
    id: 1,
    title: "Wedding Catering",
    description: "Make your special day extraordinary with our comprehensive wedding catering services. From traditional Kerala sadya to contemporary fusion cuisine, we create magical dining experiences.",
    features: ["Custom menu planning", "Traditional & modern cuisines", "Complete event setup", "Professional service staff"],
    image: "https://images.pexels.com/photos/19869784/pexels-photo-19869784.jpeg",
    icon: "Heart"
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Elevate your corporate gatherings with our sophisticated catering solutions. Perfect for conferences, seminars, product launches, and business celebrations.",
    features: ["Executive menu options", "Flexible service formats", "On-time delivery guaranteed", "Professional presentation"],
    image: "https://images.unsplash.com/photo-1671612451404-f4f8fc5fe25e",
    icon: "Briefcase"
  },
  {
    id: 3,
    title: "Custom Event Decor",
    description: "Transform any venue into your dream setting. Our expert team designs and executes stunning decor tailored to your vision and theme.",
    features: ["Personalized themes", "Floral arrangements", "Lighting & ambiance", "Complete venue transformation"],
    image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
    icon: "Sparkles"
  },
  {
    id: 4,
    title: "All Occasions",
    description: "From intimate house parties to grand celebrations, we cater to every occasion with the same dedication to quality and excellence.",
    features: ["Birthday celebrations", "Anniversary parties", "Religious ceremonies", "Social gatherings"],
    image: "https://images.pexels.com/photos/36154338/pexels-photo-36154338.jpeg",
    icon: "Calendar"
  }
];

export const menuData = {
  categories: [
    {
      name: "Traditional Kerala",
      items: [
        { name: "Kerala Sadya", description: "Traditional feast with 24+ dishes served on banana leaf", price: "₹450/person" },
        { name: "Appam & Stew", description: "Soft rice pancakes with vegetable or chicken stew", price: "₹180/person" },
        { name: "Fish Molee", description: "Kerala fish curry with coconut milk", price: "₹320/person" },
        { name: "Puttu & Kadala", description: "Steamed rice cake with chickpea curry", price: "₹150/person" }
      ]
    },
    {
      name: "North Indian Delights",
      items: [
        { name: "Paneer Tikka Masala", description: "Cottage cheese in rich tomato gravy", price: "₹280/person" },
        { name: "Butter Chicken", description: "Tandoori chicken in creamy tomato sauce", price: "₹350/person" },
        { name: "Dal Makhani", description: "Creamy black lentils slow-cooked overnight", price: "₹200/person" },
        { name: "Naan Platter", description: "Assorted Indian breads (butter, garlic, cheese)", price: "₹120/person" }
      ]
    },
    {
      name: "Continental Cuisine",
      items: [
        { name: "Grilled Chicken", description: "Herb-marinated chicken with roasted vegetables", price: "₹400/person" },
        { name: "Pasta Alfredo", description: "Creamy fettuccine with choice of protein", price: "₹320/person" },
        { name: "Caesar Salad", description: "Fresh romaine with parmesan and croutons", price: "₹220/person" },
        { name: "Beef Steak", description: "Premium cut with peppercorn sauce", price: "₹550/person" }
      ]
    },
    {
      name: "Desserts",
      items: [
        { name: "Payasam", description: "Traditional Kerala sweet pudding", price: "₹100/person" },
        { name: "Gulab Jamun", description: "Soft milk dumplings in rose syrup", price: "₹120/person" },
        { name: "Chocolate Mousse", description: "Rich Belgian chocolate dessert", price: "₹180/person" },
        { name: "Fresh Fruit Platter", description: "Seasonal tropical fruits", price: "₹150/person" }
      ]
    }
  ]
};

export const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed", category: "Wedding", alt: "Elegant wedding table setup" },
  { id: 2, url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0", category: "Food", alt: "Gourmet food presentation" },
  { id: 3, url: "https://images.pexels.com/photos/12253094/pexels-photo-12253094.jpeg", category: "Corporate", alt: "Corporate event buffet" },
  { id: 4, url: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg", category: "Decor", alt: "Outdoor event decoration" },
  { id: 5, url: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5", category: "Food", alt: "Premium meat presentation" },
  { id: 6, url: "https://images.pexels.com/photos/7648322/pexels-photo-7648322.jpeg", category: "Service", alt: "Professional catering service" },
  { id: 7, url: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590", category: "Food", alt: "Gourmet pasta plating" },
  { id: 8, url: "https://images.unsplash.com/photo-1729237261091-bae8eba0c60c", category: "Ambiance", alt: "Candlelit dining ambiance" },
  { id: 9, url: "https://images.pexels.com/photos/36154338/pexels-photo-36154338.jpeg", category: "Decor", alt: "Sophisticated ceremony setup" }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Priya & Arun",
    event: "Wedding Reception",
    rating: 5,
    text: "Hearty Caterers made our wedding reception absolutely perfect! The food was exceptional, and every guest complimented the presentation. The team was professional, punctual, and went above and beyond our expectations.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    event: "Corporate Conference",
    rating: 5,
    text: "We've worked with Hearty Caterers for multiple corporate events, and they never disappoint. The quality of food, timely service, and attention to detail make them our go-to catering partner.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
  },
  {
    id: 3,
    name: "Meera Nair",
    event: "25th Anniversary Party",
    rating: 5,
    text: "From planning to execution, everything was flawless. The menu they created was a perfect blend of traditional and modern cuisine. Our guests are still talking about the food weeks later!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
  },
  {
    id: 4,
    name: "Tech Solutions Pvt Ltd",
    event: "Product Launch Event",
    rating: 5,
    text: "Outstanding service for our product launch. The buffet setup was elegant, food quality was top-notch, and the team handled everything smoothly. Highly recommended for corporate events!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=TechSolutions"
  }
];

export const contactInfo = {
  phone: "+91 98765 43210",
  email: "info@heartycaterers.com",
  whatsapp: "+919876543210",
  address: "Hearty Caterers, MG Road, Kochi, Kerala 682016",
  hours: "Mon - Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM"
};
