document.addEventListener('DOMContentLoaded', () => {
  // 1. Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
      }
    });
  }

  // 2. Active nav link highlighter
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-link');
  navItems.forEach(link => {
    let href = link.getAttribute('href');
    if (href) {
      href = href.replace('../', '');
      if (currentPath.includes(href) || (currentPath === '' && href === 'index.html')) {
        link.setAttribute('data-active-link', 'true');
      }
    }
  });

  // 3. Article search filter & 4. Category filter
  const searchInput = document.getElementById('article-search');
  const categoryBtns = document.querySelectorAll('[data-action="category-filter"]');
  const articleCards = document.querySelectorAll('[data-type="article"]');

  let currentSearch = '';
  let currentCategory = 'all';

  function filterArticles() {
    articleCards.forEach(card => {
      const title = card.getAttribute('data-title') ? card.getAttribute('data-title').toLowerCase() : '';
      const category = card.getAttribute('data-category') ? card.getAttribute('data-category').toLowerCase() : '';
      
      const matchesSearch = title.includes(currentSearch);
      const matchesCategory = currentCategory === 'all' || category === currentCategory;
      
      if (matchesSearch && matchesCategory) {
        card.removeAttribute('data-hidden');
      } else {
        card.setAttribute('data-hidden', 'true');
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase();
      filterArticles();
    });
  }

  if (categoryBtns) {
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.removeAttribute('data-active'));
        btn.setAttribute('data-active', 'true');
        currentCategory = btn.getAttribute('data-filter').toLowerCase();
        filterArticles();
      });
    });
  }

  // 6. Trending tags filter on homepage
  const trendingBtns = document.querySelectorAll('[data-action="trending-filter"]');
  const trendingArticles = document.querySelectorAll('[data-type="trending-article"]');
  if (trendingBtns) {
    trendingBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        trendingBtns.forEach(b => b.removeAttribute('data-active'));
        btn.setAttribute('data-active', 'true');
        const filter = btn.getAttribute('data-filter').toLowerCase();
        trendingArticles.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category').toLowerCase() === filter) {
            card.removeAttribute('data-hidden');
          } else {
            card.setAttribute('data-hidden', 'true');
          }
        });
      });
    });
  }

  // 7. Login form validation & 8. Show/hide password
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('login-email');
  const passInput = document.getElementById('login-password');
  const togglePass = document.getElementById('toggle-password');

  if (togglePass && passInput) {
    togglePass.addEventListener('click', () => {
      if (passInput.type === 'password') {
        passInput.type = 'text';
        togglePass.textContent = 'Hide';
      } else {
        passInput.type = 'password';
        togglePass.textContent = 'Show';
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      document.querySelectorAll('.error-msg').forEach(msg => msg.classList.remove('show'));
      document.querySelectorAll('.form-input').forEach(input => input.classList.remove('error'));

      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        document.getElementById('email-error').classList.add('show');
        isValid = false;
      }
      
      if (!passInput.value.trim()) {
        passInput.classList.add('error');
        document.getElementById('password-error').classList.add('show');
        isValid = false;
      }

      if (isValid) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
      }
    });
  }

  // 9. Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 10. Dashboard articles table search filter
  const tableSearch = document.getElementById('dashboard-search');
  const tableRows = document.querySelectorAll('.dashboard-table tbody tr');
  if (tableSearch) {
    tableSearch.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase();
      tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(val)) {
          row.removeAttribute('data-hidden');
        } else {
          row.setAttribute('data-hidden', 'true');
        }
      });
    });
  }

  // 11. Newsletter form validation
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!newsletterEmail.value.trim() || !emailRegex.test(newsletterEmail.value)) {
        alert('Please enter a valid email address.');
      } else {
        alert('Subscribed successfully!');
        newsletterEmail.value = '';
      }
    });
  }

  // 12. Category card click shows filtered articles below
  const categoryLargeCards = document.querySelectorAll('[data-type="category-card"]');
  const filteredArticlesSection = document.getElementById('filtered-category-articles');
  const filteredArticlesList = document.querySelectorAll('[data-type="filtered-article"]');
  
  if (categoryLargeCards.length > 0 && filteredArticlesSection) {
    categoryLargeCards.forEach(card => {
      card.addEventListener('click', () => {
        const category = card.getAttribute('data-category').toLowerCase();
        filteredArticlesSection.removeAttribute('data-hidden');
        filteredArticlesSection.scrollIntoView({ behavior: 'smooth' });
        
        filteredArticlesList.forEach(article => {
          if (article.getAttribute('data-category').toLowerCase() === category) {
            article.removeAttribute('data-hidden');
          } else {
            article.setAttribute('data-hidden', 'true');
          }
        });
      });
    });
  }
});
