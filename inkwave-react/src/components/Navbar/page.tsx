import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="nav-logo">InkWave</NavLink>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <div className={`nav-links${menuOpen ? ' show' : ''}`}>
          <NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} end>Home</NavLink>
          <NavLink to="/articles" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Articles</NavLink>
          <NavLink to="/trending" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Trending</NavLink>
          <NavLink to="/categories" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Categories</NavLink>
          <NavLink to="/login" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Login</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Dashboard</NavLink>
        </div>
      </div>
    </nav>
  );
}
