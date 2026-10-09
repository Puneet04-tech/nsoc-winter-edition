import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus Spring of Code — Winter Edition 2026",
  description:
    "Nexus Spring of Code (NSoC) Winter Edition: an open source program for student developers. Build real projects, get PRs reviewed, earn recognition.",
  keywords: [
    "Nexus Spring of Code",
    "NSoC",
    "Winter Edition",
    "Open Source",
    "Student Developers",
  ],
  openGraph: {
    title: "Nexus Spring of Code — Winter Edition 2026",
    description:
      "Open source program for student developers. 15 Oct – 30 Dec. Build real projects, get reviewed, earn swags & certificates.",
    siteName: "Nexus Spring of Code",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
