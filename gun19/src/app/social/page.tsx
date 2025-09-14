"use client";

import { useState } from 'react';
import Link from 'next/link';

const socialData = [
  {
    platform: 'Twitter',
    icon: '🐦',
    color: '#1da1f2',
    followers: '45.2K',
    posts: '1,234',
    engagement: '8.5%',
    recentPosts: [
      {
        content: 'İstanbul\'da trafik yoğunluğu artıyor. Detaylar için takipte kalın! #İstanbul #Trafik',
        likes: 234,
        retweets: 45,
        time: '2 saat önce'
      },
      {
        content: 'Borsa günü nasıl geçiyor? 📈 #Borsa #Ekonomi',
        likes: 189,
        retweets: 32,
        time: '4 saat önce'
      }
    ]
  },
  {
    platform: 'Facebook',
    icon: '📘',
    color: '#1877f2',
    followers: '23.8K',
    posts: '856',
    engagement: '12.3%',
    recentPosts: [
      {
        content: 'Günün en önemli haberleri burada! Hangi haberi en çok beğendiniz?',
        likes: 456,
        shares: 78,
        time: '1 saat önce'
      },
      {
        content: 'Hava durumu güncellemesi: Hafta sonu yağışlı hava bekleniyor ☔',
        likes: 234,
        shares: 45,
        time: '3 saat önce'
      }
    ]
  },
  {
    platform: 'Instagram',
    icon: '📷',
    color: '#e4405f',
    followers: '67.5K',
    posts: '2,456',
    engagement: '15.8%',
    recentPosts: [
      {
        content: 'İstanbul\'un en güzel manzaraları 📸 #İstanbul #Manzara',
        likes: 1234,
        comments: 89,
        time: '30 dakika önce'
      },
      {
        content: 'Spor haberleri canlı yayında! 🏃‍♂️ #Spor #Canlı',
        likes: 567,
        comments: 34,
        time: '2 saat önce'
      }
    ]
  },
  {
    platform: 'YouTube',
    icon: '📺',
    color: '#ff0000',
    followers: '12.3K',
    posts: '456',
    engagement: '6.2%',
    recentPosts: [
      {
        content: 'Günün özeti: En önemli gelişmeler',
        views: '15.2K',
        likes: 234,
        time: '1 gün önce'
      },
      {
        content: 'Canlı yayın: Haber merkezi',
        views: '8.7K',
        likes: 156,
        time: '2 gün önce'
      }
    ]
  }
];

