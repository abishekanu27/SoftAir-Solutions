import React from 'react';

const technologies = [
  'AWS Cloud Architecture',
  'Microsoft Azure',
  'Google Cloud Platform',
  'Kubernetes & Docker',
  'Terraform GitOps',
  'React & Next.js',
  'Node.js & TypeScript',
  'Python & PyTorch',
  'PostgreSQL & Redis',
  'Flutter & React Native',
  'Apache Kafka',
  'Snowflake & BigQuery'
];

export default function TechMarquee() {
  return (
    <section className="ticker-section" aria-label="Technology Stack and Cloud Partners">
      <div className="container">
        <div className="ticker-label">Engineered with Tier-1 Cloud & Enterprise Technologies</div>
      </div>
      <div className="ticker-track">
        {technologies.concat(technologies).map((tech, idx) => (
          <div key={idx} className="ticker-item">
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
