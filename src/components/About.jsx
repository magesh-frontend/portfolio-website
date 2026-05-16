import React from 'react';
import { data } from '../data';
import hireImg from '../assets/images/hire-frontend-developers.png';
import frontendImg from '../assets/images/frontend.jpg';
import './About.css';

export default function About() {
  return (
    <section className="about-section anim-fade-down" id="about">
      <h1 className="section-title">About Me</h1>

      <div className="about-end">
        <div className="about-left">
          <img src={hireImg} alt="hire frontend" />
          <p>Click to Connect</p>
          <div className="connect-icons">
            <a href={data.whatsapp} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp fa-bounce" style={{ color: '#0ae618' }} />
            </a>
            <a href={`mailto:${data.email2}`}>
              <i className="fa-regular fa-envelope fa-bounce" style={{ color: '#065ff9' }} />
            </a>
            <a href={data.github} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github fa-bounce" style={{ color: '#050505' }} />
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin fa-bounce" style={{ color: '#0c4cbb' }} />
            </a>
            <a href={data.instagram} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram fa-bounce" style={{ color: '#f41606' }} />
            </a>
          </div>
        </div>

        <div className="about-right">
          <div className="pcon">
            <div className="pcon-col labels">
              {['Name', 'DOB', 'Location', 'Pincode', 'Email', 'Mobile No'].map(l => (
                <p key={l}>{l}</p>
              ))}
            </div>
            <div className="pcon-col separators">
              {[':',':',':',':',':',':'].map((s, i) => <p key={i}>{s}</p>)}
            </div>
            <div className="pcon-col values">
              <p>{data.name}</p>
              <p>{data.dob}</p>
              <p>{data.location}</p>
              <p>{data.pincode}</p>
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </div>
          </div>
          <img src={frontendImg} alt="frontend developer" />
        </div>
      </div>

      <div className="about-footer">
        Made By Magesh&nbsp;
        <i className="fa-solid fa-code" />_
        <i className="fa-brands fa-html5" />_
        <i className="fa-brands fa-css3-alt" />_
        <i className="fa-brands fa-square-js" />
      </div>
    </section>
  );
}
