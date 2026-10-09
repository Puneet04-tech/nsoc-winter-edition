import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '../components/ThemeProvider';
import { Snowfall } from '../components/Snowfall';
import { AuroraGlow } from '../components/AuroraGlow';

export const metadata: Metadata = {
  title: "Nexus Spring of Code — Winter Edition 2026",
  description:
    "Nexus Spring of Code (NSoC) Winter Edition: an open source program for student developers. 15 Oct to 30 Dec.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-[#00a4ef] selection:text-black">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          {/* Ambient Aurora Glow Atmosphere */}
          <div className="aurora-atmosphere" aria-hidden="true">
            <div className="aurora-blob-1" />
            <div className="aurora-blob-2" />
            <div className="aurora-blob-3" />
          </div>

          {/* Interactive Cursor Aurora Follower */}
          <AuroraGlow />

          {/* Continuous Winter Snowfall */}
          <Snowfall />

          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
