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

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://example.com/#organization",
      "name": "AI Automation Academy",
      "url": "https://example.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/logo.png",
        "width": 400,
        "height": 400
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "en-US"
      },
      "sameAs": [
        "https://facebook.com/aiautomationacademy",
        "https://twitter.com/aiautomation_ac",
        "https://linkedin.com/company/ai-automation-academy"
      ]
    },

    // Course Schema
    {
      "@type": "Course",
      "@id": "https://example.com/#course",
      "name": "AI Automation for Entrepreneurs",
      "description": "Master AI automation to save 20+ hours weekly and double your income. No technical skills required.",
      "provider": {
        "@id": "https://example.com/#organization"
      },
      "courseMode": "online",
      "instructor": {
        "@type": "Person",
        "name": "Alex Smith",
        "jobTitle": "AI Automation Expert & Course Creator"
      },
      "offers": {
        "@type": "Offer",
        "price": "147",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://athenero.com/?hopId=47075760-cd15-4a06-9a8e-7f7db8a87219"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "10000",
        "bestRating": "5",
        "worstRating": "1"
      },
      "coursePrerequisites": "No prior technical skills required",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "instructor": {
          "@type": "Person",
          "name": "Alex Smith"
        }
      }
    },

    // Review Schema (Testimonials)
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "reviewBody": "This course completely changed how I run my business. I've automated 80% of my repetitive tasks and my income has doubled in just 3 months!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Mike Chen"
      },
      "reviewBody": "As a small business owner, I was skeptical about AI. But this course made it so simple - now I save 20 hours per week and my revenue increased by 150%!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anna Rodriguez"
      },
      "reviewBody": "The best investment I've ever made. From complete beginner to running automated systems that generate passive income. Worth every penny!"
    },

    // BreadcrumbList Schema
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://example.com"
        }
      ]
    },

    // WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://example.com/#website",
      "url": "https://example.com",
      "name": "AI Automation Academy",
      "description": "Learn AI automation to transform your business and double your income",
      "publisher": {
        "@id": "https://example.com/#organization"
      },
      "inLanguage": "en-US"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
