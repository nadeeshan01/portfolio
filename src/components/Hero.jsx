import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, ShieldCheck, ArrowRight, Server, Cloud, Cpu, Activity, CheckCircle2, Download, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenTerminal, onOpenResume, onRunPipeline }) {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Grid & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-devops-emerald/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-devops-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-devops-violet/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 backdrop-blur-md shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300">Status:</span>
              <span className="text-emerald-400 font-semibold">{personal.status}</span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
                Automating <span className="bg-gradient-to-r from-devops-emerald via-devops-cyan to-devops-sky bg-clip-text text-transparent">Infrastructure</span>.
                <br />
                Scaling Systems.
                <br />
                Engineering <span className="underline decoration-devops-emerald/60 underline-offset-8">Resilience</span>.
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-sans pt-2">
                Hello! I&apos;m <strong className="text-white font-semibold">{personal.name}</strong>, a {personal.role}. I build self-healing Kubernetes platforms, automated GitOps CI/CD pipelines, and high-performance cloud architectures.
              </p>
            </motion.div>

            {/* Key Tech Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {['Kubernetes', 'AWS & GCP', 'Terraform', 'ArgoCD GitOps', 'Docker', 'Prometheus', 'Python & Go'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800 text-xs font-mono text-slate-300 flex items-center space-x-1.5 hover:border-devops-cyan/50 hover:text-devops-cyan transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-devops-cyan"></span>
                  <span>{tech}</span>
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4 items-center"
            >
              <button
                onClick={onRunPipeline}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-devops-emerald to-devops-cyan hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-semibold text-sm flex items-center space-x-2.5 shadow-glow-emerald hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Zap className="w-4 h-4 text-slate-950 fill-current" />
                <span>Simulate CI/CD Pipeline</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-100 font-mono text-sm flex items-center space-x-2 hover:border-devops-cyan hover:text-devops-cyan transition-all"
              >
                <Terminal className="w-4 h-4 text-devops-cyan" />
                <span>Launch CLI Terminal</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-3.5 rounded-xl bg-transparent hover:bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm flex items-center space-x-2 transition-all"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Resume</span>
              </button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80"
            >
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-colors">
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-devops-emerald">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-200">{stat.label}</div>
                  <div className="text-[10px] text-slate-400 truncate">{stat.detail}</div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Profile Portrait Card with DevOps Overlays */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Portrait Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-md group"
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-devops-emerald via-devops-cyan to-devops-violet opacity-40 blur-lg group-hover:opacity-75 transition duration-500"></div>

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0D131F] border border-slate-700/80 shadow-2xl">
                
                {/* Header bar of card */}
                <div className="bg-[#151D2F] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">profile_arch.v2.jpg</span>
                  <ShieldCheck className="w-4 h-4 text-devops-emerald" />
                </div>

                {/* Profile Image */}
                <div className="relative aspect-[4/4.5] sm:aspect-[4/4.5] overflow-hidden bg-slate-900">
                  <img
                    src={personal.profileImg}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top filter contrast-105 hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Overlay Name Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display font-bold text-white text-base">{personal.name}</h3>
                        <p className="text-xs text-devops-cyan font-mono">{personal.title}</p>
                      </div>
                      <span className="px-2 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono">
                        ONLINE
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: CKA Certified */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 p-3 rounded-2xl glass-panel border border-slate-700/80 shadow-2xl flex items-center space-x-3 hidden sm:flex"
              >
                <div className="w-9 h-9 rounded-xl bg-devops-cyan/20 border border-devops-cyan/40 flex items-center justify-center text-devops-cyan">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">CKA & CKS Certified</div>
                  <div className="text-[10px] font-mono text-emerald-400">Kubernetes Security</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: AWS Solutions Architect */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-4 p-3 rounded-2xl glass-panel border border-slate-700/80 shadow-2xl flex items-center space-x-3 hidden sm:flex"
              >
                <div className="w-9 h-9 rounded-xl bg-devops-violet/20 border border-devops-violet/40 flex items-center justify-center text-devops-violet">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AWS Architect Pro</div>
                  <div className="text-[10px] font-mono text-slate-400">Multi-Region Cloud</div>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
