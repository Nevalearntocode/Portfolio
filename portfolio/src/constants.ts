import { Project, Skills } from "@/types";
import {
  MapPinHouse,
  MessageCircle,
  ShoppingCart,
  NotebookPen,
  FolderPlus,
} from "lucide-react";

const projects: Project[] = [
  {
    id: "airbnb-clone",
    name: "Airbnb Clone",
    description:
      "A full-stack Airbnb clone with booking functionality and user authentication.",
    image: "/projects/airbnb/airbnb.png",
    githubLink: "https://github.com/Nevalearntocode/drf_next_airbnb",
    liveLink: "https://django-nextjs-airbnb.vercel.app/",
    icon: MapPinHouse,
    about:
      "A real-time chat application built with Django Channels and Next.js.",
    features: [
      "Booking system",
      "Real-time communication",
      "Asynchronous update reservation status",
      "Responsive design",
    ],
    technologies: [
      "Django",
      "Django Channels",
      "Next.js",
      "TypeScript",
      "Redux",
      "TailwindCSS",
    ],
    images: [
      { name: "homepage", image: "/projects/airbnb/homepage-1.png" },
      { name: "homepage", image: "/projects/airbnb/homepage-3.png" },
      { name: "add property", image: "/projects/airbnb/add-property-1.png" },
      {
        name: "chat interface",
        image: "/projects/airbnb/chat-interface-1.png",
      },
      { name: "login", image: "/projects/airbnb/login.png" },
      { name: "profile", image: "/projects/airbnb/profile.png" },
      { name: "property", image: "/projects/airbnb/property-1.png" },
      { name: "property", image: "/projects/airbnb/property-2.png" },
      { name: "register", image: "/projects/airbnb/register.png" },
      { name: "search", image: "/projects/airbnb/search-1.png" },
      { name: "search", image: "/projects/airbnb/search-2.png" },
      { name: "reservation", image: "/projects/airbnb/reservation-1.png" },
      { name: "reservation", image: "/projects/airbnb/reservation-2.png" },
    ],

    mobileImages: [
      { name: "homepage", image: "/projects/airbnb/homepage-2.png" },
      {
        name: "chat interface",
        image: "/projects/airbnb/chat-interface-2.png",
      },
      {
        name: "chat interface",
        image: "/projects/airbnb/chat-interface-3.png",
      },
    ],
  },
  {
    id: "chat-app",
    name: "Real-time Chat App",
    description:
      "A real-time chat application built with Django Channels and Next.js.",
    image: "/projects/chat/chat.png",
    githubLink: "https://github.com/Nevalearntocode/Django-Nextjs-Chat",
    liveLink: "https://django-nextjs-chat.vercel.app/",
    icon: MessageCircle,
    about:
      "A real-time chat application built with Django Channels and Next.js.",
    features: [
      "Real-time communication",
      "Authentication",
      "Server management",
      "Responsive design",
    ],
    technologies: [
      "Django",
      "Django Channels",
      "DRF",
      "Redis",
      "Next.js",
      "TypeScript",
      "Redux",
      "TailwindCSS",
    ],
    images: [
      { name: "homepage", image: "/projects/chat/home-page.png" },
      {
        name: "server landing page",
        image: "/projects/chat/server-landing-page.png",
      },
      { name: "chat interface", image: "/projects/chat/chat-interface.png" },

      { name: "search", image: "/projects/chat/search-2.png" },
      { name: "search", image: "/projects/chat/search.png" },
    ],
    mobileImages: [
      { name: "mobile-homepage", image: "/projects/chat/mobile-home-page.png" },
      {
        name: "mobile homepage",
        image: "/projects/chat/mobile-home-page-2.png",
      },
      {
        name: "mobile server landing page",
        image: "/projects/chat/mobile-server-landing-page.png",
      },
      {
        name: "mobile chat interface",
        image: "/projects/chat/mobile-chat-interface.png",
      },
    ],
  },
  {
    id: "ecommerce-cms",
    name: "Ecommerce CMS",
    description:
      "A content management system for e-commerce websites with inventory management.",
    image: "/projects/ecommerce/product.png",
    githubLink: "https://github.com/Nevalearntocode/ecommerce-admin",
    liveLink: "https://ecommerce-admin-swart-six.vercel.app/",
    icon: ShoppingCart,
    about:
      "A real-time chat application built with Django Channels and Next.js.",
    features: [
      "Real-time communication",
      "Authentication",
      "Server management",
      "Responsive design",
    ],
    technologies: [
      "Django",
      "Django Channels",
      "Next.js",
      "TypeScript",
      "Redux",
      "TailwindCSS",
    ],
    images: [
      {
        name: "login and register",
        image: "/projects/ecommerce/login-register.png",
      },
      { name: "homepage", image: "/projects/ecommerce/homepage.png" },
      { name: "settings", image: "/projects/ecommerce/settings.png" },
      { name: "staff", image: "/projects/ecommerce/staff.png" },
      { name: "staff", image: "/projects/ecommerce/staff-2.png" },
      { name: "billboard", image: "/projects/ecommerce/billboard.png" },
      { name: "billboard", image: "/projects/ecommerce/billboard-2.png" },
      { name: "size", image: "/projects/ecommerce/size.png" },
      { name: "color", image: "/projects/ecommerce/color.png" },
      { name: "product", image: "/projects/ecommerce/product-2.png" },
      { name: "product", image: "/projects/ecommerce/product.png" },
    ],
    mobileImages: [
      {
        name: "mobile homepage",
        image: "/projects/ecommerce/mobile-homepage.png",
      },
      {
        name: "mobile navigation",
        image: "/projects/ecommerce/mobile-navigation.png",
      },
      { name: "mobile staff", image: "/projects/ecommerce/mobile-staff.png" },
      {
        name: "mobile billboard",
        image: "/projects/ecommerce/mobile-billboard.png",
      },
      {
        name: "mobile product",
        image: "/projects/ecommerce/mobile-product.png",
      },
    ],
  },
  {
    id: "file-drive",
    name: "File Storage",
    description:
      "A file storage app to learn about convex, search params, clerk, webhooks.",
    image: "/projects/file-drive/file-drive.png",
    githubLink: "https://github.com/Nevalearntocode/file-storage",
    icon: FolderPlus,
    about:
      "A file storage app to learn about convex, search params, clerk, webhooks.",
    features: [
      "File upload/download/management",
      "Personal and organizational features",
      "Advanced filtering",
      "Cron jobs",
    ],
    technologies: ["Convex", "Clerk", "Next.js", "TypeScript", "TailwindCSS"],
    images: [
      { name: "archive-view", image: "/projects/file-drive/archive-view.png" },
      {
        name: "favorite-view",
        image: "/projects/file-drive/favorite-view.png",
      },
      { name: "file-drive", image: "/projects/file-drive/file-drive.png" },
      { name: "main-view", image: "/projects/file-drive/main-view.png" },
      { name: "restore-view", image: "/projects/file-drive/restore-view.png" },
      {
        name: "search-and-actions-view",
        image: "/projects/file-drive/search-and-actions-view.png",
      },
      {
        name: "table-and-filters-view",
        image: "/projects/file-drive/table-and-filters-view.png",
      },
      { name: "upload-view", image: "/projects/file-drive/upload-view.png" },
    ],
    mobileImages: [],
  },
  {
    id: "auction",
    name: "Auction",
    description:
      "An auction app to learn about Drizzle and Knock (notification).",
    image: "/projects/auction/auction.png",
    githubLink: "https://github.com/Nevalearntocode/auction-app",
    icon: NotebookPen,
    about: "An auction app to learn about Drizzle and Knock (notification).",
    features: [
      "User authentication",
      "Create an auction, bid on an auction, and automatically close the auction",
      "Cloudflare R2 for image storage",
      "Knock for bid notifications (when someone outbids you)",
    ],
    technologies: [
      "Drizzle",
      "NextAuth",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
    ],
    images: [
      { name: "Homepage", image: "/projects/auction/auction.png" },
      {
        name: "Homepage",
        image: "/projects/auction/auctions-display.png",
      },
      {
        name: "Bidding page",
        image: "/projects/auction/bidding-display.png",
      },
      {
        name: "Create auction",
        image: "/projects/auction/create-auction-n-noti-display.png",
      },
      {
        name: "No bids page",
        image: "/projects/auction/no-bids-display.png",
      },
    ],
    mobileImages: [],
  },
];

