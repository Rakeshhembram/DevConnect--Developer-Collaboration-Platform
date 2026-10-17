import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

const features = [
  {
    title: 'Developer profiles',
    desc: 'Showcase your skills, biography, GitHub links, and portfolio projects in one professional profile.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Project showcase',
    desc: 'Share your work, discover inspiring projects, and get feedback from fellow developers.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
    color: 'from-violet-500 to-blue-500',
  },
  {
    title: 'Team matching',
    desc: 'Find teammates with complementary skills for hackathons, startups, and open-source projects.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
    color: 'from-pink-500 to-violet-500',
  },
  {
    title: 'Real-time chat',
    desc: 'Connect directly with developers and coordinate your next collaboration.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    color: 'from-emerald-400 to-cyan-400',
  },
];

const people = [
  { initials: 'AK', name: 'Alex Kumar', role: 'Full-stack developer', color: 'bg-blue-600' },
  { initials: 'SR', name: 'Sarah Roy', role: 'AI / ML engineer', color: 'bg-violet-600' },
  { initials: 'JM', name: 'Jordan Miller', role: 'Frontend developer', color: 'bg-pink-600' },
];

const skills = ['React', 'Node.js', 'Python', 'TypeScript'];

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <main className="peer-home relative isolate min-h-screen overflow-hidden bg-[#050918] text-white">
      <style>{`
        .peer-home { color-scheme: dark; }
        .peer-home .hero-glow { filter: blur(80px); pointer-events: none; }
        .peer-home .dot-grid {
          background-image: radial-gradient(rgba(91,123,255,.34) 1px, transparent 1px);
          background-size: 22px 22px;
          mask-image: linear-gradient(to bottom, black, transparent 88%);
        }
        .peer-home .glass {
          background: linear-gradient(145deg, rgba(15,25,57,.96), rgba(7,13,34,.97));
          border: 1px solid rgba(92,133,255,.3);
          box-shadow: 0 24px 90px rgba(0,30,160,.24), inset 0 1px rgba(255,255,255,.04);
        }
        .peer-home .feature-card {
          background: linear-gradient(145deg, rgba(13,26,62,.88), rgba(7,15,39,.96));
          border: 1px solid rgba(50,93,205,.5);
          transition: transform .25s ease, border-color .25s ease, background .25s ease;
        }
        .peer-home .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(113,139,255,.9);
          background: linear-gradient(145deg, rgba(20,35,80,.96), rgba(9,18,47,.98));
        }
        .peer-home .gradient-text {
          background: linear-gradient(95deg, #22b8ff 0%, #6175ff 45%, #d43cff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .peer-home .gradient-button {
          background: linear-gradient(100deg, #3878ff, #693cff 56%, #d43df3);
          box-shadow: 0 8px 28px rgba(75,70,255,.28);
          transition: transform .2s ease, filter .2s ease;
        }
        .peer-home .gradient-button:hover { transform: translateY(-2px); filter: brightness(1.12); }
        @media (prefers-reduced-motion: reduce) {
          .peer-home *, .peer-home *::before, .peer-home *::after { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* Ambient background decoration */}
      <div aria-hidden="true" className="hero-glow absolute -left-28 top-24 -z-10 h-72 w-72 rounded-full bg-blue-700/40" />
      <div aria-hidden="true" className="hero-glow absolute right-[-100px] top-28 -z-10 h-80 w-80 rounded-full bg-fuchsia-600/30" />
      <div aria-hidden="true" className="dot-grid absolute inset-x-0 top-0 -z-10 h-[620px] opacity-60" />
      <div aria-hidden="true" className="hero-glow absolute bottom-24 left-[35%] -z-10 h-64 w-96 rounded-full bg-violet-700/25" />

      {/* Header: kept inside this page so the mockup matches as closely as possible 
      <header className="relative z-20 border-b border-white/[0.06]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center gap-3" aria-label="DevConnect 
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-blue-600 to-violet-600 text-sm font-extrabold shadow-lg shadow-blue-500/25">
              DC
            </span>
            <span className="text-lg font-bold tracking-tight sm:text-xl">DevConnect</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#community" className="transition hover:text-white">Community</a>
          </div>

          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="mr-1 hidden text-lg text-slate-300 sm:inline">☾</span>
            {isAuthenticated ? (
              <Link to="/dashboard" className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                Dashboard
              </Link>
            ) : (
              <>
                <Link to="/login" className="rounded-xl border border-blue-400/20 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-blue-300/50 hover:bg-white/5">
                  Log in
                </Link>
                <Link to="/register" className="gradient-button rounded-xl px-4 py-2.5 text-sm font-semibold text-white">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>*/}

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:px-10 lg:pb-20 lg:pt-16">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/[0.08] px-4 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-blue-200 sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            A community built for developers
          </div>

          <h1 className="mt-7 max-w-2xl text-5xl font-extrabold leading-[1.03] tracking-[-.045em] sm:text-6xl lg:text-[4.1rem] xl:text-7xl">
            Don’t just code.
            <br />
            <span className="gradient-text">Build together.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/80 sm:text-lg sm:leading-8">
            Discover talented developers, showcase your projects, and find the right people to turn your ideas into reality. Your next great collaboration starts here.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {isAuthenticated ? (
              <>
                <Link to="/feed" className="gradient-button inline-flex items-center rounded-xl px-6 py-3.5 text-sm font-bold text-white">
                  Explore Feed <span className="ml-2">→</span>
                </Link>
                <Link to="/dashboard" className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link to="/register" className="gradient-button inline-flex items-center rounded-xl px-6 py-3.5 text-sm font-bold text-white">
                  Get Started Free <span className="ml-2">→</span>
                </Link>
                <Link to="/login" className="inline-flex items-center rounded-xl border border-indigo-300/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-400/10">
                  Log In
                </Link>
              </>
            )}
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {[
                ['AK', 'bg-sky-500'],
                ['SR', 'bg-pink-500'],
                ['JM', 'bg-violet-500'],
                ['PD', 'bg-emerald-500'],
              ].map(([initials, color]) => (
                <span key={initials} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#050918] ${color} text-[11px] font-extrabold text-white`}>
                  {initials}
                </span>
              ))}
            </div>
            <span className="border-l border-blue-300/25 pl-4 text-xs leading-5 text-blue-100/90 sm:text-sm">
              One community.
              <br />
              Endless possibilities.
            </span>
          </div>
        </div>

        {/* Decorative product dashboard preview */}
        <div className="relative mx-auto w-full max-w-[610px]">
          <div aria-hidden="true" className="hero-glow absolute -inset-5 -z-10 rounded-[2rem] bg-blue-600/40" />
          <div className="glass relative overflow-hidden rounded-[22px] p-3 sm:p-4">
            <div className="flex items-center gap-3 border-b border-white/10 px-2 pb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-700 text-xs font-black">DC</span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold">DevConnect</p>
                <p className="mt-0.5 text-[10px] text-slate-500">Developer workspace</p>
              </div>
              <div className="hidden min-w-0 flex-[1.5] rounded-lg border border-white/10 bg-[#050b20] px-3 py-2 text-[10px] text-slate-500 sm:block">
               ⌕ &nbsp; Search developers, projects, or skills...
              </div>
              <span className="text-sm text-blue-200">♧</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-rose-500 text-[10px] font-bold text-slate-900">RK</span>
            </div>

            <div className="grid grid-cols-[82px_1fr] gap-3 pt-3 sm:grid-cols-[105px_1fr]">
              <aside className="space-y-1 border-r border-white/[0.06] pr-2 text-[10px] text-slate-400 sm:text-xs">
                {[
                  ['⌂', 'Home', true],
                  ['▤', 'Feed', false],
                  ['♙', 'Developers', false],
                  ['▣', 'Projects', false],
                  ['▱', 'Messages', false],
                  ['⌘', 'Teams', false],
                  ['⚙', 'Settings', false],
                ].map(([symbol, label, active]) => (
                  <div key={label} className={`flex items-center gap-1.5 rounded-md px-2 py-2 ${active ? 'bg-blue-600/40 font-semibold text-white' : ''}`}>
                    <span>{symbol}</span><span>{label}</span>
                  </div>
                ))}
              </aside>

              <div className="min-w-0 pb-1">
                <div className="mb-4">
                  <p className="text-sm font-bold sm:text-base">Good morning, developer!</p>
                  <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">Keep building, keep growing.</p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    ['12', 'Connections'],
                    ['5', 'Projects'],
                    ['3', 'Team requests'],
                  ].map(([number, label]) => (
                    <div key={label} className="rounded-lg border border-blue-300/[0.08] bg-blue-500/[0.09] p-2 sm:p-3">
                      <p className="text-lg font-extrabold sm:text-xl">{number}</p>
                      <p className="mt-1 text-[9px] leading-3 text-blue-100/80 sm:text-[10px]">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-[1.2fr_.8fr]">
                  <div className="rounded-xl border border-white/[0.08] bg-blue-500/[0.07] p-3">
                    <p className="text-[10px] font-bold">Featured project</p>
                    <div className="mt-3 flex gap-2">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-700 text-lg">✣</div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold sm:text-xs">AI Innovation Lab</p>
                        <p className="mt-1 text-[9px] leading-4 text-slate-400">Building the next generation of intelligent applications.</p>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {['React', 'Node.js', 'Python'].map((skill) => (
                        <span key={skill} className="rounded-md bg-blue-600/30 px-2 py-1 text-[9px] text-blue-100">{skill}</span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-white/[0.08] pt-3">
                      <div className="flex -space-x-1.5">
                        {people.map((person) => <span key={person.initials} className={`flex h-5 w-5 items-center justify-center rounded-full border border-[#101a39] ${person.color} text-[7px] font-bold`}>{person.initials}</span>)}
                      </div>
                      <span className="rounded-md bg-blue-600/50 px-2 py-1 text-[9px] font-semibold">View project →</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                    <p className="text-[10px] font-bold">Recent activity</p>
                    {[
                      ['SR', 'Sarah Roy liked your project', '2 hours ago', 'bg-pink-500'],
                      ['AK', 'Alex sent a team request', '4 hours ago', 'bg-blue-500'],
                      ['✉', 'You received a new message', '6 hours ago', 'bg-violet-500'],
                    ].map(([initials, message, time, color]) => (
                      <div key={message} className="mt-4 flex gap-2">
                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${color} text-[8px] font-bold`}>{initials}</span>
                        <div className="min-w-0">
                          <p className="text-[9px] leading-4 text-slate-200">{message}</p>
                          <p className="mt-1 text-[8px] text-slate-500">{time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -right-3 top-16 -z-10 hidden h-44 w-5 rotate-12 rounded-full bg-gradient-to-b from-blue-500/70 to-violet-600/30 blur-[1px] sm:block" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative px-5 pb-10 pt-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-blue-400">Everything you need</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your developer journey,
              <br className="hidden sm:block" /> all in one place.
            </h2>
            <p className="mt-3 text-sm leading-6 text-blue-100/70 sm:text-base">
              The tools to meet people, share your work, and make meaningful things happen together.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card rounded-2xl p-5 sm:p-6">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold sm:text-lg">{feature.title}</h3>
                <p className="mt-2 text-xs leading-5 text-blue-100/80 sm:text-sm sm:leading-6">{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community call-to-action */}
      <section id="community" className="px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl border border-blue-300/20 bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 px-6 py-6 shadow-[0_15px_60px_rgba(50,50,200,.2)] sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="text-4xl">🚀</span>
            <div>
              <h2 className="text-lg font-extrabold sm:text-xl">Your next big idea needs a team.</h2>
              <p className="mt-1 text-xs leading-5 text-white/85 sm:text-sm">
                Meet people who share your ambition and start building something worth sharing.
              </p>
            </div>
          </div>
          {isAuthenticated ? (
            <Link to="/developers" className="shrink-0 rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-950 transition hover:bg-blue-50">
              Find developers →
            </Link>
          ) : (
            <Link to="/register" className="shrink-0 rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-950 transition hover:bg-blue-50">
              Join the Community →
            </Link>
          )}
        </div>
      </section>

      <footer className="mt-4 border-t border-white/10 bg-[#050817]/80 px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 text-xs text-blue-100/65 sm:flex-row">
          <span>© {new Date().getFullYear()} DevConnect</span>
          <span>Connect. Create. Collaborate.</span>
        </div>
      </footer>
    </main>
  );
}
