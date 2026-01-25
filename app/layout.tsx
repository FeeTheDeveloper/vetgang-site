import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VET GANG",
  description: "Veteran-Owned Exclusive Network",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-950 text-white">
        {children}
      </body>
    </html>
  );
}
