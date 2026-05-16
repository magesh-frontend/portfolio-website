import React from 'react';
import { data } from '../data';
import './Education.css';

export default function Education() {
  const left = data.education.filter(e => e.side === 'left');
  const right = data.education.filter(e => e.side === 'right');

  return (
    <section className="education-section" id="education">
      <h1 className="section-title">Education</h1>
      <div className="edu-box">
        <div className="edu-left">
          {left.map((edu, i) => (
            <div className="edu-card anim-flip-left" key={i} style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="edu-card-inner">
                <span className="edu-year">{edu.year}</span>
                <h3>{edu.title}</h3>
                <p>{edu.institution}</p>
                <p>{edu.detail}</p>
              </div>
              <i className="fa-solid fa-share arrow-icon" />
            </div>
          ))}
        </div>

        <div className="edu-center">
          <i className="fa-solid fa-user-graduate" />
        </div>

        <div className="edu-right">
          {right.map((edu, i) => (
            <div className="edu-card anim-flip-left" key={i}>
              <i className="fa-solid fa-share fa-flip-horizontal arrow-icon" />
              <div className="edu-card-inner">
                <span className="edu-year">{edu.year}</span>
                <h3>{edu.title}</h3>
                <p>{edu.institution}</p>
                <p>{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
