"use client";
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Haberlerde ara..." }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div style={{ 
      marginBottom: 24,
      display: 'flex',
      justifyContent: 'center'
    }}>
      <form onSubmit={handleSearch} style={{ 
        display: 'flex', 
        gap: 12, 
        alignItems: 'center',
        maxWidth: 500,
        width: '100%'
      }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          style={{
            flex: 1,
            padding: '12px 16px',
            border: '2px solid #eee',
            borderRadius: 8,
            fontSize: 16,
            outline: 'none',
            transition: 'border-color 0.2s',
            background: '#fff'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#e53935';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#eee';
          }}
        />
        <button
          type="submit"
          style={{
            padding: '12px 20px',
            background: '#e53935',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#d32f2f';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#e53935';
          }}
        >
          🔍 Ara
        </button>
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            style={{
              padding: '12px 16px',
              background: '#666',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#555';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#666';
            }}
          >
            ✕ Temizle
          </button>
        )}
      </form>
    </div>
  );
}
