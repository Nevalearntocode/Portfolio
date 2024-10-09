import { Project, Skills } from "@/types";
import { MapPinHouse, MessageCircle, ShoppingCart } from "lucide-react";

const projects: Project[] = [
  {
    id: "chat-app",
    name: "Real-time Chat App",
    description:
      "A real-time chat application built with Django Channels and Next.js.",
    image: "/chat.png",
    githubLink: "https://github.com/yourusername/chat-app",
    liveLink: "https://chat-app-demo.vercel.app",
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
  },
  {
    id: "airbnb-clone",
    name: "Airbnb Clone",
    description:
      "A full-stack Airbnb clone with booking functionality and user authentication.",
    image: "/placeholder.svg?height=300&width=400&text=Airbnb+Clone",
    githubLink: "https://github.com/yourusername/airbnb-clone",
    liveLink: "https://airbnb-clone-demo.vercel.app",
    icon: MapPinHouse,
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
  },
  {
    id: "ecommerce-cms",
    name: "E-commerce CMS",
    description:
      "A content management system for e-commerce websites with inventory management.",
    image: "/placeholder.svg?height=300&width=400&text=E-commerce+CMS",
    githubLink: "https://github.com/yourusername/ecommerce-cms",
    liveLink: "https://ecommerce-cms-demo.vercel.app",
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
    name: "Shadcn/ui",
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
