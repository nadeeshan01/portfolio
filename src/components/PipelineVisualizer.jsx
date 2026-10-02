import React, { useState } from 'react';
import { GitBranch, Play, CheckCircle2, AlertCircle, RefreshCw, Terminal, Shield, Cpu, Server, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PipelineVisualizer() {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(5); // Default to completed state
  const [logs, setLogs] = useState([
    '[PIPELINE SUCCESS] Last automated build commit #a9f4b21 deployed to EKS Production cluster with zero downtime.'
  ]);

  const pipelineSteps = [
    {
      id: 1,
      title: 'Code Commit & Lint',
      tool: 'GitHub Actions',
      desc: 'Linting Terraform, Helm charts, and Dockerfiles',
      icon: GitBranch,
      logs: [
        'git checkout refs/heads/main',
        'running tflint --recursive... [PASS]',
        'running hadolint Dockerfile... [PASS]'
      ]
    },
    {
      id: 2,
      title: 'Security Scan (SAST)',
      tool: 'Trivy & SonarQube',
      desc: 'Scanning container image for CVEs and vulnerabilities',
      icon: Shield,
      logs: [
        'trivy image --severity HIGH,CRITICAL stitch-app:latest',
        '0 Critical vulnerabilities found!',
        'Signing image with Cosign keyless signatures... [OK]'
      ]
    },
    {
      id: 3,
      title: 'Container Build & ECR Push',
      tool: 'Docker Buildx',
      desc: 'Building multi-architecture Linux/AMD64 image',
      icon: Cpu,
      logs: [
        'docker buildx build --platform linux/amd64,linux/arm64 -t 12345.dkr.ecr.us-east-1.amazonaws.com/stitch-app:a9f4b21 .',
        'Pushed image layer 4a8b... [DONE]',
        'Pushed manifest list... [DONE]'
      ]
    },
    {
      id: 4,
      title: 'GitOps ArgoCD Rollout',
      tool: 'ArgoCD & Kubernetes',
      desc: 'Zero-downtime Blue/Green rolling release',
      icon: Server,
      logs: [
        'Updating GitOps repository values.yaml revision = a9f4b21',
        'ArgoCD detected state diff -> Syncing to target cluster...',
        'Scaling up new replica set 3/3 pods ready'
      ]
    },
    {
      id: 5,
      title: 'Smoke Tests & Health Check',
      tool: 'Prometheus & Grafana',
      desc: 'Verifying 200 OK responses & latency metrics',
      icon: CheckCircle2,
      logs: [
        'GET /healthz -> 200 OK (latency: 14ms)',
        'Prometheus alert manager check -> 0 alerts active',
        '[SUCCESS] Pipeline Execution Finished Cleanly in 38 seconds!'
      ]
    }
  ];

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);
    setLogs(['[START] Initiating automated CI/CD pipeline pipeline-run-#942...']);

    let currentStep = 1;
    const interval = setInterval(() => {
      currentStep += 1;
      if (currentStep <= 5) {
        setActiveStep(currentStep);
        const stepData = pipelineSteps[currentStep - 1];
        setLogs(prev => [...prev, ...stepData.logs]);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setActiveStep(5);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      }
    }, 1200);
  };

  return (
    <section id="pipeline" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-devops-cyan/30 text-xs font-mono text-devops-cyan">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Stitch GitOps Pipeline Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Automated CI/CD <span className="text-devops-emerald">Pipeline Architecture</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click the trigger button to simulate a live production push with automated SAST security scanning, multi-arch Docker build, and GitOps ArgoCD zero-downtime rollout.
          </p>
        </div>

        {/* Pipeline Container Card */}
        <div className="bg-[#0D131F] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Pipeline Steps Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {pipelineSteps.map((step) => {
              const isCompleted = activeStep > step.id || (activeStep === 5 && !isRunning);
              const isCurrent = activeStep === step.id && isRunning;
              const isPending = activeStep < step.id;

              return (
                <div 
                  key={step.id} 
                  className={`relative p-4 rounded-xl border transition-all duration-300 ${
                    isCurrent 
                      ? 'bg-devops-cyan/10 border-devops-cyan scale-[1.03] shadow-glow-cyan' 
                      : isCompleted 
                        ? 'bg-slate-900/80 border-emerald-500/50' 
                        : 'bg-slate-900/30 border-slate-800 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg ${
                      isCurrent ? 'bg-devops-cyan text-slate-950 animate-pulse' :
                      isCompleted ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' :
                      'bg-slate-800 text-slate-400'
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      STEP 0{step.id}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-white text-sm mb-1">{step.title}</h4>
                  <div className="text-[11px] font-mono text-devops-cyan mb-2">{step.tool}</div>
                  <p className="text-xs text-slate-400 leading-snug">{step.desc}</p>

                  <div className="mt-4 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="font-mono text-slate-400">Status:</span>
                    {isCurrent && <span className="text-devops-cyan font-semibold animate-pulse">Running...</span>}
                    {isCompleted && <span className="text-emerald-400 font-semibold flex items-center space-x-1"><Check className="w-3 h-3" /><span>Passed</span></span>}
                    {isPending && <span className="text-slate-400">Waiting</span>}
                  </div>
                </div>
              );
            })}

          </div>

          {/* Action & Realtime Log Console */}
          <div className="bg-[#080B10] border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <Terminal className="w-5 h-5 text-devops-emerald" />
                <div>
                  <h4 className="font-mono text-sm font-bold text-white">Live Pipeline Console Output</h4>
                  <p className="text-xs text-slate-400">Real-time log stream from GitHub Actions & ArgoCD</p>
                </div>
              </div>

              <button
                onClick={runSimulation}
                disabled={isRunning}
                className={`px-5 py-2.5 rounded-xl font-semibold text-xs font-mono flex items-center justify-center space-x-2 transition-all ${
                  isRunning 
                    ? 'bg-slate-800 text-slate-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-devops-emerald to-devops-cyan text-slate-950 hover:opacity-90 shadow-glow-emerald hover:scale-105'
                }`}
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Executing Step 0{activeStep}/05...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Trigger Pipeline Run</span>
                  </>
                )}
              </button>
            </div>

            {/* Log Output Box */}
            <div className="bg-black/60 p-4 rounded-lg font-mono text-xs text-slate-300 max-h-40 overflow-y-auto space-y-1 scanline">
              {logs.map((log, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <span className="text-devops-emerald font-bold">&gt;</span>
                  <span className={log.includes('[SUCCESS]') || log.includes('0 Critical') ? 'text-emerald-400 font-semibold' : ''}>
                    {log}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
