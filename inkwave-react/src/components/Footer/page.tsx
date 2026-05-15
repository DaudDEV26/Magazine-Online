// src/components/Footer/page.tsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] dark:bg-[#0a0a15] text-white transition-colors duration-300 pt-16 pb-8">
      <div className="w-full max-w-[1200px] mx-auto px-5">

        <div className="flex flex-wrap justify-between gap-10 mb-10">

          {/* Brand */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-3">
            <h2 className="font-serif text-2xl font-bold text-white">InkWave</h2>
            <p className="text-[#a0a0b8] text-sm leading-relaxed max-w-[260px]">
              Stories that matter. Your go-to source for technology, fashion, health, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[160px] flex flex-col gap-3">
            <h3 className="font-serif text-lg text-[#f5a623] mb-1">Quick Links</h3>
            <Link to="/"           className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Home</Link>
            <Link to="/articles"   className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Articles</Link>
            <Link to="/trending"   className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Trending</Link>
            <Link to="/categories" className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Categories</Link>
            <Link to="/about"      className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">About</Link>
          </div>

          {/* Account */}
          <div className="flex-1 min-w-[160px] flex flex-col gap-3">
            <h3 className="font-serif text-lg text-[#f5a623] mb-1">Account</h3>
            <Link to="/login"     className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Login</Link>
            <Link to="/register"  className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Register</Link>
            <Link to="/profile"   className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Profile</Link>
            <Link to="/dashboard" className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Dashboard</Link>
            <Link to="/cart"      className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Cart</Link>
          </div>

          {/* Social */}
          <div className="flex-1 min-w-[160px] flex flex-col gap-3">
            <h3 className="font-serif text-lg text-[#f5a623] mb-1">Follow Us</h3>
            <a href="#" className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Twitter / X</a>
            <a href="#" className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Facebook</a>
            <a href="#" className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">Instagram</a>
            <a href="#" className="text-[#c0c0d0] hover:text-[#f5a623] text-sm transition-colors duration-200">LinkedIn</a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center text-[#888888] text-sm">
          &copy; 2026 InkWave Magazine. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
