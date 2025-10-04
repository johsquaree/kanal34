import { notFound } from 'next/navigation';
import Link from 'next/link';

const mockNews = [
  {
    id: '1',
    title: 'İstanbul\'da Kültür ve Turizm Haberciliği İçin Yeni Adım',
    summary: 'Kültür ve Turizm Bakanlığı, Basın Elçileri Projesi\'ni başlattı. Proje detayları ve hedefleri açıklandı.',
    content: 'Kültür ve Turizm Bakanlığı, Telif Hakları Genel Müdürlüğü tarafından desteklenen, İnternet Medya ve Bilişim Federasyonu tarafından yürütülen Basın Elçileri Projesi başladı. Proje kapsamında medya mensuplarına çeşitli eğitimler verilecek. Bu proje, kültür ve turizm alanında haberciliğin geliştirilmesi ve daha kaliteli içerik üretilmesi amacıyla hayata geçirildi. Proje kapsamında katılımcılara teorik ve pratik eğitimler verilecek.',
    image: '/logo.png',
    date: '19 Şubat 2025',
    category: 'Kültür',
    author: 'Kanal 34 Haber Merkezi',
    readTime: '3 dk'
  },
  {
    id: '2',
    title: 'Türk Dünyası Belgesel Film Festivali Başvuruları Başladı',
    summary: 'Türk Dünyası Gazeteciler Federasyonu öncülüğünde düzenlenen festival için başvurular açıldı.',
    content: 'Türk Dünyası Gazeteciler Federasyonu öncülüğünde devlet kuruluşları, meslek örgütleri, üniversitelerin destekleri ve basın kuruluşlarının katkılarıyla festival başvuruları başladı. Festival, Türk dünyası kültürünü yansıtan belgesel filmlerin tanıtılması ve ödüllendirilmesi amacıyla düzenleniyor. Başvurular 30 Nisan 2025 tarihine kadar devam edecek.',
    image: '/logo.png',
    date: '18 Şubat 2025',
    category: 'Film',
    author: 'Kanal 34 Haber Merkezi',
    readTime: '2 dk'
  },
  {
    id: '3',
    title: 'UBK 2025 Yol Haritasını Belirledi',
    summary: 'Uluslararası Basın Konfederasyonu, 2025 yılı için yeni dönem stratejilerini açıkladı.',
    content: 'Uluslararası Basın Konfederasyonu (UBK), 2025 yılının ilk yönetim kurulu toplantısını geniş katılımla gerçekleştirdi. UBK Başkanı Şakir, yeni dönem stratejilerini açıkladı. Konfederasyon, basın özgürlüğü, gazetecilerin hakları ve medya etiği konularında çalışmalarını sürdürecek. Yeni dönemde dijital dönüşüm ve yapay zeka teknolojilerinin medya sektörüne entegrasyonu konularına odaklanılacak.',
    image: '/logo.png',
    date: '8 Şubat 2025',
    category: 'Gündem',
    author: 'Kanal 34 Haber Merkezi',
    readTime: '4 dk'
  },
  {
    id: '4',
    title: 'İstanbul\'da Trafik Yoğunluğu Artıyor',
    summary: 'Hafta sonu İstanbul\'da trafik yoğunluğu beklenenden fazla. Ulaşım alternatifleri öneriliyor.',
    content: 'İstanbul\'da hafta sonu trafik yoğunluğu artış gösteriyor. Özellikle ana arterlerde yoğunluk yaşanırken, toplu taşıma kullanımı öneriliyor. İBB, trafik yoğunluğunu azaltmak için ek seferler düzenliyor. Vatandaşların toplu taşıma kullanması ve gereksiz araç kullanımından kaçınması tavsiye ediliyor.',
    image: '/logo.png',
    date: '20 Şubat 2025',
    category: 'Gündem',
    author: 'Kanal 34 Haber Merkezi',
    readTime: '2 dk'
  },
  {
    id: '5',
    title: 'Borsa Günü Nasıl Geçiyor?',
    summary: 'BIST 100 endeksi günü pozitif kapattı. Teknoloji hisseleri öne çıktı.',
    content: 'Borsa İstanbul\'da BIST 100 endeksi günü %1.2 artışla kapattı. Teknoloji hisseleri öne çıkarken, bankacılık hisseleri de güçlü performans gösterdi. Yabancı yatırımcıların alım yapması borsayı destekledi. Uzmanlar, hafta sonuna kadar pozitif momentumun devam edebileceğini öngörüyor.',
    image: '/logo.png',
    date: '20 Şubat 2025',
    category: 'Ekonomi',
    author: 'Kanal 34 Haber Merkezi',
    readTime: '3 dk'
  }
];

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = mockNews.find(n => n.id === id);
  
  if (!news) return notFound();

  return (
    <div style={{ 
      background: '#fff', 
      minHeight: '100vh',
      fontFamily: 'Inter, Arial, sans-serif'
    }}>
      <div style={{ 
        maxWidth: 800, 
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

        {/* Haber Başlığı */}
        <h1 style={{ 
          fontSize: 32, 
          fontWeight: 700, 
          color: '#333',
          margin: '0 0 16px 0',
          lineHeight: 1.2
        }}>
          {news.title}
        </h1>

        {/* Haber Meta Bilgileri */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          marginBottom: 24,
          padding: '12px 16px',
          background: '#f8f9fa',
          borderRadius: 8,
          fontSize: 14,
          color: '#666'
        }}>
          <span>📅 {news.date}</span>
          <span>📂 {news.category}</span>
          <span>✍️ {news.author}</span>
          <span>⏱️ {news.readTime} okuma</span>
        </div>

        {/* Haber Görseli */}
        <div style={{ 
          marginBottom: 24,
          borderRadius: 12,
          overflow: 'hidden',
          background: '#f0f0f0',
          height: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={news.image} 
            alt={news.title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
        </div>

        {/* Haber Özeti */}
        <div style={{ 
          background: '#e8f5e8',
          border: '1px solid #4caf50',
          borderRadius: 8,
          padding: 16,
          marginBottom: 24
        }}>
          <h3 style={{ 
            fontSize: 18, 
            fontWeight: 600,
            margin: '0 0 8px 0',
            color: '#2e7d32'
          }}>
            📝 Haber Özeti
          </h3>
          <p style={{ 
            fontSize: 16,
            color: '#2e7d32',
            margin: 0,
            lineHeight: 1.5
          }}>
            {news.summary}
          </p>
        </div>

        {/* Haber İçeriği */}
        <div style={{ 
          fontSize: 16,
          lineHeight: 1.7,
          color: '#333',
          marginBottom: 32
        }}>
          <p style={{ margin: '0 0 16px 0' }}>
            {news.content}
          </p>
        </div>

        {/* Sosyal Medya Paylaşım */}
        <div style={{ 
          background: '#f8f9fa',
          borderRadius: 8,
          padding: 16,
          marginBottom: 32
        }}>
          <h4 style={{ 
            fontSize: 16, 
            fontWeight: 600,
            margin: '0 0 12px 0',
            color: '#333'
          }}>
            📤 Bu Haberi Paylaş
          </h4>
          <div style={{ 
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap'
          }}>
            {[
              { name: 'Twitter', icon: '🐦', color: '#1da1f2' },
              { name: 'Facebook', icon: '📘', color: '#1877f2' },
              { name: 'WhatsApp', icon: '💬', color: '#25d366' },
              { name: 'LinkedIn', icon: '💼', color: '#0077b5' }
            ].map((social, index) => (
              <button key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 12px',
                border: 'none',
                borderRadius: 6,
                background: social.color,
                color: '#fff',
                fontSize: 12,
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

        {/* İlgili Haberler */}
        <div style={{ 
          background: '#f8f9fa',
          borderRadius: 8,
          padding: 20
        }}>
          <h3 style={{ 
            fontSize: 18, 
            fontWeight: 600,
            margin: '0 0 16px 0',
            color: '#333'
          }}>
            📰 İlgili Haberler
          </h3>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 16
          }}>
            {mockNews
              .filter(item => item.id !== news.id)
              .slice(0, 3)
              .map((item, index) => (
                <Link 
                  key={index}
                  href={`/news/${item.id}`}
                  style={{
                    background: '#fff',
                    border: '1px solid #eee',
                    borderRadius: 8,
                    padding: 16,
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h4 style={{
                    fontSize: 14,
                    fontWeight: 600,
                    margin: '0 0 8px 0',
                    color: '#333',
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </h4>
                  <div style={{
                    fontSize: 12,
                    color: '#666'
                  }}>
                    {item.date} • {item.category}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 