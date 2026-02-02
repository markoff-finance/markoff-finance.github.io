import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "../../site.config";
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
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeVars: Record<string, string> = {
    ...Object.fromEntries(
      Object.entries(siteConfig.colors).map(([key, value]) => [
        `--theme-${key}`,
        value,
      ])
    ),
    '--theme-font-sans': `var(--font-geist-sans), ${siteConfig.fonts.sans}`,
    '--theme-font-mono': `var(--font-geist-mono), ${siteConfig.fonts.mono}`,
  };

  return (
    <html lang="en" style={themeVars}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
