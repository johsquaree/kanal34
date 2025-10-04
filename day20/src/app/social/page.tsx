/**
 * Social Media Page
 * 
 * This page displays social media content with:
 * - Instagram-style post display
 * - Social media integration
 * - Post filtering options
 * - Responsive grid layout
 * 
 * @author Kanal 34 Development Team
 * @version 1.0.0
 */

"use client";

import { useState } from 'react';
import Link from 'next/link';

// Mock social media data
const socialPosts = [
  {
    id: 1,
    platform: 'instagram',
    username: 'kanal34',
    userImage: 'https://picsum.photos/40/40?random=1',
    postImage: 'https://picsum.photos/400/400?random=1',
    caption: 'Günün önemli gelişmeleri 📰 #haber #gündem #kanal34',
    likes: 1247,
    comments: 89,
    timeAgo: '2 saat önce',
    verified: true
  },
  {
    id: 2,
    platform: 'twitter',
    username: 'kanal34',
    userImage: 'https://picsum.photos/40/40?random=2',
    postImage: 'https://picsum.photos/400/300?random=2',
    caption: 'Ekonomi bülteninde bugün: Borsa yükselişte, dolar düşüşte 📈 #ekonomi #borsa',
    likes: 892,
    comments: 156,
    timeAgo: '4 saat önce',
    verified: true
  },
  {
    id: 3,
    platform: 'instagram',
    username: 'kanal34',
    userImage: 'https://picsum.photos/40/40?random=3',
    postImage: 'https://picsum.photos/400/500?random=3',
    caption: 'Teknoloji dünyasından son gelişmeler 🚀 #teknoloji #yapayzeka',
    likes: 2156,
    comments: 234,
    timeAgo: '6 saat önce',
    verified: true
  },
  {
    id: 4,
    platform: 'facebook',
    username: 'Kanal 34',
    userImage: 'https://picsum.photos/40/40?random=4',
    postImage: 'https://picsum.photos/400/250?random=4',
    caption: 'Spor haberleri: Fenerbahçe galibiyeti! ⚽ #spor #fenerbahçe',
    likes: 3456,
    comments: 445,
    timeAgo: '8 saat önce',
    verified: true
  },
  {
    id: 5,
    platform: 'instagram',
    username: 'kanal34',
    userImage: 'https://picsum.photos/40/40?random=5',
    postImage: 'https://picsum.photos/400/400?random=5',
    caption: 'Dünya gündeminden önemli gelişmeler 🌍 #dünya #gündem',
    likes: 1789,
    comments: 123,
    timeAgo: '12 saat önce',
    verified: true
  },
  {
    id: 6,
    platform: 'twitter',
    username: 'kanal34',
    userImage: 'https://picsum.photos/40/40?random=6',
    postImage: 'https://picsum.photos/400/200?random=6',
    caption: 'Hava durumu: Yarın güneşli geçecek ☀️ #hava #durumu',
    likes: 567,
    comments: 78,
    timeAgo: '1 gün önce',
    verified: true
  }
];

const platforms = [
  { id: 'all', name: 'Tümü', icon: '📱' },
  { id: 'instagram', name: 'Instagram', icon: '📷' },
  { id: 'twitter', name: 'Twitter', icon: '🐦' },
  { id: 'facebook', name: 'Facebook', icon: '📘' }
];

