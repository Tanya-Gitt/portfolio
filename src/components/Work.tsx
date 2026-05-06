import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data';
import './styles/Work.css';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const rows = sectionRef.current?.querySelectorAll('.project-row');
    if (!rows) return;
    gsap.to(rows, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, []);

  return (
    <section className="work" id="work" ref={sectionRef}>
      <div className="work-header">
        <div className="section-label">03 — Projects</div>
        <h2>Selected <span className="hl">work</span>.</h2>
      </div>
      <div className="projects-list">
        {projects.map((p, i) => (
          <div className="project-row" key={p.id}>
            <div className="project-num">0{i + 1}</div>
            <div className="project-info">
              <h3>{p.name}</h3>
              <div className="project-tagline">{p.tagline}</div>
              <div className="project-tech">
                {p.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
              </div>
            </div>
            <div className="project-right">
              <div className="project-metric">{p.metric}</div>
              <div className="project-year">{p.year}</div>
              {p.link !== '#' && (
                <a
                  className="project-link"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                  aria-label="View project"
                >
                  ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
