import React from 'react';

const CORE_TECH = [
  "TypeScript",
  "NodeJS",
  "React",
  "AWS",
  "DynamoDB",
  "MySQL"
];

const EXPLORING_TECH = [
  "Python",
  "Go"
];

export default () => {
  return (
    <section className="homepage-section tech-stack">
      <h2 className="section-header">Technologies I work with</h2>
      <div className="tech-groups">
        <div className="tech-group">
          {CORE_TECH.map(tech => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>
        <div className="tech-group exploring">
          <span className="exploring-label">Exploring:</span>
          {EXPLORING_TECH.map(tech => (
            <span key={tech} className="tech-pill tech-pill--light">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
