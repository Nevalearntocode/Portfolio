import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter from Google Fonts
import "./globals.css";
import { cn } from "@/lib/utils";

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Custom variable name for Inter
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify font weights
});

export const metadata: Metadata = {
  title: "Neva Portfolio",
  description: "Personal portfolio of Neva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${inter.variable} antialiased`, "")}>
        {children}
      </body>
    </html>
  );
}
