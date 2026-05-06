import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '../data';
import './styles/WhatIDo.css';

gsap.registerPlugin(ScrollTrigger);

export default function WhatIDo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.service-card');
    if (!cards) return;
    gsap.to(cards, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
    });
  }, []);

  return (
    <section className="whatido" ref={sectionRef}>
      <div className="whatido-header">
        <div>
          <div className="section-label">02 — What I Do</div>
          <h2>The work<br />that <span className="hl">matters</span>.</h2>
        </div>
      </div>
      <div className="whatido-grid">
        {services.map(s => (
          <div className="service-card" key={s.title}>
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
