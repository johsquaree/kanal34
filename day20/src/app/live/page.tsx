/**
 * Live Streaming Page
 * 
 * This page simulates a live streaming experience with:
 * - Video player simulation
 * - Live viewer statistics
 * - Stream information
 * - Dark theme design
 * 
 * @author Kanal 34 Development Team
 * @version 1.0.0
 */

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LivePage() {
  const [viewerCount, setViewerCount] = useState(1247);
  const [isLive] = useState(true);
  const [, setCurrentTime] = useState(new Date());

  // Simulate live viewer count changes
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 10) - 5);
      setCurrentTime(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      background: '#0a0a0a', 
      minHeight: '100vh',
      fontFamily: 'Inter, Arial, sans-serif',
      color: '#fff'
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
            color: '#fff',
            textDecoration: 'none',
            fontSize: 16,
            fontWeight: 500,
            padding: '8px 16px',
            border: '1px solid #333',
            borderRadius: 8,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#333';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#fff';
          }}
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>

        {/* Live Stream Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: 40 
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 12,
            marginBottom: 16
          }}>
            <div style={{
              width: 12,
              height: 12,
              backgroundColor: isLive ? '#ef4444' : '#6b7280',
              borderRadius: '50%',
              animation: isLive ? 'pulse 2s infinite' : 'none'
            }} />
            <h1 style={{ 
              fontSize: 36, 
              fontWeight: 700, 
              color: '#fff',
              margin: 0
            }}>
              {isLive ? '🔴 CANLI YAYIN' : '⏸️ YAYIN DURDURULDU'}
            </h1>
          </div>
          <p style={{ 
            fontSize: 18, 
            color: '#9ca3af',
            margin: 0
          }}>
            Kanal 34 Ana Haber Bülteni
          </p>
        </div>

        {/* Video Player Simulation */}
        <div style={{ 
          position: 'relative',
          background: '#000',
          borderRadius: 12,
          overflow: 'hidden',
          marginBottom: 32,
          aspectRatio: '16/9'
        }}>
          {/* Video Placeholder */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, #1f2937, #374151)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 20
          }}>
            <div style={{ fontSize: 64 }}>📺</div>
            <div style={{ 
              fontSize: 24, 
              fontWeight: 600,
              color: '#fff'
            }}>
              Canlı Yayın Simülasyonu
            </div>
            <div style={{ 
              fontSize: 16,
              color: '#9ca3af'
            }}>
              Gerçek yayın için video player entegrasyonu gerekli
            </div>
          </div>

          {/* Live Badge */}
          <div style={{
            position: 'absolute',
            top: 20,
            left: 20,
            background: '#ef4444',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: 20,
            fontSize: 14,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            <div style={{
              width: 8,
              height: 8,
              backgroundColor: '#fff',
              borderRadius: '50%',
              animation: 'pulse 1s infinite'
            }} />
            CANLI
          </div>

          {/* Viewer Count */}
          <div style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'rgba(0,0,0,0.7)',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: 20,
            fontSize: 14,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            👥 {viewerCount.toLocaleString()} izleyici
          </div>
        </div>

        {/* Stream Information */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          marginBottom: 32
        }}>
          {/* Current Program */}
          <div style={{
            background: '#1f2937',
            padding: 24,
            borderRadius: 12,
            border: '1px solid #374151'
          }}>
            <h3 style={{ 
              fontSize: 20, 
              fontWeight: 600,
              margin: '0 0 16px 0',
              color: '#fff'
            }}>
              📺 Şu An Yayında
            </h3>
            <div style={{ 
              fontSize: 18,
              fontWeight: 500,
              color: '#fff',
              marginBottom: 8
            }}>
              Ana Haber Bülteni
            </div>
            <div style={{ 
              fontSize: 14,
              color: '#9ca3af',
              marginBottom: 12
            }}>
              Güncel haberler ve gelişmeler
            </div>
            <div style={{ 
              fontSize: 12,
              color: '#6b7280'
            }}>
              Başlangıç: 19:00 | Bitiş: 20:00
            </div>
          </div>

          {/* Next Program */}
          <div style={{
            background: '#1f2937',
            padding: 24,
            borderRadius: 12,
            border: '1px solid #374151'
          }}>
            <h3 style={{ 
              fontSize: 20, 
              fontWeight: 600,
              margin: '0 0 16px 0',
              color: '#fff'
            }}>
              ⏭️ Sıradaki Program
            </h3>
            <div style={{ 
              fontSize: 18,
              fontWeight: 500,
              color: '#fff',
              marginBottom: 8
            }}>
              Spor Haberleri
            </div>
            <div style={{ 
              fontSize: 14,
              color: '#9ca3af',
              marginBottom: 12
            }}>
              Günün spor gelişmeleri
            </div>
            <div style={{ 
              fontSize: 12,
              color: '#6b7280'
            }}>
              Başlangıç: 20:00 | Bitiş: 20:30
            </div>
          </div>
        </div>

        {/* Live Chat Simulation */}
        <div style={{
          background: '#1f2937',
          padding: 24,
          borderRadius: 12,
          border: '1px solid #374151'
        }}>
          <h3 style={{ 
            fontSize: 20, 
            fontWeight: 600,
            margin: '0 0 16px 0',
            color: '#fff'
          }}>
            💬 Canlı Yorumlar
          </h3>
          <div style={{
            maxHeight: 200,
            overflowY: 'auto',
            marginBottom: 16
          }}>
            {[
              { user: 'Ahmet Y.', message: 'Harika yayın! 👏', time: '19:15' },
              { user: 'Fatma K.', message: 'Çok güzel sunum', time: '19:16' },
              { user: 'Mehmet A.', message: 'Teşekkürler Kanal 34', time: '19:17' },
              { user: 'Ayşe M.', message: 'Güncel haberler için teşekkürler', time: '19:18' },
              { user: 'Ali V.', message: 'Kaliteli içerik', time: '19:19' }
            ].map((comment, index) => (
              <div key={index} style={{
                padding: '8px 0',
                borderBottom: '1px solid #374151',
                fontSize: 14
              }}>
                <div style={{ 
                  color: '#60a5fa',
                  fontWeight: 500,
                  marginBottom: 4
                }}>
                  {comment.user} <span style={{ color: '#6b7280' }}>{comment.time}</span>
                </div>
                <div style={{ color: '#fff' }}>
                  {comment.message}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            display: 'flex',
            gap: 12
          }}>
            <input 
              type="text" 
              placeholder="Yorumunuzu yazın..."
              style={{
                flex: 1,
                padding: '12px 16px',
                background: '#374151',
                border: '1px solid #4b5563',
                borderRadius: 8,
                color: '#fff',
                fontSize: 14
              }}
            />
            <button style={{
              padding: '12px 24px',
              background: '#dc2626',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: 14
            }}>
              Gönder
            </button>
          </div>
        </div>

        {/* CSS Animations */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `
        }} />
      </div>
    </div>
  );
}