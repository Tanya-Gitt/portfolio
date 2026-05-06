import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '../data';
import './styles/Career.css';

gsap.registerPlugin(ScrollTrigger);

export default function Career() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.to(el.querySelectorAll('.timeline-item, .edu-item'), {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%' },
    });
  }, []);

  return (
    <section className="career" id="career" ref={sectionRef}>
      <div className="section-label">04 — Career</div>
      <div className="career-grid">
        <div className="career-col">
          <h3>Experience</h3>
          <div className="timeline">
            {experience.map(e => (
              <div className="timeline-item" key={e.role + e.company}>
                <div className="timeline-dot" />
                <div className="timeline-period">{e.period}</div>
                <div className="timeline-role">{e.role}</div>
                <div className="timeline-company">{e.company} · {e.location}</div>
                <ul className="timeline-bullets">
                  {e.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <div className="timeline-skills">
                  {e.skills.map(s => <span className="skill-pill" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="career-col">
          <h3>Education</h3>
          <div className="edu-item">
            <div className="edu-degree">Bachelor of Computer Applications (BCA)</div>
            <div className="edu-school">Quantum Global Campus</div>
            <div className="edu-period">2023 – 2026</div>
          </div>
          <div className="edu-item">
            <div className="edu-degree">BM DAV Public School</div>
            <div className="edu-school">Higher Secondary Education</div>
            <div className="edu-period">Completed</div>
          </div>

          <h3 style={{ marginTop: '40px' }}>Certifications</h3>
          {[
            'Data Analysis using Microsoft Excel · Coursera',
            'Mastering SQL Functions & Clauses · CodeSignal',
            'Generative AI Study Jams · Google Developers Group',
            'AWS Solutions Architecture · Forage',
            'Deloitte Data Analytics Simulation · Forage',
          ].map(cert => (
            <div className="edu-item" key={cert}>
              <div className="edu-school" style={{ fontSize: '13px', color: 'var(--text)' }}>{cert}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
