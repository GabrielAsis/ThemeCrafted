import { User } from "lucide-react";
import {
  ecommerceImg,
  ecommerceSvg,
  bookingImg,
  bookingSvg,
  portfolioImg,
  portfolioSvg,
  restaurantImg,
  restaurantSvg,
  techImg,
  techSvg,
  codingSvg,
  creatingSvg,
  customizationSvg,
  sampleTheme,
  sampleTheme2,
  sampleTheme3,
  sampleTheme4,
  sampleTheme5,
  sampleThemePhone,
  // slide1,
  // slide2,
  // slide3,
  // slide4,
} from "./assets";

import slide1 from "./assets/Slide 1.png";
import slide2 from "./assets/Slide 2.png";
import slide3 from "./assets/Slide 3.png";
import slide4 from "./assets/Slide 4.png";

export const categories = [
  {
    id: 1,
    title: "E-commerce Sites",
    desc: "Sell products online with sleek, conversion-focused designs.",
    img: ecommerceImg,
    svg: ecommerceSvg,
  },

  {
    id: 2,
    title: "Booking Themes",
    desc: "Streamline appointments and reservations with ease.",
    img: bookingImg,
    svg: bookingSvg,
  },

  {
    id: 3,
    title: "Portfolio Templates",
    desc: "Showcase your work with clean, creative layouts.",
    img: portfolioImg,
    svg: portfolioSvg,
  },

  {
    id: 4,
    title: "Restaurant",
    desc: "Highlight your menu and attract diners effortlessly.",
    img: restaurantImg,
    svg: restaurantSvg,
  },

  {
    id: 5,
    title: "Tech Startup",
    desc: "Launch your next big idea with modern, bold designs.",
    img: techImg,
    svg: techSvg,
  },
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Crafted by Experts",
    desc: "Built with precision and care by industry professionals.",
    svg: codingSvg,
  },
  {
    id: 2,
    title: "Curated Quality",
    desc: "Only the best, high-performance themes in the market.",
    svg: creatingSvg,
  },
  {
    id: 3,
    title: "Easy Customization",
    desc: "User-friendly & drag-and-drop templates for easy custmization.",
    svg: customizationSvg,
  },
];

