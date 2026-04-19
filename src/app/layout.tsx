import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brain Ltd. | Award-Winning Interior Design Bangladesh",
  description: "Brain Ltd. - Bangladesh's premier interior design consultancy. We craft experiences, not just spaces. Commercial, Residential, and Retail interior design. Founded by Symon (Award-winning Designer) & Royal Khan.",
  keywords: ["interior design", "Bangladesh", "Brain Ltd.", "commercial interior", "residential interior", "luxury design", "Dhaka", "Jessore"],
  authors: [{ name: "Brain Ltd." }],
  openGraph: {
    title: "Brain Ltd. | Award-Winning Interior Design Bangladesh",
    description: "We don't just design spaces; we craft experiences. The finest interiors begin with a brilliant mind.",
    url: "https://www.brainltdbd.com",
    siteName: "Brain Ltd.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brain Ltd. | Award-Winning Interior Design",
    description: "We don't just design spaces; we craft experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} min-h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}