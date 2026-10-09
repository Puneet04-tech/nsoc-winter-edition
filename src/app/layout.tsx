import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '../components/ThemeProvider';
import { AuroraGlow } from '../components/AuroraGlow';

export const metadata: Metadata = {
  title: "Nexus Spring of Code — Winter Edition 2026",
  description:
    "Nexus Spring of Code (NSoC) Winter Edition: an open source program for student developers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <div className="aurora-bg" />
          <AuroraGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
