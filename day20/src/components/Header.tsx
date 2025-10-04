import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { slug: 'kultur', name: 'Kültür' },
  { slug: 'film', name: 'Film' },
  { slug: 'gundem', name: 'Gündem' },
];

const Header = () => (
  <header style={{ background: 'linear-gradient(90deg, #d32f2f 0%, #000 100%)', color: '#fff', padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
    <Image src="/logo.png" alt="Kanal 34 Logo" width={80} height={80} style={{ marginBottom: 8 }} />
    <nav>
      <Link href="/" style={{ color: '#fff', margin: '0 16px', textDecoration: 'none', fontWeight: 600 }}>Ana Sayfa</Link>
      {categories.map(cat => (
        <Link key={cat.slug} href={`/category/${cat.slug}`} style={{ color: '#fff', margin: '0 8px', textDecoration: 'none', fontWeight: 600 }}>{cat.name}</Link>
      ))}
      <a href="/hakkinda" style={{ color: '#fff', margin: '0 16px', textDecoration: 'none', fontWeight: 600 }}>Hakkında</a>
    </nav>
  </header>
);

export default Header;
