import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, X, Download, Printer, CheckCircle, Mail, MapPin, Globe, ShieldCheck, Phone } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal, experiences, certifications } = PORTFOLIO_DATA;

  const handleDownload = () => {
    // Create printable text resume download blob
    const resumeText = `
===================================================================
NADEESHAN - ${personal.title.toUpperCase()}
Email: ${personal.email} | Location: ${personal.location}
GitHub: ${personal.github} | LinkedIn: ${personal.linkedin}
===================================================================

SUMMARY:
${personal.bio}

CORE COMPETENCIES:
- Container Orchestration: Kubernetes (EKS/GKE), Docker, Helm, ArgoCD, Istio
- Infrastructure as Code: Terraform, Terragrunt, Ansible, Pulumi, CloudFormation
- CI/CD & GitOps: GitHub Actions, GitLab CI, Jenkins, ArgoCD Blue/Green
- Observability: Prometheus, Grafana, Datadog, ELK Stack, OpenTelemetry

VERIFIED CERTIFICATIONS:
${certifications.map(c => `- ${c.title} (${c.code}, ${c.year})`).join('\n')}

PROFESSIONAL EXPERIENCE:
${experiences.map(e => `
* ${e.role} | ${e.company} (${e.period})
  Location: ${e.location}
  Highlights:
  ${e.highlights.map(h => `  - ${h}`).join('\n')}
`).join('\n')}

===================================================================
Downloaded from https://nadeeshan.dev portfolio
`;
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Nadeeshan_DevOps_Cloud_Architect_CV.txt`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-3xl bg-[#0D131F] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh]">
        
        {/* Modal Header */}
        <div className="bg-[#151D2F] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white">
            <FileText className="w-5 h-5 text-devops-emerald" />
            <h3 className="font-display font-bold text-base">Curriculum Vitae / Resume Preview</h3>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-devops-emerald to-devops-cyan text-slate-950 font-semibold text-xs flex items-center space-x-2 shadow-glow-emerald"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#0B0F17] text-slate-200 font-sans">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-3xl font-display font-extrabold text-white">{personal.name}</h1>
                <p className="text-devops-cyan font-mono text-sm font-semibold">{personal.title}</p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <div className="flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-devops-emerald" />
                  <span>{personal.email}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="w-3.5 h-3.5 text-devops-cyan" />
                  <span>{personal.github}</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-300 pt-2 leading-relaxed">{personal.bio}</p>
          </div>

          {/* Certifications Section */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider text-devops-emerald border-b border-slate-800 pb-1">
              Certifications & Credentials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {certifications.map(c => (
                <div key={c.code} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-white font-semibold">{c.title}</div>
                    <div className="text-[10px] text-slate-400">Code: {c.code}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider text-devops-cyan border-b border-slate-800 pb-1">
              Work Experience
            </h3>
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-white text-sm">{exp.role}</strong>
                    <span className="text-devops-cyan font-mono ml-2">@ {exp.company}</span>
                  </div>
                  <span className="font-mono text-slate-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider text-devops-violet border-b border-slate-800 pb-1">
              Technical Skillset
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {['Kubernetes (EKS/GKE)', 'Terraform', 'ArgoCD', 'Docker', 'AWS', 'GCP', 'Prometheus', 'Grafana', 'Python', 'Go', 'Bash', 'Vault', 'Istio', 'GitHub Actions'].map(skill => (
                <span key={skill} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
