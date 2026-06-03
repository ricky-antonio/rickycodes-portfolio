import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
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
  metadataBase: new URL("https://rickycodes.dev"),
  icons: { icon: "/favicon.svg" },
  title: "Ricardo Monterrosa | Frontend Developer",
  description:
    "Frontend developer specializing in React, TypeScript, and Next.js. Building fast, accessible, and polished web apps powered by AI.",
  alternates: {
    canonical: "https://rickycodes.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ricardo Monterrosa | Frontend Developer",
    description:
      "Frontend developer specializing in React, TypeScript, and Next.js. Building fast, accessible, and polished web apps powered by AI.",
    url: "https://rickycodes.dev",
    siteName: "Ricardo Monterrosa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Monterrosa | Frontend Developer",
    description:
      "Frontend developer specializing in React, TypeScript, and Next.js. Building fast, accessible, and polished web apps powered by AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
