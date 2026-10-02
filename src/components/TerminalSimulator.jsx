import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Copy, Check, Play, RefreshCw, ChevronRight } from 'lucide-react';

export default function TerminalSimulator({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'Stitch Editorial DevOps Terminal v2.4.0 (x86_64-pc-linux-gnu)' },
    { type: 'sys', text: 'Type "help" or click one of the quick command buttons below.' },
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const commandResponses = {
    help: `Available CLI Commands:
  • kubectl get pods -A     - List active Kubernetes pods across namespaces
  • terraform plan         - Execute IaC dry run for AWS infrastructure
  • gitops sync            - Trigger ArgoCD GitOps deployment sync
  • aws status             - Check AWS Multi-Region cluster status
  • whoami                 - Display SRE Engineer profile metadata
  • cat resume.json        - Print JSON representation of background
  • clear                  - Clear terminal history`,

    'kubectl get pods -A': `NAMESPACE       NAME                                         READY   STATUS    RESTARTS   AGE
kube-system     coredns-674b8bbf47-9x2ql                    1/1     Running   0          42d
kube-system     aws-k8s-cni-5p6lk                           1/1     Running   0          42d
ingress-nginx   ingress-nginx-controller-7f4d8b9d9-zx9qw    1/1     Running   0          18d
production      stitch-api-v2-7b89d4c94f-k2l8x              3/3     Running   0          5d
production      stitch-api-v2-7b89d4c94f-m9p2w              3/3     Running   0          5d
production      redis-cluster-0                             1/1     Running   0          12d
argocd          argocd-server-5d6664d49d-v7n5p              1/1     Running   0          30d
monitoring      prometheus-k8s-0                            2/2     Running   0          30d

[OK] All 8 pods running cleanly. Cluster Health: 100% HEALTHY`,

    'terraform plan': `Terraform v1.9.5
on linux_amd64
Initializing provider plugins...
- Reusing previous version of hashicorp/aws v5.70.0
- Reusing previous version of hashicorp/kubernetes v2.32.0

Terraform will perform the following actions:

  # aws_eks_cluster.production_us_east will be updated in-place
  ~ resource "aws_eks_cluster" "production_us_east" {
        name     = "stitch-prod-us-east-1"
      ~ version  = "1.29" -> "1.30"
        # (9 attributes unchanged)
    }

Plan: 0 to add, 1 to change, 0 to destroy.
[SUCCESS] Infrastructure specification matches target state. 0 drift detected.`,

    'gitops sync': `[ArgoCD Sync Manager]
Repository: https://github.com/nadeeshan01/enterprise-eks-gitops
Revision: main (commit a9f4b21)
Syncing target application: stitch-prod-stack...

Step 1/3: Validating Kustomize manifests... [DONE]
Step 2/3: Applying secrets via SealedSecrets controller... [DONE]
Step 3/3: Performing zero-downtime rolling update... [DONE]

[OK] ArgoCD Sync Complete! Revision a9f4b21 deployed with 0 downtime.`,

    'aws status': `AWS Multi-Region Infrastructure Status:
• Region us-east-1 (N. Virginia)  : ACTIVE (EKS Cluster: 12 nodes, RDS Aurora: Primary)
• Region eu-west-1 (Ireland)     : ACTIVE (EKS Cluster: 8 nodes, RDS Aurora: Replica)
• Region ap-southeast-1 (Singapore): ACTIVE (Cloudflare Edge Cache + Route53 Routing)
• Global Latency                 : 28ms Avg
• Security Compliance            : SOC2 Type II Verified`,

    whoami: `User: Nadeeshan
Role: Lead DevOps & Cloud Infrastructure Engineer
Specialties: Kubernetes, Terraform, AWS/GCP, GitOps, SRE, Python/Go
Location: Global / Remote
Status: Ready for High-Impact DevOps Projects`,

    'cat resume.json': `{
  "name": "Nadeeshan",
  "role": "DevOps & Cloud Architect",
  "certifications": ["CKA", "CKS", "AWS Solutions Architect Pro", "Terraform Associate"],
  "experience_years": 4+,
  "skills": ["Kubernetes", "AWS", "Terraform", "ArgoCD", "Docker", "Prometheus", "Python", "Go"],
  "availability": "Immediate"
}`
  };

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output = commandResponses[trimmed] || `Command not found: ${trimmed}. Type "help" for a list of available commands.`;
    
    setHistory(prev => [
      ...prev,
      { type: 'input', text: cmdStr },
      { type: 'output', text: output }
    ]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const copyTerminalContent = () => {
    const text = history.map(h => h.text).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-4xl bg-[#0D131F] border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh]">
        
        {/* Terminal Header */}
        <div className="bg-[#151D2F] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity" />
              <div className="w-3 h-3 rounded-full bg-amber-500 opacity-60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-60" />
            </div>
            <span className="text-xs font-mono text-slate-300 ml-2 flex items-center space-x-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-devops-cyan" />
              <span>nadeeshan@stitch-devops-shell:~</span>
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={copyTerminalContent}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center space-x-1 font-mono"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Logs'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 hover:text-rose-400 text-slate-400 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Launcher Bar */}
        <div className="bg-[#0A0E17] px-4 py-2 border-b border-slate-800/80 flex items-center space-x-2 overflow-x-auto text-xs font-mono">
          <span className="text-slate-400 font-semibold whitespace-nowrap">Quick Run:</span>
          {['kubectl get pods -A', 'terraform plan', 'gitops sync', 'aws status', 'whoami'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-devops-cyan hover:border-devops-cyan/50 whitespace-nowrap transition-colors"
            >
              $ {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto scanline space-y-2 bg-[#080B10]"
        >
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              {item.type === 'input' ? (
                <div className="flex items-center space-x-2 text-devops-cyan">
                  <span className="text-emerald-400 font-bold">nadeeshan@devops:~$</span>
                  <span className="text-white font-semibold">{item.text}</span>
                </div>
              ) : (
                <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed font-mono">
                  {item.text}
                </pre>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center space-x-2 pt-1">
            <span className="text-emerald-400 font-bold">nadeeshan@devops:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-slate-600 focus:ring-0 text-xs sm:text-sm"
              placeholder="Type command here (e.g. kubectl get pods -A)..."
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer */}
        <div className="bg-[#151D2F] px-4 py-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Session: Active (TTY/1)</span>
          <span className="text-emerald-400 flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>CLI Online</span>
          </span>
        </div>

      </div>
    </div>
  );
}
