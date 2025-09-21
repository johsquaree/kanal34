import { notFound } from 'next/navigation';

const mockNews = [
  {
    id: '1',
    title: 'İstanbul’da Kültür ve Turizm Haberciliği İçin Yeni Adım',
    summary: 'Kültür ve Turizm Bakanlığı, Basın Elçileri Projesi’ni başlattı. Proje detayları ve hedefleri açıklandı.',
    content: 'Kültür ve Turizm Bakanlığı, Telif Hakları Genel Müdürlüğü tarafından desteklenen, İnternet Medya ve Bilişim Federasyonu tarafından yürütülen Basın Elçileri Projesi başladı. Proje kapsamında medya mensuplarına çeşitli eğitimler verilecek.',
    image: '/logo.png',
    date: '19 Şubat 2025',
    category: 'Kültür',
  },
  {
    id: '2',
    title: 'Türk Dünyası Belgesel Film Festivali Başvuruları Başladı',
    summary: 'Türk Dünyası Gazeteciler Federasyonu öncülüğünde düzenlenen festival için başvurular açıldı.',
    content: 'Türk Dünyası Gazeteciler Federasyonu öncülüğünde devlet kuruluşları, meslek örgütleri, üniversitelerin destekleri ve basın kuruluşlarının katkılarıyla festival başvuruları başladı.',
    image: '/logo.png',
    date: '18 Şubat 2025',
    category: 'Film',
  },
  {
    id: '3',
    title: 'UBK 2025 Yol Haritasını Belirledi',
    summary: 'Uluslararası Basın Konfederasyonu, 2025 yılı için yeni dönem stratejilerini açıkladı.',
    content: 'Uluslararası Basın Konfederasyonu (UBK), 2025 yılının ilk yönetim kurulu toplantısını geniş katılımla gerçekleştirdi. UBK Başkanı Şakir, yeni dönem stratejilerini açıkladı.',
    image: '/logo.png',
    date: '8 Şubat 2025',
    category: 'Gündem',
  },
];

export default function NewsDetail({ params }: { params: { id: string } }) {
  const news = mockNews.find(n => n.id === params.id);
  if (!news) return notFound();
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 24 }}>
      <h1 style={{ color: '#d32f2f', marginBottom: 16 }}>{news.title}</h1>
      <img src={news.image} alt={news.title} style={{ width: 400, height: 220, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
      <div style={{ color: '#888', fontSize: 14, marginBottom: 8 }}>{news.date} | {news.category}</div>
      <div style={{ color: '#333', fontSize: 16, maxWidth: 600, textAlign: 'left' }}>{news.content}</div>
    </main>
  );
}
