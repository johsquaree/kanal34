"use client";

import { useState } from 'react';

interface AdvancedSearchProps {
  onSearch: (filters: SearchFilters) => void;
  categories: Array<{ slug: string; name: string }>;
}

export interface SearchFilters {
  query: string;
  category: string;
  dateRange: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function AdvancedSearch({ onSearch, categories }: AdvancedSearchProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: 'Tümü',
    dateRange: 'Tümü',
    sortBy: 'date',
    sortOrder: 'desc'
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    const newFilters: SearchFilters = { 
      ...filters, 
      [key]: key === 'sortOrder' ? (value as 'asc' | 'desc') : value 
    };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const handleSortOrderChange = () => {
    const newOrder: 'asc' | 'desc' = filters.sortOrder === 'asc' ? 'desc' : 'asc';
    const newFilters: SearchFilters = { ...filters, sortOrder: newOrder };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters: SearchFilters = {
      query: '',
      category: 'Tümü',
      dateRange: 'Tümü',
      sortBy: 'date',
      sortOrder: 'desc'
    };
    setFilters(defaultFilters);
    onSearch(defaultFilters);
  };

  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      borderRadius: '12px', 
      padding: '20px',
      marginBottom: '30px',
      border: '1px solid #e9ecef'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h3 style={{ margin: 0, color: '#1f2937', fontSize: '1.2rem' }}>
          🔍 Gelişmiş Arama
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc2626',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {isExpanded ? 'Gizle' : 'Filtreler'}
        </button>
      </div>

      {/* Basic Search */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Haber ara..."
          value={filters.query}
          onChange={(e) => handleFilterChange('query', e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#dc2626';
            e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#d1d5db';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>

      {/* Advanced Filters */}
      {isExpanded && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          marginBottom: '20px'
        }}>
          {/* Category Filter */}
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: '600',
              color: '#374151'
            }}>
              Kategori
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: 'white'
              }}
            >
              <option value="Tümü">Tüm Kategoriler</option>
              {categories.map(cat => (
                <option key={cat.slug} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range Filter */}
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: '600',
              color: '#374151'
            }}>
              Tarih Aralığı
            </label>
            <select
              value={filters.dateRange}
              onChange={(e) => handleFilterChange('dateRange', e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: 'white'
              }}
            >
              <option value="Tümü">Tüm Tarihler</option>
              <option value="bugun">Bugün</option>
              <option value="son7gun">Son 7 Gün</option>
              <option value="son30gun">Son 30 Gün</option>
              <option value="buay">Bu Ay</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: '600',
              color: '#374151'
            }}>
              Sıralama
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: 'white'
              }}
            >
              <option value="date">Tarih</option>
              <option value="title">Başlık</option>
              <option value="category">Kategori</option>
              <option value="author">Yazar</option>
            </select>
          </div>

          {/* Sort Order */}
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: '600',
              color: '#374151'
            }}>
              Sıralama Yönü
            </label>
            <button
              onClick={handleSortOrderChange}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{filters.sortOrder === 'desc' ? 'Azalan' : 'Artan'}</span>
              <span>{filters.sortOrder === 'desc' ? '↓' : '↑'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div style={{ 
        display: 'flex', 
        gap: '10px',
        justifyContent: 'flex-end'
      }}>
        <button
          onClick={clearFilters}
          style={{
            padding: '8px 16px',
            backgroundColor: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Temizle
        </button>
        <button
          onClick={() => onSearch(filters)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#059669',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Ara
        </button>
      </div>

      {/* Active Filters Display */}
      {(filters.category !== 'Tümü' || filters.dateRange !== 'Tümü' || filters.sortBy !== 'date') && (
        <div style={{ 
          marginTop: '15px',
          padding: '10px 15px',
          backgroundColor: '#f0f9ff',
          borderRadius: '6px',
          border: '1px solid #0ea5e9'
        }}>
          <div style={{ 
            fontSize: '14px', 
            color: '#0c4a6e',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            Aktif Filtreler:
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {filters.category !== 'Tümü' && (
              <span style={{
                padding: '4px 8px',
                backgroundColor: '#dc2626',
                color: 'white',
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                Kategori: {filters.category}
              </span>
            )}
            {filters.dateRange !== 'Tümü' && (
              <span style={{
                padding: '4px 8px',
                backgroundColor: '#059669',
                color: 'white',
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                Tarih: {filters.dateRange}
              </span>
            )}
            {filters.sortBy !== 'date' && (
              <span style={{
                padding: '4px 8px',
                backgroundColor: '#7c3aed',
                color: 'white',
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                Sıralama: {filters.sortBy}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 