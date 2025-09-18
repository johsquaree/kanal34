import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Kanal 34 - News Portal",
  description: "Kanal 34: News portal with latest updates and information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <style>{`
          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #fafafa;
            min-height: 100vh;
          }
          @media (max-width: 600px) {
            body {
              font-size: 15px;
              padding: 0 4px;
            }
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
