import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../data';
import './styles/Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const inner = sectionRef.current?.querySelector('.contact-inner');
    if (!inner) return;
    gsap.fromTo(
      inner,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      }
    );
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-inner">
        <div className="section-label">05 — Contact</div>
        <h2>Let's build<br /><span className="hl">together</span>.</h2>
        <p className="contact-sub">
          Open to Business Analyst, Data Analyst, and Product Analyst roles —
          on-site in India, hybrid, or remote. If you want to work together, reach out.
        </p>
        <a className="contact-email" href={`mailto:${personal.email}`} data-hover>
          <FiMail size={20} />
          {personal.email}
        </a>
        <div className="contact-socials">
          <a
            className="social-link"
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
          >
            <FiLinkedin size={15} />
            LinkedIn
          </a>
          <a
            className="social-link"
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
          >
            <FiGithub size={15} />
            GitHub
          </a>
        </div>
        <div className="contact-footer">
          Designed & built · Tanya Sharma · {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
}
