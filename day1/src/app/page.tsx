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
        <div style={{ 
          background: '#f8f9fa',
          padding: '40px',
          borderRadius: '12px',
          border: '2px dashed #ddd'
        }}>
          <h2 style={{ 
            fontSize: 20, 
            fontWeight: 600,
            margin: '0 0 16px 0',
            color: '#333'
          }}>
            Day 1: Basic Structure
          </h2>
          <p style={{ 
            fontSize: 16, 
            color: '#666',
            margin: 0
          }}>
            Next.js project setup completed. Basic layout and global styles ready.
          </p>
        </div>
      </div>
    </div>
  );
}
