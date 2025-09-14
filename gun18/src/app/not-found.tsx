import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Error Icon */}
      <div style={{ 
        fontSize: '8rem', 
        marginBottom: '20px',
        color: '#dc2626'
      }}>
        🔍
      </div>

      {/* Error Code */}
      <h1 style={{ 
        fontSize: '6rem', 
        fontWeight: '700', 
        margin: '0 0 20px 0',
        color: '#1f2937',
        textAlign: 'center'
      }}>
        404
      </h1>

      {/* Error Message */}
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: '600', 
        margin: '0 0 15px 0',
        color: '#374151',
        textAlign: 'center'
      }}>
        Sayfa Bulunamadı
      </h2>

      <p style={{ 
        fontSize: '1.1rem', 
        color: '#6b7280', 
        margin: '0 0 40px 0',
        textAlign: 'center',
        maxWidth: '500px',
        lineHeight: '1.6'
      }}>
        Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
        Ana sayfaya dönerek istediğiniz içeriği arayabilirsiniz.
      </p>

      {/* Action Buttons */}
      <div style={{ 
        display: 'flex', 
        gap: '15px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Link 
          href="/"
          style={{
            padding: '12px 24px',
            backgroundColor: '#dc2626',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#b91c1c';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#dc2626';
          }}
        >
          🏠 Ana Sayfaya Dön
        </Link>

        <button
          onClick={() => window.history.back()}
          style={{
            padding: '12px 24px',
            backgroundColor: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4b5563';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#6b7280';
          }}
        >
          ⬅️ Geri Dön
        </button>
      </div>

      {/* Quick Links */}
      <div style={{ 
        marginTop: '50px',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h3 style={{ 
          fontSize: '1.3rem', 
          fontWeight: '600', 
          margin: '0 0 20px 0',
          color: '#1f2937',
          textAlign: 'center'
        }}>
          🚀 Hızlı Erişim
        </h3>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          <Link 
            href="/category/ekonomi"
            style={{
              padding: '15px',
              backgroundColor: '#f3f4f6',
              color: '#374151',
              textDecoration: 'none',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e5e7eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
          >
            📊 Ekonomi Haberleri
          </Link>

          <Link 
            href="/category/teknoloji"
            style={{
              padding: '15px',
              backgroundColor: '#f3f4f6',
              color: '#374151',
              textDecoration: 'none',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e5e7eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
          >
            💻 Teknoloji Haberleri
          </Link>

          <Link 
            href="/live"
            style={{
              padding: '15px',
              backgroundColor: '#f3f4f6',
              color: '#374151',
              textDecoration: 'none',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e5e7eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
          >
            📺 Canlı Yayın
          </Link>

          <Link 
            href="/social"
            style={{
              padding: '15px',
              backgroundColor: '#f3f4f6',
              color: '#374151',
              textDecoration: 'none',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e5e7eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
          >
            📱 Sosyal Medya
          </Link>
        </div>
      </div>

      {/* Help Section */}
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f0f9ff',
        borderRadius: '8px',
        border: '1px solid #0ea5e9',
        maxWidth: '500px',
        textAlign: 'center'
      }}>
        <h4 style={{ 
          margin: '0 0 10px 0',
          color: '#0c4a6e',
          fontSize: '1.1rem'
        }}>
          💡 Yardıma mı ihtiyacınız var?
        </h4>
        <p style={{ 
          margin: 0,
          color: '#0c4a6e',
          fontSize: '0.9rem'
        }}>
          Aradığınız içeriği bulamadıysanız, arama çubuğunu kullanarak 
          tüm haberler arasında arama yapabilirsiniz.
        </p>
      </div>

      {/* Footer Info */}
      <div style={{ 
        marginTop: '40px',
        textAlign: 'center',
        color: '#9ca3af',
        fontSize: '0.9rem'
      }}>
        <p style={{ margin: '0 0 10px 0' }}>
          Kanal 34 Haber Portalı
        </p>
        <p style={{ margin: 0 }}>
          © 2025 Tüm hakları saklıdır
        </p>
      </div>
    </div>
  );
} 