"use client";
import { useState } from 'react';

const categories = [
  { slug: 'hepsi', name: 'Tümü' },
  { slug: 'ekonomi', name: 'Ekonomi' },
  { slug: 'teknoloji', name: 'Teknoloji' },
  { slug: 'gundem', name: 'Gündem' },
  { slug: 'dunya', name: 'Dünya' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('hepsi');

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
          {categories.map((category) => (
            <button 
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              style={{
                border: '1px solid #bbb',
                background: activeCategory === category.slug ? '#222' : '#fff',
                color: activeCategory === category.slug ? '#fff' : '#222',
                borderRadius: 20,
                padding: '6px 20px',
                fontWeight: 500,
                fontSize: 15,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {category.name}
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
