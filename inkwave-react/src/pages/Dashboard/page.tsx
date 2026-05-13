import { useState } from 'react';

const tableData = [
  { id: '#1001', title: 'The Future of AI in 2026', category: 'Technology', author: 'John Doe', date: 'May 12, 2026', status: 'Published', views: '45.2K' },
  { id: '#1002', title: 'Summer Trends You Need', category: 'Fashion', author: 'Jane Smith', date: 'May 10, 2026', status: 'Published', views: '32.1K' },
  { id: '#1003', title: 'Mental Health First', category: 'Health', author: 'Dr. Allen', date: 'May 08, 2026', status: 'Published', views: '28.5K' },
  { id: '#1004', title: 'Championship Finals Recap', category: 'Sports', author: 'Mark Tyson', date: 'May 05, 2026', status: 'Draft', views: '--' },
  { id: '#1005', title: 'Sustainable Wardrobe 101', category: 'Fashion', author: 'Eco Style', date: 'May 04, 2026', status: 'Published', views: '18.9K' },
  { id: '#1006', title: 'Global Summit 2026', category: 'Politics', author: 'World News', date: 'May 03, 2026', status: 'Published', views: '56.7K' },
  { id: '#1007', title: 'Blockbuster Review', category: 'Entertainment', author: 'Cinephile', date: 'May 02, 2026', status: 'Archived', views: '8.3K' },
  { id: '#1008', title: 'Next-Gen Quantum Computers', category: 'Technology', author: 'Tech Team', date: 'May 01, 2026', status: 'Published', views: '62.4K' },
];

const chartData = [
  { label: 'Jan', value: 1200, heightClass: 'h-32' },
  { label: 'Feb', value: 1800, heightClass: 'h-47' },
  { label: 'Mar', value: 2400, heightClass: 'h-63' },
  { label: 'Apr', value: 3100, heightClass: 'h-82' },
  { label: 'May', value: 2700, heightClass: 'h-71' },
  { label: 'Jun', value: 3800, heightClass: 'h-100' },
];

export default function Dashboard() {
  const [search, setSearch] = useState('');

  const filteredRows = tableData.filter(row =>
    Object.values(row).join(' ').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section">
      <div className="container stack-lg">
        <div className="dashboard-header">
          <h1>Editor Dashboard</h1>
          <button className="btn-primary">Publish Report</button>
        </div>

        <div className="stats-row">
          {[
            { number: '124', label: 'Total Articles' },
            { number: '8,500+', label: 'Total Readers' },
            { number: '6', label: 'Total Categories' },
            { number: '2,300+', label: 'Subscribers' },
          ].map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="stats-row">
          {[
            { icon: '👁', label: 'View All Articles' },
            { icon: '➕', label: 'Add New Article' },
            { icon: '✏️', label: 'Edit Article' },
            { icon: '🗑', label: 'Delete Article' },
          ].map((a, i) => (
            <div className="action-card" key={i}>
              <span className="action-icon">{a.icon}</span> {a.label}
            </div>
          ))}
        </div>

        <div className="stack-md">
          <h2>Monthly Article Views</h2>
          <div className="chart-container">
            {chartData.map(bar => (
              <div className="chart-bar-wrapper" key={bar.label}>
                <span className="chart-value">{bar.value}</span>
                <div className={`chart-bar ${bar.heightClass}`}></div>
                <span className="chart-label">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stack-md">
          <h2>Recent Articles</h2>
          <div className="search-bar-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search articles table..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="table-wrapper">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map(row => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.category}</td>
                    <td>{row.author}</td>
                    <td>{row.date}</td>
                    <td>{row.status}</td>
                    <td>{row.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
