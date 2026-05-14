import { useState, useRef, useEffect } from 'react';
import {
  motion, AnimatePresence, LayoutGroup,
  useScroll, useTransform,
} from 'framer-motion';
import { projects } from '../data';
import type { Project } from '../data';
import './styles/Work.css';

/* ── Custom easing ── */
const expo = (t: number) => 1 - Math.pow(1 - t, 4);

/* ────────────────────────────────────────────────────
   Word-level animated paragraph
   Each word fades + blurs in with stagger.
   mode="onMount"  → triggers immediately (hero content)
   mode="inView"   → triggers on scroll (body content)
──────────────────────────────────────────────────── */
function AnimatedWords({
  text,
  className,
  delay = 0,
  mode = 'inView',
}: {
  text: string;
  className?: string;
  delay?: number;
  mode?: 'inView' | 'onMount';
}) {
  const words = text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.028, delayChildren: delay },
    },
  };
  const word = {
    hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: expo },
    },
  };

  const children = words.map((w, i) => (
    <motion.span
      key={i}
      style={{ display: 'inline-block', marginRight: '0.28em' }}
      variants={word}
    >
      {w}
    </motion.span>
  ));

  if (mode === 'onMount') {
    return (
      <motion.p
        className={className}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.p>
    );
  }

  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.p>
  );
}

/* ────────────────────────────────────────────────────
   Section heading with a line that draws in from left
──────────────────────────────────────────────────── */
function SectionHeading({ label }: { label: string }) {
  return (
    <motion.div
      className="section-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: expo } },
        }}
      >
        {label}
      </motion.span>
      <motion.div
        className="section-draw-line"
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: 0.9, ease: expo } },
        }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   Cinematic fullscreen overlay
──────────────────────────────────────────────────── */
function ProjectOverlay({
  project,
  index,
  onClose,
}: {
  project: Project;
  index: number;
  onClose: () => void;
}) {
  /* Scroll-driven parallax on the hero section */
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const heroY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-22%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.38], [1, 0]);

  return (
    <motion.div
      ref={scrollRef}
      className="project-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.35 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* ── Close button ── */}
      <motion.button
        className="overlay-close"
        onClick={onClose}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.4, ease: expo } }}
      >
        ESC / Close
      </motion.button>

      {/* ── Hero zone — parallaxes as you scroll ── */}
      <motion.div className="overlay-hero" style={{ y: heroY, opacity: heroOpacity }}>
        {/* Chapter label + drawing line */}
        <motion.div
          className="overlay-chapter"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.1, ease: expo } }}
        >
          <span className="chapter-num">Chapter {String(index + 1).padStart(2, '0')}</span>
          <motion.div
            className="chapter-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1, transition: { duration: 1.4, delay: 0.3, ease: expo } }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>

        {/* ★ THE STAR: layoutId morphs the title from the list row */}
        <motion.h2
          className="overlay-title"
          layoutId={`proj-title-${project.id}`}
          transition={{ duration: 0.55, ease: expo }}
        >
          {project.name}
        </motion.h2>

        {/* Tagline — word by word on mount */}
        <AnimatedWords
          text={`"${project.tagline}"`}
          className="overlay-tagline"
          delay={0.45}
          mode="onMount"
        />

        {/* My Role */}
        {project.role && (
          <motion.div
            className="overlay-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.75, duration: 0.5, ease: expo } }}
          >
            <span className="role-label">My Role</span>
            <span className="role-text">{project.role}</span>
          </motion.div>
        )}
      </motion.div>

      {/* ── Body content ── */}
      <div className="overlay-body">

        {/* The Problem */}
        <div className="overlay-section">
          <SectionHeading label="The Problem" />
          <AnimatedWords text={project.problem} className="overlay-problem" />
        </div>

        {/* What Was Built */}
        <div className="overlay-section">
          <SectionHeading label="What Was Built" />
          <div className="overlay-build">
            {project.build.map((item, i) => (
              <motion.div
                key={i}
                className="build-item"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: expo }}
              >
                {/* Ghost watermark number */}
                <span className="build-ghost">{String(i + 1).padStart(2, '0')}</span>
                <span className="build-index">{String(i + 1).padStart(2, '0')}</span>
                <p
                  className="build-text"
                  dangerouslySetInnerHTML={{
                    __html: item.replace(/`([^`]+)`/g, '<strong>$1</strong>'),
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Result */}
        <div className="overlay-section">
          <SectionHeading label="The Result" />
          <AnimatedWords text={project.result} className="overlay-result" />
        </div>

        {/* Metric + Tech footer */}
        <motion.div
          className="overlay-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: expo }}
        >
          <div className="overlay-metric">{project.metric}</div>
          {/* Spring-physics tech tag scatter */}
          <motion.div
            className="overlay-tech"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
            }}
          >
            {project.tech.map(t => (
              <motion.span
                key={t}
                className="overlay-tech-tag"
                variants={{
                  hidden: { opacity: 0, scale: 0.7, y: 12 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { type: 'spring', stiffness: 280, damping: 18 },
                  },
                }}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {project.link !== '#' && (
          <motion.div
            className="overlay-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              className="overlay-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Live ↗
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   Work section — project list
──────────────────────────────────────────────────── */
export default function Work() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = selected !== null ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    /* LayoutGroup enables the layoutId morph between list and overlay */
    <LayoutGroup>
      <section className="work" id="work">
        <div className="work-header">
          <div className="section-label">03 — Projects</div>
          <h2>Selected <span className="hl">work</span>.</h2>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className="project-row"
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: expo }}
            >
              <div className="project-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="project-info">
                {/* ★ This h3 shares layoutId with the overlay h2 — it morphs on click */}
                <motion.h3 layoutId={`proj-title-${p.id}`}>{p.name}</motion.h3>
                <div className="project-tagline-short">{p.tagline}</div>
              </div>
              <div className="project-right">
                <div className="project-year">{p.year}</div>
                <span className="project-arrow">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <ProjectOverlay
              project={projects[selected]}
              index={selected}
              onClose={() => setSelected(null)}
            />
          )}
        </AnimatePresence>
      </section>
    </LayoutGroup>
  );
}
