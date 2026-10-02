import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Heart, GitBranch, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [uptimeSeconds, setUptimeSeconds] = useState(148920);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (totalSec) => {
    const days = Math.floor(totalSec / (3600 * 24));
    const hours = Math.floor((totalSec % (3600 * 24)) / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${days}d ${hours}h ${mins}m ${secs}s`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070B] border-t border-slate-800/80 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Uptime Counter */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-devops-emerald">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-white text-base">
                Nadeeshan<span className="text-devops-cyan">.dev</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Cluster Uptime: {formatUptime(uptimeSeconds)}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center space-x-6 text-slate-300">
            <a href="#hero" className="hover:text-devops-emerald transition-colors">Overview</a>
            <a href="#architecture" className="hover:text-devops-emerald transition-colors">Architecture</a>
            <a href="#pipeline" className="hover:text-devops-emerald transition-colors">CI/CD</a>
            <a href="#projects" className="hover:text-devops-emerald transition-colors">Projects</a>
            <a href="#skills" className="hover:text-devops-emerald transition-colors">Skills</a>
            <a href="#contact" className="hover:text-devops-emerald transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center space-x-1"
          >
            <ArrowUp className="w-4 h-4 text-devops-cyan" />
            <span className="hidden sm:inline text-[11px]">Top</span>
          </button>

        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Nadeeshan. Engineered with React.js & Tailwind CSS.
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5 text-devops-emerald" />
            <span>99.99% SLA Uptime Guaranteed</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
