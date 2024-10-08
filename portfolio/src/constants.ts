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
  { name: "Python", color: "bg-blue-600", textColor: "text-white" },
  { name: "Django", color: "bg-green-700", textColor: "text-white" },
  {
    name: "Django REST Framework",
    color: "bg-red-700",
    textColor: "text-white",
  },
  { name: "Django Channels", color: "bg-purple-600", textColor: "text-white" },
  { name: "Celery", color: "bg-green-500", textColor: "text-black" },
  { name: "Celery Beat", color: "bg-green-600", textColor: "text-white" },
  { name: "JavaScript", color: "bg-yellow-400", textColor: "text-black" },
  { name: "Next.js", color: "bg-black", textColor: "text-white" },
  { name: "TypeScript", color: "bg-blue-700", textColor: "text-white" },
  { name: "React", color: "bg-blue-400", textColor: "text-black" },
  { name: "Redux", color: "bg-purple-500", textColor: "text-white" },
  { name: "Tailwind CSS", color: "bg-teal-500", textColor: "text-white" },
  { name: "Shadcn", color: "bg-gray-800", textColor: "text-white" },
  { name: "Prisma", color: "bg-indigo-600", textColor: "text-white" },
  { name: "Convex", color: "bg-orange-500", textColor: "text-white" },
  { name: "Drizzle", color: "bg-yellow-600", textColor: "text-white" },
  { name: "Docker", color: "bg-blue-600", textColor: "text-white" },
  { name: "Git", color: "bg-orange-600", textColor: "text-white" },
  { name: "PostgreSQL", color: "bg-blue-800", textColor: "text-white" },
  { name: "Redis", color: "bg-red-600", textColor: "text-white" },
];
export { projects, skills };
