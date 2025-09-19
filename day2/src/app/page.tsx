export default function Home() {
  return (
    <div style={{ 
      background: '#fff', 
      minHeight: '100vh',
      fontFamily: 'Inter, Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto',
        textAlign: 'center',
        padding: '40px 20px'
      }}>
        <h1 style={{ 
          fontSize: 48, 
          fontWeight: 700, 
          color: '#e53935',
          margin: '0 0 20px 0'
        }}>
          Kanal 34
        </h1>
        <p style={{ 
          fontSize: 24, 
          color: '#666',
          margin: '0 0 40px 0'
        }}>
          Haber Portalı
        </p>
      </div>
    </div>
  );
}
