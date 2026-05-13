import { useState } from 'react';

const categories = [
  { name: 'Technology', count: '24 Articles', key: 'technology' },
  { name: 'Fashion', count: '18 Articles', key: 'fashion' },
  { name: 'Health', count: '15 Articles', key: 'health' },
  { name: 'Sports', count: '12 Articles', key: 'sports' },
  { name: 'Politics', count: '30 Articles', key: 'politics' },
  { name: 'Entertainment', count: '22 Articles', key: 'entertainment' },
];

const filteredArticles = [
  { category: 'technology', img: '/images/tech.png', tag: 'Technology', title: 'Tech Innovations 2026', excerpt: 'A look into the new tech trends of the year.' },
  { category: 'fashion', img: '/images/fashion.png', tag: 'Fashion', title: 'Paris Fashion Week', excerpt: 'Highlights from the most anticipated fashion event.' },
  { category: 'health', img: '/images/article.png', tag: 'Health', title: 'Healthy Living Habits', excerpt: 'How to stay fit and healthy in a busy world.' },
  { category: 'sports', img: '/images/article.png', tag: 'Sports', title: 'World Cup Update', excerpt: 'Latest scores and news from the global tournament.' },
  { category: 'politics', img: '/images/article.png', tag: 'Politics', title: 'Elections Coverage', excerpt: 'Full coverage of the upcoming regional elections.' },
  { category: 'entertainment', img: '/images/article.png', tag: 'Entertainment', title: 'Music Awards Night', excerpt: 'Who won big at this year\'s music awards show.' },
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
    <section className="section">
      <div className="container stack-lg">
        <h1 className="section-title">Browse by Category</h1>

        <div className="flex-grid">
          {categories.map(c => (
            <div
              className="category-card"
              key={c.key}
              onClick={() => handleCategoryClick(c.key)}
            >
              <img src="/images/category.svg" alt={c.name} className="category-large-img" />
              <h2 className="category-large-title">{c.name}</h2>
              <span className="category-large-count">{c.count}</span>
              <button className="btn-outline">Browse</button>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div id="filtered-category-articles" className="stack-lg">
            <h2 className="section-title">Articles in Category</h2>
            <div className="flex-grid">
              {visibleArticles.map((a, i) => (
                <article className="card-4" key={i}>
                  <img src={a.img} alt={a.tag} className="card-img" />
                  <div className="card-body">
                    <span className="card-tag">{a.tag}</span>
                    <h3 className="card-title">{a.title}</h3>
                    <p className="card-excerpt">{a.excerpt}</p>
                    <a href="#" className="btn-outline">Read More</a>
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
