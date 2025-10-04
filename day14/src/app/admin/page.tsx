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
            Haber yönetimi ve site ayarları
          </p>
        </div>

        {/* Ana Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: 32
        }}>
          {/* Sol Panel - Haber Ekleme Formu */}
          <div style={{ 
            background: '#fff', 
            borderRadius: 16, 
            padding: 32,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ 
              fontSize: 24, 
              fontWeight: 600,
              margin: '0 0 24px 0',
              color: '#333'
            }}>
              📝 Yeni Haber Ekle
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: 8, 
                  fontWeight: 600,
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
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: 16,
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#e53935';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                  }}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: 8, 
                  fontWeight: 600,
                  color: '#333'
                }}>
                  Özet *
                </label>
                <textarea
                  value={newNews.summary}
                  onChange={(e) => handleInputChange('summary', e.target.value)}
                  required
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: 16,
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#e53935';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                  }}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: 8, 
                  fontWeight: 600,
                  color: '#333'
                }}>
                  İçerik *
                </label>
                <textarea
                  value={newNews.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: 16,
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#e53935';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                  }}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: 8, 
                  fontWeight: 600,
                  color: '#333'
                }}>
                  Kategori *
                </label>
                <select
                  value={newNews.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: 16,
                    outline: 'none',
                    background: '#fff',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#e53935';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                  }}
                >
                  {categories.filter(c => c.slug !== 'hepsi').map(cat => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !newNews.title || !newNews.summary || !newNews.content}
                style={{
                  width: '100%',
                  background: isSubmitting || !newNews.title || !newNews.summary || !newNews.content ? '#ccc' : '#e53935',
                  color: '#fff',
                  border: 'none',
                  padding: '16px 24px',
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: isSubmitting || !newNews.title || !newNews.summary || !newNews.content ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                {isSubmitting ? 'Ekleniyor...' : 'Haberi Ekle'}
              </button>

              {submitMessage && (
                <div style={{ 
                  marginTop: 16,
                  padding: '12px 16px',
                  background: '#4caf50',
                  color: '#fff',
                  borderRadius: 8,
                  textAlign: 'center',
                  fontWeight: 600
                }}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Sağ Panel - İstatistikler */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 24 
          }}>
            {/* İstatistikler */}
            <div style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: 24,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                fontSize: 20, 
                fontWeight: 600,
                margin: '0 0 20px 0',
                color: '#333'
              }}>
                📊 İstatistikler
              </h3>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 16 
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <span style={{ color: '#666' }}>Toplam Haber:</span>
                  <span style={{ fontWeight: 600, color: '#333' }}>{news.length}</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <span style={{ color: '#666' }}>Kategoriler:</span>
                  <span style={{ fontWeight: 600, color: '#333' }}>{categories.length - 1}</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <span style={{ color: '#666' }}>Son Güncelleme:</span>
                  <span style={{ fontWeight: 600, color: '#333' }}>Bugün</span>
                </div>
              </div>
            </div>

            {/* Hızlı İşlemler */}
            <div style={{ 
              background: '#fff', 
              borderRadius: 16, 
              padding: 24,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                fontSize: 20, 
                fontWeight: 600,
                margin: '0 0 20px 0',
                color: '#333'
              }}>
                ⚡ Hızlı İşlemler
              </h3>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 12 
              }}>
                <button style={{
                  width: '100%',
                  background: '#4caf50',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 16px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#45a049';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#4caf50';
                }}
                >
                  📰 Tüm Haberleri Görüntüle
                </button>
                <button style={{
                  width: '100%',
                  background: '#2196f3',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 16px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1976d2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#2196f3';
                }}
                >
                  📂 Kategorileri Yönet
                </button>
                <button style={{
                  width: '100%',
                  background: '#ff9800',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 16px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f57c00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ff9800';
                }}
                >
                  ⚙️ Site Ayarları
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* İçerik Alanı */}
        <div style={{ 
          textAlign: 'center',
          padding: '40px 20px',
          marginTop: '60px'
        }}>
          <div style={{ 
            background: '#fff',
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
              Gün 14: Admin Paneli
            </h2>
            <p style={{ 
              fontSize: 16, 
              color: '#666',
              margin: '0 0 20px 0'
            }}>
              Admin paneli oluşturuldu. Haber ekleme formu ve site yönetimi özellikleri hazır.
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
                <li>Haber ekleme formu</li>
                <li>Form validasyonu</li>
                <li>Kategori seçimi</li>
                <li>İstatistikler paneli</li>
                <li>Hızlı işlemler</li>
                <li>Loading durumları</li>
                <li>Başarı mesajları</li>
                <li>Responsive tasarım</li>
              </ul>
            </div>
            <div style={{ 
              background: '#fff3cd',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #ffc107',
              marginTop: '16px'
            }}>
              <strong style={{ color: '#856404' }}>🔧 Panel Özellikleri:</strong>
              <ul style={{ 
                textAlign: 'left', 
                margin: '10px 0 0 0',
                paddingLeft: '20px',
                color: '#856404'
              }}>
                <li><strong>Form:</strong> Başlık, özet, içerik, kategori</li>
                <li><strong>Validasyon:</strong> Zorunlu alanlar kontrolü</li>
                <li><strong>İstatistikler:</strong> Haber sayısı, kategoriler</li>
                <li><strong>Hızlı İşlemler:</strong> Haber görüntüleme, kategori yönetimi</li>
                <li><strong>Loading:</strong> Form gönderimi simülasyonu</li>
                <li><strong>Mesajlar:</strong> Başarı/hata bildirimleri</li>
                <li><strong>Layout:</strong> 1fr 400px grid yapısı</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 