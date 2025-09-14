"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LivePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

        {/* Canlı Yayın Başlığı */}
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
            📺 Canlı Yayın
          </h1>
          <p style={{ 
            fontSize: 18, 
            color: '#666',
            margin: 0
          }}>
            Kanal 34 Canlı Haber Yayını
          </p>
        </div>

        {/* Canlı Yayın Durumu */}
        <div style={{ 
          background: isLive ? '#e8f5e8' : '#fff3cd',
          border: `2px solid ${isLive ? '#4caf50' : '#ffc107'}`,
          borderRadius: 12,
          padding: 24,
          marginBottom: 32,
          textAlign: 'center'
        }}>
          <div style={{ 
            fontSize: 24, 
            marginBottom: 8,
            color: isLive ? '#2e7d32' : '#856404'
          }}>
            {isLive ? '🔴 CANLI YAYIN' : '⏸️ YAYIN DURDU'}
          </div>
          <div style={{ 
            fontSize: 16,
            color: isLive ? '#2e7d32' : '#856404',
            marginBottom: 16
          }}>
            {isLive ? 'Şu anda canlı yayındayız' : 'Yayın geçici olarak durduruldu'}
          </div>
          <div style={{ 
            fontSize: 14,
            color: '#666'
          }}>
            Son güncelleme: {currentTime.toLocaleTimeString('tr-TR')}
          </div>
        </div>

        {/* Video Player Simülasyonu */}
        <div style={{ 
          background: '#000',
          borderRadius: 12,
          padding: '56.25% 0 0 0',
          position: 'relative',
          marginBottom: 32,
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 24,
            background: 'linear-gradient(45deg, #e53935, #c62828)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📺</div>
              <div>Canlı Yayın Simülasyonu</div>
              <div style={{ fontSize: 14, marginTop: 8, opacity: 0.8 }}>
                Gerçek video player burada olacak
              </div>
            </div>
          </div>
        </div>

        {/* Canlı Haberler */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ 
            fontSize: 24, 
            fontWeight: 600,
            margin: '0 0 16px 0',
            color: '#333'
          }}>
            🔴 Canlı Haberler
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20
          }}>
            {[
              {
                title: 'İstanbul\'da Trafik Yoğunluğu',
                time: '14:30',
                status: 'live'
              },
              {
                title: 'Borsa Canlı Takip',
                time: '14:25',
                status: 'live'
              },
              {
                title: 'Hava Durumu Güncellemesi',
                time: '14:20',
                status: 'live'
              },
              {
                title: 'Spor Haberleri',
                time: '14:15',
                status: 'live'
              }
            ].map((item, index) => (
              <div key={index} style={{
                background: '#f8f9fa',
                border: '1px solid #eee',
                borderRadius: 8,
                padding: 16,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  background: '#e53935',
                  color: '#fff',
                  fontSize: 10,
                  padding: '2px 6px',
                  borderRadius: 4,
                  fontWeight: 600
                }}>
                  CANLI
                </div>
                <h3 style={{
                  fontSize: 16,
                  fontWeight: 600,
                  margin: '0 0 8px 0',
                  color: '#333'
                }}>
                  {item.title}
                </h3>
                <div style={{
                  fontSize: 14,
                  color: '#666'
                }}>
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* İstatistikler */}
        <div style={{ 
          background: '#f8f9fa',
          borderRadius: 12,
          padding: 24,
          marginBottom: 32
        }}>
          <h3 style={{ 
            fontSize: 20, 
            fontWeight: 600,
            margin: '0 0 16px 0',
            color: '#333'
          }}>
            📊 Canlı İstatistikler
          </h3>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16
          }}>
            {[
              { label: 'İzleyici Sayısı', value: '1,234', icon: '👥' },
              { label: 'Yayın Süresi', value: '2:45:30', icon: '⏱️' },
              { label: 'Canlı Haber', value: '12', icon: '📰' },
              { label: 'Yorum Sayısı', value: '567', icon: '💬' }
            ].map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: 16,
                background: '#fff',
                borderRadius: 8,
                border: '1px solid #eee'
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{stat.icon}</div>
                <div style={{ 
                  fontSize: 18, 
                  fontWeight: 600,
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
        </div>

        {/* Sosyal Medya Entegrasyonu */}
        <div style={{ 
          background: '#e3f2fd',
          borderRadius: 12,
          padding: 24,
          border: '1px solid #2196f3'
        }}>
          <h3 style={{ 
            fontSize: 20, 
            fontWeight: 600,
            margin: '0 0 16px 0',
            color: '#1976d2'
          }}>
            📱 Sosyal Medya
          </h3>
          <p style={{ 
            fontSize: 16,
            color: '#1976d2',
            margin: '0 0 16px 0'
          }}>
            Canlı yayınımızı sosyal medya hesaplarımızdan da takip edebilirsiniz.
          </p>
          <div style={{ 
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap'
          }}>
            {[
              { name: 'Twitter', icon: '🐦', color: '#1da1f2' },
              { name: 'Facebook', icon: '📘', color: '#1877f2' },
              { name: 'Instagram', icon: '📷', color: '#e4405f' },
              { name: 'YouTube', icon: '📺', color: '#ff0000' }
            ].map((social, index) => (
              <button key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '12px 16px',
                border: 'none',
                borderRadius: 8,
                background: social.color,
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <span>{social.icon}</span>
                {social.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 