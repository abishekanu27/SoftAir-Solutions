import React from 'react';

const technologies = [
  'React.js',
  'Next.js',
  'Flutter (Android)',
  'React Native (Android)',
  'Node.js & Express',
  'TypeScript & JavaScript',
  'Python',
  'PHP & Laravel',
  'PostgreSQL',
  'MySQL & MongoDB',
  'REST & GraphQL APIs',
  'Custom Enterprise Apps',
  'HTML5 & CSS3',
  'Dedicated IT Services',
  'Linux & Windows Administration',
  'Database Management & Support'
];

export default function TechMarquee() {
  return (
    <section className="ticker-section" aria-label="Technology Stack">
      <div className="container">
        <div className="ticker-label">Built with Modern Web, Mobile & Enterprise Technologies</div>
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
