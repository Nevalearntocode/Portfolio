import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReduxProvider from "@/components/providers/redux-provider";
import ModalProvider from "@/components/providers/modal-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className="h-full">
      <body
        className={cn(
          `${inter.variable} font-sans antialiased`,
          "mx-auto flex h-full max-w-[1536px] flex-col justify-center bg-primary/70 text-foreground",
        )}
      >
        <ReduxProvider>
          <ModalProvider />
          <div className="flex h-[690px] flex-col">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
