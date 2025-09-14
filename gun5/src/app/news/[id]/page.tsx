"use client";
import { useParams } from 'next/navigation';
import { news } from '../../newsData';

export default function NewsDetail() {
  const params = useParams();
  const item = news.find((n: any) => n.id === params.id);
  
  if (!item) {
    return (
      <div style={{ 
        padding: 40, 
        textAlign: 'center', 
        color: '#e53935',
        fontSize: 18,
        fontWeight: 600
      }}>
        Haber bulunamadı.
      </div>
    );
  }
  
  return (
    <div style={{ 
      maxWidth: 800, 
      margin: '40px auto', 
      background: '#fff', 
      borderRadius: 16, 
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
      padding: 32,
      border: '1px solid #eee',
      width: '100%'
    }}>
      <img 
        src={item.image} 
        alt={item.title} 
        style={{ 
          width: '100%', 
          height: 400, 
          objectFit: 'cover', 
          borderRadius: 12, 
          marginBottom: 24 
        }} 
      />
      <div style={{ 
        color: '#888', 
        fontSize: 15, 
        marginBottom: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}>
        <span>{item.date}</span>
        <span>|</span>
        <span style={{ 
          background: '#e53935', 
          color: '#fff', 
          padding: '4px 12px', 
          borderRadius: 12,
          fontSize: 12,
          fontWeight: 600
        }}>
          {item.category.toUpperCase()}
        </span>
      </div>
      <h1 style={{ 
        fontSize: 36, 
        fontWeight: 700, 
        margin: '0 0 20px 0', 
        color: '#b71c1c',
        lineHeight: 1.2
      }}>
        {item.title}
      </h1>
      <div style={{ 
        color: '#333', 
        fontSize: 18,
        lineHeight: 1.6
      }}>
        {item.summary}
      </div>
      
      {/* Geri dönüş butonu */}
      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <a 
          href="/" 
          style={{
            background: '#e53935',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 600,
            display: 'inline-block',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#c62828'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#e53935'}
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
} 