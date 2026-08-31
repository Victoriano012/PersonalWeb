import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, "")}`
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

const description =
  "Master's student in Data Science at Harvard, AI researcher, mathematician and data scientist. Education, experience, research, publications and personal projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Victor Conchello Vendrell",
  description,
  keywords: [
    "Victor Conchello Vendrell",
    "AI research",
    "machine learning",
    "data science",
    "mathematics",
    "Harvard",
  ],
  authors: [{ name: "Victor Conchello Vendrell" }],
  creator: "Victor Conchello Vendrell",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: "Victor Conchello Vendrell",
    title: "Victor Conchello Vendrell",
    description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Conchello Vendrell",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
