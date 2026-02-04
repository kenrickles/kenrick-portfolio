import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://kenrickles.github.io/kenrick-portfolio";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0b' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kenrick Tan | SRE Specialist",
    template: "%s | Kenrick Tan",
  },
  description:
    "SRE Specialist at Prudential Singapore. Building calm, resilient infrastructure for regulated financial platforms. 5+ years in Kubernetes, CI/CD, and platform engineering.",
  keywords: [
    "SRE",
    "DevSecOps",
    "Protocol Engineer",
    "Infrastructure",
    "Kubernetes",
    "Platform Engineering",
    "GitHub Actions",
    "Helm",
    "Terraform",
    "AWS",
    "AI Tooling",
    "Singapore",
    "Portfolio",
    "Release Engineering",
    "Site Reliability Engineering",
  ],
  authors: [{ name: "Kenrick Tan", url: SITE_URL }],
  creator: "Kenrick Tan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Kenrick Tan | SRE Specialist",
    description:
      "SRE Specialist at Prudential Singapore. Building calm, resilient infrastructure for regulated financial platforms.",
    siteName: "Kenrick Tan Portfolio",
    images: [
      {
        url: "/kenrick.jpg",
        width: 800,
        height: 800,
        alt: "Kenrick Tan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenrick Tan | SRE Specialist",
    description:
      "SRE Specialist at Prudential Singapore. Building calm, resilient infrastructure for regulated financial platforms.",
    images: ["/kenrick.jpg"],
    creator: "@kenrickles",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kenrick Tan",
  url: SITE_URL,
  image: `${SITE_URL}/kenrick.jpg`,
  sameAs: [
    "https://github.com/kenrickles",
    "https://linkedin.com/in/kenrick-tan",
    "https://t.me/kenrickles",
  ],
  jobTitle: "SRE Specialist",
  worksFor: {
    "@type": "Organization",
    name: "Prudential Singapore",
    url: "https://www.prudential.com.sg",
  },
  description:
    "SRE and DevSecOps specialist focused on regulated financial environments, release engineering, and pragmatic AI tooling.",
  knowsAbout: [
    "Kubernetes",
    "Docker",
    "Helm",
    "Terraform",
    "GitHub Actions",
    "AWS",
    "GCP",
    "Site Reliability Engineering",
    "DevSecOps",
    "Platform Engineering",
    "CI/CD",
    "GitOps",
    "AI Tooling",
    "Model Context Protocol (MCP)",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
