import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cols">
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/articles" className="footer-link">All Articles</Link>
            <Link to="/trending" className="footer-link">Trending Now</Link>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Categories</h3>
            <Link to="/categories" className="footer-link">Technology</Link>
            <Link to="/categories" className="footer-link">Fashion</Link>
            <Link to="/categories" className="footer-link">Health</Link>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Social Media</h3>
            <a href="#" className="footer-link">Twitter</a>
            <a href="#" className="footer-link">Facebook</a>
            <a href="#" className="footer-link">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 InkWave Magazine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
