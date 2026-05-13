import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white pt-16 pb-8">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="flex justify-between flex-wrap gap-10 mb-10">

          <div className="flex-1 min-w-[250px] flex flex-col gap-4">
            <h3 className="font-serif text-xl text-[#f5a623] mb-2">Quick Links</h3>
            <Link to="/" className="text-[#e0e0e0] hover:text-[#f5a623] transition-colors duration-300">Home</Link>
            <Link to="/articles" className="text-[#e0e0e0] hover:text-[#f5a623] transition-colors duration-300">All Articles</Link>
            <Link to="/trending" className="text-[#e0e0e0] hover:text-[#f5a623] transition-colors duration-300">Trending Now</Link>
          </div>

          <div className="flex-1 min-w-[250px] flex flex-col gap-4">
            <h3 className="font-serif text-xl text-[#f5a623] mb-2">Categories</h3>
            <Link to="/categories" className="text-[#e0e0e0] hover:text-[#f5a623] transition-colors duration-300">Technology</Link>
            <Link to="/categories" className="text-[#e0e0e0] hover:text-[#f5a623] transition-colors duration-300">Fashion</Link>
            <Link to="/categories" className="text-[#e0e0e0] hover:text-[#f5a623] transition-colors duration-300">Health</Link>
          </div>

          <div className="flex-1 min-w-[250px] flex flex-col gap-4">
            <h3 className="font-serif text-xl text-[#f5a623] mb-2">Social Media</h3>
            <a href="#" className="text-[#e0e0e0] hover:text-[#f5a623] transition-colors duration-300">Twitter</a>
            <a href="#" className="text-[#e0e0e0] hover:text-[#f5a623] transition-colors duration-300">Facebook</a>
            <a href="#" className="text-[#e0e0e0] hover:text-[#f5a623] transition-colors duration-300">Instagram</a>
          </div>

        </div>
        <div className="text-center pt-5 border-t border-white/10 text-[#888888]">
          &copy; 2026 InkWave Magazine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
