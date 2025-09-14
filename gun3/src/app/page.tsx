"use client";
import { useState } from 'react';
import Link from 'next/link';
import { news } from './newsData';

const categories = [
  { slug: 'hepsi', name: 'Tümü' },
  { slug: 'ekonomi', name: 'Ekonomi' },
  { slug: 'teknoloji', name: 'Teknoloji' },
  { slug: 'gundem', name: 'Gündem' },
  { slug: 'dunya', name: 'Dünya' },
];

const marketData = [
  { label: 'BIST 100', value: '9.250,00', change: '+0.85%' },
  { label: 'Dolar', value: '32,50 TL', change: '+0.12%' },
  { label: 'Euro', value: '34,80 TL', change: '-0.05%' },
  { label: 'Çeyrek Altın', value: '3.950 TL', change: '+0.20%' },
  { label: 'ASELS', value: '78,10 TL', change: '+1.10%' },
  { label: 'THYAO', value: '295,00 TL', change: '-0.40%' },
  { label: 'GARAN', value: '52,30 TL', change: '+0.60%' },
  { label: 'KRDMD', value: '32,80 TL', change: '+0.30%' },
];

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
          <button style={{
            border: '1px solid #bbb',
            background: '#222',
            color: '#fff',
            borderRadius: 20,
            padding: '6px 20px',
            fontWeight: 500,
            fontSize: 15,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}>
            Tümü
          </button>
          <button style={{
            border: '1px solid #bbb',
            background: '#fff',
            color: '#222',
            borderRadius: 20,
            padding: '6px 20px',
            fontWeight: 500,
            fontSize: 15,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}>
            Ekonomi
          </button>
          <button style={{
            border: '1px solid #bbb',
            background: '#fff',
            color: '#222',
            borderRadius: 20,
            padding: '6px 20px',
            fontWeight: 500,
            fontSize: 15,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}>
            Teknoloji
          </button>
          <button style={{
            border: '1px solid #bbb',
            background: '#fff',
            color: '#222',
            borderRadius: 20,
            padding: '6px 20px',
            fontWeight: 500,
            fontSize: 15,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}>
            Gündem
          </button>
          <button style={{
            border: '1px solid #bbb',
            background: '#fff',
            color: '#222',
            borderRadius: 20,
            padding: '6px 20px',
            fontWeight: 500,
            fontSize: 15,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}>
            Dünya
          </button>
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
              Gün 3: Ana Sayfa Layout
            </h2>
            <p style={{ 
              fontSize: 16, 
              color: '#666',
              margin: '0 0 20px 0'
            }}>
              Ana sayfa layout'u eklendi. Kırmızı çizgi, kategori butonları ve temel sayfa yapısı hazır.
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
                <li>Kırmızı alt çizgi (header'ın altında)</li>
                <li>Kategori butonları (Tümü, Ekonomi, Teknoloji, Gündem, Dünya)</li>
                <li>Responsive buton tasarımı</li>
                <li>Temel sayfa yapısı</li>
                <li>%10'luk yan boşluklar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
