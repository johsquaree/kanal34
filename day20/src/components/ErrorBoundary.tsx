"use client";

import { Component, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: '#fef2f2'
        }}>
          {/* Error Icon */}
          <div style={{ 
            fontSize: '6rem', 
            marginBottom: '20px',
            color: '#dc2626'
          }}>
            ⚠️
          </div>

          {/* Error Title */}
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            margin: '0 0 15px 0',
            color: '#1f2937',
            textAlign: 'center'
          }}>
            Bir Hata Oluştu
          </h1>

          {/* Error Message */}
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#6b7280', 
            margin: '0 0 30px 0',
            textAlign: 'center',
            maxWidth: '500px',
            lineHeight: '1.6'
          }}>
            Sayfa yüklenirken beklenmeyen bir hata oluştu. 
            Lütfen sayfayı yenilemeyi deneyin veya ana sayfaya dönün.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <div style={{ 
              marginBottom: '30px',
              padding: '15px',
              backgroundColor: '#fee2e2',
              borderRadius: '8px',
              border: '1px solid #fecaca',
              maxWidth: '600px',
              width: '100%'
            }}>
              <h4 style={{ 
                margin: '0 0 10px 0',
                color: '#991b1b',
                fontSize: '1rem'
              }}>
                Hata Detayları (Geliştirme Modu):
              </h4>
              <pre style={{ 
                margin: 0,
                fontSize: '0.8rem',
                color: '#7f1d1d',
                overflow: 'auto',
                whiteSpace: 'pre-wrap'
              }}>
                {this.state.error.toString()}
              </pre>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '30px'
          }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '12px 24px',
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b91c1c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#dc2626';
              }}
            >
              🔄 Sayfayı Yenile
            </button>

            <Link 
              href="/"
              style={{
                padding: '12px 24px',
                backgroundColor: '#059669',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#047857';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#059669';
              }}
            >
              🏠 Ana Sayfaya Dön
            </Link>
          </div>

          {/* Help Section */}
          <div style={{ 
            padding: '20px',
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            border: '1px solid #0ea5e9',
            maxWidth: '500px',
            textAlign: 'center'
          }}>
            <h4 style={{ 
              margin: '0 0 10px 0',
              color: '#0c4a6e',
              fontSize: '1.1rem'
            }}>
              🔧 Sorun Devam Ediyor mu?
            </h4>
            <p style={{ 
              margin: '0 0 15px 0',
              color: '#0c4a6e',
              fontSize: '0.9rem'
            }}>
              Sorun devam ediyorsa, tarayıcınızın önbelleğini temizlemeyi deneyin.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => {
                  localStorage.clear();
                  sessionStorage.clear();
                  window.location.reload();
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#0ea5e9',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                🗑️ Önbelleği Temizle
              </button>
              <button
                onClick={() => {
                  if (navigator.serviceWorker) {
                    navigator.serviceWorker.getRegistrations().then(registrations => {
                      registrations.forEach(registration => registration.unregister());
                    });
                  }
                  window.location.reload();
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                🔧 Service Worker&apos;ı Temizle
              </button>
            </div>
          </div>

          {/* Footer Info */}
          <div style={{ 
            marginTop: '30px',
            textAlign: 'center',
            color: '#9ca3af',
            fontSize: '0.9rem'
          }}>
            <p style={{ margin: '0 0 10px 0' }}>
              Kanal 34 Haber Portalı
            </p>
            <p style={{ margin: 0 }}>
              © 2025 Tüm hakları saklıdır
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 