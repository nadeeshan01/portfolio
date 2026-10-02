import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Layers, Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceTimeline() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-devops-violet/30 text-xs font-mono text-devops-violet">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Professional <span className="text-devops-violet">DevOps Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Track record of scaling cloud infrastructure, establishing GitOps cultures, and maintaining high-availability production environments.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto pl-4 sm:pl-0">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-devops-violet border-4 border-[#080B10] shadow-glow-violet z-10 hidden sm:block"></div>

                  {/* Card Box */}
                  <div className="w-full sm:w-[calc(50%-2rem)] bg-[#0D131F] border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-devops-violet/50 transition-colors">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <span className="px-3 py-1 rounded-full bg-slate-900 text-xs font-mono text-devops-violet font-semibold border border-slate-800">
                        {exp.period}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-slate-400 font-mono">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{exp.role}</h3>
                      <p className="text-xs font-mono text-devops-cyan mt-0.5">{exp.company}</p>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-300">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-devops-emerald shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {exp.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-400 border border-slate-800">
                          {s}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
