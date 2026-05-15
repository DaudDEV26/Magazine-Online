// src/pages/Reviews/page.tsx
import { useState } from 'react';

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

const allReviews: Review[] = [
  { id: 1,  name: 'Sarah Mitchell',  role: 'Tech Enthusiast',    rating: 5, date: 'May 10, 2026', text: 'InkWave has completely changed how I consume news. The articles are well-researched, insightful, and always up to date. Absolutely love the tech section!', avatar: 'SM' },
  { id: 2,  name: 'James Okafor',    role: 'Fashion Blogger',    rating: 5, date: 'May 08, 2026', text: 'The fashion coverage here is second to none. Every trend, every runway — InkWave covers it all with style and depth. My daily morning read.', avatar: 'JO' },
  { id: 3,  name: 'Priya Sharma',    role: 'Health Coach',       rating: 4, date: 'May 06, 2026', text: 'Great health articles backed by real science. I recommend InkWave to all my clients. Would love even more nutrition deep-dives!', avatar: 'PS' },
  { id: 4,  name: 'Carlos Rivera',   role: 'Sports Analyst',     rating: 5, date: 'May 04, 2026', text: 'The sports recaps are phenomenal. Fast, accurate, and packed with analysis. InkWave is the only sports source I trust for post-match breakdowns.', avatar: 'CR' },
  { id: 5,  name: 'Emily Chen',      role: 'Political Scientist', rating: 4, date: 'May 02, 2026', text: 'Balanced and thorough political coverage. In a world of biased media, InkWave stands out for its fair reporting. Highly recommended.', avatar: 'EC' },
  { id: 6,  name: 'Marcus Thompson', role: 'Film Critic',        rating: 5, date: 'Apr 30, 2026', text: 'The entertainment reviews are spot on every single time. Marcus from InkWave predicted every Oscar winner this year. Brilliant writing team!', avatar: 'MT' },
  { id: 7,  name: 'Aisha Patel',     role: 'Startup Founder',    rating: 5, date: 'Apr 28, 2026', text: 'I read InkWave every morning before my team standup. The business and tech insights keep me ahead of the curve. Worth every minute.', avatar: 'AP' },
  { id: 8,  name: 'David Kim',       role: 'University Student', rating: 4, date: 'Apr 26, 2026', text: 'As a student, I love how InkWave makes complex topics accessible. The writing is clear, engaging, and never dumbed down. Great resource!', avatar: 'DK' },
  { id: 9,  name: 'Fatima Al-Hassan',role: 'Journalist',         rating: 5, date: 'Apr 24, 2026', text: 'From a fellow journalist — the editorial standards at InkWave are impressive. Fact-checked, well-sourced, and beautifully written. Respect.', avatar: 'FA' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star} className={`text-lg ${star <= rating ? 'text-[#f5a623]' : 'text-[#d0d0d0] dark:text-[#3a3a5a]'}`}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [filter, setFilter] = useState<number>(0);

  const filtered = filter === 0 ? allReviews : allReviews.filter(r => r.rating === filter);
  const avgRating = (allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length).toFixed(1);

  return (
    <section className="py-16 bg-[#f8f9fa] dark:bg-[#0f0f1a] min-h-screen transition-colors duration-300">
      <div className="w-full max-w-[1200px] mx-auto px-5 flex flex-col gap-10">

        {/* Header */}
        <div className="text-center">
          <h1 className="font-serif text-4xl text-[#1a1a2e] dark:text-white mb-3">
            Reader Reviews
          </h1>
          <span className="block w-16 h-[3px] bg-[#e94560] mx-auto mb-6"></span>
          <p className="text-[#4a4a6a] dark:text-[#c0c0d0] max-w-xl mx-auto">
            What our readers say about InkWave Magazine
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] px-8 py-5 text-center transition-colors duration-300">
            <div className="font-serif text-4xl font-bold text-[#e94560]">{avgRating}</div>
            <StarRating rating={Math.round(Number(avgRating))} />
            <div className="text-sm text-[#888888] dark:text-[#a0a0b8] mt-1">Average Rating</div>
          </div>
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] px-8 py-5 text-center transition-colors duration-300">
            <div className="font-serif text-4xl font-bold text-[#1a1a2e] dark:text-white">{allReviews.length}</div>
            <div className="text-sm text-[#888888] dark:text-[#a0a0b8] mt-2">Total Reviews</div>
          </div>
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] px-8 py-5 text-center transition-colors duration-300">
            <div className="font-serif text-4xl font-bold text-[#1a1a2e] dark:text-white">
              {allReviews.filter(r => r.rating === 5).length}
            </div>
            <div className="text-sm text-[#888888] dark:text-[#a0a0b8] mt-2">5-Star Reviews</div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {[0, 5, 4, 3].map(star => (
            <button
              key={star}
              onClick={() => setFilter(star)}
              className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors duration-200 ${
                filter === star
                  ? 'bg-[#e94560] text-white'
                  : 'bg-white dark:bg-[#1a1a2e] text-[#4a4a6a] dark:text-[#c0c0d0] border border-[#e0e0e0] dark:border-[#3a3a5a] hover:bg-[#e94560] hover:text-white hover:border-[#e94560]'
              }`}
            >
              {star === 0 ? 'All Reviews' : `${star} Stars`}
            </button>
          ))}
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(review => (
            <div
              key={review.id}
              className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-4 border-2 border-transparent hover:border-[#e94560] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review text */}
              <p className="text-[#4a4a6a] dark:text-[#c0c0d0] text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#f0f0f0] dark:border-[#2a2a4a]">
                <div className="w-10 h-10 rounded-full bg-[#e94560] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#1a1a2e] dark:text-white">{review.name}</div>
                  <div className="text-xs text-[#888888] dark:text-[#a0a0b8]">{review.role} · {review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write a review CTA */}
        <div className="bg-gradient-to-r from-[#1a1a2e] to-[#e94560] rounded-2xl p-10 text-center text-white">
          <h2 className="font-serif text-2xl font-bold mb-3">Share Your Experience</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Have you been reading InkWave? We'd love to hear what you think!
          </p>
          <button className="px-8 py-3 rounded-full font-semibold bg-white text-[#e94560] hover:bg-[#f8f9fa] transition-colors duration-200 cursor-pointer">
            Write a Review
          </button>
        </div>

      </div>
    </section>
  );
}
