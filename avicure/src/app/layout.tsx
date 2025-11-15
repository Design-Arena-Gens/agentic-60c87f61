import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Avicure – AI Healthcare Platform",
  description:
    "Avicure mobile experience connecting patients, doctors, labs, and hospitals with cohesive AI-powered workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-sand">
      <body
        className={`${inter.variable} bg-sand text-ink antialiased selection:bg-primary/20 selection:text-primary-dark`}
      >
        {children}
      </body>
    </html>
  );
}
