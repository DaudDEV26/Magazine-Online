// inkwave-react/src/pages/Categories/page.tsx
import { useState } from 'react';

const categories = [
  { name: 'Technology',   count: '24 Articles', key: 'technology' },
  { name: 'Fashion',      count: '18 Articles', key: 'fashion' },
  { name: 'Health',       count: '15 Articles', key: 'health' },
  { name: 'Sports',       count: '12 Articles', key: 'sports' },
  { name: 'Politics',     count: '30 Articles', key: 'politics' },
  { name: 'Entertainment',count: '22 Articles', key: 'entertainment' },
];

const filteredArticles = [
  { category: 'technology',    img: '/images/tech.png',    tag: 'Technology',    title: 'Tech Innovations 2026', excerpt: 'A look into the new tech trends of the year.' },
  { category: 'fashion',       img: '/images/fashion.png', tag: 'Fashion',       title: 'Paris Fashion Week',    excerpt: 'Highlights from the most anticipated fashion event.' },
  { category: 'health',        img: '/images/article.png', tag: 'Health',        title: 'Healthy Living Habits', excerpt: 'How to stay fit and healthy in a busy world.' },
  { category: 'sports',        img: '/images/article.png', tag: 'Sports',        title: 'World Cup Update',      excerpt: 'Latest scores and news from the global tournament.' },
  { category: 'politics',      img: '/images/article.png', tag: 'Politics',      title: 'Elections Coverage',    excerpt: 'Full coverage of the upcoming regional elections.' },
  { category: 'entertainment', img: '/images/article.png', tag: 'Entertainment', title: 'Music Awards Night',    excerpt: "Who won big at this year's music awards show." },
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const visibleArticles = selectedCategory
    ? filteredArticles.filter(a => a.category === selectedCategory)
    : [];

  function handleCategoryClick(key: string) {
    setSelectedCategory(key);
    setTimeout(() => {
      document.getElementById('filtered-category-articles')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="w-full max-w-[1200px] mx-auto px-5 flex flex-col gap-10">

        <h1 className="font-serif text-3xl text-center after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#e94560] after:mx-auto after:mt-2.5">
          Browse by Category
        </h1>

        <div className="flex flex-wrap gap-5">
          {categories.map(c => (
            <div
              key={c.key}
              onClick={() => handleCategoryClick(c.key)}
              className="w-full md:w-[calc(33.333%-14px)] text-center cursor-pointer bg-white p-10 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] border-2 border-transparent hover:border-[#e94560] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center gap-4"
            >
              <img src="/images/category.svg" alt={c.name} className="w-20 h-20" />
              <h2 className="font-serif text-xl text-[#1a1a2e]">{c.name}</h2>
              <span className="text-[#888888] text-sm">{c.count}</span>
              <button className="px-5 py-2 rounded-full font-semibold border-2 border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white transition-colors duration-300 text-sm">
                Browse
              </button>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div id="filtered-category-articles" className="flex flex-col gap-8">
            <h2 className="font-serif text-3xl text-center after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#e94560] after:mx-auto after:mt-2.5">
              Articles in Category
            </h2>
            <div className="flex flex-wrap gap-5">
              {visibleArticles.map((a, i) => (
                <article key={i} className="w-full md:w-[calc(33.333%-14px)] bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden border-2 border-transparent hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:border-[#e94560] transition-all duration-300 flex flex-col">
                  <img src={a.img} alt={a.tag} className="w-full h-48 object-cover" />
                  <div className="p-5 flex flex-col gap-2.5 flex-1">
                    <span className="text-[#e94560] text-xs font-semibold uppercase">{a.tag}</span>
                    <h3 className="font-serif text-lg">{a.title}</h3>
                    <p className="text-[#888888] text-sm flex-1">{a.excerpt}</p>
                    <a href="#" className="mt-2 px-5 py-2 rounded-full font-semibold border-2 border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white transition-colors duration-300 text-center text-sm">
                      Read More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
