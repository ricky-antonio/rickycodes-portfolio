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
  title: "Ricardo Monterrosa | Full-Stack Software Engineer",
  description:
    "Full-stack Software Engineer specializing in React and Next.js. Building fast, accessible, and polished web applications.",
  alternates: {
    canonical: "https://rickycodes.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ricardo Monterrosa | Full-Stack Software Engineer",
    description:
      "Full-stack Software Engineer specializing in React and Next.js. Building fast, accessible, and polished web applications.",
    url: "https://rickycodes.dev",
    siteName: "Ricardo Monterrosa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Monterrosa | Full-Stack Software Engineer",
    description:
      "Full-stack Software Engineer specializing in React and Next.js. Building fast, accessible, and polished web applications.",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
