import NewsCard from '../../components/NewsCard';
import LoadingOrError from '../../components/LoadingOrError';
import { notFound } from 'next/navigation';

const categories = [
  { slug: 'kultur', name: 'Kültür' },
  { slug: 'film', name: 'Film' },
  { slug: 'gundem', name: 'Gündem' },
];

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  let news = [];
  let error = null;
  let loading = false;
  try {
    const res = await fetch('http://localhost:3000/news.json', { cache: 'no-store' });
    news = await res.json();
  } catch (e) {
    error = 'Veri yüklenirken hata oluştu.';
  }
  const category = categories.find(c => c.slug === params.slug);
  if (!category) return notFound();
  loading = !news.length && !error;
  const filteredNews = news.filter((n: any) => n.category === params.slug);
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 24 }}>
      <h1 style={{ color: '#d32f2f', marginBottom: 24 }}>{category.name} Haberleri</h1>
      <LoadingOrError loading={loading} error={error} />
      {!loading && !error && filteredNews.length === 0 && <div>Bu kategoride henüz haber yok.</div>}
      {!loading && !error && filteredNews.map((news: any, idx: number) => (
        <NewsCard key={idx} {...news} />
      ))}
    </main>
  );
}
