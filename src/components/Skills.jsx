import React from 'react';
import { data } from '../data';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-section anim-fade-down" id="skills">
      <h1 className="section-title">Skills</h1>
      <div className="skills-grid">
        {data.skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3>{group.category}</h3>
            {group.items.map((item) => (
              <img key={item.name} src={item.img} alt={`${item.name} logo`} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
