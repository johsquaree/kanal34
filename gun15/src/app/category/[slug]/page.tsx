"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { news, categories } from '../../newsData';
import NewsCard from '../../../components/NewsCard';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const category = categories.find(c => c.slug === slug);
  const categoryNews = news.filter(n => n.category === slug);
  
  if (!category) {
    return (
      <div style={{ 
        background: '#fff', 
        minHeight: '100vh',
        fontFamily: 'Inter, Arial, sans-serif',
        padding: '20px'
      }}>
        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto',
          textAlign: 'center',
          padding: '60px 20px'
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>❌</div>
          <h1 style={{ fontSize: 24, marginBottom: 16, color: '#333' }}>
            Kategori bulunamadı
          </h1>
          <p style={{ fontSize: 16, color: '#666', marginBottom: 32 }}>
            Aradığınız kategori mevcut değil.
          </p>
          <Link href="/" style={{
            background: '#e53935',
            color: '#fff',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 16
          }}>
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

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

        {/* Kategori Başlığı */}
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
            {category.name}
          </h1>
          <p style={{ 
            fontSize: 18, 
            color: '#666',
            margin: '0 0 16px 0'
          }}>
            {categoryNews.length} haber bulundu
          </p>
          <div style={{ 
            width: 60, 
            height: 4, 
            background: '#e53935', 
            margin: '0 auto',
            borderRadius: 2
          }}></div>
        </div>

        {/* Kategori Açıklaması */}
        <div style={{ 
          background: '#f8f9fa',
          padding: '24px',
          borderRadius: 12,
          marginBottom: 40,
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: 20, 
            fontWeight: 600,
            margin: '0 0 12px 0',
            color: '#333'
          }}>
            {category.name} Kategorisi
          </h2>
          <p style={{ 
            fontSize: 16, 
            color: '#666',
            margin: 0,
            lineHeight: 1.6
          }}>
            {category.name} kategorisindeki en güncel haberleri burada bulabilirsiniz. 
            Tüm haberlerimiz güvenilir kaynaklardan alınmıştır ve sürekli güncellenmektedir.
          </p>
        </div>

        {/* Haber Grid */}
        {categoryNews.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 32,
            marginBottom: 40
          }}>
            {categoryNews.map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                summary={item.summary}
                image={item.image}
                category={item.category}
                date={item.date}
                categoryName={categories.find(c => c.slug === item.category)?.name || ''}
              />
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            color: '#666'
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📰</div>
            <h3 style={{ fontSize: 20, marginBottom: 8, color: '#333' }}>
              Henüz haber yok
            </h3>
            <p style={{ fontSize: 16 }}>
              Bu kategoride henüz haber bulunmuyor. Yakında yeni haberler eklenecek.
            </p>
          </div>
        )}

        {/* Diğer Kategoriler */}
        <div style={{ 
          background: '#f8f9fa',
          padding: '32px',
          borderRadius: 16,
          marginTop: 40
        }}>
          <h3 style={{ 
            fontSize: 20, 
            fontWeight: 600,
            margin: '0 0 24px 0',
            color: '#333',
            textAlign: 'center'
          }}>
            Diğer Kategoriler
          </h3>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 12, 
            flexWrap: 'wrap' 
          }}>
            {categories.filter(c => c.slug !== slug).map(cat => (
              <Link 
                key={cat.slug}
                href={`/category/${cat.slug}`}
                style={{
                  border: '1px solid #ddd',
                  background: '#fff',
                  color: '#333',
                  borderRadius: 20,
                  padding: '8px 20px',
                  fontWeight: 500,
                  fontSize: 14,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e53935';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#e53935';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.borderColor = '#ddd';
                }}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* İçerik Alanı */}
        <div style={{ 
          textAlign: 'center',
          padding: '40px 20px',
          marginTop: '60px'
        }}>
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
              Gün 13: Kategori Sayfaları
            </h2>
            <p style={{ 
              fontSize: 16, 
              color: '#666',
              margin: '0 0 20px 0'
            }}>
              Kategori sayfaları oluşturuldu. Dinamik routing ile her kategori için ayrı sayfa.
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
                <li>Dinamik kategori sayfaları</li>
                <li>Kategori başlığı ve açıklaması</li>
                <li>Haber sayısı gösterimi</li>
                <li>Responsive grid layout</li>
                <li>Diğer kategoriler linki</li>
                <li>404 hata sayfası</li>
                <li>Kategori filtreleme</li>
                <li>SEO dostu URL yapısı</li>
              </ul>
            </div>
            <div style={{ 
              background: '#fff3cd',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #ffc107',
              marginTop: '16px'
            }}>
              <strong style={{ color: '#856404' }}>📂 Sayfa Özellikleri:</strong>
              <ul style={{ 
                textAlign: 'left', 
                margin: '10px 0 0 0',
                paddingLeft: '20px',
                color: '#856404'
              }}>
                <li><strong>URL Yapısı:</strong> /category/[slug]</li>
                <li><strong>Başlık:</strong> Kategori adı ve haber sayısı</li>
                <li><strong>Açıklama:</strong> Kategori hakkında bilgi</li>
                <li><strong>Grid:</strong> Auto-fit responsive layout</li>
                <li><strong>Navigation:</strong> Diğer kategoriler linki</li>
                <li><strong>404:</strong> Kategori bulunamadı sayfası</li>
                <li><strong>SEO:</strong> Meta tag'lar ve URL yapısı</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 