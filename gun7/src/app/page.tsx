"use client";
import { useState } from 'react';
import { news, categories, marketData } from './newsData';
import NewsCard from '../components/NewsCard';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('hepsi');
  
  const filteredNews = selectedCategory === 'hepsi'
    ? news
    : news.filter(n => n.category === selectedCategory);

  return (
    <div style={{ 
      background: '#fff', 
      minHeight: '100vh',
      fontFamily: 'Inter, Arial, sans-serif'
    }}>
      {/* Ana Sayfa Layout */}
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto',
        padding: '20px'
      }}>
        {/* Kırmızı Alt Çizgi */}
        <div style={{ 
          width: '100%', 
          height: 3, 
          background: '#e53935', 
          margin: '32px 0 24px 0' 
        }} />

        {/* Kategoriler */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 12, 
          margin: '0 0 24px 0', 
          flexWrap: 'wrap' 
        }}>
          {categories.map(cat => (
            <button 
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              style={{
                border: '1px solid #bbb',
                background: selectedCategory === cat.slug ? '#222' : '#fff',
                color: selectedCategory === cat.slug ? '#fff' : '#222',
                borderRadius: 20,
                padding: '6px 20px',
                fontWeight: 500,
                fontSize: 15,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Haber Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          marginBottom: 40
        }}>
          {filteredNews.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              summary={item.summary}
              image={item.image}
              category={item.category}
              date={item.date}
              categoryName={categories.find(c => c.slug === item.category)?.name || ''}
            />
          ))}
        </div>

        {/* İçerik Alanı */}
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
              Gün 7: Haber Kartları Bileşeni
            </h2>
            <p style={{ 
              fontSize: 16, 
              color: '#666',
              margin: '0 0 20px 0'
            }}>
              Haber kartları bileşeni oluşturuldu. 3 sütunlu grid layout ile haberler görüntüleniyor.
            </p>
            <div style={{ 
              background: '#e8f5e8',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #4caf50'
            }}>
              <strong style={{ color: '#2e7d32' }}>✅ Tamamlanan Özellikler:</strong>
              <ul style={{ 
                textAlign: 'left', 
                margin: '10px 0 0 0',
                paddingLeft: '20px',
                color: '#2e7d32'
              }}>
                <li>NewsCard bileşeni oluşturuldu</li>
                <li>3 sütunlu grid layout</li>
                <li>Hover efektleri (yükselme ve gölge)</li>
                <li>Kategori filtreleme sistemi</li>
                <li>Responsive tasarım</li>
                <li>Link entegrasyonu (Devamını Oku)</li>
                <li>TypeScript tip güvenliği</li>
              </ul>
            </div>
            <div style={{ 
              background: '#fff3cd',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #ffc107',
              marginTop: '16px'
            }}>
              <strong style={{ color: '#856404' }}>🎨 Kart Tasarım Özellikleri:</strong>
              <ul style={{ 
                textAlign: 'left', 
                margin: '10px 0 0 0',
                paddingLeft: '20px',
                color: '#856404'
              }}>
                <li><strong>Görsel:</strong> 400x200px, cover object-fit</li>
                <li><strong>Başlık:</strong> 22px, bold, 700 weight</li>
                <li><strong>Özet:</strong> 15px, 1.5 line-height</li>
                <li><strong>Kategori:</strong> Badge tasarımı</li>
                <li><strong>Tarih:</strong> 14px, gri renk</li>
                <li><strong>Hover:</strong> Yükselme ve gölge efekti</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
