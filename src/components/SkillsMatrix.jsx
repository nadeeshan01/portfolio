import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ShieldCheck, Server, Cpu, GitBranch, Activity, Award, CheckCircle2 } from 'lucide-react';

export default function SkillsMatrix() {
  const { skills, certifications } = PORTFOLIO_DATA;

  const categoryIcons = {
    Server: Server,
    Cpu: Cpu,
    GitBranch: GitBranch,
    Activity: Activity
  };

  return (
    <section id="skills" className="py-20 relative bg-[#06090E]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-devops-cyan/30 text-xs font-mono text-devops-cyan">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            DevOps & Cloud <span className="text-devops-cyan">Tech Stack Matrix</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive mastery across cloud providers, container orchestration engines, infrastructure as code tools, and SRE observability frameworks.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((group, idx) => {
            const IconComp = categoryIcons[group.icon] || Server;
            return (
              <div 
                key={idx}
                className="bg-[#0D131F] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-devops-cyan">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">{group.category}</h3>
                </div>

                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-200 font-medium">{item.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-slate-400">{item.level}</span>
                          <span className="text-devops-emerald font-bold">{item.percent}%</span>
                        </div>
                      </div>
                      
                      {/* Animated Skill Bar */}
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/80">
                        <div 
                          className="h-full bg-gradient-to-r from-devops-emerald to-devops-cyan rounded-full transition-all duration-1000"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Certifications Showcase */}
        <div className="bg-[#0D131F] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
            <Award className="w-6 h-6 text-devops-emerald" />
            <div>
              <h3 className="font-display font-bold text-xl text-white">Verified Industry Certifications</h3>
              <p className="text-xs text-slate-400 font-mono">Verified AWS, CNCF, and HashiCorp Professional Accreditation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div 
                key={cert.code}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-devops-emerald/50 transition-colors flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400 mb-2">
                    <span className="flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>VERIFIED</span>
                    </span>
                    <span>{cert.year}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white leading-snug">{cert.title}</h4>
                </div>
                <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800 pt-2">
                  ID: {cert.code}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
