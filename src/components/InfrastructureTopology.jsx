import React, { useState } from 'react';
import { Layers, ShieldCheck, Server, Database, Activity, Cpu, Cloud, Radio, Check, ChevronRight } from 'lucide-react';

export default function InfrastructureTopology() {
  const [selectedNode, setSelectedNode] = useState('eks');

  const nodes = [
    {
      id: 'cloudflare',
      name: 'Cloudflare Enterprise WAF',
      type: 'CDN & Edge Security',
      status: 'Healthy (0 Threats)',
      latency: '12ms Avg',
      uptime: '100%',
      icon: Cloud,
      details: 'Filters 100% of malicious bot traffic, provides global SSL/TLS termination, and caches static assets at 300+ edge PoPs worldwide.'
    },
    {
      id: 'alb',
      name: 'AWS ALB Ingress Controller',
      type: 'Multi-AZ Load Balancer',
      status: 'Active (3 Subnets)',
      latency: '4ms',
      uptime: '99.99%',
      icon: Radio,
      details: 'Distributes traffic across 3 Availability Zones with automated health checks, path-based routing, and AWS Shield DDoS protection.'
    },
    {
      id: 'eks',
      name: 'EKS Production Cluster',
      type: 'Kubernetes 1.30 Core',
      status: '12 Pod Replicas',
      latency: '2ms Pod-to-Pod',
      uptime: '99.99%',
      icon: Server,
      details: 'Automated multi-tenant EKS cluster managed via Terraform. Integrates Istio Service Mesh for mutual TLS (mTLS) and fine-grained traffic splitting.'
    },
    {
      id: 'vault',
      name: 'HashiCorp Vault Enterprise',
      type: 'Zero-Trust Secrets Engine',
      status: 'Locked & Sealed',
      latency: '1ms',
      uptime: '99.999%',
      icon: ShieldCheck,
      details: 'Dynamic database credentials generation, TLS cert renewal via Cert-Manager, and KMS key envelope encryption.'
    },
    {
      id: 'aurora',
      name: 'AWS Aurora PostgreSQL',
      type: 'Multi-AZ DB Cluster',
      status: 'Primary + 2 Replicas',
      latency: '3ms Read / 8ms Write',
      uptime: '99.99%',
      icon: Database,
      details: 'Automated failover within 15 seconds. Point-in-time recovery, automated snapshot backups to AWS S3 Glacier.'
    },
    {
      id: 'monitoring',
      name: 'Prometheus & Grafana Stack',
      type: 'Observability & SRE Alerting',
      status: 'Scraping 450 Metrics/s',
      latency: 'Realtime',
      uptime: '99.95%',
      icon: Activity,
      details: 'High-cardinality metric collection, synthetic uptime checks, automated Slack/PagerDuty escalation rules.'
    }
  ];

  const activeNode = nodes.find(n => n.id === selectedNode) || nodes[2];

  return (
    <section id="architecture" className="py-20 relative bg-[#06090E]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-devops-violet/30 text-xs font-mono text-devops-violet">
            <Layers className="w-3.5 h-3.5" />
            <span>Cloud Infrastructure Topology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            High-Availability <span className="text-devops-cyan">Cloud Architecture</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click on any component node in the architecture topology below to inspect its operational metrics, SLA guarantees, and security policies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Topology Node Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nodes.map((node) => {
              const isSelected = node.id === selectedNode;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 relative group ${
                    isSelected
                      ? 'bg-slate-900 border-devops-cyan shadow-glow-cyan scale-[1.02]'
                      : 'bg-[#0D131F]/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${
                      isSelected ? 'bg-devops-cyan text-slate-950' : 'bg-slate-800 text-devops-cyan'
                    }`}>
                      <node.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                      {node.uptime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-white text-base group-hover:text-devops-cyan transition-colors">
                    {node.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{node.type}</p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span>{node.status}</span>
                    <span className="text-devops-emerald">{node.latency}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Node Detail Inspector Panel */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border-slate-800 space-y-6 sticky top-28">
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
              <div className="p-3 rounded-xl bg-devops-cyan/10 border border-devops-cyan/30 text-devops-cyan">
                <activeNode.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">{activeNode.name}</h3>
                <span className="text-xs font-mono text-devops-cyan">{activeNode.type}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-slate-400 text-[10px]">OPERATIONAL SLA</div>
                <div className="text-emerald-400 font-bold text-sm mt-0.5">{activeNode.uptime}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-slate-400 text-[10px]">AVG LATENCY</div>
                <div className="text-devops-cyan font-bold text-sm mt-0.5">{activeNode.latency}</div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Architecture Overview</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">{activeNode.details}</p>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <h4 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Security & Provisioning</h4>
              <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Managed via Infrastructure as Code (Terraform)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SOC2 & CIS Kubernetes Benchmark Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Prometheus Metrics Scraping Active</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