const skills: Skills = [
  {
    name: "Python",
    color: "#3776AB", // blue
    textColor: "#fde047", // good contrast with blue
    icon: "/icons/python.svg",
  },
  {
    name: "Django",
    color: "#092E20", // dark green
    textColor: "#FFFFFF", // white contrasts well with dark green
    icon: "/icons/django.svg",
  },
  {
    name: "Django REST Framework",
    color: "#b91c1c", // dark red
    textColor: "#FFFFFF", // white contrasts well with dark red
  },
  {
    name: "Celery",
    color: "#37814A", // green
    textColor: "#FFFFFF", // white contrasts better than black here
    icon: "/icons/celery.svg",
  },
  {
    name: "JavaScript",
    color: "#F7DF1E", // bright yellow
    textColor: "#000000", // black is good contrast with yellow
    icon: "/icons/javascript.svg",
  },
  {
    name: "TypeScript",
    color: "#3178C6", // blue
    textColor: "#FFFFFF", // white contrasts well with blue
    icon: "/icons/typescript.svg",
  },
  {
    name: "React",
    color: "#61DAFB", // light blue
    textColor: "#000000", // black contrasts well with light blue
    icon: "/icons/react.svg",
  },
  {
    name: "Next.js",
    color: "#FFFFFF", // black
    textColor: "#000000", // white contrasts best with black
    icon: "/icons/nextdotjs.svg",
  },

  {
    name: "Redux",
    color: "#764ABC", // purple
    textColor: "#FFFFFF", // white contrasts well with purple
    icon: "/icons/redux.svg",
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4", // teal
    textColor: "#FFFFFF", // white contrasts well with teal
    icon: "/icons/tailwindcss.svg",
  },
  {
    name: "Shadcn/UI",
    color: "#FFFFFF", // black
    textColor: "#000000", // white contrasts best with black
    icon: "/icons/shadcnui.svg",
  },
  {
    name: "Prisma",
    color: "#FFFFFF", // dark gray/blue
    textColor: "#2D3748", // white contrasts well with dark colors
    icon: "/icons/prisma.svg",
  },
  {
    name: "Drizzle",
    color: "#C5F74F", // lime green
    textColor: "#000000", // black contrasts well with lime green
    icon: "/icons/drizzle.svg",
  },
  {
    name: "Convex",
    color: "#0D3B66", // lime green
    textColor: "#FAF0CA", // black contrasts well with lime green
  },
  {
    name: "Docker",
    color: "#2496ED", // blue
    textColor: "#FFFFFF", // white contrasts well with blue
    icon: "/icons/docker.svg",
  },
  {
    name: "Git",
    color: "#F05032", // orange
    textColor: "#FFFFFF", // white contrasts well with orange
    icon: "/icons/git.svg",
  },
  {
    name: "PostgreSQL",
    color: "#4169E1", // royal blue
    textColor: "#FFFFFF", // white contrasts well with royal blue
    icon: "/icons/postgresql.svg",
  },
  {
    name: "Redis",
    color: "#FF4438", // bright red
    textColor: "#FFFFFF", // white contrasts well with red
    icon: "/icons/redis.svg",
  },
];

export { projects, skills };
