import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenrick Tan | Protocol Engineer at Galaxy",
  description:
    "Kenrick Tan is a protocol engineer at Galaxy in Singapore, building calm, resilient infrastructure for AI-forward teams.",
  keywords: [
    "Protocol Engineer",
    "Infrastructure",
    "Kubernetes",
    "Platform Engineering",
    "AI Tooling",
    "Singapore",
    "Portfolio",
  ],
  authors: [{ name: "Kenrick Tan" }],
  openGraph: {
    title: "Kenrick Tan | Protocol Engineer at Galaxy",
    description:
      "Portfolio of Kenrick Tan, protocol engineer focused on infrastructure reliability and AI tooling.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenrick Tan | Protocol Engineer at Galaxy",
    description:
      "Portfolio of Kenrick Tan, protocol engineer focused on infrastructure reliability and AI tooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
