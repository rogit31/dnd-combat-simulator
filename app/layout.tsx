import "./globals.css";
import { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
