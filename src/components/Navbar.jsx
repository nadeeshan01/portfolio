import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Menu, X, ShieldCheck, Activity, Cpu, GitBranch, Layers, Send } from 'lucide-react';

export default function Navbar({ onOpenTerminal, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero', icon: Cpu },
    { name: 'Architecture', href: '#architecture', icon: Layers },
    { name: 'CI/CD Pipeline', href: '#pipeline', icon: GitBranch },
    { name: 'Projects', href: '#projects', icon: Activity },
    { name: 'Tech Stack', href: '#skills', icon: ShieldCheck },
    { name: 'Experience', href: '#experience', icon: Layers },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080B10]/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Uptime Badge */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-devops-emerald via-devops-cyan to-devops-violet p-[2px]">
                <div className="w-full h-full bg-[#0D131F] rounded-[10px] flex items-center justify-center group-hover:bg-[#151D2F] transition-colors">
                  <Terminal className="w-5 h-5 text-devops-emerald group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-devops-emerald transition-colors">
                  Nadeeshan<span className="text-devops-cyan">.dev</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-semibold hidden sm:inline-block">
                  SRE 99.99%
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden md:block">DevOps & Cloud Infrastructure</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 glass-panel px-4 py-1.5 rounded-full border-slate-800/60">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-devops-emerald hover:bg-slate-800/50 rounded-lg transition-all flex items-center space-x-1.5"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenTerminal}
              className="px-3.5 py-2 text-xs font-mono rounded-xl bg-slate-900 border border-slate-700/80 hover:border-devops-cyan text-slate-200 hover:text-devops-cyan transition-all flex items-center space-x-2 shadow-lg hover:shadow-devops-cyan/20 group"
            >
              <Terminal className="w-3.5 h-3.5 text-devops-cyan group-hover:rotate-12 transition-transform" />
              <span>CLI Terminal</span>
            </button>

            <button
              onClick={onOpenResume}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-devops-emerald to-devops-cyan hover:from-emerald-400 hover:to-cyan-400 text-slate-950 transition-all flex items-center space-x-2 shadow-glow-emerald hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-devops-cyan"
              title="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel mt-3 mx-4 p-5 rounded-2xl border-slate-800 space-y-4 animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-devops-emerald rounded-xl transition-colors flex items-center space-x-3"
              >
                <link.icon className="w-4 h-4 text-devops-cyan" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full py-2.5 text-xs font-semibold rounded-xl bg-devops-emerald text-slate-950 flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume / CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
