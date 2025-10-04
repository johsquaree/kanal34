/**
 * NewsCard Component
 * 
 * A reusable component that displays individual news articles in a card format.
 * Features:
 * - Responsive card design with hover effects
 * - News image, title, summary, and metadata
 * - Category and date display
 * - Link to full news article
 * - Smooth animations and transitions
 * 
 * @param id - Unique identifier for the news article
 * @param title - News article title
 * @param summary - Brief summary of the news
 * @param image - URL of the news image
 * @param category - News category slug
 * @param date - Publication date
 * @param categoryName - Display name of the category
 * 
 * @author Kanal 34 Development Team
 * @version 1.0.0
 */

"use client";

import Link from 'next/link';
import { useState } from 'react';

interface NewsCardProps {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  date: string;
  categoryName: string;
}

export default function NewsCard({ id, title, summary, image, date, categoryName }: NewsCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <div style={{ 
      border: '1px solid #eee', 
      borderRadius: 16, 
      background: '#fafafa', 
      overflow: 'hidden', 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: 420,
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      boxShadow: isHovered ? '0 8px 25px rgba(0,0,0,0.1)' : 'none'
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        style={{ 
          width: '100%', 
          height: 180, 
          objectFit: 'cover' 
        }} 
      />
      <div style={{ 
        padding: 24, 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: 8 
        }}>
          <span style={{ 
            fontSize: 14, 
            color: '#888' 
          }}>
            {date}
          </span>
          <span style={{ 
            fontSize: 13, 
            color: '#222', 
            border: '1px solid #bbb', 
            borderRadius: 12, 
            padding: '2px 12px', 
            fontWeight: 500 
          }}>
            {categoryName}
          </span>
        </div>
        <h2 style={{ 
          fontSize: 22, 
          fontWeight: 700, 
          margin: '8px 0 12px 0', 
          letterSpacing: 0.2,
          lineHeight: 1.3
        }}>
          {title}
        </h2>
        <div style={{ 
          color: '#444', 
          fontSize: 15, 
          marginBottom: 16, 
          flex: 1,
          lineHeight: 1.5
        }}>
          {summary}
        </div>
        <Link 
          href={`/news/${id}`} 
          style={{ 
            color: isLinkHovered ? '#e53935' : '#222', 
            fontWeight: 600, 
            fontSize: 15, 
            textDecoration: 'underline', 
            alignSelf: 'flex-start', 
            marginTop: 'auto',
            transition: 'color 0.2s'
          }}
          onMouseEnter={() => setIsLinkHovered(true)}
          onMouseLeave={() => setIsLinkHovered(false)}
        >
          Devamını Oku
        </Link>
      </div>
    </div>
  );
}
