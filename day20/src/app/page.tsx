/**
 * Kanal 34 News Portal - Home Page
 * 
 * This is the main home page component that displays:
 * - News articles in a responsive grid layout
 * - Category filtering system
 * - Advanced search functionality
 * - Market data sidebar
 * - Performance monitoring
 * 
 * Features:
 * - Real-time search and filtering
 * - Lazy loading for performance
 * - Responsive design for all devices
 * - Advanced sorting options
 * 
 * @author Kanal 34 Development Team
 * @version 1.0.0
 */

"use client";

import { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { news, categories, marketData, NewsItem } from './newsData';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import AdvancedSearch, { SearchFilters } from '../components/AdvancedSearch';
import MarketDataTable from '../components/MarketDataTable';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';

// Lazy load heavy components for better performance
const VirtualizedList = lazy(() => import('../components/VirtualizedList'));

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showVirtualized, setShowVirtualized] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState<SearchFilters>({
    query: '',
    category: 'Tümü',
    dateRange: 'Tümü',
    sortBy: 'date',
    sortOrder: 'desc'
  });

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  if (isLoading) {
    return (
      <div style={{ padding: '20px 0' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px'
        }}>
          <LoadingSpinner 
            size="large" 
            color="#dc2626"
            text="Haberler yükleniyor..."
          />
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px 0' }}>
      {/* Red Line */}
      <div style={{ height: '3px', backgroundColor: '#dc2626', marginBottom: '30px' }} />
      
      {/* Advanced Search */}
      <AdvancedSearch onSearch={handleAdvancedSearch} categories={categories} />
      
      {/* Basic Search */}
      <SearchBar onSearch={setSearchQuery} />
      
      {/* Category Filter */}
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

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '30px' }}>
        {/* News Content */}
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
              
              {showVirtualized ? (
                <Suspense fallback={<LoadingSpinner text="Liste yükleniyor..." />}>
                  <VirtualizedList
                    items={filteredNews}
                    itemHeight={450}
                    containerHeight={600}
                    renderItem={(item: any) => (
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
                    )}
                  />
                </Suspense>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
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
              )}
            </>
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px 20px', 
              backgroundColor: '#f9fafb', 
              borderRadius: '8px' 
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
              <h3 style={{ marginBottom: '10px', color: '#374151' }}>Sonuç Bulunamadı</h3>
              <p style={{ color: '#6b7280' }}>Seçilen filtre kriterlerine uygun haber bulunamadı.</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside>
          <MarketDataTable data={marketData} />
        </aside>
      </div>

      {/* Performance Monitor */}
      <PerformanceMonitor />
    </div>
  );
}
