// src/pages/Articles/page.tsx
import { useState } from 'react';

const allArticles = [
  { id: 1, img: '/images/tech.png',    tag: 'Technology', category: 'technology', title: 'Future of AI',               excerpt: 'Exploring the next frontier of artificial intelligence and machine learning.',       author: 'Tech Team',      date: 'May 12, 2026' },
  { id: 2, img: '/images/fashion.png', tag: 'Fashion',    category: 'fashion',    title: 'Sustainable Fashion Trends', excerpt: 'How the fashion industry is adapting to eco-friendly practices this year.',        author: 'Style Guide',    date: 'May 11, 2026' },
  { id: 3, img: '/images/article.png', tag: 'Health',     category: 'health',     title: 'Mental Health Strategies',   excerpt: 'Simple daily habits that can significantly improve your mental wellbeing.',        author: 'Dr. Wellness',   date: 'May 10, 2026' },
  { id: 4, img: '/images/article.png', tag: 'Sports',     category: 'sports',     title: 'Championship Highlights',    excerpt: "All the key moments from last night's incredible sports finale.",                 author: 'Sports Desk',    date: 'May 09, 2026' },
  { id: 5, img: '/images/article.png', tag: 'Politics',   category: 'politics',   title: 'Global Summit Analysis',     excerpt: 'Breaking down the agreements and disagreements at the global leaders summit.',    author: 'Policy Expert',  date: 'May 08, 2026' },
  { id: 6, img: '/images/tech.png',    tag: 'Technology', category: 'technology', title: 'Smart Home Devices',         excerpt: 'The newest gadgets that will completely automate your living space.',             author: 'Gadget Guru',    date: 'May 07, 2026' },
  { id: 7, img: '/images/fashion.png', tag: 'Fashion',    category: 'fashion',    title: 'Summer Fashion Essentials',  excerpt: 'The definitive list of wardrobe staples you need for the hot months ahead.',     author: 'Trend Setter',   date: 'May 06, 2026' },
  { id: 8, img: '/images/article.png', tag: 'Health',     category: 'health',     title: 'Nutrition Myths Debunked',   excerpt: 'Separating fact from fiction when it comes to popular diet advice.',             author: 'Dietitian Jane', date: 'May 05, 2026' },
  { id: 9, img: '/images/article.png', tag: 'Sports',     category: 'sports',     title: 'Marathon Training Guide',    excerpt: 'Everything a beginner needs to know to successfully finish a marathon.',         author: 'Runner Pro',     date: 'May 04, 2026' },
];

const categoryFilters = ['all', 'technology', 'fashion', 'health', 'sports', 'politics'];

export default function Articles() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePage, setActivePage] = useState(1);

  const filtered = allArticles.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'all' || a.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-[#f8f9fa] dark:bg-[#0f0f1a] min-h-screen transition-colors duration-300">
      <div className="w-full max-w-[1200px] mx-auto px-5 flex flex-col gap-8">

        <h1 className="font-serif text-3xl text-center text-[#1a1a2e] dark:text-white after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#e94560] after:mx-auto after:mt-2.5">All Articles</h1>

        {/* Search */}
        <div className="w-full max-w-[600px] mx-auto relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888]">🔍</span>
          <input
            type="text"
            className="w-full py-4 pl-11 pr-5 rounded-full border border-[#e0e0e0] dark:border-[#3a3a5a] text-base shadow-[0_4px_15px_rgba(0,0,0,0.08)] outline-none bg-white dark:bg-[#1a1a2e] text-[#1a1a2e] dark:text-white transition-colors duration-200"
            placeholder="Search articles by title..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {categoryFilters.map(f => (
            <button key={f} onClick={() => setActiveCategory(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition-colors duration-200 ${activeCategory === f ? 'bg-[#e94560] text-white' : 'bg-white dark:bg-[#1a1a2e] text-[#4a4a6a] dark:text-[#c0c0d0] border border-[#e0e0e0] dark:border-[#3a3a5a] hover:bg-[#e94560] hover:text-white hover:border-[#e94560]'}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="flex flex-wrap gap-5">
          {filtered.map(a => (
            <article key={a.id} className="w-full md:w-[calc(33.333%-14px)] bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden border-2 border-transparent hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:border-[#e94560] transition-all duration-300 flex flex-col">
              <img src={a.img} alt={a.tag} className="w-full h-48 object-cover" />
              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <span className="text-[#e94560] text-xs font-semibold uppercase">{a.tag}</span>
                <h3 className="font-serif text-lg text-[#1a1a2e] dark:text-white">{a.title}</h3>
                <p className="text-[#888888] dark:text-[#a0a0b8] text-sm flex-1">{a.excerpt}</p>
                <div className="flex justify-between text-xs text-[#888888] dark:text-[#a0a0b8] mt-2">
                  <span>By {a.author}</span><span>{a.date}</span>
                </div>
                <a href="#" className="mt-2 px-5 py-2 rounded-full font-semibold border-2 border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white transition-colors duration-200 text-center text-sm">Read More</a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2.5 mt-4">
          {[1, 2, 3].map(p => (
            <div key={p} onClick={() => setActivePage(p)}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold shadow-[0_4px_15px_rgba(0,0,0,0.08)] cursor-pointer transition-colors duration-200 ${activePage === p ? 'bg-[#e94560] text-white' : 'bg-white dark:bg-[#1a1a2e] text-[#1a1a2e] dark:text-white hover:bg-[#e94560] hover:text-white'}`}>
              {p}
            </div>
          ))}
          <div onClick={() => setActivePage(p => Math.min(p + 1, 3))}
            className="h-10 px-5 flex items-center justify-center rounded-full font-semibold shadow-[0_4px_15px_rgba(0,0,0,0.08)] cursor-pointer bg-white dark:bg-[#1a1a2e] text-[#1a1a2e] dark:text-white hover:bg-[#e94560] hover:text-white transition-colors duration-200">
            Next
          </div>
        </div>

      </div>
    </section>
  );
}
