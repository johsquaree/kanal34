import LoadingSpinner from '../components/LoadingSpinner';

export default function Loading() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Loading Icon */}
      <div style={{ 
        fontSize: '4rem', 
        marginBottom: '20px',
        color: '#dc2626'
      }}>
        📰
      </div>

      {/* Loading Title */}
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: '600', 
        margin: '0 0 10px 0',
        color: '#1f2937',
        textAlign: 'center'
      }}>
        Kanal 34
      </h1>

      <p style={{ 
        fontSize: '1.1rem', 
        color: '#6b7280', 
        margin: '0 0 40px 0',
        textAlign: 'center'
      }}>
        Haberler yükleniyor...
      </p>

      {/* Loading Spinner */}
      <LoadingSpinner 
        size="large" 
        color="#dc2626"
        text="Haberler getiriliyor"
      />

      {/* Loading Progress */}
      <div style={{ 
        marginTop: '30px',
        width: '300px',
        maxWidth: '90%'
      }}>
        <div style={{ 
          width: '100%', 
          height: '4px', 
          backgroundColor: '#f3f4f6',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '30%',
            height: '100%',
            backgroundColor: '#dc2626',
            borderRadius: '2px',
            animation: 'progress 2s ease-in-out infinite'
          }} />
        </div>
      </div>

      {/* Loading Tips */}
      <div style={{ 
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f0f9ff',
        borderRadius: '8px',
        border: '1px solid #0ea5e9',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h4 style={{ 
          margin: '0 0 10px 0',
          color: '#0c4a6e',
          fontSize: '1rem'
        }}>
          💡 İpucu
        </h4>
        <p style={{ 
          margin: 0,
          color: '#0c4a6e',
          fontSize: '0.9rem'
        }}>
          Sayfa yüklenirken en güncel haberler hazırlanıyor.
        </p>
      </div>

      {/* Progress Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes progress {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
        `
      }} />
    </div>
  );
} 