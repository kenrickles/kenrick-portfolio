import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenrick | Protocol Engineer",
  description: "Personal portfolio of Kenrick - Protocol Engineer at Galaxy, Singapore. Specializing in DevSecOps, Kubernetes, and blockchain infrastructure.",
  keywords: ["Protocol Engineer", "DevSecOps", "Kubernetes", "Cloud Engineer", "Singapore", "Blockchain", "Portfolio"],
  authors: [{ name: "Kenrick" }],
  openGraph: {
    title: "Kenrick | Protocol Engineer",
    description: "Personal portfolio of Kenrick - Protocol Engineer at Galaxy, Singapore.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenrick | Protocol Engineer",
    description: "Personal portfolio of Kenrick - Protocol Engineer at Galaxy, Singapore.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased noise-overlay starfield">
        {children}
      </body>
    </html>
  );
}
