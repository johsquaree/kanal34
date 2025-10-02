"use client";
import { useState, useMemo } from 'react';
import { news, categories, marketData } from './newsData';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import MarketDataTable from '../components/MarketDataTable';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('hepsi');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredNews = useMemo(() => {
    let filtered = news;
    if (selectedCategory !== 'hepsi') {
      filtered = filtered.filter(n => n.category === selectedCategory);
    }
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

        <SearchBar onSearch={handleSearch} />

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

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: 32,
          marginBottom: 40
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
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

          <aside>
            <MarketDataTable data={marketData} />
          </aside>
        </div>

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
