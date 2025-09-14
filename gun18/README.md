# Gün 18: Loading Sayfaları ve Skeleton Components

## 📋 Günlük Hedef
Loading states ve skeleton components ekleyerek kullanıcı deneyimini iyileştirmek.

## ✅ Tamamlanan Özellikler

### 📱 Skeleton Card Bileşeni
- **Gerçekçi Tasarım**: Haber kartlarına uygun placeholder
- **Shimmer Animasyonu**: Smooth loading efekti
- **Responsive Layout**: Tüm ekran boyutlarında uyumlu
- **Detaylı Skeleton**: Resim, başlık, özet ve link alanları

### 🔄 Loading Spinner Bileşeni
- **Farklı Boyutlar**: Small, Medium, Large seçenekleri
- **Özelleştirilebilir Renk**: Dinamik renk değişimi
- **Loading Mesajı**: Opsiyonel metin gösterimi
- **Smooth Animasyon**: CSS keyframes ile dönen animasyon

### 📄 Global Loading Sayfası
- **Next.js App Router**: `loading.tsx` ile otomatik loading
- **Progress Bar**: Animasyonlu ilerleme çubuğu
- **Loading İpuçları**: Kullanıcıya rehberlik eden mesajlar
- **Branded Design**: Kanal 34 marka kimliği

### ⚡ Shimmer Animasyonları
- **CSS Keyframes**: Smooth shimmer efekti
- **Performance Optimized**: Hafif animasyonlar
- **Cross-browser**: Tüm tarayıcılarda uyumlu
- **Customizable**: Renk ve hız ayarlanabilir

## 📁 Dosya Yapısı

```
gun18/
├── src/
│   ├── app/
│   │   ├── loading.tsx            # Global loading sayfası (yeni)
│   │   ├── page.tsx               # Ana sayfa (güncellendi)
│   │   ├── newsData.ts            # Mock veri
│   │   └── layout.tsx             # Global layout
│   └── components/
│       ├── SkeletonCard.tsx       # Skeleton card bileşeni (yeni)
│       ├── LoadingSpinner.tsx     # Loading spinner bileşeni (yeni)
│       ├── ErrorBoundary.tsx      # Error boundary bileşeni
│       ├── AdvancedSearch.tsx     # Gelişmiş arama bileşeni
│       ├── NewsCard.tsx           # Haber kartı bileşeni
│       ├── SearchBar.tsx          # Arama çubuğu
│       ├── MarketDataTable.tsx    # Piyasa verileri tablosu
│       └── Footer.tsx             # Footer bileşeni
├── package.json
└── README.md
```

## 🔧 Teknik Detaylar

### Skeleton Card
- **CSS Grid**: Responsive layout için grid kullanımı
- **Shimmer Effect**: CSS keyframes ile animasyon
- **Placeholder Content**: Gerçek içeriğe uygun boyutlar
- **Accessibility**: Screen reader uyumlu tasarım

### Loading Spinner
- **CSS Border Trick**: Border ile dönen animasyon
- **Size Mapping**: Boyut seçenekleri için mapping
- **Custom Props**: Renk ve metin özelleştirme
- **Performance**: Minimal CSS animasyonu

### Global Loading
- **Next.js Convention**: `loading.tsx` dosya adı
- **Progress Animation**: CSS keyframes ile progress bar
- **Brand Integration**: Kanal 34 logosu ve renkleri
- **User Guidance**: Yardımcı mesajlar ve ipuçları

### State Management
- **useState**: Loading durumu yönetimi
- **useEffect**: Simulated loading timer
- **Conditional Rendering**: Loading/Content switching
- **Memoization**: Performance optimizasyonu

## 🚀 Kullanım

### Loading Test
1. Ana sayfadaki "Loading Test Et" butonuna tıklayın
2. 3 saniye boyunca loading state gösterilir
3. Skeleton cards ve spinner animasyonları görünür

### Skeleton Cards
- **Otomatik Gösterim**: Sayfa yüklenirken otomatik
- **Grid Layout**: 3 sütunlu responsive grid
- **Shimmer Effect**: Smooth animasyon
- **Realistic Design**: Gerçek kartlara uygun boyutlar

### Loading Spinner
- **Farklı Boyutlar**: Small (20px), Medium (40px), Large (60px)
- **Renk Özelleştirme**: `color` prop ile renk değişimi
- **Metin Gösterimi**: `text` prop ile loading mesajı
- **Responsive**: Tüm cihazlarda uyumlu

## 📊 Önceki Günler

- **Gün 1**: Next.js kurulumu ve temel yapı
- **Gün 2**: Header tasarımı (CNN tarzı)
- **Gün 3**: Ana sayfa layout (kırmızı çizgi, başlık alanı)
- **Gün 4**: Footer bileşeni
- **Gün 5**: Responsive temel yapı
- **Gün 6**: Mock veri sistemi
- **Gün 7**: Haber kartları bileşeni
- **Gün 8**: Gelişmiş kategori filtreleme sistemi
- **Gün 9**: Haber detay sayfası
- **Gün 10**: Piyasa verileri tablosu
- **Gün 11**: Canlı yayın sayfası
- **Gün 12**: Sosyal medya sayfası
- **Gün 13**: Kategori sayfaları
- **Gün 14**: Admin paneli
- **Gün 15**: Arama sonuçları sayfası
- **Gün 16**: Gelişmiş arama filtreleri ve sıralama
- **Gün 17**: 404 hata sayfası ve error handling

## 🎯 Sonraki Adımlar

**Gün 19**: Performance optimizasyonu ve lazy loading
