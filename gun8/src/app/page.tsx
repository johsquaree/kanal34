"use client";
import { useState, useMemo } from 'react';
import { news, categories, marketData } from './newsData';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('hepsi');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredNews = useMemo(() => {
    let filtered = news;
    
    // Kategori filtreleme
    if (selectedCategory !== 'hepsi') {
      filtered = filtered.filter(n => n.category === selectedCategory);
    }
    
    // Arama filtreleme
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(n => 
        n.title.toLowerCase().includes(query) ||
        n.summary.toLowerCase().includes(query) ||
        n.content.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

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

        {/* Arama Çubuğu */}
        <SearchBar onSearch={handleSearch} />

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

        {/* Sonuç Sayısı */}
        {searchQuery && (
          <div style={{ 
            textAlign: 'center', 
            marginBottom: 24,
            color: '#666',
            fontSize: 14
          }}>
            "{searchQuery}" için {filteredNews.length} sonuç bulundu
          </div>
        )}

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

        {/* Sonuç Yok Mesajı */}
        {filteredNews.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            color: '#666'
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <h3 style={{ fontSize: 20, marginBottom: 8, color: '#333' }}>
              Sonuç bulunamadı
            </h3>
            <p style={{ fontSize: 16 }}>
              Arama kriterlerinize uygun haber bulunamadı. Lütfen farklı kelimeler deneyin.
            </p>
          </div>
        )}

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
              Gün 8: Gelişmiş Kategori Filtreleme Sistemi
            </h2>
            <p style={{ 
              fontSize: 16, 
              color: '#666',
              margin: '0 0 20px 0'
            }}>
              Gelişmiş arama ve filtreleme sistemi eklendi. Hem kategori hem de metin araması yapılabiliyor.
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
                <li>SearchBar bileşeni oluşturuldu</li>
                <li>Metin arama özelliği (başlık, özet, içerik)</li>
                <li>Kategori + arama kombinasyonu</li>
                <li>Sonuç sayısı gösterimi</li>
                <li>Sonuç yok mesajı</li>
                <li>useMemo ile performans optimizasyonu</li>
                <li>Temizle butonu</li>
              </ul>
            </div>
            <div style={{ 
              background: '#fff3cd',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #ffc107',
              marginTop: '16px'
            }}>
              <strong style={{ color: '#856404' }}>🔍 Arama Özellikleri:</strong>
              <ul style={{ 
                textAlign: 'left', 
                margin: '10px 0 0 0',
                paddingLeft: '20px',
                color: '#856404'
              }}>
                <li><strong>Metin Arama:</strong> Başlık, özet ve içerikte arama</li>
                <li><strong>Kategori Filtreleme:</strong> Kategori bazlı filtreleme</li>
                <li><strong>Kombinasyon:</strong> Hem arama hem kategori</li>
                <li><strong>Performans:</strong> useMemo ile optimize edilmiş</li>
                <li><strong>UX:</strong> Sonuç sayısı ve boş durum mesajı</li>
                <li><strong>Responsive:</strong> Mobil uyumlu arama çubuğu</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
