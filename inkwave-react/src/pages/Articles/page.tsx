import { useState } from 'react';

const allArticles = [
  { id: 1, img: '/images/tech.png', tag: 'Technology', category: 'technology', title: 'Future of AI', excerpt: 'Exploring the next frontier of artificial intelligence and machine learning.', author: 'Tech Team', date: 'May 12, 2026' },
  { id: 2, img: '/images/fashion.png', tag: 'Fashion', category: 'fashion', title: 'Sustainable Fashion Trends', excerpt: 'How the fashion industry is adapting to eco-friendly practices this year.', author: 'Style Guide', date: 'May 11, 2026' },
  { id: 3, img: '/images/article.png', tag: 'Health', category: 'health', title: 'Mental Health Strategies', excerpt: 'Simple daily habits that can significantly improve your mental wellbeing.', author: 'Dr. Wellness', date: 'May 10, 2026' },
  { id: 4, img: '/images/article.png', tag: 'Sports', category: 'sports', title: 'Championship Highlights', excerpt: 'All the key moments from last night\'s incredible sports finale.', author: 'Sports Desk', date: 'May 09, 2026' },
  { id: 5, img: '/images/article.png', tag: 'Politics', category: 'politics', title: 'Global Summit Analysis', excerpt: 'Breaking down the agreements and disagreements at the global leaders summit.', author: 'Policy Expert', date: 'May 08, 2026' },
  { id: 6, img: '/images/tech.png', tag: 'Technology', category: 'technology', title: 'Smart Home Devices', excerpt: 'The newest gadgets that will completely automate your living space.', author: 'Gadget Guru', date: 'May 07, 2026' },
  { id: 7, img: '/images/fashion.png', tag: 'Fashion', category: 'fashion', title: 'Summer Fashion Essentials', excerpt: 'The definitive list of wardrobe staples you need for the hot months ahead.', author: 'Trend Setter', date: 'May 06, 2026' },
  { id: 8, img: '/images/article.png', tag: 'Health', category: 'health', title: 'Nutrition Myths Debunked', excerpt: 'Separating fact from fiction when it comes to popular diet advice.', author: 'Dietitian Jane', date: 'May 05, 2026' },
  { id: 9, img: '/images/article.png', tag: 'Sports', category: 'sports', title: 'Marathon Training Guide', excerpt: 'Everything a beginner needs to know to successfully finish a marathon.', author: 'Runner Pro', date: 'May 04, 2026' },
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
    <section className="section">
      <div className="container stack-lg">
        <h1 className="section-title">All Articles</h1>

        <div className="search-bar-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search articles by title..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="tags-row">
          {categoryFilters.map(f => (
            <button
              key={f}
              className="btn-tag"
              data-active={activeCategory === f ? 'true' : undefined}
              onClick={() => setActiveCategory(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex-grid">
          {filtered.map(a => (
            <article className="card-4" key={a.id}>
              <img src={a.img} alt={a.tag} className="card-img" />
              <div className="card-body">
                <span className="card-tag">{a.tag}</span>
                <h3 className="card-title">{a.title}</h3>
                <p className="card-excerpt">{a.excerpt}</p>
                <div className="card-meta">
                  <span>By {a.author}</span>
                  <span>{a.date}</span>
                </div>
                <a href="#" className="btn-outline">Read More</a>
              </div>
            </article>
          ))}
        </div>

        <div className="pagination">
          {[1, 2, 3].map(p => (
            <div
              key={p}
              className={`page-link${activePage === p ? ' active' : ''}`}
              onClick={() => setActivePage(p)}
            >
              {p}
            </div>
          ))}
          <div className="page-link page-next" onClick={() => setActivePage(p => Math.min(p + 1, 3))}>Next</div>
        </div>
      </div>
    </section>
  );
}
