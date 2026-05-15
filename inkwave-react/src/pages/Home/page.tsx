// src/pages/Home/page.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const featuredArticles = [
  { img: '/images/tech.png',    tag: 'Technology', title: 'The Future of AI in 2026',     excerpt: 'A deep dive into how artificial intelligence is reshaping our daily lives.',            author: 'John Doe',   date: 'May 12, 2026' },
  { img: '/images/fashion.png', tag: 'Fashion',    title: 'Summer Trends You Need',        excerpt: 'Discover the hottest fashion trends hitting the streets this summer season.',          author: 'Jane Smith', date: 'May 10, 2026' },
  { img: '/images/article.png', tag: 'Health',     title: 'Mental Health First',           excerpt: 'Why prioritizing your mental wellbeing is more important than ever.',                  author: 'Dr. Allen',  date: 'May 08, 2026' },
  { img: '/images/article.png', tag: 'Sports',     title: 'Championship Finals Recap',     excerpt: "A full recap of the thrilling finale to this year's biggest tournament.",              author: 'Mark Tyson', date: 'May 05, 2026' },
];

const trendingArticles = [
  { id: 1, category: 'technology',    img: '/images/tech.png',    tag: 'Technology',    title: 'Next-Gen Quantum Computers', excerpt: 'How quantum computing is leaving the lab and entering the real world.',     author: 'Tech Team',   date: 'May 11, 2026' },
  { id: 2, category: 'fashion',       img: '/images/fashion.png', tag: 'Fashion',       title: 'Sustainable Wardrobe 101',   excerpt: 'Building a beautiful wardrobe without harming the planet.',                author: 'Eco Style',   date: 'May 09, 2026' },
  { id: 3, category: 'sports',        img: '/images/article.png', tag: 'Sports',        title: 'The Underdog Story',         excerpt: 'How an unknown team fought their way to the grand finals.',                author: 'Sports Desk', date: 'May 07, 2026' },
  { id: 4, category: 'politics',      img: '/images/article.png', tag: 'Politics',      title: 'Global Summit 2026',         excerpt: 'Key takeaways from the biggest international summit of the year.',         author: 'World News',  date: 'May 06, 2026' },
  { id: 5, category: 'health',        img: '/images/article.png', tag: 'Health',        title: 'Superfoods of the Future',   excerpt: 'What you should be adding to your daily diet for maximum longevity.',     author: 'Health Dept', date: 'May 04, 2026' },
  { id: 6, category: 'entertainment', img: '/images/article.png', tag: 'Entertainment', title: 'Blockbuster Review',         excerpt: 'An honest review of the most anticipated movie release this summer.',      author: 'Cinephile',   date: 'May 02, 2026' },
];

const trendingFilters = ['all', 'technology', 'fashion', 'politics', 'sports', 'health', 'entertainment'];

const browseCategories = [
  { name: 'Technology', count: '24 Articles' },
  { name: 'Fashion',    count: '18 Articles' },
  { name: 'Health',     count: '15 Articles' },
  { name: 'Sports',     count: '12 Articles' },
];

