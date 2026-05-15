// src/pages/Trending/page.tsx
const featuredTrending = [
  { tag: 'Technology', title: 'Quantum Computing Breaks New Barrier',  excerpt: 'Researchers have successfully maintained quantum coherence for an unprecedented ten minutes at room temperature, paving the way for practical consumer applications.', views: '1.2M Views', likes: '45K Likes' },
  { tag: 'Fashion',    title: 'The Return of 90s Haute Couture',       excerpt: 'Runways in Paris and Milan are unexpectedly flooded with retro 90s designs, completely reimagined with modern sustainable fabrics and bold new silhouettes.',          views: '980K Views', likes: '32K Likes' },
  { tag: 'Politics',   title: 'Global Climate Accord Signed',          excerpt: 'Over 150 nations have officially ratified the new climate agreement, committing to aggressive carbon reduction targets by the year 2030.',                                  views: '850K Views', likes: '28K Likes' },
];

const top10 = [
  { title: 'Quantum Computing Breaks New Barrier', meta: 'Technology • 1.2M Views' },
  { title: 'The Return of 90s Haute Couture',      meta: 'Fashion • 980K Views'    },
  { title: 'Global Climate Accord Signed',          meta: 'Politics • 850K Views'   },
  { title: 'Next-Gen Electric Vehicles Unveiled',   meta: 'Technology • 740K Views' },
  { title: 'Superfoods To Boost Immunity',          meta: 'Health • 620K Views'     },
  { title: 'Mars Colony Update',                    meta: 'Science • 590K Views'    },
  { title: 'Best Summer Destinations',              meta: 'Travel • 510K Views'     },
  { title: 'Stock Market Surges',                   meta: 'Finance • 480K Views'    },
  { title: 'New Streaming Service Launches',        meta: 'Entertainment • 450K Views' },
  { title: 'Meditation For Productivity',           meta: 'Health • 410K Views'     },
];

const mostLiked = [
  { img: '/images/article.png', tag: 'Health',        title: 'Meditation For Productivity', excerpt: 'A comprehensive guide on how 10 minutes a day can change your life.',   likes: '105K Likes', date: 'May 01, 2026' },
  { img: '/images/tech.png',    tag: 'Technology',    title: 'The AI Revolution',            excerpt: 'Why this year is proving to be the tipping point for AI integration.',  likes: '95K Likes',  date: 'May 03, 2026' },
  { img: '/images/article.png', tag: 'Entertainment', title: 'Top Movies of 2026 So Far',   excerpt: 'Our critics review the best cinematic experiences released this year.', likes: '88K Likes',  date: 'May 05, 2026' },
];

const trendingTags = ['#Quantum', '#ClimateAction', '#RetroFashion', '#AI2026', '#Wellness', '#GlobalMarkets', '#TechNews', '#SummerVibes'];

export default function Trending() {
  return (
    <>
      <section className="text-center py-16 bg-[#1a1a2e] dark:bg-[#0a0a15] text-white transition-colors duration-300">
        <div className="w-full max-w-[1200px] mx-auto px-5">
          <h1 className="font-serif text-4xl mb-3">What's Trending Today</h1>
          <p className="text-[#e0e0e0]">The stories everyone is talking about across the globe.</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa] dark:bg-[#0f0f1a] transition-colors duration-300">
        <div className="w-full max-w-[1200px] mx-auto px-5 flex flex-col gap-10">

          {/* Featured large cards */}
          <div className="flex flex-col gap-6">
            {featuredTrending.map((a, i) => (
              <article key={i} className="flex flex-col md:flex-row bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden border-2 border-transparent hover:border-[#e94560] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all duration-300">
                <img src="/images/article.png" alt="Trending" className="w-full md:w-2/5 h-56 md:h-auto object-cover" />
                <div className="p-8 flex flex-col justify-center flex-1">
                  <span className="text-[#e94560] text-xs font-semibold uppercase">{a.tag}</span>
                  <h2 className="font-serif text-2xl my-2.5 text-[#1a1a2e] dark:text-white">{a.title}</h2>
                  <p className="text-[#888888] dark:text-[#a0a0b8] text-sm mb-4">{a.excerpt}</p>
                  <div className="flex gap-6 text-xs text-[#888888] dark:text-[#a0a0b8]">
                    <span>👁 {a.views}</span><span>♥ {a.likes}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Trending Tags */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xl text-center text-[#1a1a2e] dark:text-white">Trending Tags</h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {trendingTags.map(tag => (
                <button key={tag} className="bg-white dark:bg-[#1a1a2e] text-[#4a4a6a] dark:text-[#c0c0d0] border border-[#e0e0e0] dark:border-[#3a3a5a] px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer hover:bg-[#e94560] hover:text-white hover:border-[#e94560] transition-colors duration-200">{tag}</button>
              ))}
            </div>
          </div>

          {/* Top 10 + Most Liked */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="font-serif text-xl text-[#1a1a2e] dark:text-white">Weekly Top 10</h3>
              {top10.map((item, i) => (
                <div key={i} className="flex items-center bg-white dark:bg-[#1a1a2e] p-4 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:translate-x-1.5 hover:border-l-4 hover:border-[#e94560] transition-all duration-300">
                  <div className="font-serif text-2xl font-bold text-[#e0e0e0] dark:text-[#3a3a5a] w-10 shrink-0">{i + 1}</div>
                  <img src="/images/article.png" alt="Thumb" className="w-14 h-14 rounded-lg object-cover mx-4 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-[#1a1a2e] dark:text-white mb-1 truncate">{item.title}</div>
                    <div className="text-xs text-[#888888] dark:text-[#a0a0b8]">{item.meta}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <h3 className="font-serif text-xl text-[#1a1a2e] dark:text-white">Most Liked This Month</h3>
              {mostLiked.map((a, i) => (
                <article key={i} className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden border-2 border-transparent hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:border-[#e94560] transition-all duration-300 flex flex-col">
                  <img src={a.img} alt={a.tag} className="w-full h-44 object-cover" />
                  <div className="p-5 flex flex-col gap-2">
                    <span className="text-[#e94560] text-xs font-semibold uppercase">{a.tag}</span>
                    <h3 className="font-serif text-lg text-[#1a1a2e] dark:text-white">{a.title}</h3>
                    <p className="text-[#888888] dark:text-[#a0a0b8] text-sm">{a.excerpt}</p>
                    <div className="flex justify-between text-xs text-[#888888] dark:text-[#a0a0b8] mt-1">
                      <span>♥ {a.likes}</span><span>{a.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
