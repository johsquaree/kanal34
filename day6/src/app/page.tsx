"use client";
import { news, categories, marketData } from './newsData';

export default function Home() {
  return (
    <div style={{ 
      background: '#fff', 
      minHeight: '100vh',
      fontFamily: 'Inter, Arial, sans-serif'
    }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto',
        padding: '20px'
      }}>
        <div style={{ 
          width: '100%', 
          height: 3, 
          background: '#e53935', 
          margin: '32px 0 24px 0' 
        }} />

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 12, 
          margin: '0 0 24px 0', 
          flexWrap: 'wrap' 
        }}>
          {categories.map(cat => (
            <button key={cat.slug} style={{
              border: '1px solid #bbb',
              background: cat.slug === 'hepsi' ? '#222' : '#fff',
              color: cat.slug === 'hepsi' ? '#fff' : '#222',
              borderRadius: 20,
              padding: '6px 20px',
              fontWeight: 500,
              fontSize: 15,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              {cat.name}
            </button>
          ))}
        </div>

        <div style={{ 
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
    </div>
  );
}
