import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SplashScreen } from "@/modules/shared/components/SplashScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NABD — Neuro Glove Platform",
  description:
    "Advanced Parkinson's diagnostic wearable platform. Precise tremor analysis and motor symptom tracking for clinical assessment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-display`}>
        <SplashScreen />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
