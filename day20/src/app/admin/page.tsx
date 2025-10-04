"use client";
import { useState } from 'react';
import Link from 'next/link';
import { news, categories } from '../newsData';

export default function AdminPage() {
  const [newNews, setNewNews] = useState({
    title: '',
    summary: '',
    content: '',
    category: 'gündem',
    image: 'https://picsum.photos/400/200?random=' + Math.floor(Math.random() * 100)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simüle edilmiş form gönderimi
    setTimeout(() => {
      setSubmitMessage('Haber başarıyla eklendi!');
      setNewNews({
        title: '',
        summary: '',
        content: '',
        category: 'gündem',
        image: 'https://picsum.photos/400/200?random=' + Math.floor(Math.random() * 100)
      });
      setIsSubmitting(false);
      
      // 3 saniye sonra mesajı temizle
      setTimeout(() => setSubmitMessage(''), 3000);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setNewNews(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div style={{ 
      background: '#f8f9fa', 
      minHeight: '100vh',
      fontFamily: 'Inter, Arial, sans-serif'
    }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto',
        padding: '20px'
      }}>
        {/* Geri Dön Butonu */}
        <div style={{ marginBottom: 32 }}>
          <Link href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            color: '#666',
            textDecoration: 'none',
            fontSize: 16,
            fontWeight: 500,
            padding: '8px 16px',
            border: '1px solid #eee',
            borderRadius: 8,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f5f5f5';
            e.currentTarget.style.color = '#333';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#666';
          }}
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>

        {/* Başlık */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: 40 
        }}>
          <h1 style={{ 
            fontSize: 36, 
            fontWeight: 700, 
            color: '#333',
            margin: '0 0 8px 0'
          }}>
            🔧 Admin Paneli
          </h1>
          <p style={{ 
            fontSize: 18, 
            color: '#666',
            margin: 0
          }}>
            Kanal 34 Haber Yönetim Sistemi
          </p>
        </div>

        {/* İstatistikler */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
          marginBottom: 40
        }}>
          {[
            { label: 'Toplam Haber', value: news.length, icon: '📰', color: '#e53935' },
            { label: 'Kategori Sayısı', value: categories.length, icon: '📂', color: '#2196f3' },
            { label: 'Bugün Eklenen', value: 3, icon: '📅', color: '#4caf50' },
            { label: 'Aktif Kullanıcı', value: 12, icon: '👥', color: '#ff9800' }
          ].map((stat, index) => (
            <div key={index} style={{
              background: '#fff',
              borderRadius: 12,
              padding: 24,
              textAlign: 'center',
              border: '1px solid #eee',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <div style={{ 
                fontSize: 32, 
                marginBottom: 12,
                color: stat.color
              }}>
                {stat.icon}
              </div>
              <div style={{ 
                fontSize: 24, 
                fontWeight: 700,
                color: '#333',
                marginBottom: 4
              }}>
                {stat.value}
              </div>
              <div style={{ 
                fontSize: 14,
                color: '#666'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Form ve Liste */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'start'
        }}>
          {/* Haber Ekleme Formu */}
          <div style={{
            background: '#fff',
            borderRadius: 12,
            padding: 24,
            border: '1px solid #eee',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ 
              fontSize: 20, 
              fontWeight: 600,
              margin: '0 0 20px 0',
              color: '#333'
            }}>
              📝 Yeni Haber Ekle
            </h2>

            {submitMessage && (
              <div style={{
                background: '#e8f5e8',
                border: '1px solid #4caf50',
                borderRadius: 8,
                padding: 12,
                marginBottom: 20,
                color: '#2e7d32',
                fontSize: 14
              }}>
                ✅ {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 6,
                  color: '#333'
                }}>
                  Haber Başlığı *
                </label>
                <input
                  type="text"
                  value={newNews.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    boxSizing: 'border-box'
                  }}
                  placeholder="Haber başlığını girin..."
                />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 6,
                  color: '#333'
                }}>
                  Haber Özeti *
                </label>
                <textarea
                  value={newNews.summary}
                  onChange={(e) => handleInputChange('summary', e.target.value)}
                  required
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Haber özetini girin..."
                />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 6,
                  color: '#333'
                }}>
                  Haber İçeriği *
                </label>
                <textarea
                  value={newNews.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Haber içeriğini girin..."
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 6,
                  color: '#333'
                }}>
                  Kategori *
                </label>
                <select
                  value={newNews.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    boxSizing: 'border-box'
                  }}
                >
                  {categories.map((cat, index) => (
                    <option key={index} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? '#ccc' : '#e53935',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '14px',
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                {isSubmitting ? 'Ekleniyor...' : 'Haber Ekle'}
              </button>
            </form>
          </div>

          {/* Son Eklenen Haberler */}
          <div style={{
            background: '#fff',
            borderRadius: 12,
            padding: 24,
            border: '1px solid #eee',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ 
              fontSize: 20, 
              fontWeight: 600,
              margin: '0 0 20px 0',
              color: '#333'
            }}>
              📰 Son Eklenen Haberler
            </h2>

            <div style={{ maxHeight: 400, overflowY: 'auto' }}>
              {news.slice(0, 5).map((item, index) => (
                <div key={index} style={{
                  border: '1px solid #eee',
                  borderRadius: 8,
                  padding: 16,
                  marginBottom: 12
                }}>
                  <h4 style={{
                    fontSize: 14,
                    fontWeight: 600,
                    margin: '0 0 8px 0',
                    color: '#333',
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </h4>
                  <div style={{
                    fontSize: 12,
                    color: '#666',
                    marginBottom: 8
                  }}>
                    {item.date} • {item.category}
                  </div>
                  <p style={{
                    fontSize: 12,
                    color: '#666',
                    margin: 0,
                    lineHeight: 1.4
                  }}>
                    {item.summary.substring(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hızlı İşlemler */}
        <div style={{ 
          marginTop: 40,
          background: '#fff',
          borderRadius: 12,
          padding: 24,
          border: '1px solid #eee',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ 
            fontSize: 20, 
            fontWeight: 600,
            margin: '0 0 20px 0',
            color: '#333'
          }}>
            ⚡ Hızlı İşlemler
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16
          }}>
            {[
              { label: 'Tüm Haberleri Görüntüle', icon: '📰', color: '#e53935' },
              { label: 'Kategori Yönetimi', icon: '📂', color: '#2196f3' },
              { label: 'Kullanıcı Yönetimi', icon: '👥', color: '#4caf50' },
              { label: 'Sistem Ayarları', icon: '⚙️', color: '#ff9800' }
            ].map((action, index) => (
              <button key={index} style={{
                background: action.color,
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '16px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <span>{action.icon}</span>
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 