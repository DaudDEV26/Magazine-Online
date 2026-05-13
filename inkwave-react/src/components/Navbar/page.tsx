import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors duration-300 ${isActive ? 'text-[#e94560]' : 'text-[#4a4a6a] hover:text-[#e94560]'}`;

  return (
    <nav className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] sticky top-0 z-[1000] py-4">
      <div className="w-full max-w-[1200px] mx-auto px-5 flex justify-between items-center">
        <NavLink to="/" className="font-serif text-2xl font-bold text-[#1a1a2e]">InkWave</NavLink>

        <button
          className="md:hidden bg-transparent text-2xl cursor-pointer text-[#1a1a2e]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-5 items-start md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 shadow-[0_4px_15px_rgba(0,0,0,0.08)] md:shadow-none`}>
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/articles" className={linkClass}>Articles</NavLink>
          <NavLink to="/trending" className={linkClass}>Trending</NavLink>
          <NavLink to="/categories" className={linkClass}>Categories</NavLink>
          <NavLink to="/login" className={linkClass}>Login</NavLink>
          <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
        </div>
      </div>
    </nav>
  );
}
