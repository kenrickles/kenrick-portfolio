import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenrick | Senior DevSecOps Engineer",
  description: "Personal portfolio of Kenrick - Senior DevSecOps Engineer at Partior, Singapore. Specializing in Kubernetes, blockchain infrastructure, and cloud engineering.",
  keywords: ["DevSecOps", "Kubernetes", "Cloud Engineer", "Singapore", "Blockchain", "Portfolio"],
  authors: [{ name: "Kenrick" }],
  openGraph: {
    title: "Kenrick | Senior DevSecOps Engineer",
    description: "Personal portfolio of Kenrick - Senior DevSecOps Engineer at Partior, Singapore.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenrick | Senior DevSecOps Engineer",
    description: "Personal portfolio of Kenrick - Senior DevSecOps Engineer at Partior, Singapore.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased noise-overlay">
        {children}
      </body>
    </html>
  );
}
