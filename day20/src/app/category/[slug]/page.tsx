import Link from 'next/link';
import { news, categories } from '../../newsData';
import NewsCard from '../../../components/NewsCard';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
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
            📂 {category.name} Haberleri
          </h1>
          <p style={{ 
            fontSize: 18, 
            color: '#666',
            margin: 0
          }}>
            {category.name} kategorisindeki tüm haberler
          </p>
        </div>

        {/* Kategori İstatistikleri */}
        <div style={{ 
          background: '#f8f9fa',
          borderRadius: 12,
          padding: 20,
          marginBottom: 32,
          textAlign: 'center'
        }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 16
          }}>
            <div>
              <div style={{ 
                fontSize: 24, 
                fontWeight: 700,
                color: '#e53935',
                marginBottom: 4
              }}>
                {categoryNews.length}
              </div>
              <div style={{ 
                fontSize: 14,
                color: '#666'
              }}>
                Toplam Haber
              </div>
            </div>
            <div>
              <div style={{ 
                fontSize: 24, 
                fontWeight: 700,
                color: '#e53935',
                marginBottom: 4
              }}>
                {categoryNews.length > 0 ? Math.max(...categoryNews.map(n => new Date(n.date).getTime())) : 0}
              </div>
              <div style={{ 
                fontSize: 14,
                color: '#666'
              }}>
                Son Haber Tarihi
              </div>
            </div>
            <div>
              <div style={{ 
                fontSize: 24, 
                fontWeight: 700,
                color: '#e53935',
                marginBottom: 4
              }}>
                {category.slug}
              </div>
              <div style={{ 
                fontSize: 14,
                color: '#666'
              }}>
                Kategori Kodu
              </div>
            </div>
          </div>
        </div>

        {/* Haberler */}
        {categoryNews.length > 0 ? (
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24
          }}>
            {categoryNews.map((item, index) => (
              <NewsCard
                key={index}
                id={item.id}
                title={item.title}
                summary={item.summary}
                image={item.image}
                category={item.category}
                date={item.date}
                categoryName={category.name}
              />
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center',
            padding: '60px 20px',
            background: '#f8f9fa',
            borderRadius: 12
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
            <h3 style={{ 
              fontSize: 20, 
              marginBottom: 12,
              color: '#333'
            }}>
              Henüz Haber Yok
            </h3>
            <p style={{ 
              fontSize: 16,
              color: '#666',
              marginBottom: 24
            }}>
              Bu kategoride henüz haber bulunmuyor.
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
        )}

        {/* Diğer Kategoriler */}
        <div style={{ 
          marginTop: 40,
          background: '#e8f5e8',
          borderRadius: 12,
          padding: 24,
          border: '1px solid #4caf50'
        }}>
          <h3 style={{ 
            fontSize: 20, 
            fontWeight: 600,
            margin: '0 0 16px 0',
            color: '#2e7d32'
          }}>
            📂 Diğer Kategoriler
          </h3>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 12
          }}>
            {categories
              .filter(c => c.slug !== slug)
              .map((cat, index) => (
                <Link 
                  key={index}
                  href={`/category/${cat.slug}`}
                  style={{
                    background: '#fff',
                    border: '1px solid #4caf50',
                    borderRadius: 8,
                    padding: 16,
                    textDecoration: 'none',
                    color: '#2e7d32',
                    textAlign: 'center',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#4caf50';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.color = '#2e7d32';
                  }}
                >
                  <div style={{ 
                    fontSize: 24, 
                    marginBottom: 8 
                  }}>
                    📂
                  </div>
                  <div style={{ 
                    fontSize: 16,
                    fontWeight: 600
                  }}>
                    {cat.name}
                  </div>
                  <div style={{ 
                    fontSize: 12,
                    marginTop: 4,
                    opacity: 0.8
                  }}>
                    {news.filter(n => n.category === cat.slug).length} haber
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 