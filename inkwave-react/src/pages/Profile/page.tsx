// src/pages/Profile/page.tsx
import { useState } from 'react';

interface ProfileData {
  name: string;
  email: string;
  bio: string;
  location: string;
  website: string;
  role: string;
}

const initialProfile: ProfileData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Passionate reader and tech enthusiast. I love staying up to date with the latest in AI, fashion, and global politics through InkWave.',
  location: 'New York, USA',
  website: 'https://johndoe.dev',
  role: 'Premium Subscriber',
};

const recentActivity = [
  { icon: '📖', action: 'Read',      title: 'The Future of AI in 2026',    time: '2 hours ago' },
  { icon: '❤️', action: 'Liked',     title: 'Sustainable Wardrobe 101',    time: '5 hours ago' },
  { icon: '💬', action: 'Commented', title: 'Global Summit 2026',          time: '1 day ago'   },
  { icon: '🔖', action: 'Saved',     title: 'Quantum Computing Explained', time: '2 days ago'  },
  { icon: '⭐', action: 'Reviewed',  title: 'InkWave Magazine',            time: '3 days ago'  },
];

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<ProfileData>(initialProfile);
  const [saved, setSaved] = useState(false);

  function handleEdit() {
    setDraft({ ...profile });
    setEditing(true);
    setSaved(false);
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setProfile({ ...draft });
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function handleCancel() {
    setEditing(false);
    setDraft({ ...profile });
  }

  const inputClass = 'w-full px-4 py-2.5 border border-[#e0e0e0] dark:border-[#3a3a5a] rounded-lg text-sm outline-none bg-white dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:border-[#e94560] transition-colors duration-200';
  const labelClass = 'text-xs font-semibold uppercase tracking-wider text-[#888888] dark:text-[#a0a0b8]';

  return (
    <section className="py-16 bg-[#f8f9fa] dark:bg-[#0f0f1a] min-h-screen transition-colors duration-300">
      <div className="w-full max-w-[1000px] mx-auto px-5 flex flex-col gap-8">

        {/* Saved toast */}
        {saved && (
          <div className="fixed top-24 right-6 bg-[#2a9d8f] text-white px-5 py-3 rounded-xl shadow-lg font-semibold text-sm z-50">
            ✓ Profile saved successfully!
          </div>
        )}

        {/* Profile header card */}
        <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden transition-colors duration-300">
          <div className="h-32 bg-gradient-to-r from-[#1a1a2e] to-[#e94560]"></div>
          <div className="px-8 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-10 mb-6">
              <div className="w-20 h-20 rounded-full bg-[#e94560] border-4 border-white dark:border-[#1a1a2e] flex items-center justify-center text-white font-bold text-2xl shadow-lg shrink-0">
                {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <button
                onClick={editing ? handleCancel : handleEdit}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors duration-200 cursor-pointer ${editing ? 'border-2 border-[#888888] text-[#888888] hover:border-[#e94560] hover:text-[#e94560]' : 'bg-[#e94560] text-white hover:bg-[#d83550]'}`}
              >
                {editing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#1a1a2e] dark:text-white">{profile.name}</h1>
            <p className="text-[#e94560] text-sm font-semibold mt-0.5">{profile.role}</p>
            <p className="text-[#4a4a6a] dark:text-[#c0c0d0] text-sm mt-2">{profile.bio}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-[#888888] dark:text-[#a0a0b8]">
              {profile.location && <span>📍 {profile.location}</span>}
              {profile.website  && <a href={profile.website} className="text-[#e94560] hover:underline">🔗 {profile.website}</a>}
              <span>✉️ {profile.email}</span>
            </div>
          </div>
        </div>

        {/* Main content row */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left column — form + stats */}
          <div className="flex-1 flex flex-col gap-6">

            {editing ? (
              <form onSubmit={handleSave} className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-8 flex flex-col gap-5 transition-colors duration-300">
                <h2 className="font-serif text-xl font-bold text-[#1a1a2e] dark:text-white">Edit Profile</h2>

                {/* Two-column fields using flex */}
                <div className="flex flex-wrap gap-5">
                  <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                    <label className={labelClass}>Full Name</label>
                    <input type="text" className={inputClass} value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                    <label className={labelClass}>Email</label>
                    <input type="email" className={inputClass} value={draft.email} onChange={e => setDraft({ ...draft, email: e.target.value })} />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                    <label className={labelClass}>Location</label>
                    <input type="text" className={inputClass} value={draft.location} onChange={e => setDraft({ ...draft, location: e.target.value })} />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                    <label className={labelClass}>Website</label>
                    <input type="url" className={inputClass} value={draft.website} onChange={e => setDraft({ ...draft, website: e.target.value })} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Bio</label>
                  <textarea rows={4} className={`${inputClass} resize-none`} value={draft.bio} onChange={e => setDraft({ ...draft, bio: e.target.value })} />
                </div>

                <div className="flex gap-3">
                  <button type="submit" className="px-6 py-2.5 rounded-full font-semibold bg-[#e94560] text-white hover:bg-[#d83550] transition-colors duration-200 cursor-pointer">
                    Save Changes
                  </button>
                  <button type="button" onClick={handleCancel} className="px-6 py-2.5 rounded-full font-semibold border-2 border-[#e0e0e0] dark:border-[#3a3a5a] text-[#4a4a6a] dark:text-[#c0c0d0] hover:border-[#e94560] hover:text-[#e94560] transition-colors duration-200 cursor-pointer">
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-8 transition-colors duration-300">
                <h2 className="font-serif text-xl font-bold text-[#1a1a2e] dark:text-white mb-6">Profile Details</h2>
                <div className="flex flex-wrap gap-6">
                  {[
                    { label: 'Full Name', value: profile.name     },
                    { label: 'Email',     value: profile.email    },
                    { label: 'Location',  value: profile.location },
                    { label: 'Website',   value: profile.website  },
                    { label: 'Role',      value: profile.role     },
                  ].map((field, i) => (
                    <div key={i} className="flex flex-col gap-1 w-full sm:w-[calc(50%-12px)]">
                      <span className={labelClass}>{field.label}</span>
                      <span className="text-[#1a1a2e] dark:text-white text-sm font-medium">{field.value || '—'}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stats row */}
            <div className="flex gap-4">
              {[
                { number: '47', label: 'Articles Read'  },
                { number: '12', label: 'Articles Liked' },
                { number: '5',  label: 'Reviews Left'   },
              ].map((stat, i) => (
                <div key={i} className="flex-1 bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-5 text-center transition-colors duration-300">
                  <div className="font-serif text-3xl font-bold text-[#e94560]">{stat.number}</div>
                  <div className="text-xs text-[#888888] dark:text-[#a0a0b8] mt-1 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — recent activity */}
          <div className="w-full lg:w-72 shrink-0 bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-4 h-fit transition-colors duration-300">
            <h2 className="font-serif text-xl font-bold text-[#1a1a2e] dark:text-white">Recent Activity</h2>
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3 pb-4 border-b border-[#f0f0f0] dark:border-[#2a2a4a] last:border-0 last:pb-0">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#1a1a2e] dark:text-white">
                    <span className="font-semibold">{item.action}</span>{' '}
                    <span className="text-[#4a4a6a] dark:text-[#c0c0d0] truncate block">{item.title}</span>
                  </p>
                  <p className="text-xs text-[#888888] dark:text-[#a0a0b8] mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
