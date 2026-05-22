import React from 'react';
import { data } from '../data';
import profileImg from '../assets/images/magesh-images.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero anim-fade-right" id="home">
      <div className="hero-text">
        <div className="hero-name">
          <p>Hi, I'm</p>
          <h2>{data.name.split(' ')[0]}</h2>
          <span>{data.role}</span>
        </div>
        <p>{data.tagline}</p>

        <div className="hero-social">
          <a href={data.linkedin} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin" style={{ color: '#0a57db' }} />
          </a>
          <a href={data.whatsapp} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp" style={{ color: '#03fc20' }} />
          </a>
          <a href={data.github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" />
          </a>
        </div>

        <div>
          <button className="hero-cv-btn">
            <i className="fa-regular fa-file-pdf" style={{ color: '#ff3300', marginRight: 6 }} />
            <a href={data.resume} download="Magesh_B_React_Developer_Resume.pdf" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </button>
        </div>
      </div>

      <div className="hero-profile">
        <img src={profileImg} alt="Magesh profile" />
      </div>
    </section>
  );
}
