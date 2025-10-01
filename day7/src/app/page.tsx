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
