// src/pages/About/page.tsx

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alexandra Reed',  role: 'Editor-in-Chief',       bio: 'With 15 years in digital journalism, Alexandra leads InkWave\'s editorial vision and ensures every story meets our highest standards.',          initials: 'AR', color: 'bg-[#e94560]' },
  { name: 'Marcus Johnson',  role: 'Head of Technology',    bio: 'Marcus covers the bleeding edge of tech — from AI breakthroughs to quantum computing. Former engineer turned storyteller.',                      initials: 'MJ', color: 'bg-[#1a1a2e]' },
  { name: 'Priya Nair',      role: 'Fashion Director',      bio: 'Priya brings a global perspective to fashion coverage, having reported from Paris, Milan, and Tokyo fashion weeks for over a decade.',            initials: 'PN', color: 'bg-[#f5a623]' },
  { name: 'David Osei',      role: 'Sports Editor',         bio: 'A former professional athlete, David brings unmatched insider knowledge to InkWave\'s sports coverage and analysis.',                           initials: 'DO', color: 'bg-[#2a9d8f]' },
  { name: 'Sofia Martinez',  role: 'Health & Wellness Lead', bio: 'Sofia is a certified nutritionist and wellness writer who translates complex health science into practical, readable advice.',                  initials: 'SM', color: 'bg-[#e76f51]' },
  { name: 'James Park',      role: 'Politics Correspondent', bio: 'James has covered three presidential elections and multiple international summits. His analysis is trusted by readers worldwide.',              initials: 'JP', color: 'bg-[#457b9d]' },
  { name: 'Amara Diallo',    role: 'Entertainment Writer',  bio: 'From blockbusters to indie gems, Amara\'s reviews and cultural commentary have earned her a loyal following of cinephiles and music lovers.',   initials: 'AD', color: 'bg-[#6a4c93]' },
  { name: 'Ryan Chen',       role: 'Lead Developer',        bio: 'Ryan built and maintains the InkWave platform, ensuring a seamless reading experience across all devices and screen sizes.',                     initials: 'RC', color: 'bg-[#1d3557]' },
];

const milestones = [
  { year: '2018', event: 'InkWave founded with a team of 3 journalists' },
  { year: '2019', event: 'Reached 100,000 monthly readers' },
  { year: '2021', event: 'Launched mobile app — 500K downloads in first month' },
  { year: '2023', event: 'Won "Best Digital Magazine" at the Press Awards' },
  { year: '2025', event: 'Expanded to 12 content categories globally' },
  { year: '2026', event: '8.5 million monthly readers and growing' },
];

export default function About() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0f0f1a] min-h-screen transition-colors duration-300">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] text-white py-24 px-5">
        <div className="w-full max-w-[800px] mx-auto text-center flex flex-col gap-5">
          <h1 className="font-serif text-5xl font-bold leading-tight">About InkWave</h1>
          <p className="text-xl text-[#e0e0e0] font-light leading-relaxed">
            We believe great journalism changes minds, sparks conversations, and shapes the future.
            InkWave is where stories that matter find their voice.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-5">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '✍️', title: 'Our Mission',  text: 'To deliver accurate, engaging, and impactful journalism that informs and inspires readers across the globe.' },
              { icon: '👁️', title: 'Our Vision',   text: 'A world where quality journalism is accessible to everyone — free from bias, rich in depth, and driven by truth.' },
              { icon: '💡', title: 'Our Values',   text: 'Integrity, curiosity, inclusivity, and excellence. These four pillars guide every article, every headline, every word.' },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-8 text-center flex flex-col gap-4 transition-colors duration-300">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-[#1a1a2e] dark:text-white">{item.title}</h3>
                <p className="text-[#4a4a6a] dark:text-[#c0c0d0] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-5 bg-[#1a1a2e] dark:bg-[#0a0a15]">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: '8.5M+', label: 'Monthly Readers'  },
            { number: '2,300+', label: 'Subscribers'     },
            { number: '124+',  label: 'Articles Monthly' },
            { number: '12',    label: 'Categories'       },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="font-serif text-4xl font-bold text-[#e94560]">{stat.number}</div>
              <div className="text-[#c0c0d0] text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-5">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-10">
          <div className="text-center">
            <h2 className="font-serif text-4xl text-[#1a1a2e] dark:text-white mb-3">Meet the Team</h2>
            <span className="block w-16 h-[3px] bg-[#e94560] mx-auto mb-4"></span>
            <p className="text-[#4a4a6a] dark:text-[#c0c0d0] max-w-xl mx-auto">
              The passionate journalists, editors, and creators behind every InkWave story.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-6 flex flex-col items-center gap-4 text-center border-2 border-transparent hover:border-[#e94560] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Photo placeholder */}
                <div className={`w-20 h-20 rounded-full ${member.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1a1a2e] dark:text-white">{member.name}</h3>
                  <p className="text-[#e94560] text-xs font-semibold uppercase tracking-wide mt-0.5">{member.role}</p>
                </div>
                <p className="text-[#4a4a6a] dark:text-[#c0c0d0] text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-5 bg-white dark:bg-[#1a1a2e] transition-colors duration-300">
        <div className="w-full max-w-[700px] mx-auto flex flex-col gap-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl text-[#1a1a2e] dark:text-white mb-3">Our Journey</h2>
            <span className="block w-16 h-[3px] bg-[#e94560] mx-auto"></span>
          </div>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#e94560] flex items-center justify-center text-white font-bold text-xs shrink-0">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-10 bg-[#e0e0e0] dark:bg-[#3a3a5a]"></div>}
                </div>
                <div className="pt-3 pb-8">
                  <p className="text-[#1a1a2e] dark:text-white font-medium">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
