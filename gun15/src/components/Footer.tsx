import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      borderTop: '1px solid #eee', 
      marginTop: 48, 
      padding: '32px 0', 
      background: '#fff' 
    }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto', 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        color: '#888', 
        fontSize: 15 
      }}>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontWeight: 700, color: '#222' }}>Kanal 34 © 2025</div>
          <div>info@kanal34.com</div>
          <div>İstanbul, Türkiye</div>
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontWeight: 700, color: '#222' }}>Bağlantılar</div>
          <div><a href="#" style={{ color: '#888', textDecoration: 'none' }}>Facebook</a></div>
          <div><a href="#" style={{ color: '#888', textDecoration: 'none' }}>Twitter</a></div>
          <div><a href="#" style={{ color: '#888', textDecoration: 'none' }}>Instagram</a></div>
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontWeight: 700, color: '#222' }}>Telif</div>
          <div>© 2025 Kanal 34. Tüm hakları saklıdır.</div>
        </div>
      </div>
    </footer>
  );
}
