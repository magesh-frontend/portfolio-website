import React, { useState } from 'react';
import './Navbar.css';

const links = ['Home', 'Skills', 'Education', 'Project', 'About'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="navbar-wrap anim-fade-down">
      <span className="navbar-logo">PORTFOLIO&lt;/&gt;</span>

      <ul className="navbar-links">
        {links.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(l); }}>{l}</a></li>
        ))}
      </ul>

      <button className="navbar-burger" onClick={() => setOpen(!open)}>
        <i className="fa-solid fa-bars" />
      </button>

      {open && (
        <div className="navbar-mobile">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(l); }}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
