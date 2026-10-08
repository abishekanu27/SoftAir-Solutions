import React from 'react';

export const servicesData = {
  cloud: {
    id: 'cloud',
    title: 'Cloud Architecture & DevOps',
    description: 'Multi-cloud infrastructure, Terraform Infrastructure-as-Code, zero-downtime Kubernetes orchestration, and automated CI/CD continuous delivery pipelines.',
    tags: ['AWS / Azure / GCP', 'Kubernetes', 'GitOps', 'FinOps'],
    deliverables: [
      'Multi-region AWS & Azure Terraform Infrastructure-as-Code',
      'Kubernetes (EKS/AKS) cluster orchestration & auto-scaling',
      'Automated GitOps CI/CD delivery pipelines with GitHub Actions / GitLab',
      '24/7 Prometheus, Grafana & Datadog telemetry monitoring',
      'Zero-Trust VPC network hardening & IAM role segmentation'
    ],
    tech: 'AWS, Azure, GCP, Kubernetes, Docker, Terraform, Helm, ArgoCD, Prometheus',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
    )
  },
  software: {
    id: 'software',
    title: 'Custom Enterprise Software',
    description: 'Modular distributed software, high-throughput microservices, bespoke enterprise SaaS platforms, and rock-solid GraphQL/REST transactional APIs.',
    tags: ['Microservices', 'Enterprise SaaS', 'High Throughput'],
    deliverables: [
      'Modular event-driven microservices architecture',
      'High-throughput GraphQL & RESTful API gateways',
      'Fault-tolerant database schema design with PostgreSQL & Redis caching',
      'Role-based Access Control (RBAC), SSO & enterprise audit logging',
      'Comprehensive unit, integration and load testing suites'
    ],
    tech: 'TypeScript, Node.js, Python, Go, Next.js, PostgreSQL, Redis, Kafka',
    icon: (
      <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    )
  },
  ai: {
    id: 'ai',
    title: 'AI & Intelligent Automation',
    description: 'Production-grade generative AI, retrieval-augmented generation (RAG), cognitive automation, and predictive machine learning models tailored to enterprise data.',
    tags: ['LLM Agents', 'Predictive ML', 'NLP & RAG', 'MLOps'],
    deliverables: [
      'Fine-tuned LLM agents & Retrieval-Augmented Generation (RAG) pipelines',
      'Automated document extraction and predictive computer vision',
      'Predictive analytics dashboards for customer churn and demand forecasting',
      'Enterprise chat assistants with private on-premise model hosting',
      'Continuous MLOps monitoring and model retraining loops'
    ],
    tech: 'Python, PyTorch, OpenAI API, LangChain, HuggingFace, FastAPI, Pinecone',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6a6 6 0 0 0-6 6c0 2.2 1.3 4 3 5.2V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.8c1.7-1.2 3-3 3-5.2a6 6 0 0 0-6-6z"></path></svg>
    )
  },
  mobile: {
    id: 'mobile',
    title: 'Mobile & Cross-Platform Apps',
    description: 'Fluid iOS & Android applications engineered with Flutter and native frameworks, featuring sub-second response times and offline-first data sync.',
    tags: ['Flutter', 'React Native', 'Offline Sync', 'Biometrics'],
    deliverables: [
      'High-performance cross-platform apps built on Flutter & React Native',
      'Offline-first data synchronization and SQLite/WatermelonDB caching',
      'Push notification orchestration & real-time WebSocket communication',
      'Apple App Store & Google Play compliance, submission and CI/CD',
      'Integrated biometric auth, in-app purchases and payment gateways'
    ],
    tech: 'Flutter, React Native, Swift, Kotlin, Firebase, WebSockets',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
    )
  },
  data: {
    id: 'data',
    title: 'Data Engineering & Analytics',
    description: 'Scalable data lakes, streaming ETL pipelines with Kafka and Spark, and modern BI dashboards that unlock actionable intelligence for leadership.',
    tags: ['Snowflake', 'Apache Kafka', 'dbt', 'Executive BI'],
    deliverables: [
      'Real-time streaming ingestion with Apache Kafka & Spark',
      'Scalable snowflake/BigQuery data warehousing architecture',
      'Automated dbt transformation models and schema validation',
      'Executive KPI dashboards with Apache Superset / PowerBI',
      'Data governance, masking and GDPR/CCPA compliance controls'
    ],
    tech: 'Snowflake, BigQuery, dbt, Apache Kafka, Apache Spark, Python',
    icon: (
      <svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    )
  },
  security: {
    id: 'security',
    title: 'Cybersecurity & Compliance',
    description: 'Defense-in-depth architecture, automated SOC2/HIPAA compliance controls, vulnerability audits, and proactive zero-trust perimeter enforcement.',
    tags: ['Zero-Trust', 'SOC2 / HIPAA', 'Penetration Testing'],
    deliverables: [
      'End-to-end vulnerability scanning and penetration testing',
      'Automated SOC2, HIPAA, and ISO 27001 readiness checks',
      'Cloud Security Posture Management (CSPM) and drift detection',
      'OWASP Top 10 web application firewall (WAF) integration',
      'Incident response playbooks and automated threat mitigation'
    ],
    tech: 'SonarQube, Snyk, AWS GuardDuty, Cloudflare WAF, HashiCorp Vault',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    )
  }
};

export default function Services({ onSelectService }) {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Core Capabilities</span>
          <h2 className="section-title">
            Architected for <span className="gradient-text">Speed, Security, & Scale</span>
          </h2>
          <p className="section-subtitle">
            From full-stack enterprise applications to self-healing cloud clusters, SoftAir Solutions provides turnkey engineering solutions tailored to complex business requirements.
          </p>
        </div>

        <div className="services-grid">
          {Object.values(servicesData).map((svc) => (
            <div key={svc.id} className="service-card">
              <div className="service-icon-box">{svc.icon}</div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.description}</p>
              
              <div className="service-tags">
                {svc.tags.map((tag, i) => (
                  <span key={i} className="service-tag-item">{tag}</span>
                ))}
              </div>

              <button 
                className="service-btn" 
                onClick={() => onSelectService(svc)}
              >
                Explore Specifications &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
