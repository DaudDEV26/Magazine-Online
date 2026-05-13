const featuredTrending = [
  { tag: 'Technology', title: 'Quantum Computing Breaks New Barrier', excerpt: 'Researchers have successfully maintained quantum coherence for an unprecedented ten minutes at room temperature, paving the way for practical consumer applications.', views: '1.2M Views', likes: '45K Likes' },
  { tag: 'Fashion', title: 'The Return of 90s Haute Couture', excerpt: 'Runways in Paris and Milan are unexpectedly flooded with retro 90s designs, completely reimagined with modern sustainable fabrics and bold new silhouettes.', views: '980K Views', likes: '32K Likes' },
  { tag: 'Politics', title: 'Global Climate Accord Signed', excerpt: 'Over 150 nations have officially ratified the new climate agreement, committing to aggressive carbon reduction targets by the year 2030.', views: '850K Views', likes: '28K Likes' },
];

const top10 = [
  { title: 'Quantum Computing Breaks New Barrier', meta: 'Technology • 1.2M Views' },
  { title: 'The Return of 90s Haute Couture', meta: 'Fashion • 980K Views' },
  { title: 'Global Climate Accord Signed', meta: 'Politics • 850K Views' },
  { title: 'Next-Gen Electric Vehicles Unveiled', meta: 'Technology • 740K Views' },
  { title: 'Superfoods To Boost Immunity', meta: 'Health • 620K Views' },
  { title: 'Mars Colony Update', meta: 'Science • 590K Views' },
  { title: 'Best Summer Destinations', meta: 'Travel • 510K Views' },
  { title: 'Stock Market Surges', meta: 'Finance • 480K Views' },
  { title: 'New Streaming Service Launches', meta: 'Entertainment • 450K Views' },
  { title: 'Meditation For Productivity', meta: 'Health • 410K Views' },
];

const mostLiked = [
  { img: '/images/article.png', tag: 'Health', title: 'Meditation For Productivity', excerpt: 'A comprehensive guide on how 10 minutes a day can change your life.', likes: '105K Likes', date: 'May 01, 2026' },
  { img: '/images/tech.png', tag: 'Technology', title: 'The AI Revolution', excerpt: 'Why this year is proving to be the tipping point for AI integration.', likes: '95K Likes', date: 'May 03, 2026' },
  { img: '/images/article.png', tag: 'Entertainment', title: 'Top Movies of 2026 So Far', excerpt: 'Our critics review the best cinematic experiences released this year.', likes: '88K Likes', date: 'May 05, 2026' },
];

const trendingTags = ['#Quantum', '#ClimateAction', '#RetroFashion', '#AI2026', '#Wellness', '#GlobalMarkets', '#TechNews', '#SummerVibes'];

export default function Trending() {
  return (
    <>
      <section className="trending-hero">
        <div className="container">
          <h1 className="trending-hero-title">What's Trending Today</h1>
          <p>The stories everyone is talking about across the globe.</p>
        </div>
      </section>

      <section className="section">
        <div className="container stack-lg">

          <div className="stack-md">
            {featuredTrending.map((a, i) => (
              <article className="large-card" key={i}>
                <img src="/images/article.png" alt="Trending" className="large-card-img" />
                <div className="large-card-body">
                  <span className="card-tag">{a.tag}</span>
                  <h2 className="large-card-title">{a.title}</h2>
                  <p className="card-excerpt">{a.excerpt}</p>
                  <div className="card-meta">
                    <span>👁 {a.views}</span>
                    <span>♥ {a.likes}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="stack-md">
            <h3 className="text-center">Trending Tags</h3>
            <div className="tags-row">
              {trendingTags.map(tag => (
                <button key={tag} className="btn-tag">{tag}</button>
              ))}
            </div>
          </div>

          <div className="split-row">
            <div className="col-half stack-md">
              <h3>Weekly Top 10</h3>
              {top10.map((item, i) => (
                <div className="list-card" key={i}>
                  <div className="list-rank">{i + 1}</div>
                  <img src="/images/article.png" alt="Thumb" className="list-img" />
                  <div className="list-info">
                    <div className="list-title">{item.title}</div>
                    <div className="list-meta">{item.meta}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-half stack-md">
              <h3>Most Liked This Month</h3>
              {mostLiked.map((a, i) => (
                <article className="card-12" key={i}>
                  <img src={a.img} alt={a.tag} className="card-img" />
                  <div className="card-body">
                    <span className="card-tag">{a.tag}</span>
                    <h3 className="card-title">{a.title}</h3>
                    <p className="card-excerpt">{a.excerpt}</p>
                    <div className="card-meta">
                      <span>♥ {a.likes}</span>
                      <span>{a.date}</span>
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
