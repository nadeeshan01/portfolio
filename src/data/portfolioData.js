export const PORTFOLIO_DATA = {
  personal: {
    name: "Nadeeshan",
    role: "DevOps & Cloud Infrastructure Engineer",
    title: "Senior SRE & Cloud Architect",
    bio: "Specializing in automated cloud infrastructure, Kubernetes orchestration, zero-downtime GitOps deployments, and high-availability systems with 99.99% SLA reliability.",
    location: "Global / Remote",
    status: "Available for High-Impact DevOps & Cloud Roles",
    email: "contact@nadeeshan.dev",
    github: "https://github.com/nadeeshan01",
    linkedin: "https://linkedin.com/in/nadeeshan",
    twitter: "https://x.com/nadeeshan_devops",
    profileImg: "/profile.jpg",
    stats: [
      { label: "Infrastructure SLA", value: "99.99%", detail: "High Availability across Multi-Cloud" },
      { label: "Deploy Time Reduced", value: "-75%", detail: "Automated via GitOps & ArgoCD" },
      { label: "K8s Clusters Managed", value: "45+", detail: "Production Multi-Tenant Clusters" },
      { label: "Cost Optimization", value: "35%", detail: "FinOps & Spot Instance Strategies" }
    ]
  },
  skills: [
    {
      category: "Container Orchestration & Cloud",
      icon: "Server",
      items: [
        { name: "Kubernetes (EKS/GKE)", level: "Expert", percent: 95 },
        { name: "AWS / GCP Infrastructure", level: "Expert", percent: 92 },
        { name: "Docker & Container Security", level: "Expert", percent: 96 },
        { name: "Helm / Kustomize", level: "Advanced", percent: 90 }
      ]
    },
    {
      category: "Infrastructure as Code (IaC)",
      icon: "Cpu",
      items: [
        { name: "Terraform & Terragrunt", level: "Expert", percent: 94 },
        { name: "Ansible Automation", level: "Advanced", percent: 88 },
        { name: "AWS CloudFormation", level: "Advanced", percent: 85 },
        { name: "Pulumi (TypeScript/Go)", level: "Intermediate", percent: 78 }
      ]
    },
    {
      category: "CI/CD & GitOps Automation",
      icon: "GitBranch",
      items: [
        { name: "ArgoCD / FluxCD", level: "Expert", percent: 94 },
        { name: "GitHub Actions Workflows", level: "Expert", percent: 96 },
        { name: "GitLab CI Pipelines", level: "Advanced", percent: 90 },
        { name: "Jenkins Enterprise", level: "Advanced", percent: 85 }
      ]
    },
    {
      category: "Observability & SRE",
      icon: "Activity",
      items: [
        { name: "Prometheus & Grafana", level: "Expert", percent: 95 },
        { name: "Datadog / OpenTelemetry", level: "Advanced", percent: 88 },
        { name: "ELK / Vector Logging", level: "Advanced", percent: 86 },
        { name: "Chaos Engineering (Gremlin)", level: "Intermediate", percent: 80 }
      ]
    }
  ],
  projects: [
    {
      id: "gitops-k8s-platform",
      title: "Enterprise Multi-Region EKS Platform",
      category: "Cloud Infrastructure & GitOps",
      description: "Designed and provisioned automated multi-tenant Kubernetes clusters across 3 AWS regions using Terraform, ArgoCD, and Istio Service Mesh with automated failover.",
      impact: "Reduced cluster bootstrap time from 4 days to 18 minutes; achieved 99.99% uptime during regional outages.",
      tags: ["AWS EKS", "Terraform", "ArgoCD", "Istio", "Prometheus", "Vault"],
      metrics: { uptime: "99.99%", costSavings: "$120k/yr", deployTime: "< 5 mins" },
      github: "https://github.com/nadeeshan01/enterprise-eks-gitops",
      live: "https://eks-demo.nadeeshan.dev",
      architectureSummary: "AWS EKS Clusters -> Istio Gateway -> HashiCorp Vault Secrets -> ArgoCD Rollouts -> Prometheus/Grafana Stack"
    },
    {
      id: "zero-trust-sec-pipeline",
      title: "Zero-Trust CI/CD Security Pipeline Engine",
      category: "DevSecOps & Automation",
      description: "Built end-to-end security scanner integration into GitHub Actions with Trivy, SonarQube, and Cosign binary image signing to prevent vulnerable deployments.",
      impact: "Eliminated 100% of critical container vulnerabilities before production deployment.",
      tags: ["GitHub Actions", "Trivy", "Cosign", "SonarQube", "Docker", "Python"],
      metrics: { securityScore: "A+", scanSpeed: "42s", blockedVulnerabilities: "140+" },
      github: "https://github.com/nadeeshan01/devsecops-pipeline-engine",
      live: "https://sec-pipeline.nadeeshan.dev",
      architectureSummary: "Developer Push -> SonarQube SAST -> Trivy CVE Scan -> Cosign Signature -> ECR Registry"
    },
    {
      id: "finops-cost-optimizer",
      title: "Automated Cloud FinOps & Spot Instance Scaler",
      category: "Cloud Economics & Automation",
      description: "Developed an autonomous Kubernetes operator in Go to intelligently migrate non-critical workloads to AWS Spot instances with fallback nodes.",
      impact: "Cut monthly AWS EC2 infrastructure expenditure by 38% without sacrificing reliability.",
      tags: ["Go", "Kubernetes Operator", "AWS EC2 Spot", "Metrics-Server", "Grafana"],
      metrics: { costSavings: "38%", spotRatio: "82%", fallbackDowntime: "0s" },
      github: "https://github.com/nadeeshan01/k8s-finops-spot-operator",
      live: "https://finops.nadeeshan.dev",
      architectureSummary: "Custom Go Operator -> K8s Metrics API -> AWS Spot Price Engine -> Automated Pod Draining"
    }
  ],
  experiences: [
    {
      period: "2024 - Present",
      role: "Lead Cloud Infrastructure Engineer",
      company: "Stitch Cloud Systems",
      location: "Remote",
      highlights: [
        "Architected multi-region Kubernetes platform handling over 50M API requests daily.",
        "Implemented GitOps deployment model with ArgoCD, scaling team release velocity by 400%.",
        "Pioneered infrastructure cost optimization reducing cloud spend by $140K annually."
      ],
      skills: ["Kubernetes", "AWS EKS", "Terraform", "ArgoCD", "Datadog"]
    },
    {
      period: "2022 - 2024",
      role: "Senior DevOps & Site Reliability Engineer",
      company: "Apex Global Solutions",
      location: "Hybrid",
      highlights: [
        "Migrated legacy monolithic applications to microservices architecture on Docker & EKS.",
        "Built centralized observability platform with Grafana Enterprise & OpenTelemetry.",
        "Automated disaster recovery drills reducing MTTR from 45 minutes to 4 minutes."
      ],
      skills: ["AWS", "Docker", "Prometheus", "Grafana", "Python", "Bash"]
    },
    {
      period: "2020 - 2022",
      role: "Cloud DevOps Systems Engineer",
      company: "Nexus Technologies",
      location: "On-site",
      highlights: [
        "Designed CI/CD pipelines using GitHub Actions & GitLab CI for 30+ engineering projects.",
        "Managed Infrastructure as Code with Terraform and Ansible across AWS & GCP.",
        "Maintained 99.95% system uptime across production database clusters."
      ],
      skills: ["Terraform", "Ansible", "GitHub Actions", "GCP", "Linux"]
    }
  ],
  certifications: [
    { title: "AWS Certified Solutions Architect – Professional", code: "AWS-PSA-99120", year: "2024" },
    { title: "Certified Kubernetes Administrator (CKA)", code: "LF-CKA-77402", year: "2023" },
    { title: "HashiCorp Certified: Terraform Associate", code: "HC-TA-44109", year: "2023" },
    { title: "Certified Kubernetes Security Specialist (CKS)", code: "LF-CKS-88190", year: "2024" }
  ]
};
