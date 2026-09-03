import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dede Muhidin — Full-Stack Developer",
  description:
    "Portfolio Dede Muhidin — Full-Stack & Mobile Developer. Membangun sistem logistik, fleet tracking, dan automasi untuk PT Jasa Prima Logistik Bulog.",
  keywords: ["Dede Muhidin", "Full-Stack Developer", "Flutter", "React", "Supabase", "JPLB"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
