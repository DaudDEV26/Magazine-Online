import { useState } from 'react';
import { Link } from 'react-router-dom';

const trendingArticles = [
  { id: 1, category: 'technology', img: '/images/tech.png', tag: 'Technology', title: 'Next-Gen Quantum Computers', excerpt: 'How quantum computing is leaving the lab and entering the real world.', author: 'Tech Team', date: 'May 11, 2026' },
  { id: 2, category: 'fashion', img: '/images/fashion.png', tag: 'Fashion', title: 'Sustainable Wardrobe 101', excerpt: 'Building a beautiful wardrobe without harming the planet.', author: 'Eco Style', date: 'May 09, 2026' },
  { id: 3, category: 'sports', img: '/images/article.png', tag: 'Sports', title: 'The Underdog Story', excerpt: 'How an unknown team fought their way to the grand finals.', author: 'Sports Desk', date: 'May 07, 2026' },
  { id: 4, category: 'politics', img: '/images/article.png', tag: 'Politics', title: 'Global Summit 2026', excerpt: 'Key takeaways from the biggest international summit of the year.', author: 'World News', date: 'May 06, 2026' },
  { id: 5, category: 'health', img: '/images/article.png', tag: 'Health', title: 'Superfoods of the Future', excerpt: 'What you should be adding to your daily diet for maximum longevity.', author: 'Health Dept', date: 'May 04, 2026' },
  { id: 6, category: 'entertainment', img: '/images/article.png', tag: 'Entertainment', title: 'Blockbuster Review', excerpt: 'An honest review of the most anticipated movie release this summer.', author: 'Cinephile', date: 'May 02, 2026' },
];

const trendingFilters = ['all', 'technology', 'fashion', 'politics', 'sports', 'health', 'entertainment'];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [email, setEmail] = useState('');

  const filtered = activeFilter === 'all'
    ? trendingArticles
    : trendingArticles.filter(a => a.category === activeFilter);

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Subscribed successfully!');
      setEmail('');
    }
  }

  return (
    <>
      <section className="hero">
        <div className="container hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to InkWave Magazine</h1>
            <p className="hero-tagline">"Stories That Matter"</p>
            <div className="hero-actions">
              <Link to="/articles" className="btn-primary">Read Now</Link>
              <a href="#newsletter" className="btn-outline">Subscribe</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero.png" alt="Hero Illustration" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Articles</h2>
          <div className="flex-grid">
            {[
              { img: '/images/tech.png', tag: 'Technology', title: 'The Future of AI in 2026', excerpt: 'A deep dive into how artificial intelligence is reshaping our daily lives.', author: 'John Doe', date: 'May 12, 2026' },
              { img: '/images/fashion.png', tag: 'Fashion', title: 'Summer Trends You Need', excerpt: 'Discover the hottest fashion trends hitting the streets this summer season.', author: 'Jane Smith', date: 'May 10, 2026' },
              { img: '/images/article.png', tag: 'Health', title: 'Mental Health First', excerpt: 'Why prioritizing your mental wellbeing is more important than ever.', author: 'Dr. Allen', date: 'May 08, 2026' },
              { img: '/images/article.png', tag: 'Sports', title: 'Championship Finals Recap', excerpt: 'A full recap of the thrilling finale to this year\'s biggest tournament.', author: 'Mark Tyson', date: 'May 05, 2026' },
            ].map((a, i) => (
              <article className="card-3" key={i}>
                <img src={a.img} alt={a.tag} className="card-img" />
                <div className="card-body">
                  <span className="card-tag">{a.tag}</span>
                  <h3 className="card-title">{a.title}</h3>
                  <p className="card-excerpt">{a.excerpt}</p>
                  <div className="card-meta">
                    <span>By {a.author}</span>
                    <span>{a.date}</span>
                  </div>
                  <Link to="/articles" className="btn-outline">Read More</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container stack-lg">
          <h2 className="section-title">Trending Topics</h2>
          <div className="tags-row">
            {trendingFilters.map(f => (
              <button
                key={f}
                className="btn-tag"
                data-active={activeFilter === f ? 'true' : undefined}
                onClick={() => setActiveFilter(f)}
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <div className="flex-grid">
            {[
              { name: 'Technology', count: '24 Articles' },
              { name: 'Fashion', count: '18 Articles' },
              { name: 'Health', count: '15 Articles' },
              { name: 'Sports', count: '12 Articles' },
            ].map((c, i) => (
              <Link to="/categories" className="category-card" key={i}>
                <img src="/images/category.svg" alt={c.name} className="category-large-img" />
                <h3 className="category-large-title">{c.name}</h3>
                <span className="category-large-count">{c.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Latest Articles</h2>
          <div className="flex-grid">
            {[
              { img: '/images/tech.png', tag: 'Technology', title: 'Smartphone Evolution', excerpt: 'Where do we go from here in mobile technology?', author: 'J. Doe', date: 'May 12, 2026' },
              { img: '/images/article.png', tag: 'Politics', title: 'Election Campaigns', excerpt: 'Early start for the upcoming regional elections.', author: 'P. Smith', date: 'May 11, 2026' },
              { img: '/images/fashion.png', tag: 'Fashion', title: 'Retro Revival', excerpt: 'Why the 90s are making a huge comeback this year.', author: 'F. Guru', date: 'May 10, 2026' },
              { img: '/images/article.png', tag: 'Health', title: 'Sleep Cycles', excerpt: 'Understanding the deep sleep stages for better rest.', author: 'Dr. Zee', date: 'May 09, 2026' },
              { img: '/images/article.png', tag: 'Entertainment', title: 'Music Festivals', excerpt: 'Top 10 music festivals to attend around the globe.', author: 'DJ R.', date: 'May 08, 2026' },
              { img: '/images/article.png', tag: 'Sports', title: 'Marathon Training', excerpt: "A beginner's guide to completing your first full marathon.", author: 'Runner X', date: 'May 07, 2026' },
            ].map((a, i) => (
              <article className="card-4" key={i}>
                <img src={a.img} alt={a.tag} className="card-img" />
                <div className="card-body">
                  <span className="card-tag">{a.tag}</span>
                  <h3 className="card-title">{a.title}</h3>
                  <p className="card-excerpt">{a.excerpt}</p>
                  <div className="card-meta">
                    <span>By {a.author}</span>
                    <span>{a.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="newsletter">
        <div className="container">
          <div className="newsletter">
            <h2 className="text-center">Subscribe to Our Newsletter</h2>
            <p>Get the latest stories delivered right to your inbox.</p>
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
