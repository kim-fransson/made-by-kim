import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { ClientProviders } from "../provider";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Made By Kim",
  description: "Welcome to my space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`font-sans min-h-svh bg-background-100 text-foreground ${spaceGrotesk.variable} antialiased`}
      >
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
