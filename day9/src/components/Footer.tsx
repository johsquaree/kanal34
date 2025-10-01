import React from 'react';

const Footer = () => (
  <footer style={{ 
    background: '#fff', 
    borderTop: '1px solid #eee',
    padding: '40px 20px',
    marginTop: '60px'
  }}>
    <div style={{ 
      maxWidth: 1200, 
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px'
    }}>
      <div style={{ flex: 1, minWidth: 250 }}>
        <h3 style={{ color: '#e53935', fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          İletişim
        </h3>
        <p style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>Email: info@kanal34.com</p>
        <p style={{ color: '#666', fontSize: 14 }}>Adres: İstanbul, Türkiye</p>
      </div>
      <div style={{ flex: 1, minWidth: 250 }}>
        <h3 style={{ color: '#e53935', fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          Sosyal Medya
        </h3>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="#" style={{ color: '#666', fontSize: 14, textDecoration: 'none' }}>Facebook</a>
          <a href="#" style={{ color: '#666', fontSize: 14, textDecoration: 'none' }}>Twitter</a>
          <a href="#" style={{ color: '#666', fontSize: 14, textDecoration: 'none' }}>Instagram</a>
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 250 }}>
        <h3 style={{ color: '#e53935', fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          Telif Hakları
        </h3>
        <p style={{ color: '#666', fontSize: 14 }}>© 2025 Kanal 34. Tüm hakları saklıdır.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
