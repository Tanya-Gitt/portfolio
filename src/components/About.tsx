import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/About.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: '40%', label: 'Reduction in insight retrieval time · Hexora internship' },
  { num: '6h+', label: 'Manual work saved per week via automation' },
  { num: '5', label: 'Production projects shipped' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll('.about-left > *, .stat-card, .about-athletics'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      }
    );
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="section-label">01 — About</div>
      <div className="about-grid">
        <div className="about-left">
          <h2>I build things<br />with <span className="hl">data</span>.</h2>
          <p>
            I'm a final-year BCA student and Data Analyst who spent my internship at <strong>Hexora</strong> cutting
            insight retrieval time by 40% and saving 6+ hours of manual work every week through automated dashboards and pipelines.
          </p>
          <p>
            My stack: <strong>SQL · Python · Power BI · Tableau · MongoDB · API pipelines.</strong> I care less about
            which tool I use and more about whether the output changes how someone makes a decision. That's the job.
          </p>
          <div className="about-quote">
            <p>"Pressure is information. I've been processing it since I was a kid."</p>
          </div>
        </div>
        <div className="about-right">
          {stats.map(s => (
            <div className="stat-card" key={s.num}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
          <div className="about-athletics stat-card">
            <div className="stat-num">4×</div>
            <div className="stat-label">
              <strong>National-Level Judo Athlete</strong><br />
              Former Sports Captain — competing taught me to perform under pressure.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
