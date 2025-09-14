import type { Metadata } from 'next';
import './globals.css';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Kanal 34 - Güncel Haberler',
  description: 'Kanal 34 Haber Portalı - Güncel haberler, ekonomi, spor, teknoloji ve daha fazlası',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: 'Inter, Arial, sans-serif',
        backgroundColor: '#fff'
      }}>
        {/* CNN Türk Tarzı Header */}
        <header style={{ 
          backgroundColor: '#fff', 
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <div style={{ 
            maxWidth: 1200, 
            margin: '0 auto',
            padding: '0 20px'
          }}>
            {/* Üst Bar */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid #f3f4f6'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <button style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '5px'
                }}>
                  ☰
                </button>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#6b7280',
                  fontWeight: '500'
                }}>
                  KANAL 34
                </div>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px'
              }}>
                <div style={{ 
                  fontSize: '12px', 
                  color: '#6b7280' 
                }}>
                  {new Date().toLocaleDateString('tr-TR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </div>

            {/* Ana Header */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '15px 0'
            }}>
              {/* Logo */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px'
              }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: '#dc2626',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>
                  K34
                </div>
                <div>
                  <div style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold',
                    color: '#1f2937'
                  }}>
                    KANAL 34
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: '#6b7280',
                    textTransform: 'uppercase'
                  }}>
                    Haber Portalı
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav style={{ 
                display: 'flex', 
                gap: '30px',
                alignItems: 'center'
              }}>
                <a href="/" style={{ 
                  color: '#1f2937', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px'
                }}>
                  Ana Sayfa
                </a>
                <a href="/category/ekonomi" style={{ 
                  color: '#1f2937', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px'
                }}>
                  Ekonomi
                </a>
                <a href="/category/teknoloji" style={{ 
                  color: '#1f2937', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px'
                }}>
                  Teknoloji
                </a>
                <a href="/category/gundem" style={{ 
                  color: '#1f2937', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px'
                }}>
                  Gündem
                </a>
                <a href="/category/dunya" style={{ 
                  color: '#1f2937', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px'
                }}>
                  Dünya
                </a>
                <a href="/live" style={{ 
                  color: '#1f2937', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px'
                }}>
                  Canlı Yayın
                </a>
                <a href="/social" style={{ 
                  color: '#1f2937', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px'
                }}>
                  Sosyal Medya
                </a>
                <button style={{
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  CANLI YAYIN
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Global Padding */}
        <div style={{ padding: '0 10%' }}>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </div>

        <Footer />

        {/* Responsive CSS */}
        <style jsx global>{`
          @media (max-width: 600px) {
            nav {
              display: none !important;
            }
            header {
              padding: 10px 0 !important;
            }
            .header-content {
              flex-direction: column !important;
              gap: 10px !important;
            }
          }
          @media (max-width: 768px) {
            nav {
              gap: 15px !important;
            }
            nav a {
              font-size: 12px !important;
            }
          }
        `}</style>
      </body>
    </html>
  );
}

