"use client";

import { useState, useMemo } from 'react';
import { news, categories, marketData } from './newsData';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import AdvancedSearch, { SearchFilters } from '../components/AdvancedSearch';
import MarketDataTable from '../components/MarketDataTable';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');
  const [advancedFilters, setAdvancedFilters] = useState<SearchFilters>({
    query: '',
    category: 'Tümü',
    dateRange: 'Tümü',
    sortBy: 'date',
    sortOrder: 'desc'
  });

  const filteredNews = useMemo(() => {
    let filtered = news;
    
    // Basic category filter
    if (selectedCategory !== 'Tümü') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Advanced filters
    if (advancedFilters.query.trim()) {
      const query = advancedFilters.query.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
      );
    }
    
    if (advancedFilters.category !== 'Tümü') {
      filtered = filtered.filter(item => item.category === advancedFilters.category);
    }
    
    // Date range filtering (mock implementation)
    if (advancedFilters.dateRange !== 'Tümü') {
      const today = new Date();
      const newsDate = new Date();
      
      switch (advancedFilters.dateRange) {
        case 'bugun':
          filtered = filtered.filter(item => {
            const itemDate = new Date(item.date);
            return itemDate.toDateString() === today.toDateString();
          });
          break;
        case 'son7gun':
          const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
          filtered = filtered.filter(item => {
            const itemDate = new Date(item.date);
            return itemDate >= sevenDaysAgo;
          });
          break;
        case 'son30gun':
          const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
          filtered = filtered.filter(item => {
            const itemDate = new Date(item.date);
            return itemDate >= thirtyDaysAgo;
          });
          break;
        case 'buay':
          const currentMonth = today.getMonth();
          const currentYear = today.getFullYear();
          filtered = filtered.filter(item => {
            const itemDate = new Date(item.date);
            return itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear;
          });
          break;
      }
    }
    
    // Sorting
    filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;
      
      switch (advancedFilters.sortBy) {
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'category':
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        case 'author':
          aValue = a.author.toLowerCase();
          bValue = b.author.toLowerCase();
          break;
        case 'date':
        default:
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
          break;
      }
      
      if (advancedFilters.sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    
    return filtered;
  }, [selectedCategory, advancedFilters]);

  const handleAdvancedSearch = (filters: SearchFilters) => {
    setAdvancedFilters(filters);
  };

  return (
    <div style={{ padding: '20px 0' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#1f2937' }}>
        Gün 17: 404 Hata Sayfası ve Error Handling
      </h2>
      <p style={{ color: '#6b7280', marginBottom: '30px' }}>
        Özel 404 hata sayfası ve React error boundary sistemi eklendi.
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
          <li>🔍 Özel 404 hata sayfası</li>
          <li>⚠️ React Error Boundary bileşeni</li>
          <li>🔄 Sayfa yenileme ve geri dönüş</li>
          <li>🚀 Hızlı erişim linkleri</li>
          <li>💡 Yardım bölümü</li>
          <li>🗑️ Önbellek temizleme</li>
          <li>🔧 Service Worker temizleme</li>
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
          🚨 Hata Yönetimi Özellikleri
        </h3>
        <ul style={{ 
          margin: 0, 
          paddingLeft: '20px',
          color: '#92400e'
        }}>
          <li><strong>404 Sayfası:</strong> Modern tasarım, hızlı erişim linkleri</li>
          <li><strong>Error Boundary:</strong> React hatalarını yakalama</li>
          <li><strong>Geliştirme Modu:</strong> Hata detayları gösterimi</li>
          <li><strong>Kullanıcı Yardımı:</strong> Sorun çözme önerileri</li>
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
          <li>Modern ve kullanıcı dostu hata sayfaları</li>
          <li>Renkli ikonlar ve görsel geri bildirim</li>
          <li>Responsive tasarım</li>
          <li>Hover efektleri ve geçişler</li>
        </ul>
      </div>

      {/* Test Error Links */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f3f4f6', 
        borderRadius: '8px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <p style={{ marginBottom: '10px', color: '#374151' }}>
          <strong>Hata sayfalarını test etmek için:</strong>
        </p>
        <a 
          href="/nonexistent-page"
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
          🔍 404 Sayfası Test
        </a>
        <button
          onClick={() => {
            throw new Error('Test error for error boundary');
          }}
          style={{
            padding: '10px 20px',
            backgroundColor: '#059669',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          ⚠️ Error Boundary Test
        </button>
      </div>

      {/* Kırmızı Alt Çizgi */}
      <div style={{ 
        height: '3px', 
        backgroundColor: '#dc2626', 
        marginBottom: '30px' 
      }} />

      {/* Gelişmiş Arama */}
      <AdvancedSearch onSearch={handleAdvancedSearch} categories={categories} />

      {/* Basit Arama Çubuğu */}
      <SearchBar onSearch={setSearchQuery} />

      {/* Kategoriler */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ marginBottom: '15px', color: '#1f2937' }}>Hızlı Kategori Filtreleme</h3>
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
                {advancedFilters.sortBy !== 'date' && (
                  <span style={{ marginLeft: '10px', color: '#6b7280' }}>
                    • Sıralama: {advancedFilters.sortBy} ({advancedFilters.sortOrder === 'desc' ? 'Azalan' : 'Artan'})
                  </span>
                )}
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
                Seçilen filtre kriterlerine uygun haber bulunamadı.
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
