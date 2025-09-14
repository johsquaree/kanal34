"use client";
import { news, categories, marketData } from './newsData';

export default function Home() {
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

        {/* Kategoriler */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 12, 
          margin: '0 0 24px 0', 
          flexWrap: 'wrap' 
        }}>
          {categories.map(cat => (
            <button key={cat.slug} style={{
              border: '1px solid #bbb',
              background: cat.slug === 'hepsi' ? '#222' : '#fff',
              color: cat.slug === 'hepsi' ? '#fff' : '#222',
              borderRadius: 20,
              padding: '6px 20px',
              fontWeight: 500,
              fontSize: 15,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              {cat.name}
            </button>
          ))}
        </div>

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
              Gün 6: Mock Veri Sistemi
            </h2>
            <p style={{ 
              fontSize: 16, 
              color: '#666',
              margin: '0 0 20px 0'
            }}>
              Mock veri sistemi oluşturuldu. Haberler, kategoriler ve piyasa verileri için örnek veriler hazırlandı.
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
                <li>6 adet örnek haber oluşturuldu</li>
                <li>5 kategori tanımlandı (Tümü, Ekonomi, Teknoloji, Gündem, Dünya)</li>
                <li>8 adet piyasa verisi eklendi (BIST 100, Dolar, Euro, vb.)</li>
                <li>Haber detayları ve içerikleri hazırlandı</li>
                <li>Picsum.photos ile güvenilir görsel URL'leri</li>
                <li>TypeScript tip güvenliği sağlandı</li>
              </ul>
            </div>
            <div style={{ 
              background: '#fff3cd',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #ffc107',
              marginTop: '16px'
            }}>
              <strong style={{ color: '#856404' }}>📊 Mock Veri İstatistikleri:</strong>
              <ul style={{ 
                textAlign: 'left', 
                margin: '10px 0 0 0',
                paddingLeft: '20px',
                color: '#856404'
              }}>
                <li><strong>Haber Sayısı:</strong> 6 adet</li>
                <li><strong>Kategori Sayısı:</strong> 5 adet</li>
                <li><strong>Piyasa Verisi:</strong> 8 adet</li>
                <li><strong>Görsel Kaynağı:</strong> Picsum.photos</li>
                <li><strong>Veri Formatı:</strong> TypeScript interface</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
