import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Course Automation — Launch faster",
    template: "%s — Course Automation",
  },
  description:
    "A modern Next.js landing page template with Tailwind to launch your product quickly.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Course Automation — Launch faster",
    description:
      "A modern Next.js landing page template with Tailwind to launch your product quickly.",
    url: "https://example.com",
    siteName: "Course Automation",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Course Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Course Automation — Launch faster",
    description:
      "A modern Next.js landing page template with Tailwind to launch your product quickly.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