export default function SocialPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = socialPosts.filter(post => {
    const platformMatch = selectedPlatform === 'all' || post.platform === selectedPlatform;
    const searchMatch = searchQuery === '' || 
      post.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.username.toLowerCase().includes(searchQuery.toLowerCase());
    return platformMatch && searchMatch;
  });

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'instagram': return '#E4405F';
      case 'twitter': return '#1DA1F2';
      case 'facebook': return '#1877F2';
      default: return '#6b7280';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return '📷';
      case 'twitter': return '🐦';
      case 'facebook': return '📘';
      default: return '📱';
    }
  };

  return (
    <div style={{ 
      background: '#f8fafc', 
      minHeight: '100vh',
      fontFamily: 'Inter, Arial, sans-serif'
    }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto',
        padding: '20px'
      }}>
        {/* Back Button */}
        <div style={{ marginBottom: 32 }}>
          <Link href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            color: '#6b7280',
            textDecoration: 'none',
            fontSize: 16,
            fontWeight: 500,
            padding: '8px 16px',
            border: '1px solid #e5e7eb',
            borderRadius: 8,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f3f4f6';
            e.currentTarget.style.color = '#374151';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#6b7280';
          }}
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>

        {/* Page Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: 40 
        }}>
          <h1 style={{ 
            fontSize: 36, 
            fontWeight: 700, 
            color: '#1f2937',
            margin: '0 0 8px 0'
          }}>
            📱 Sosyal Medya
          </h1>
          <p style={{ 
            fontSize: 18, 
            color: '#6b7280',
            margin: 0
          }}>
            Kanal 34 sosyal medya hesaplarından son paylaşımlar
          </p>
        </div>

        {/* Search and Filter */}
        <div style={{ 
          background: '#fff',
          padding: 24,
          borderRadius: 12,
          marginBottom: 32,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          {/* Search Bar */}
          <div style={{ marginBottom: 20 }}>
            <input 
              type="text" 
              placeholder="Paylaşımlarda ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: 8,
                fontSize: 16,
                outline: 'none'
              }}
            />
          </div>

          {/* Platform Filter */}
          <div>
            <h3 style={{ 
              fontSize: 16, 
              fontWeight: 600,
              margin: '0 0 12px 0',
              color: '#374151'
            }}>
              Platform Filtresi
            </h3>
            <div style={{ 
              display: 'flex', 
              gap: 12, 
              flexWrap: 'wrap' 
            }}>
              {platforms.map(platform => (
                <button 
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  style={{ 
                    padding: '8px 16px', 
                    backgroundColor: selectedPlatform === platform.id ? '#dc2626' : '#f3f4f6', 
                    color: selectedPlatform === platform.id ? 'white' : '#374151', 
                    border: 'none', 
                    borderRadius: '20px', 
                    cursor: 'pointer', 
                    fontSize: '14px',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  <span>{platform.icon}</span>
                  {platform.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div style={{ 
          marginBottom: 24,
          padding: '12px 16px',
          background: '#f0f9ff',
          borderRadius: 8,
          border: '1px solid #0ea5e9',
          fontSize: 14,
          color: '#0c4a6e'
        }}>
          <strong>{filteredPosts.length}</strong> paylaşım bulundu
          {selectedPlatform !== 'all' && (
            <span style={{ marginLeft: 8 }}>
              • Platform: {platforms.find(p => p.id === selectedPlatform)?.name}
            </span>
          )}
        </div>

        {/* Social Media Posts */}
        {filteredPosts.length > 0 ? (
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 24
          }}>
            {filteredPosts.map(post => (
              <div key={post.id} style={{
                background: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
              >
                {/* Post Header */}
                <div style={{
                  padding: 16,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  borderBottom: '1px solid #f3f4f6'
                }}>
                  <img 
                    src={post.userImage} 
                    alt={post.username}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      marginBottom: 2
                    }}>
                      <span style={{
                        fontWeight: 600,
                        color: '#1f2937',
                        fontSize: 14
                      }}>
                        {post.username}
                      </span>
                      {post.verified && (
                        <span style={{ fontSize: 12 }}>✅</span>
                      )}
                      <span style={{
                        fontSize: 12,
                        color: getPlatformColor(post.platform),
                        fontWeight: 500
                      }}>
                        {getPlatformIcon(post.platform)}
                      </span>
                    </div>
                    <div style={{
                      fontSize: 12,
                      color: '#6b7280'
                    }}>
                      {post.timeAgo}
                    </div>
                  </div>
                </div>

                {/* Post Image */}
                <div style={{
                  aspectRatio: '1/1',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={post.postImage} 
                    alt={post.caption}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Post Content */}
                <div style={{ padding: 16 }}>
                  <p style={{
                    fontSize: 14,
                    color: '#374151',
                    lineHeight: 1.5,
                    margin: '0 0 12px 0'
                  }}>
                    {post.caption}
                  </p>

                  {/* Post Stats */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    paddingTop: 12,
                    borderTop: '1px solid #f3f4f6'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      fontSize: 12,
                      color: '#6b7280'
                    }}>
                      <span>❤️</span>
                      {post.likes.toLocaleString()}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      fontSize: 12,
                      color: '#6b7280'
                    }}>
                      <span>💬</span>
                      {post.comments}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      fontSize: 12,
                      color: '#6b7280'
                    }}>
                      <span>🔄</span>
                      Paylaş
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center',
            padding: '60px 20px',
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <h3 style={{ 
              fontSize: 20, 
              marginBottom: 12,
              color: '#374151'
            }}>
              Paylaşım Bulunamadı
            </h3>
            <p style={{ 
              fontSize: 16,
              color: '#6b7280',
              marginBottom: 24
            }}>
              Arama kriterlerinize uygun paylaşım bulunamadı.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedPlatform('all');
              }}
              style={{
                background: '#dc2626',
                color: '#fff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer'
              }}
            >
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
    </div>
  );
}