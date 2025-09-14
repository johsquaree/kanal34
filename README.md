# 📰 Kanal 34 News Portal

A modern, responsive news portal built with Next.js 14, TypeScript, and React. This project demonstrates a complete news website with advanced features like search, filtering, live streaming simulation, and market data integration.

## 🌟 Features

### 📱 Core Features
- **Modern News Portal**: Clean, CNN-style design with responsive layout
- **News Categories**: Filter news by categories (Economy, Technology, World, etc.)
- **Advanced Search**: Real-time search with filters and sorting options
- **News Details**: Individual news article pages with full content
- **Market Data**: Live financial data table with stock prices and currency rates
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 🔍 Search & Filtering
- **Real-time Search**: Search through news titles, summaries, and content
- **Category Filtering**: Filter news by specific categories
- **Date Range Filtering**: Filter by today, last 7 days, last 30 days, this month
- **Advanced Sorting**: Sort by title, category, author, or date
- **Search Results**: Clear display of search results with count

### 📊 Additional Features
- **Performance Monitoring**: Built-in performance tracking
- **Lazy Loading**: Images and components load only when needed
- **Error Handling**: Proper error boundaries and 404 pages
- **Loading States**: Skeleton loaders and loading spinners
- **Social Sharing**: Share buttons for social media platforms

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: CSS-in-JS (Inline styles)
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: Next.js App Router with dynamic routes

## 📁 Project Structure

```
kanal34/
├── gun20/                    # Latest version (Day 20)
│   ├── src/
│   │   ├── app/             # Next.js App Router pages
│   │   │   ├── page.tsx     # Home page
│   │   │   ├── layout.tsx   # Root layout
│   │   │   ├── newsData.ts  # Mock news data
│   │   │   ├── news/[id]/   # Dynamic news detail pages
│   │   │   ├── category/[slug]/ # Dynamic category pages
│   │   │   ├── search/      # Search results page
│   │   │   ├── live/        # Live streaming page
│   │   │   ├── social/      # Social media page
│   │   │   └── admin/       # Admin panel
│   │   └── components/      # Reusable React components
│   │       ├── NewsCard.tsx
│   │       ├── SearchBar.tsx
│   │       ├── MarketDataTable.tsx
│   │       ├── Footer.tsx
│   │       └── ... (12 more components)
│   ├── public/              # Static assets
│   ├── package.json
│   └── README.md
├── gun1/ to gun19/          # Daily development versions
└── PROJE_OZETI.md          # Project summary (Turkish)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kanal34.git
   cd kanal34
   ```

2. **Navigate to the latest version**
   ```bash
   cd gun20
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📱 Pages Overview

### 🏠 Home Page (`/`)
- News grid with latest articles
- Category filtering buttons
- Advanced search functionality
- Market data sidebar
- Performance monitoring

### 📰 News Detail (`/news/[id]`)
- Full news article content
- Author and publication date
- Social sharing buttons
- Related news suggestions
- Back to home navigation

### 📂 Category Pages (`/category/[slug]`)
- News filtered by category
- Category statistics
- Related categories
- Breadcrumb navigation

### 🔍 Search Page (`/search`)
- Advanced search interface
- Multiple filter options
- Sort by different criteria
- Search result count

### 📺 Live Streaming (`/live`)
- Video player simulation
- Live viewer statistics
- Stream information
- Dark theme design

### 📱 Social Media (`/social`)
- Instagram-style post display
- Social media integration
- Post filtering options

## 🎨 Design Features

### Color Scheme
- **Primary**: #e53935 (Red)
- **Secondary**: #b71c1c (Dark Red)
- **Background**: #ffffff (White)
- **Text**: #333333 (Dark Gray)
- **Accent**: #4caf50 (Green for positive changes)

### Typography
- **Font Family**: Inter, Arial, sans-serif
- **Headings**: 32px, 24px, 20px, 18px
- **Body Text**: 16px, 14px, 12px
- **Font Weights**: 400, 500, 600, 700

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # Check TypeScript types
```

## 📊 Performance Features

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic code splitting with React.lazy
- **Virtualized Lists**: Efficient rendering of large lists
- **Image Optimization**: Next.js automatic image optimization
- **Performance Monitoring**: Built-in performance tracking

## 🧪 Development History

This project was developed over 20 days with daily commits:

- **Days 1-5**: Basic structure, header, footer, news cards
- **Days 6-10**: News system, categories, search functionality
- **Days 11-15**: Live streaming, social media, admin panel
- **Days 16-20**: Performance optimization, final features

Each day's progress is saved in separate folders (`gun1/` to `gun20/`).

## 📝 Mock Data

The project uses mock data for demonstration:

- **News Articles**: 6 sample news articles with different categories
- **Categories**: Economy, Technology, World, Current Affairs
- **Market Data**: Stock prices, currency rates, financial indicators
- **Social Media**: Instagram-style posts and content

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Next.js team for the amazing framework
- React team for the UI library
- TypeScript team for type safety
- All contributors and testers

---
