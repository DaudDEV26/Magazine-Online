// src/pages/Dashboard/page.tsx
import { useState } from 'react';

const tableData = [
  { id: '#1001', title: 'The Future of AI in 2026',  category: 'Technology',    author: 'John Doe',   date: 'May 12, 2026', status: 'Published', views: '45.2K' },
  { id: '#1002', title: 'Summer Trends You Need',     category: 'Fashion',       author: 'Jane Smith', date: 'May 10, 2026', status: 'Published', views: '32.1K' },
  { id: '#1003', title: 'Mental Health First',        category: 'Health',        author: 'Dr. Allen',  date: 'May 08, 2026', status: 'Published', views: '28.5K' },
  { id: '#1004', title: 'Championship Finals Recap',  category: 'Sports',        author: 'Mark Tyson', date: 'May 05, 2026', status: 'Draft',     views: '--'    },
  { id: '#1005', title: 'Sustainable Wardrobe 101',   category: 'Fashion',       author: 'Eco Style',  date: 'May 04, 2026', status: 'Published', views: '18.9K' },
  { id: '#1006', title: 'Global Summit 2026',         category: 'Politics',      author: 'World News', date: 'May 03, 2026', status: 'Published', views: '56.7K' },
  { id: '#1007', title: 'Blockbuster Review',         category: 'Entertainment', author: 'Cinephile',  date: 'May 02, 2026', status: 'Archived',  views: '8.3K'  },
  { id: '#1008', title: 'Next-Gen Quantum Computers', category: 'Technology',    author: 'Tech Team',  date: 'May 01, 2026', status: 'Published', views: '62.4K' },
];

const chartData = [
  { label: 'Jan', value: 1200, heightPct: 32 },
  { label: 'Feb', value: 1800, heightPct: 47 },
  { label: 'Mar', value: 2400, heightPct: 63 },
  { label: 'Apr', value: 3100, heightPct: 82 },
  { label: 'May', value: 2700, heightPct: 71 },
  { label: 'Jun', value: 3800, heightPct: 100 },
];

const statusColor: Record<string, string> = {
  Published: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Draft:     'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  Archived:  'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
};

export default function Dashboard() {
  const [search, setSearch] = useState('');

  const filteredRows = tableData.filter(row =>
    Object.values(row).join(' ').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 bg-[#f8f9fa] dark:bg-[#0f0f1a] min-h-screen transition-colors duration-300">
      <div className="w-full max-w-[1200px] mx-auto px-5 flex flex-col gap-10">

        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="font-serif text-3xl text-[#1a1a2e] dark:text-white">Editor Dashboard</h1>
          <button className="px-6 py-2.5 rounded-full font-semibold bg-[#e94560] text-white hover:bg-[#d83550] transition-colors duration-200 cursor-pointer">Publish Report</button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-5">
          {[
            { number: '124',    label: 'Total Articles'   },
            { number: '8,500+', label: 'Total Readers'    },
            { number: '6',      label: 'Total Categories' },
            { number: '2,300+', label: 'Subscribers'      },
          ].map((s, i) => (
            <div key={i} className="bg-white dark:bg-[#1a1a2e] p-6 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center text-center flex-1 min-w-[180px] transition-colors duration-300">
              <div className="font-serif text-4xl font-bold text-[#1a1a2e] dark:text-white">{s.number}</div>
              <div className="text-[#4a4a6a] dark:text-[#a0a0b8] text-xs uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Action cards */}
        <div className="flex flex-wrap gap-5">
          {[
            { icon: '👁',  label: 'View All Articles' },
            { icon: '➕', label: 'Add New Article'   },
            { icon: '✏️', label: 'Edit Article'      },
            { icon: '🗑',  label: 'Delete Article'   },
          ].map((a, i) => (
            <div key={i} className="bg-white dark:bg-[#1a1a2e] p-5 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex items-center gap-4 cursor-pointer border border-[#e0e0e0] dark:border-[#3a3a5a] flex-1 min-w-[180px] font-semibold text-[#1a1a2e] dark:text-white hover:border-[#e94560] hover:text-[#e94560] hover:-translate-y-1 transition-all duration-300">
              <span className="text-2xl">{a.icon}</span>{a.label}
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl text-[#1a1a2e] dark:text-white">Monthly Article Views</h2>
          <div className="h-64 flex items-end justify-around border-b-2 border-[#e0e0e0] dark:border-[#3a3a5a] pt-5 mt-2">
            {chartData.map(bar => (
              <div key={bar.label} className="flex flex-col items-center w-10 h-full justify-end">
                <span className="text-[10px] text-[#888888] dark:text-[#a0a0b8] mb-1">{bar.value}</span>
                <div className="w-full bg-[#e94560] rounded-t hover:bg-[#1a1a2e] dark:hover:bg-white transition-colors duration-200" style={{ height: `${bar.heightPct}%` }} />
                <span className="mt-2 text-xs text-[#4a4a6a] dark:text-[#c0c0d0] font-semibold">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl text-[#1a1a2e] dark:text-white">Recent Articles</h2>
          <div className="w-full max-w-[600px] relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888]">🔍</span>
            <input
              type="text"
              className="w-full py-4 pl-11 pr-5 rounded-full border border-[#e0e0e0] dark:border-[#3a3a5a] text-base shadow-[0_4px_15px_rgba(0,0,0,0.08)] outline-none bg-white dark:bg-[#1a1a2e] text-[#1a1a2e] dark:text-white transition-colors duration-200"
              placeholder="Search articles table..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-x-auto transition-colors duration-300">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  {['ID', 'Title', 'Category', 'Author', 'Date', 'Status', 'Views'].map(h => (
                    <th key={h} className="px-5 py-4 text-left border-b border-[#e0e0e0] dark:border-[#3a3a5a] bg-[#eef0f5] dark:bg-[#0f0f1a] text-[#4a4a6a] dark:text-[#a0a0b8] font-semibold uppercase text-xs tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, idx) => (
                  <tr key={row.id} className={`border-b border-[#e0e0e0] dark:border-[#2a2a4a] hover:bg-[#e94560]/5 transition-colors duration-200 ${idx % 2 === 1 ? 'bg-[#eef0f5]/30 dark:bg-[#ffffff]/5' : ''}`}>
                    <td className="px-5 py-4 text-sm text-[#1a1a2e] dark:text-white">{row.id}</td>
                    <td className="px-5 py-4 text-sm text-[#1a1a2e] dark:text-white">{row.title}</td>
                    <td className="px-5 py-4 text-sm text-[#4a4a6a] dark:text-[#c0c0d0]">{row.category}</td>
                    <td className="px-5 py-4 text-sm text-[#4a4a6a] dark:text-[#c0c0d0]">{row.author}</td>
                    <td className="px-5 py-4 text-sm text-[#4a4a6a] dark:text-[#c0c0d0]">{row.date}</td>
                    <td className="px-5 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColor[row.status] ?? ''}`}>{row.status}</span>
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-[#1a1a2e] dark:text-white">{row.views}</td>
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
