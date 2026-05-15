// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';

// Existing pages
import Home       from './pages/Home/page';
import Articles   from './pages/Articles/page';
import Trending   from './pages/Trending/page';
import Categories from './pages/Categories/page';
import Login      from './pages/Login/page';
import Dashboard  from './pages/Dashboard/page';

// New Assignment 4 pages
import Register from './pages/Register/page';
import Cart     from './pages/Cart/page';
import Reviews  from './pages/Reviews/page';
import About    from './pages/About/page';
import Profile  from './pages/Profile/page';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#f8f9fa] dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-[#f0f0f0] transition-colors duration-300">
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Existing routes */}
              <Route path="/"           element={<Home />} />
              <Route path="/articles"   element={<Articles />} />
              <Route path="/trending"   element={<Trending />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/login"      element={<Login />} />
              <Route path="/dashboard"  element={<Dashboard />} />
              {/* New routes */}
              <Route path="/register"   element={<Register />} />
              <Route path="/cart"       element={<Cart />} />
              <Route path="/reviews"    element={<Reviews />} />
              <Route path="/about"      element={<About />} />
              <Route path="/profile"    element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
