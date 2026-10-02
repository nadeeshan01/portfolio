import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Activity, ExternalLink, Github, Layers, ArrowUpRight, ShieldCheck, CheckCircle, Code, X } from 'lucide-react';

export default function ProjectsShowcase() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-devops-emerald/30 text-xs font-mono text-devops-emerald">
            <Activity className="w-3.5 h-3.5" />
            <span>DevOps Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Featured Infrastructure & <span className="text-devops-emerald">SRE Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Production-grade cloud platforms, security engines, and Kubernetes operators built for high scalability, reliability, and cost-efficiency.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#0D131F] border border-slate-800 rounded-2xl p-6 hover:border-devops-cyan/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-devops-cyan/10"
            >
              <div className="space-y-4">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-devops-cyan font-medium">
                    {project.category}
                  </span>
                  <Activity className="w-4 h-4 text-slate-500 group-hover:text-devops-emerald transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-devops-cyan transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Impact Pill */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-emerald-400">
                  <strong className="text-white">Impact:</strong> {project.impact}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-[11px] font-mono text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-devops-cyan hover:text-white flex items-center space-x-1 transition-colors font-semibold"
                >
                  <span>Inspect Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-devops-emerald hover:bg-slate-800 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Modal Inspector */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
            <div className="w-full max-w-2xl bg-[#0D131F] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono text-devops-cyan px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                  {selectedProject.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-white pt-2">{selectedProject.title}</h3>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">Project Overview</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">{selectedProject.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">Architecture Workflow</h4>
                <div className="p-4 rounded-xl bg-black/60 border border-slate-800 font-mono text-xs text-devops-emerald leading-relaxed">
                  {selectedProject.architectureSummary}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                {Object.entries(selectedProject.metrics).map(([key, val]) => (
                  <div key={key} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-slate-400 text-[10px] uppercase">{key}</div>
                    <div className="text-emerald-400 font-bold text-base mt-0.5">{val}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end space-x-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 hover:text-white flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code on GitHub</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
