"use client";

import { useState, useMemo } from 'react';
import { news, categories, marketData } from './newsData';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import MarketDataTable from '../components/MarketDataTable';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = useMemo(() => {
    let filtered = news;
    
    if (selectedCategory !== 'Tümü') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div style={{ padding: '20px 0' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#1f2937' }}>
        Gün 15: Arama Sonuçları Sayfası
      </h2>
      <p style={{ color: '#6b7280', marginBottom: '30px' }}>
        Arama sonuçları için özel sayfa oluşturuldu. URL parametreleri ile arama yapılabilir.
      </p>

      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f0f9ff', 
        borderRadius: '8px',
        marginBottom: '30px',
        border: '1px solid #0ea5e9'
      }}>
        <h3 style={{ marginBottom: '15px', color: '#0c4a6e' }}>
          ✅ Tamamlanan Özellikler
        </h3>
        <ul style={{ 
          margin: 0, 
          paddingLeft: '20px',
          color: '#0c4a6e'
        }}>
          <li>🔍 Arama sonuçları sayfası (/search?q=query)</li>
          <li>📊 Arama istatistikleri (sonuç sayısı)</li>
          <li>❌ "Sonuç bulunamadı" mesajı</li>
          <li>💡 Arama ipuçları bölümü</li>
          <li>🔗 URL parametreleri ile arama</li>
          <li>📱 Responsive tasarım</li>
        </ul>
      </div>

      <div style={{ 
        padding: '20px', 
        backgroundColor: '#fef3c7', 
        borderRadius: '8px',
        marginBottom: '30px',
        border: '1px solid #f59e0b'
      }}>
        <h3 style={{ marginBottom: '15px', color: '#92400e' }}>
          🔍 Arama Özellikleri
        </h3>
        <ul style={{ 
          margin: 0, 
          paddingLeft: '20px',
          color: '#92400e'
        }}>
          <li>Başlık, özet, içerik ve kategori araması</li>
          <li>Büyük/küçük harf duyarsız arama</li>
          <li>Gerçek zamanlı filtreleme</li>
          <li>Arama geçmişi ve geri dönüş</li>
        </ul>
      </div>

      <div style={{ 
        padding: '20px', 
        backgroundColor: '#ecfdf5', 
        borderRadius: '8px',
        marginBottom: '30px',
        border: '1px solid #10b981'
      }}>
        <h3 style={{ marginBottom: '15px', color: '#065f46' }}>
          🎨 Tasarım Özellikleri
        </h3>
        <ul style={{ 
          margin: 0, 
          paddingLeft: '20px',
          color: '#065f46'
        }}>
          <li>Temiz ve modern arama sonuçları</li>
          <li>Renkli kategori etiketleri</li>
          <li>Hover efektleri</li>
          <li>Responsive grid layout</li>
        </ul>
      </div>

      {/* Test Search Link */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f3f4f6', 
        borderRadius: '8px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <p style={{ marginBottom: '10px', color: '#374151' }}>
          <strong>Arama sayfasını test etmek için:</strong>
        </p>
        <a 
          href="/search?q=ekonomi"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#dc2626',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            marginRight: '10px'
          }}
        >
          🔍 "Ekonomi" Arama
        </a>
        <a 
          href="/search?q=teknoloji"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#059669',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          🔍 "Teknoloji" Arama
        </a>
      </div>

      {/* Kırmızı Alt Çizgi */}
      <div style={{ 
        height: '3px', 
        backgroundColor: '#dc2626', 
        marginBottom: '30px' 
      }} />

      {/* Arama Çubuğu */}
      <SearchBar onSearch={setSearchQuery} />

      {/* Kategoriler */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ marginBottom: '15px', color: '#1f2937' }}>Kategoriler</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setSelectedCategory('Tümü')}
            style={{
              padding: '8px 16px',
              backgroundColor: selectedCategory === 'Tümü' ? '#dc2626' : '#f3f4f6',
              color: selectedCategory === 'Tümü' ? 'white' : '#374151',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Tümü
          </button>
          {categories.map(category => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.name)}
              style={{
                padding: '8px 16px',
                backgroundColor: selectedCategory === category.name ? '#dc2626' : '#f3f4f6',
                color: selectedCategory === category.name ? 'white' : '#374151',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Ana İçerik Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 320px',
        gap: '30px'
      }}>
        {/* Haberler */}
        <div>
          {filteredNews.length > 0 ? (
            <>
              <div style={{ 
                marginBottom: '20px',
                padding: '10px 15px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#374151'
              }}>
                <strong>Sonuç:</strong> {filteredNews.length} haber bulundu
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px'
              }}>
                {filteredNews.map(item => (
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
            </>
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
              <p style={{ color: '#6b7280' }}>
                Seçilen kriterlere uygun haber bulunamadı.
              </p>
            </div>
          )}
        </div>

        {/* Piyasa Verileri */}
        <aside>
          <MarketDataTable data={marketData} />
        </aside>
      </div>
    </div>
  );
}
