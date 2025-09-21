import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanal 34 - Güncel Haberler",
  description: "Kanal 34: İstanbul ve Türkiye'den güncel haberler, kültür, film, gündem ve daha fazlası.",
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
            header {
              padding-left: 4px !important;
              padding-right: 4px !important;
            }
            nav {
              display: none !important;
            }
            .mobile-menu {
              display: flex !important;
            }
          }
          @media (max-width: 768px) {
            nav {
              gap: 16px !important;
              font-size: 12px !important;
            }
          }
        `}</style>
        
        <header style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          background: '#fff', 
          padding: '0 20px', 
          height: 60, 
          borderBottom: '1px solid #eee', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)', 
          position: 'sticky', 
          top: 0, 
          zIndex: 10 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2, 
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '4px',
              transition: 'background 0.2s'
            }}>
              <div style={{ width: 18, height: 2, background: '#666' }}></div>
              <div style={{ width: 18, height: 2, background: '#666' }}></div>
              <div style={{ width: 18, height: 2, background: '#666' }}></div>
            </div>
            
            <div style={{ 
              background: '#e53935', 
              padding: '8px 16px', 
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 80
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 4 
              }}>
                <span style={{ 
                  fontWeight: 700, 
                  fontSize: 18, 
                  color: '#fff', 
                  letterSpacing: 0.5 
                }}>KANAL</span>
                <span style={{ 
                  fontWeight: 700, 
                  fontSize: 18, 
                  color: '#fff', 
                  letterSpacing: 0.5 
                }}>34</span>
              </div>
              <div style={{ 
                fontSize: 10, 
                color: '#fff', 
                fontWeight: 500,
                marginTop: -2
              }}>.com</div>
            </div>
          </div>

          <nav style={{ 
            display: 'flex', 
            gap: 32, 
            alignItems: 'center',
            fontSize: 14,
            fontWeight: 500
          }}>
            <a href="/" style={{ 
              color: '#333', 
              textDecoration: 'none', 
              fontWeight: 600,
              fontSize: 14
            }}>Son Dakika</a>
            <a href="#" style={{ 
              color: '#666', 
              textDecoration: 'none', 
              fontWeight: 500,
              fontSize: 14
            }}>Türkiye</a>
            <a href="#" style={{ 
              color: '#666', 
              textDecoration: 'none', 
              fontWeight: 500,
              fontSize: 14
            }}>Video</a>
            <a href="#" style={{ 
              color: '#0066cc', 
              textDecoration: 'none', 
              fontWeight: 600,
              fontSize: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 4
            }}>
              <span style={{ fontSize: 12 }}>📈</span>
              Finans
            </a>
            <a href="#" style={{ 
              color: '#666', 
              textDecoration: 'none', 
              fontWeight: 500,
              fontSize: 14
            }}>Dünya</a>
            <a href="#" style={{ 
              color: '#666', 
              textDecoration: 'none', 
              fontWeight: 500,
              fontSize: 14
            }}>Ekonomi</a>
            <a href="#" style={{ 
              color: '#666', 
              textDecoration: 'none', 
              fontWeight: 500,
              fontSize: 14
            }}>Spor</a>
            <a href="#" style={{ 
              color: '#666', 
              textDecoration: 'none', 
              fontWeight: 500,
              fontSize: 14
            }}>Magazin</a>
            <a href="#" style={{ 
              color: '#666', 
              textDecoration: 'none', 
              fontWeight: 500,
              fontSize: 14
            }}>Yaşam</a>
            <a href="#" style={{ 
              color: '#666', 
              textDecoration: 'none', 
              fontWeight: 500,
              fontSize: 14
            }}>Resmi İlanlar</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/live" style={{ 
              background: '#e53935', 
              color: '#fff', 
              textDecoration: 'none', 
              fontWeight: 600,
              fontSize: 13,
              padding: '8px 16px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'background 0.2s'
            }}>
              <span style={{ fontSize: 12 }}>📡</span>
              Canlı Yayın
            </a>
          </div>
        </header>
        
        <div style={{ padding: '0 10%' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
