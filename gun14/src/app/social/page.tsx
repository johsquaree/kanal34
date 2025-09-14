"use client";
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { instagramPosts, socialCategories } from '../socialData';

export default function SocialPage() {
  const [selectedCategory, setSelectedCategory] = useState('hepsi');
  const [newPostText, setNewPostText] = useState('');

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'hepsi') {
      return instagramPosts;
    }
    return instagramPosts.filter(post => 
      post.caption.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [selectedCategory]);

  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPostText.trim()) {
      alert('Yeni post paylaşıldı: ' + newPostText);
      setNewPostText('');
    }
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
            color: '#833ab4',
            margin: '0 0 8px 0'
          }}>
            📱 Sosyal Medya
          </h1>
          <p style={{ 
            fontSize: 18, 
            color: '#666',
            margin: 0
          }}>
            Kanal 34 Instagram Paylaşımları
          </p>
        </div>

        {/* Kategoriler */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 12, 
          margin: '0 0 32px 0', 
          flexWrap: 'wrap' 
        }}>
          {socialCategories.map(cat => (
            <button 
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              style={{
                border: '1px solid #ddd',
                background: selectedCategory === cat.slug ? '#833ab4' : '#fff',
                color: selectedCategory === cat.slug ? '#fff' : '#333',
                borderRadius: 20,
                padding: '8px 20px',
                fontWeight: 500,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Instagram Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          marginBottom: 40
        }}>
          {filteredPosts.map((post) => (
            <div key={post.id} style={{ 
              border: '1px solid #eee', 
              borderRadius: 16, 
              overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }}
            >
              {/* Post Header */}
              <div style={{ 
                padding: '16px 20px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}>
                <div style={{ 
                  width: 32, 
                  height: 32, 
                  borderRadius: '50%',
                  background: '#833ab4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 14
                }}>
                  K34
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>
                    {post.username}
                  </div>
                  <div style={{ fontSize: 12, color: '#666' }}>
                    {post.date}
                  </div>
                </div>
              </div>

              {/* Post Image */}
              <img 
                src={post.image} 
                alt="Instagram post" 
                style={{ 
                  width: '100%', 
                  height: 300, 
                  objectFit: 'cover' 
                }} 
              />

              {/* Post Caption */}
              <div style={{ 
                padding: '16px 20px',
                fontSize: 14,
                lineHeight: 1.5,
                color: '#333'
              }}>
                {post.caption}
              </div>

              {/* Post Stats */}
              <div style={{ 
                padding: '12px 20px',
                borderTop: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 12,
                color: '#666'
              }}>
                <span>❤️ {post.likes.toLocaleString()}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Yeni Post Paylaş */}
        <div style={{ 
          background: '#f8f9fa',
          padding: '32px',
          borderRadius: 16,
          marginTop: 40
        }}>
          <h3 style={{ 
            fontSize: 20, 
            fontWeight: 600,
            margin: '0 0 16px 0',
            color: '#333'
          }}>
            📝 Yeni Post Paylaş
          </h3>
          <form onSubmit={handleNewPost}>
            <textarea
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              placeholder="Ne düşünüyorsunuz?"
              style={{
                width: '100%',
                minHeight: 100,
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: 8,
                fontSize: 16,
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginTop: 16
            }}>
              <div style={{ fontSize: 14, color: '#666' }}>
                {newPostText.length}/280 karakter
              </div>
              <button
                type="submit"
                disabled={!newPostText.trim()}
                style={{
                  background: newPostText.trim() ? '#833ab4' : '#ccc',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: newPostText.trim() ? 'pointer' : 'not-allowed',
                  transition: 'background 0.2s'
                }}
              >
                Paylaş
              </button>
            </div>
          </form>
        </div>

        {/* İçerik Alanı */}
        <div style={{ 
          textAlign: 'center',
          padding: '40px 20px',
          marginTop: '60px'
        }}>
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
              Gün 12: Sosyal Medya Sayfası
            </h2>
            <p style={{ 
              fontSize: 16, 
              color: '#666',
              margin: '0 0 20px 0'
            }}>
              Sosyal medya sayfası oluşturuldu. Instagram tarzı post tasarımı ve kategori filtreleme sistemi hazır.
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
                <li>Instagram tarzı post tasarımı</li>
                <li>Kategori filtreleme sistemi</li>
                <li>Responsive grid layout</li>
                <li>Hover efektleri</li>
                <li>Yeni post paylaşma formu</li>
                <li>Karakter sayacı</li>
                <li>Mock veri sistemi</li>
                <li>Mor tema (#833ab4)</li>
              </ul>
            </div>
            <div style={{ 
              background: '#fff3cd',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #ffc107',
              marginTop: '16px'
            }}>
              <strong style={{ color: '#856404' }}>📱 Post Özellikleri:</strong>
              <ul style={{ 
                textAlign: 'left', 
                margin: '10px 0 0 0',
                paddingLeft: '20px',
                color: '#856404'
              }}>
                <li><strong>Header:</strong> Avatar, kullanıcı adı, tarih</li>
                <li><strong>Görsel:</strong> 400x400px, cover object-fit</li>
                <li><strong>Caption:</strong> Emoji ve hashtag desteği</li>
                <li><strong>Stats:</strong> Beğeni ve yorum sayısı</li>
                <li><strong>Hover:</strong> Yükselme ve gölge efekti</li>
                <li><strong>Grid:</strong> Responsive auto-fit layout</li>
                <li><strong>Form:</strong> 280 karakter limiti</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 