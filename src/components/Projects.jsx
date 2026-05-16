import React from 'react';
import { data } from '../data';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects-section" id="project">
      <h1 className="section-title anim-fade-down">Projects</h1>
      <div className="projects-grid">
        {data.projects.map((project, i) => (
          <div className="flip-card anim-flip-up" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4>{project.title}</h4>
                <div className="tech-icons">
                  {project.tech.map((src, j) => (
                    <img key={j} src={src} alt={project.techNames[j]} />
                  ))}
                </div>
                <p className="click-hint">Click Here...</p>
              </div>
              <div className="flip-card-back">
                <h5>{project.title.split(' ').slice(0,3).join(' ')}</h5>
                <p>{project.description}</p>
                <div className="project-buttons">
  <a href={project.live} target="_blank" rel="noreferrer" className="project-link-btn live-btn">
    Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
  </a>

  <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn github-btn">
    GitHub <i className="fa-brands fa-github"></i>
  </a>
</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
