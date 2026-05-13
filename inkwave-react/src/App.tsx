// inkwave-react/src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';
import Home from './pages/Home/page';
import Articles from './pages/Articles/page';
import Trending from './pages/Trending/page';
import Categories from './pages/Categories/page';
import Login from './pages/Login/page';
import Dashboard from './pages/Dashboard/page';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