export const themes = [
  {
    id: 1,
    title: "Minimalist Portfolio",
    excerpt: "Clean, modern design tailored for creatives and freelancers.",
    desc: "Minimalist Portfolio is perfect for designers, photographers, and artists looking to showcase their work in an elegant and distraction-free layout. Optimized for speed and simplicity.",
    price: 25,
    category: "Portfolio",
    img: sampleTheme,
    phoneImg: sampleThemePhone,
  },
  {
    id: 2,
    title: "Boldfolio",
    excerpt: "A bold and colorful portfolio theme to stand out.",
    desc: "Boldfolio features vibrant visuals, animated transitions, and dynamic grid layouts, making it perfect for creatives who want to leave a lasting impression with their personal brand or client work.",
    price: 20,
    discount: 15,
    category: "Portfolio",
    img: sampleTheme,
    phoneImg: sampleThemePhone,
  },

  // Restaurant
  {
    id: 3,
    title: "Bistro Delight",
    excerpt: "A cozy and elegant theme designed for cafes and bistros.",
    desc: "Bistro Delight offers a warm and inviting aesthetic with menu sections, reservation forms, and gallery features tailored for restaurants, coffee shops, and casual dining spots.",
    price: 30,
    category: "Restaurant",
    img: sampleTheme,
    phoneImg: sampleThemePhone,
  },
  {
    id: 4,
    title: "Gourmet Pro",
    excerpt: "Modern layout built for upscale restaurants and chefs.",
    desc: "Gourmet Pro provides a premium look with full-screen sliders, a sleek menu display, and online reservation integration—ideal for fine dining establishments and culinary professionals.",
    price: 35,
    category: "Restaurant",
    img: sampleTheme,
    phoneImg: sampleThemePhone,
  },

  // Booking
  {
    id: 5,
    title: "Bookify",
    excerpt: "A powerful booking theme for salons, clinics, and more.",
    desc: "Bookify offers seamless appointment scheduling, service listings, and calendar integrations—perfect for any business that requires client bookings and time-slot management.",
    price: 28,
    category: "Booking",
    img: sampleTheme,
    phoneImg: sampleThemePhone,
  },
  {
    id: 6,
    title: "StayEase",
    excerpt: "An elegant booking theme for hotels and vacation rentals.",
    desc: "StayEase features dynamic room showcases, availability calendars, and multi-language support—making it the ideal choice for hospitality businesses and travel accommodations.",
    price: 32,
    category: "Booking",
    img: sampleTheme,
    phoneImg: sampleThemePhone,
  },

  // Tech Startup
  {
    id: 7,
    title: "LaunchHub",
    excerpt: "A startup-friendly theme for product launches and SaaS.",
    desc: "LaunchHub is clean, responsive, and conversion-focused, equipped with pricing tables, feature highlights, and call-to-action sections that help tech startups effectively pitch their solutions.",
    price: 29,
    category: "Tech Startup",
    img: sampleTheme,
    phoneImg: sampleThemePhone,
  },
  {
    id: 8,
    title: "Innovexa",
    excerpt: "High-tech aesthetic built for innovation-driven companies.",
    desc: "Innovexa delivers a futuristic design with animations, integration-ready blocks, and smooth scrolling. Best suited for tech startups, app developers, and forward-thinking businesses.",
    price: 34,
    category: "Tech Startup",
    img: sampleTheme,
    phoneImg: sampleThemePhone,
  },

  // E-commerce
  {
    id: 9,
    title: "ShopNest",
    excerpt: "Flexible theme for fashion, lifestyle, and general e-commerce.",
    desc: "ShopNest provides a stylish storefront with product filters, cart integration, and promotional banners. Optimized for WooCommerce and great for any niche store.",
    price: 27,
    category: "Ecommerce",
    img: sampleTheme,
    phoneImg: "",
  },
  {
    id: 10,
    title: "ElectroMart",
    excerpt: "Designed for electronics and gadget stores.",
    desc: "ElectroMart includes a powerful product grid, comparison tools, and user reviews—making it the perfect fit for online stores focused on tech gadgets, home appliances, and more.",
    price: 31,
    category: "Ecommerce",
    img: sampleTheme,
    phoneImg: "",
  },
];

export const heroSlides = [
  {
    id: 1,
    title: "Launch your business faster with powerful, modern tools",
    img: slide1,
  },
  {
    id: 2,
    title:
      "Build your site with high-performance features, speed, & optimization",
    img: slide2,
  },
  {
    id: 3,
    title: "Design with confidence using intuitive, professional tools",
    img: slide3,
  },
  {
    id: 4,
    title: "Choose from expertly crafted themes tailored for your brand",
    img: slide4,
  },
];

export const testimonials = [
  {
    id: 1,
    themTitle: "Minimalist Portfolio",
    themePrice: 25,
    img: sampleTheme,
    quote:
      "As a freelance designer, this theme gave my portfolio a clean and professional edge—clients started taking me more seriously!",
    user: "John Doe",
    date: "Bought 10 months ago",
  },
  {
    id: 2,
    themTitle: "Bookify",
    themePrice: 28,
    img: sampleTheme2,
    quote:
      "Bookify completely transformed how we handle appointments. Clients love the seamless experience!",
    user: "Sophia Reyes",
    date: "Bought 3 months ago",
  },
  {
    id: 3,
    themTitle: "Gourmet Pro",
    themePrice: 35,
    img: sampleTheme3,
    quote:
      "Our restaurant’s website finally matches our high-end branding—reservations have doubled!",
    user: "Chef Marco Silva",
    date: "Bought 6 months ago",
  },
  {
    id: 4,
    themTitle: "LaunchHub",
    themePrice: 29,
    img: sampleTheme4,
    quote:
      "As a startup founder, I couldn’t ask for a better launch page. Sleek, responsive, and easy to customize.",
    user: "Aisha Khan",
    date: "Bought 2 months ago",
  },
  {
    id: 5,
    themTitle: "ShopNest",
    themePrice: 27,
    img: sampleTheme5,
    quote:
      "Setting up our clothing store was a breeze with ShopNest—it's stylish and super functional.",
    user: "Liam Tan",
    date: "Bought 5 months ago",
  },
];
