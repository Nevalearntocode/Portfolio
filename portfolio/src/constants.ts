import { Project } from "@/types";
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

const skills = [
  "Python",
  "Django",
  "Django REST Framework",
  "Django Channels",
  "Celery",
  "Celery Beat",
  "JavaScript",
  "Next.js",
  "TypeScript",
  "React",
  "Redux",
  "Tailwind CSS",
  "Shadcn",
  "Prisma",
  "Convex",
  "Drizzle",
  "Docker",
  "Git",
  "PostgreSQL",
  "Redis",
];

export { projects, skills };