export default function SocialPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const filteredData = selectedPlatform === 'all' 
    ? socialData 
    : socialData.filter(item => item.platform === selectedPlatform);

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
            color: '#e53935',
            margin: '0 0 8px 0'
          }}>
            📱 Sosyal Medya
          </h1>
          <p style={{ 
            fontSize: 18, 
            color: '#666',
            margin: 0
          }}>
            Kanal 34 Sosyal Medya Hesapları
          </p>
        </div>

        {/* Platform Filtreleme */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 12, 
          margin: '0 0 32px 0', 
          flexWrap: 'wrap' 
        }}>
          <button 
            onClick={() => setSelectedPlatform('all')}
            style={{
              border: '1px solid #bbb',
              background: selectedPlatform === 'all' ? '#222' : '#fff',
              color: selectedPlatform === 'all' ? '#fff' : '#222',
              borderRadius: 20,
              padding: '8px 20px',
              fontWeight: 500,
              fontSize: 14,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Tümü
          </button>
          {socialData.map(platform => (
            <button 
              key={platform.platform}
              onClick={() => setSelectedPlatform(platform.platform)}
              style={{
                border: '1px solid #bbb',
                background: selectedPlatform === platform.platform ? '#222' : '#fff',
                color: selectedPlatform === platform.platform ? '#fff' : '#222',
                borderRadius: 20,
                padding: '8px 20px',
                fontWeight: 500,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {platform.icon} {platform.platform}
            </button>
          ))}
        </div>

        {/* Platform Kartları */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24
        }}>
          {filteredData.map((platform, index) => (
            <div key={index} style={{
              background: '#f8f9fa',
              border: '1px solid #eee',
              borderRadius: 12,
              padding: 24,
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
            }}
            >
              {/* Platform Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 16
              }}>
                <div style={{
                  fontSize: 32,
                  color: platform.color
                }}>
                  {platform.icon}
                </div>
                <div>
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 600,
                    margin: '0 0 4px 0',
                    color: '#333'
                  }}>
                    {platform.platform}
                  </h3>
                  <div style={{
                    fontSize: 14,
                    color: '#666'
                  }}>
                    {platform.followers} takipçi
                  </div>
                </div>
              </div>

              {/* İstatistikler */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginBottom: 20
              }}>
                <div style={{
                  textAlign: 'center',
                  padding: 12,
                  background: '#fff',
                  borderRadius: 8,
                  border: '1px solid #eee'
                }}>
                  <div style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: 4
                  }}>
                    {platform.posts}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: '#666'
                  }}>
                    Gönderi
                  </div>
                </div>
                <div style={{
                  textAlign: 'center',
                  padding: 12,
                  background: '#fff',
                  borderRadius: 8,
                  border: '1px solid #eee'
                }}>
                  <div style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: 4
                  }}>
                    {platform.engagement}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: '#666'
                  }}>
                    Etkileşim
                  </div>
                </div>
              </div>

              {/* Son Gönderiler */}
              <div>
                <h4 style={{
                  fontSize: 16,
                  fontWeight: 600,
                  margin: '0 0 12px 0',
                  color: '#333'
                }}>
                  Son Gönderiler
                </h4>
                {platform.recentPosts.map((post, postIndex) => (
                  <div key={postIndex} style={{
                    background: '#fff',
                    border: '1px solid #eee',
                    borderRadius: 8,
                    padding: 12,
                    marginBottom: 8
                  }}>
                    <p style={{
                      fontSize: 14,
                      color: '#333',
                      margin: '0 0 8px 0',
                      lineHeight: 1.4
                    }}>
                      {post.content}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: 12,
                      color: '#666'
                    }}>
                      <div style={{ display: 'flex', gap: 12 }}>
                        <span>❤️ {post.likes}</span>
                        {platform.platform === 'Twitter' && <span>🔄 {post.retweets}</span>}
                        {platform.platform === 'Facebook' && <span>📤 {post.shares}</span>}
                        {platform.platform === 'Instagram' && <span>💬 {post.comments}</span>}
                        {platform.platform === 'YouTube' && <span>👁️ {post.views}</span>}
                      </div>
                      <span>{post.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Takip Et Butonu */}
              <button style={{
                width: '100%',
                background: platform.color,
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '12px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: 16,
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {platform.platform}'da Takip Et
              </button>
            </div>
          ))}
        </div>

        {/* Genel İstatistikler */}
        <div style={{ 
          background: '#e8f5e8',
          borderRadius: 12,
          padding: 24,
          marginTop: 32,
          border: '1px solid #4caf50'
        }}>
          <h3 style={{ 
            fontSize: 20, 
            fontWeight: 600,
            margin: '0 0 16px 0',
            color: '#2e7d32'
          }}>
            📊 Genel Sosyal Medya İstatistikleri
          </h3>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16
          }}>
            {[
              { label: 'Toplam Takipçi', value: '148.8K', icon: '👥' },
              { label: 'Toplam Gönderi', value: '5,002', icon: '📝' },
              { label: 'Ortalama Etkileşim', value: '10.7%', icon: '📈' },
              { label: 'Günlük Ziyaret', value: '45.2K', icon: '🌐' }
            ].map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: 16,
                background: '#fff',
                borderRadius: 8,
                border: '1px solid #4caf50'
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{stat.icon}</div>
                <div style={{ 
                  fontSize: 18, 
                  fontWeight: 600,
                  color: '#2e7d32',
                  marginBottom: 4
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: 14,
                  color: '#2e7d32'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 