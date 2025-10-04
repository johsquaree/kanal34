/**
 * Mock Data for Kanal 34 News Portal
 * 
 * This file contains sample data used throughout the application:
 * - News articles with full content and metadata
 * - Category definitions for filtering
 * - Market data for financial information
 * 
 * In a production environment, this data would come from:
 * - News API endpoints
 * - Database queries
 * - External financial data services
 * 
 * @author Kanal 34 Development Team
 * @version 1.0.0
 */

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export const news = [
  {
    id: 1,
    title: "Yapay zeka ve ileri teknolojiler şehir altyapılarına entegre edilecek",
    summary: "Türkiye'de akıllı şehir projeleri kapsamında yapay zeka teknolojileri şehir altyapılarına entegre edilmeye başlandı. Bu proje ile trafik yönetimi, enerji tasarrufu ve güvenlik sistemleri optimize edilecek.",
    content: "Türkiye'de akıllı şehir projeleri kapsamında yapay zeka teknolojileri şehir altyapılarına entegre edilmeye başlandı. Bu proje ile trafik yönetimi, enerji tasarrufu ve güvenlik sistemleri optimize edilecek. Proje kapsamında İstanbul, Ankara ve İzmir başta olmak üzere büyük şehirlerde pilot uygulamalar başlatıldı. Yapay zeka destekli sistemler sayesinde trafik sıkışıklığı %30 azalırken, enerji tüketimi %25 düşüş gösterdi. Uzmanlar, bu teknolojilerin gelecek 5 yıl içinde tüm büyük şehirlerde yaygınlaşacağını öngörüyor.",
    image: "https://picsum.photos/400/200?random=1",
    category: "teknoloji",
    date: "2025-01-15",
    author: "Teknoloji Editörü"
  },
  {
    id: 2,
    title: "Japonya'nın alüminyum stokları düştü",
    summary: "Japonya'da alüminyum stokları son 3 ayda %15 düşüş gösterdi. Uzmanlar bu durumun küresel alüminyum fiyatlarını etkileyebileceğini belirtiyor.",
    content: "Japonya'da alüminyum stokları son 3 ayda %15 düşüş gösterdi. Uzmanlar bu durumun küresel alüminyum fiyatlarını etkileyebileceğini belirtiyor. Tokyo Metal Exchange'de alüminyum fiyatları %8 artış gösterirken, küresel piyasalarda da yükseliş trendi başladı. Japonya Metal Endüstrisi Birliği'nden yapılan açıklamada, stok düşüşünün temel nedeninin artan otomotiv ve elektronik sektörü talebi olduğu belirtildi. Özellikle elektrikli araç üretimindeki artış, alüminyum talebini artırdı. Uzmanlar, bu trendin devam etmesi durumunda fiyatların daha da yükselebileceğini öngörüyor.",
    image: "https://picsum.photos/400/200?random=2",
    category: "ekonomi",
    date: "2025-01-14",
    author: "Ekonomi Editörü"
  },
  {
    id: 3,
    title: "Fatih Sultan Mehmet Köprüsü skolyoza dikkat çekmek için yeşil renkle aydınlatıldı",
    summary: "Skolyoz farkındalık ayı kapsamında Fatih Sultan Mehmet Köprüsü yeşil renkle aydınlatıldı. Bu etkinlik ile toplumda skolyoz hastalığı hakkında farkındalık yaratılması hedefleniyor.",
    content: "Skolyoz farkındalık ayı kapsamında Fatih Sultan Mehmet Köprüsü yeşil renkle aydınlatıldı. Bu etkinlik ile toplumda skolyoz hastalığı hakkında farkındalık yaratılması hedefleniyor. Türkiye Skolyoz Derneği tarafından organize edilen etkinlikte, köprü 1 hafta boyunca yeşil renkle aydınlatılacak. Dernek başkanı Dr. Ahmet Yılmaz, 'Skolyoz erken teşhis edildiğinde tedavi edilebilir bir hastalıktır. Bu etkinlik ile aileleri çocuklarının omurga sağlığı konusunda daha dikkatli olmaya davet ediyoruz' dedi. Etkinlik kapsamında sosyal medyada da #SkolyozFarkındalık hashtag'i ile bilgilendirme kampanyası başlatıldı.",
    image: "https://picsum.photos/400/200?random=3",
    category: "gündem",
    date: "2025-01-13",
    author: "Sağlık Editörü"
  },
  {
    id: 4,
    title: "Türkiye'de yenilenebilir enerji yatırımları hızlanıyor",
    summary: "Türkiye'de yenilenebilir enerji yatırımları son dönemde hız kazandı. Güneş ve rüzgar enerjisi projeleri ile enerji bağımsızlığı hedefine yaklaşılıyor.",
    content: "Türkiye'de yenilenebilir enerji yatırımları son dönemde hız kazandı. Güneş ve rüzgar enerjisi projeleri ile enerji bağımsızlığı hedefine yaklaşılıyor. Enerji ve Tabii Kaynaklar Bakanlığı'ndan yapılan açıklamada, 2024 yılında yenilenebilir enerji kapasitesinin %25 artış gösterdiği belirtildi. Özellikle güneş enerjisi santrallerinin sayısı 1000'i geçerken, rüzgar enerjisi kapasitesi de 10 GW'a ulaştı. Uzmanlar, bu yatırımların hem çevre dostu hem de ekonomik açıdan faydalı olduğunu vurguluyor. 2030 yılına kadar yenilenebilir enerji oranının %50'ye çıkarılması hedefleniyor.",
    image: "https://picsum.photos/400/200?random=4",
    category: "ekonomi",
    date: "2025-01-12",
    author: "Enerji Editörü"
  },
  {
    id: 5,
    title: "İstanbul'da yeni metro hattı açıldı",
    summary: "İstanbul'da yeni metro hattı hizmete girdi. Bu hat ile şehrin doğu-batı aksındaki ulaşım kolaylaşacak.",
    content: "İstanbul'da yeni metro hattı hizmete girdi. Bu hat ile şehrin doğu-batı aksındaki ulaşım kolaylaşacak. 15 km uzunluğundaki metro hattı, 12 istasyon ile hizmet verecek. Hat, günde yaklaşık 200 bin yolcu taşıyacak kapasitede. İstanbul Büyükşehir Belediye Başkanı, 'Bu metro hattı ile İstanbul'un trafik sorununa önemli bir çözüm getiriyoruz. Vatandaşlarımız artık daha hızlı ve konforlu bir şekilde ulaşım sağlayabilecek' dedi. Metro hattının açılış töreninde çok sayıda vatandaş hazır bulundu. Hat, 06:00-24:00 saatleri arasında hizmet verecek.",
    image: "https://picsum.photos/400/200?random=5",
    category: "gündem",
    date: "2025-01-11",
    author: "Şehir Editörü"
  },
  {
    id: 6,
    title: "Dünya Sağlık Örgütü yeni grip aşısı önerilerini yayınladı",
    summary: "Dünya Sağlık Örgütü (DSÖ), 2025 yılı için grip aşısı önerilerini yayınladı. Bu yıl için geliştirilen aşılar, yeni grip türlerine karşı koruma sağlayacak.",
    content: "Dünya Sağlık Örgütü (DSÖ), 2025 yılı için grip aşısı önerilerini yayınladı. Bu yıl için geliştirilen aşılar, yeni grip türlerine karşı koruma sağlayacak. DSÖ'nün önerdiği aşılar, H1N1, H3N2 ve B tipi grip virüslerine karşı etkili olacak şekilde geliştirildi. Uzmanlar, özellikle yaşlılar ve kronik hastalığı olan kişilerin grip aşısı yaptırmasını öneriyor. Türkiye'de de grip aşısı kampanyası başlatıldı. Sağlık Bakanlığı, risk gruplarındaki vatandaşların ücretsiz aşı yaptırabileceğini duyurdu. Aşı kampanyası kapsamında eczanelerde ve sağlık kuruluşlarında aşı hizmeti verilecek.",
    image: "https://picsum.photos/400/200?random=6",
    category: "dünya",
    date: "2025-01-10",
    author: "Sağlık Editörü"
  }
];

export const categories = [
  { slug: 'hepsi', name: 'Tümü' },
  { slug: 'ekonomi', name: 'Ekonomi' },
  { slug: 'teknoloji', name: 'Teknoloji' },
  { slug: 'gündem', name: 'Gündem' },
  { slug: 'dünya', name: 'Dünya' }
];

export const marketData = [
  { label: 'BIST 100', value: '9,245.67', change: '+2.34%' },
  { label: 'Dolar', value: '31.45', change: '-0.12%' },
  { label: 'Euro', value: '34.12', change: '+0.08%' },
  { label: 'Çeyrek Altın', value: '8,450', change: '+1.25%' },
  { label: 'THYAO', value: '45.80', change: '+3.45%' },
  { label: 'GARAN', value: '28.90', change: '+1.67%' },
  { label: 'AKBNK', value: '32.15', change: '-0.89%' },
  { label: 'SASA', value: '156.70', change: '+5.23%' }
];


