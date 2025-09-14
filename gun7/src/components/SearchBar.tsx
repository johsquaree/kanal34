import React from 'react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <div style={{ width: '100%', maxWidth: 400, margin: '16px auto' }}>
    <input
      type="text"
      placeholder="Haberlerde ara..."
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        width: '100%',
        padding: '10px 14px',
        borderRadius: 8,
        border: '1px solid #ccc',
        fontSize: 16,
        outline: 'none',
        boxSizing: 'border-box',
      }}
    />
  </div>
);

export default SearchBar;
