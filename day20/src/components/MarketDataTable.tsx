interface MarketDataItem {
  label: string;
  value: string;
  change: string;
}

interface MarketDataTableProps {
  data: MarketDataItem[];
}

export default function MarketDataTable({ data }: MarketDataTableProps) {
  return (
    <div style={{ 
      background: '#fff', 
      border: '2px solid #e53935', 
      borderRadius: 16, 
      padding: 24, 
      minHeight: 420, 
      boxShadow: '0 2px 16px rgba(229,57,53,0.08)' 
    }}>
      <div style={{ 
        fontWeight: 700, 
        fontSize: 20, 
        marginBottom: 16, 
        letterSpacing: 1, 
        color: '#e53935' 
      }}>
        📈 Piyasa Verileri
      </div>
      
      {/* Tablo Başlığı */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr 1fr', 
        gap: 12, 
        padding: '8px 0',
        borderBottom: '2px solid #e53935',
        fontWeight: 600,
        fontSize: 14,
        color: '#666'
      }}>
        <div>Enstrüman</div>
        <div style={{ textAlign: 'center' }}>Değer</div>
        <div style={{ textAlign: 'right' }}>Değişim</div>
      </div>
      
      {/* Tablo İçeriği */}
      <div style={{ marginTop: 8 }}>
        {data.map((item) => (
          <div key={item.label} style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 1fr', 
            gap: 12, 
            padding: '10px 0',
            borderBottom: '1px solid #eee',
            fontSize: 14,
            alignItems: 'center',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f8f9fa';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
          >
            <div style={{ fontWeight: 600, color: '#222' }}>{item.label}</div>
            <div style={{ fontWeight: 600, color: '#222', textAlign: 'center' }}>{item.value}</div>
            <div style={{ 
              fontSize: 13, 
              color: item.change.startsWith('+') ? '#1aaf5d' : '#d32f2f', 
              fontWeight: 700, 
              textAlign: 'right'
            }}>
              {item.change}
            </div>
          </div>
        ))}
      </div>
      
      {/* Alt Bilgi */}
      <div style={{ 
        marginTop: 16,
        padding: '12px 16px',
        background: '#f8f9fa',
        borderRadius: 8,
        fontSize: 12,
        color: '#666',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: 4 }}>
          <span style={{ color: '#1aaf5d' }}>●</span> Pozitif
          <span style={{ margin: '0 16px' }}>|</span>
          <span style={{ color: '#d32f2f' }}>●</span> Negatif
        </div>
        <div>Son güncelleme: {new Date().toLocaleTimeString('tr-TR')}</div>
      </div>
    </div>
  );
} 