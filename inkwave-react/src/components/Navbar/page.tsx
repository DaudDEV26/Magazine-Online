// src/components/Navbar/page.tsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: 'Home',       to: '/'           },
  { label: 'Articles',   to: '/articles'   },
  { label: 'Trending',   to: '/trending'   },
  { label: 'Categories', to: '/categories' },
  { label: 'Dashboard',  to: '/dashboard'  },
  { label: 'Cart',       to: '/cart'       },
  { label: 'Reviews',    to: '/reviews'    },
  { label: 'About',      to: '/about'      },
  { label: 'Profile',    to: '/profile'    },
  { label: 'Login',      to: '/login'      },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium text-sm transition-colors duration-200 ${
      isActive
        ? 'text-[#e94560]'
        : 'text-[#4a4a6a] dark:text-[#c0c0d0] hover:text-[#e94560] dark:hover:text-[#e94560]'
    }`;

  return (
    <nav className="bg-white dark:bg-[#1a1a2e] shadow-[0_4px_15px_rgba(0,0,0,0.08)] sticky top-0 z-[1000] transition-colors duration-300">
      <div className="w-full max-w-[1200px] mx-auto px-5 py-4 flex justify-between items-center relative">

        {/* Logo */}
        <NavLink to="/" className="font-serif text-2xl font-bold text-[#1a1a2e] dark:text-white">
          InkWave
        </NavLink>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5">
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right side: theme toggle + hamburger */}
        <div className="flex items-center gap-3">
          {/* Dark/Light toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#eef0f5] dark:bg-[#2a2a4a] text-[#1a1a2e] dark:text-[#f0f0f0] hover:bg-[#e94560] hover:text-white dark:hover:bg-[#e94560] transition-colors duration-200 text-lg"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Hamburger (mobile) */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#eef0f5] dark:bg-[#2a2a4a] text-[#1a1a2e] dark:text-white text-xl transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#1a1a2e] border-t border-[#e0e0e0] dark:border-[#2a2a4a] px-5 py-4 flex flex-col gap-4 transition-colors duration-300">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              end={item.to === '/'}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
