import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Send, Mail, Github, Linkedin, Twitter, Copy, Check, MessageSquare, Terminal } from 'lucide-react';

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#06090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-devops-emerald/30 text-xs font-mono text-devops-emerald">
                <Send className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                Let&apos;s Build Resilient <span className="text-devops-emerald">Systems Together</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you need multi-cloud infrastructure automation, Kubernetes optimization, or a Lead DevOps Architect for your team, feel free to reach out directly.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-2xl bg-[#0D131F] border border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-devops-emerald/10 text-devops-emerald">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">PRIMARY EMAIL</div>
                  <div className="text-sm font-mono text-white font-semibold">{personal.email}</div>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D131F] border border-slate-800 hover:border-devops-cyan transition-colors flex flex-col items-center justify-center space-y-2 group"
              >
                <Github className="w-5 h-5 text-slate-400 group-hover:text-devops-cyan" />
                <span className="text-xs font-mono text-slate-300">GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D131F] border border-slate-800 hover:border-devops-cyan transition-colors flex flex-col items-center justify-center space-y-2 group"
              >
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-devops-cyan" />
                <span className="text-xs font-mono text-slate-300">LinkedIn</span>
              </a>

              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D131F] border border-slate-800 hover:border-devops-cyan transition-colors flex flex-col items-center justify-center space-y-2 group"
              >
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-devops-cyan" />
                <span className="text-xs font-mono text-slate-300">Twitter / X</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0D131F] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
              <MessageSquare className="w-5 h-5 text-devops-cyan" />
              <h3 className="font-display font-bold text-lg text-white">Send Direct Dispatch Message</h3>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-2 animate-in fade-in">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-display font-bold text-white text-lg">Message Transmitted!</h4>
                <p className="text-xs text-emerald-300 font-mono">
                  Thank you for reaching out. Nadeeshan will respond to your dispatch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-devops-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@enterprise.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-devops-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-medium">PROJECT / MESSAGE DETAILS</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your DevOps infrastructure project, Kubernetes migration, or contract opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-devops-cyan transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-devops-emerald to-devops-cyan text-slate-950 font-bold font-sans text-sm flex items-center justify-center space-x-2 shadow-glow-emerald hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4 fill-current" />
                  <span>Send Message</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
