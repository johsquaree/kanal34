import React from 'react';
import Link from 'next/link';

type NewsCardProps = {
  id?: string;
  title: string;
  summary: string;
  image: string;
  date: string;
};

const cardStyle: React.CSSProperties = {
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 2px 12px rgba(211,47,47,0.10)',
  margin: '16px 0',
  overflow: 'hidden',
  border: '1.5px solid #eee',
  maxWidth: 420,
  cursor: 'pointer',
  transition: 'box-shadow 0.3s, transform 0.3s',
  width: '100%',
};

const NewsCard: React.FC<NewsCardProps> = ({ id, title, summary, image, date }) => {
  const [hover, setHover] = React.useState(false);
  const style = {
    ...cardStyle,
    boxShadow: hover ? '0 8px 32px rgba(211,47,47,0.18)' : cardStyle.boxShadow,
    transform: hover ? 'translateY(-6px) scale(1.03)' : 'none',
    borderColor: hover ? '#d32f2f' : '#eee',
  };
  const cardContent = (
    <div
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      tabIndex={0}
      aria-label={title}
      role="article"
    >
      <img src={image} alt={`Haber görseli: ${title}`} style={{ width: '100%', height: 180, objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />
      <div style={{ padding: 20 }}>
        <h2 style={{ color: '#d32f2f', fontSize: 22, margin: '0 0 10px 0', letterSpacing: 0.2 }}>{title}</h2>
        <div style={{ color: '#555', fontSize: 15, marginBottom: 10 }}>{summary}</div>
        <div style={{ color: '#888', fontSize: 13 }}>{date}</div>
      </div>
    </div>
  );
  return id ? (
    <Link href={`/news/${id}`} style={{ textDecoration: 'none', width: '100%', display: 'block' }} tabIndex={0} aria-label={`${title} detay sayfasına git`}>
      {cardContent}
    </Link>
  ) : cardContent;
};

export default NewsCard;
