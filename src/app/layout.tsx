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
  title: "Ricardo Monterrosa | Software Engineer",
  description:
    "Software Engineer specializing in React. Building sleek, engaging, and user-focused web experiences.",
  openGraph: {
    title: "Ricardo Monterrosa | Software Engineer",
    description:
      "Software Engineer specializing in React. Building sleek, engaging, and user-focused web experiences.",
    url: "https://rickycodes.dev",
    siteName: "Ricardo Monterrosa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Monterrosa | Software Engineer",
    description:
      "Software Engineer specializing in React. Building sleek, engaging, and user-focused web experiences.",
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
