import "./globals.css";
import { Metadata } from "next";
import Header from "@/app/components/header/Header";
import React from "react";

export const metadata: Metadata = {
  title: "Better D&D",
  description: "D&D 5e character manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
      </body>
    </html>
  );
}