const latestArticles = [
  { img: '/images/tech.png',    tag: 'Technology',    title: 'Smartphone Evolution', excerpt: 'Where do we go from here in mobile technology?',            author: 'J. Doe',   date: 'May 12, 2026' },
  { img: '/images/article.png', tag: 'Politics',      title: 'Election Campaigns',   excerpt: 'Early start for the upcoming regional elections.',           author: 'P. Smith', date: 'May 11, 2026' },
  { img: '/images/fashion.png', tag: 'Fashion',       title: 'Retro Revival',        excerpt: 'Why the 90s are making a huge comeback this year.',          author: 'F. Guru',  date: 'May 10, 2026' },
  { img: '/images/article.png', tag: 'Health',        title: 'Sleep Cycles',         excerpt: 'Understanding the deep sleep stages for better rest.',       author: 'Dr. Zee',  date: 'May 09, 2026' },
  { img: '/images/article.png', tag: 'Entertainment', title: 'Music Festivals',      excerpt: 'Top 10 music festivals to attend around the globe.',         author: 'DJ R.',    date: 'May 08, 2026' },
  { img: '/images/article.png', tag: 'Sports',        title: 'Marathon Training',    excerpt: "A beginner's guide to completing your first full marathon.", author: 'Runner X', date: 'May 07, 2026' },
];

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

  const cardClass = 'bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden border-2 border-transparent hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:border-[#e94560] transition-all duration-300 flex flex-col';

  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-[85vh] bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] text-white flex items-center py-10">
        <div className="w-full max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="font-serif text-4xl md:text-5xl leading-tight">Welcome to InkWave Magazine</h1>
            <p className="text-xl text-[#e0e0e0] font-light">"Stories That Matter"</p>
            <div className="flex gap-4 flex-wrap mt-2">
              <Link to="/articles" className="px-6 py-2.5 rounded-full font-semibold bg-[#e94560] text-white hover:bg-[#d83550] transition-colors duration-200">Read Now</Link>
              <a href="#newsletter" className="px-6 py-2.5 rounded-full font-semibold border-2 border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white transition-colors duration-200">Subscribe</a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/images/hero.png" alt="Hero Illustration" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ── Featured Articles ── */}
      <section className="py-16 bg-[#f8f9fa] dark:bg-[#0f0f1a] transition-colors duration-300">
        <div className="w-full max-w-[1200px] mx-auto px-5">
          <h2 className="font-serif text-3xl text-center text-[#1a1a2e] dark:text-white mb-10 after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#e94560] after:mx-auto after:mt-2.5">Featured Articles</h2>
          <div className="flex flex-wrap gap-5">
            {featuredArticles.map((a, i) => (
              <article key={i} className={`w-full md:w-[calc(25%-15px)] ${cardClass}`}>
                <img src={a.img} alt={a.tag} className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col gap-2.5 flex-1">
                  <span className="text-[#e94560] text-xs font-semibold uppercase">{a.tag}</span>
                  <h3 className="font-serif text-lg text-[#1a1a2e] dark:text-white">{a.title}</h3>
                  <p className="text-[#888888] dark:text-[#a0a0b8] text-sm flex-1">{a.excerpt}</p>
                  <div className="flex justify-between text-xs text-[#888888] dark:text-[#a0a0b8] mt-2">
                    <span>By {a.author}</span><span>{a.date}</span>
                  </div>
                  <Link to="/articles" className="mt-2 px-5 py-2 rounded-full font-semibold border-2 border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white transition-colors duration-200 text-center text-sm">Read More</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trending Topics ── */}
      <section className="bg-[#0f0f1a] dark:bg-[#0a0a15] text-white py-16 transition-colors duration-300">
        <div className="w-full max-w-[1200px] mx-auto px-5 flex flex-col gap-8">
          <h2 className="font-serif text-3xl text-center after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#e94560] after:mx-auto after:mt-2.5">Trending Topics</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {trendingFilters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition-colors duration-200 ${activeFilter === f ? 'bg-[#e94560] text-white' : 'bg-[#eef0f5] text-[#4a4a6a] hover:bg-[#e94560] hover:text-white'}`}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-5">
            {filtered.map(a => (
              <article key={a.id} className={`w-full md:w-[calc(33.333%-14px)] ${cardClass} dark:bg-[#1a1a2e]`}>
                <img src={a.img} alt={a.tag} className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col gap-2.5 flex-1">
                  <span className="text-[#e94560] text-xs font-semibold uppercase">{a.tag}</span>
                  <h3 className="font-serif text-lg text-white">{a.title}</h3>
                  <p className="text-[#a0a0b8] text-sm flex-1">{a.excerpt}</p>
                  <div className="flex justify-between text-xs text-[#a0a0b8] mt-2">
                    <span>By {a.author}</span><span>{a.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse by Category ── */}
      <section className="py-16 bg-[#f8f9fa] dark:bg-[#0f0f1a] transition-colors duration-300">
        <div className="w-full max-w-[1200px] mx-auto px-5">
          <h2 className="font-serif text-3xl text-center text-[#1a1a2e] dark:text-white mb-10 after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#e94560] after:mx-auto after:mt-2.5">Browse by Category</h2>
          <div className="flex flex-wrap gap-5">
            {browseCategories.map((c, i) => (
              <Link key={i} to="/categories" className="w-full md:w-[calc(25%-15px)] text-center bg-white dark:bg-[#1a1a2e] p-10 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] border-2 border-transparent hover:border-[#e94560] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center gap-4">
                <img src="/images/category.svg" alt={c.name} className="w-20 h-20" />
                <h3 className="font-serif text-xl text-[#1a1a2e] dark:text-white">{c.name}</h3>
                <span className="text-[#888888] dark:text-[#a0a0b8] text-sm">{c.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Articles ── */}
      <section className="py-16 bg-[#f8f9fa] dark:bg-[#0f0f1a] transition-colors duration-300">
        <div className="w-full max-w-[1200px] mx-auto px-5">
          <h2 className="font-serif text-3xl text-center text-[#1a1a2e] dark:text-white mb-10 after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#e94560] after:mx-auto after:mt-2.5">Latest Articles</h2>
          <div className="flex flex-wrap gap-5">
            {latestArticles.map((a, i) => (
              <article key={i} className={`w-full md:w-[calc(33.333%-14px)] ${cardClass}`}>
                <img src={a.img} alt={a.tag} className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col gap-2.5 flex-1">
                  <span className="text-[#e94560] text-xs font-semibold uppercase">{a.tag}</span>
                  <h3 className="font-serif text-lg text-[#1a1a2e] dark:text-white">{a.title}</h3>
                  <p className="text-[#888888] dark:text-[#a0a0b8] text-sm flex-1">{a.excerpt}</p>
                  <div className="flex justify-between text-xs text-[#888888] dark:text-[#a0a0b8] mt-2">
                    <span>By {a.author}</span><span>{a.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-16 bg-[#f8f9fa] dark:bg-[#0f0f1a] transition-colors duration-300" id="newsletter">
        <div className="w-full max-w-[1200px] mx-auto px-5">
          <div className="bg-[#1a1a2e] dark:bg-[#0a0a15] text-white py-16 px-8 rounded-2xl flex flex-col items-center gap-5 text-center">
            <h2 className="font-serif text-3xl">Subscribe to Our Newsletter</h2>
            <p className="text-[#e0e0e0]">Get the latest stories delivered right to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-[500px]" onSubmit={handleNewsletter}>
              <input
                type="email"
                className="flex-1 px-5 py-3 rounded-full border border-[#e0e0e0] text-base text-[#1a1a2e] outline-none"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit" className="px-6 py-3 rounded-full font-semibold bg-[#e94560] text-white hover:bg-[#d83550] transition-colors duration-200 cursor-pointer whitespace-nowrap">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
