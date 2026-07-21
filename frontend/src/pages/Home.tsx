import { Link } from 'react-router-dom';
import { Camera, Upload, Search, Zap, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: 'Upload Event Photos',
    description: 'Photographers upload all event photos in bulk to a dedicated gallery.',
  },
  {
    icon: Search,
    title: 'AI Face Search',
    description: 'Guests upload a selfie and our AI instantly finds every photo they appear in.',
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Event galleries are private by default. Share only with a unique link.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Results in seconds — no manual tagging or scrolling through hundreds of photos.',
  },
  {
    icon: Camera,
    title: 'Any Event Size',
    description: 'Works for birthday parties, weddings, corporate events, and large concerts alike.',
  },
  {
    icon: Users,
    title: 'Public Share Link',
    description: 'Generate a public link so guests can find their photos without needing an account.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Create an Event',
    description: 'Sign up, create an event, and get a shareable gallery in seconds.',
  },
  {
    number: '02',
    title: 'Upload Photos',
    description: 'Upload all event photos at once. Our AI processes them automatically.',
  },
  {
    number: '03',
    title: 'Guests Find Their Photos',
    description: 'Guests visit the link, take a selfie, and instantly see every photo of themselves.',
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-bg-dark text-slate-100 font-sans overflow-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 glass-nav shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <span className="text-2xl font-extrabold text-white tracking-tight">
            Spot<span className="text-brand-yellow">Me</span>
          </span>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none rounded-xl"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2.5 text-sm font-bold bg-brand-yellow text-bg-dark rounded-xl hover:bg-brand-yellow-hover transition-all shadow-[0_4px_15px_rgba(255,214,0,0.15)] focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-32 px-4">
        {/* Ambient background glow spheres */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-yellow/5 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-15%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px] animate-pulse-slow" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-wider uppercase animate-[fade-in_0.6s_ease-out]">
            <Zap className="w-3.5 h-3.5" />
            AI-Powered Photo Finder
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8 animate-[fade-in_0.8s_ease-out]">
            Find Your Photos from{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-brand-yellow">Any Event</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-[fade-in_1s_ease-out]">
            SpotMe uses advanced face recognition to instantly find every photo you appear in — no more
            scrolling through hundreds of event photos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fade-in_1.2s_ease-out]">
            <Link
              to="/signup"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-yellow text-bg-dark font-bold rounded-xl hover:bg-brand-yellow-hover transition-all shadow-lg hover:shadow-xl hover:shadow-brand-yellow/10 active:scale-95 text-center focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none"
            >
              Start for Free
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/15 text-white font-semibold rounded-xl hover:bg-white/10 transition-all active:scale-95 text-center focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white/[0.02] border-y border-white/5 py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">Three steps, done in minutes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative bg-surface-dark/40 border border-white/5 rounded-2xl p-8 shadow-2xl flex flex-col gap-4 transition-all duration-300 hover:border-brand-yellow/30 group hover:translate-y-[-4px]"
              >
                <span className="text-5xl font-black text-brand-yellow/10 group-hover:text-brand-yellow/20 transition-colors leading-none">{step.number}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-gray-400 text-lg">Powerful features built for photographers and event organizers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-8 rounded-2xl border border-white/5 hover:border-brand-yellow/30 hover:shadow-2xl transition-all duration-300 bg-surface-dark/20 hover:translate-y-[-4px]"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/5 border border-brand-yellow/10 flex items-center justify-center mb-6 group-hover:bg-brand-yellow/20 transition-all duration-300">
                  <f.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4 relative overflow-hidden bg-brand-yellow text-bg-dark border-t border-brand-yellow/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/20 blur-[90px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-bg-dark mb-6">Ready to find your photos?</h2>
          <p className="text-bg-dark/80 text-lg sm:text-xl font-medium mb-10 max-w-xl mx-auto">
            Create a free account and set up your first event gallery in under a minute.
          </p>
          <Link
            to="/signup"
            className="inline-block px-10 py-4 bg-bg-dark text-white font-bold rounded-xl hover:bg-slate-900 transition-all shadow-2xl active:scale-95 text-lg focus-visible:ring-2 focus-visible:ring-bg-dark focus-visible:outline-none"
          >
            Get Started — It's Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-dark border-t border-white/5 py-10 px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SpotMe. All rights reserved.
      </footer>
    </div>
  );
}