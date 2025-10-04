import React from 'react';

const categories = [
  { slug: 'kultur', name: 'Kültür' },
  { slug: 'film', name: 'Film' },
  { slug: 'gundem', name: 'Gündem' },
];

const Header = () => (
  <header style={{ background: 'linear-gradient(90deg, #d32f2f 0%, #000 100%)', color: '#fff', padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
    <img src="/logo.png" alt="Kanal 34 Logo" style={{ width: 80, height: 80, marginBottom: 8 }} />
    <nav>
      <a href="/" style={{ color: '#fff', margin: '0 16px', textDecoration: 'none', fontWeight: 600 }}>Ana Sayfa</a>
      {categories.map(cat => (
        <a key={cat.slug} href={`/category/${cat.slug}`} style={{ color: '#fff', margin: '0 8px', textDecoration: 'none', fontWeight: 600 }}>{cat.name}</a>
      ))}
      <a href="/hakkinda" style={{ color: '#fff', margin: '0 16px', textDecoration: 'none', fontWeight: 600 }}>Hakkında</a>
    </nav>
  </header>
);

export default Header;
