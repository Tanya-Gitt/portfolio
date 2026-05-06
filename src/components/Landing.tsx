import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLoading } from '../context/LoadingProvider';
import Scene from './Character/Scene';
import './styles/Landing.css';

export default function Landing() {
  const { loaded } = useLoading();
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaded) return;
    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .to(scrollRef.current, { opacity: 1, duration: 0.6 }, '-=0.2');
  }, [loaded]);

  return (
    <section className="landing" id="home">
      <div className="landing-scene"><Scene /></div>
      <div className="landing-content">
        <div className="landing-badge" ref={badgeRef}>
          Open to BA · DA · PA roles
        </div>
        <h1 className="landing-title" ref={titleRef}>
          Tanya
          <span className="accent">Sharma</span>
        </h1>
        <p className="landing-sub" ref={subRef}>
          <strong>Data Analyst</strong> · SQL · Python · Power BI · AI Pipelines
        </p>
        <div className="landing-actions" ref={actionsRef}>
          <a href="#work" data-hover>
            <button className="btn-primary">View Projects</button>
          </a>
          <a href="#contact" data-hover>
            <button className="btn-outline">Get in Touch</button>
          </a>
        </div>
      </div>
      <div className="landing-scroll" ref={scrollRef}>
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
