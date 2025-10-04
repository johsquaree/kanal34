"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useMemo } from 'react';
import { news } from '../newsData';
import NewsCard from '../../components/NewsCard';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    return news.filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      item.summary.toLowerCase().includes(searchTerm) ||
      item.content.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm)
    );
  }, [query]);

  return (
    <div style={{ 
      background: '#fff', 
      minHeight: '100vh',
      fontFamily: 'Inter, Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '30px' }}>
          <Link 
            href="/"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#dc2626',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              marginBottom: '20px',
              fontWeight: 600
            }}
          >
            ← Ana Sayfaya Dön
          </Link>
          
          <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: '#1f2937' }}>
            🔍 Arama Sonuçları
          </h1>
          
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#f3f4f6', 
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <strong>Aranan:</strong> &quot;{query}&quot;
            <br />
            <strong>Sonuç:</strong> {searchResults.length} haber bulundu
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {searchResults.map(item => (
              <NewsCard 
                key={item.id} 
                id={item.id}
                title={item.title}
                summary={item.summary}
                image={item.image}
                category={item.category}
                date={item.date}
                categoryName={item.category}
              />
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px 20px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
            <h3 style={{ marginBottom: '10px', color: '#374151' }}>
              Sonuç Bulunamadı
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '20px' }}>
              &quot;{query}&quot; için arama sonucu bulunamadı.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                href="/"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontWeight: 600
                }}
              >
                Ana Sayfaya Dön
              </Link>
              <button
                onClick={() => window.history.back()}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Geri Dön
              </button>
            </div>
          </div>
        )}

        {/* Arama İpuçları */}
        {query && (
          <div style={{ 
            marginTop: '40px',
            padding: '20px',
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            border: '1px solid #0ea5e9'
          }}>
            <h4 style={{ 
              margin: '0 0 10px 0',
              color: '#0c4a6e',
              fontSize: '1.1rem'
            }}>
              💡 Arama İpuçları
            </h4>
            <ul style={{ 
              margin: 0,
              paddingLeft: '20px',
              color: '#0c4a6e'
            }}>
              <li>Daha spesifik terimler kullanın</li>
              <li>Kategori adlarını deneyin (Ekonomi, Spor, vb.)</li>
              <li>Anahtar kelimeleri farklı şekillerde yazmayı deneyin</li>
              <li>Kısa kelimeler yerine tam ifadeler kullanın</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 