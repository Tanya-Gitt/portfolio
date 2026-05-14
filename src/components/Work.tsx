import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import type { Project } from '../data';
import './styles/Work.css';

/* ── Easing ── */
const expo = (t: number) => 1 - Math.pow(1 - t, 4);

/* ── Animation variants ── */
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: expo } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const lineUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: expo } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 80, skewY: 3 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.9, ease: expo } },
};

const buildItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: expo },
  }),
};

function ProjectOverlay({ project, index, onClose }: {
  project: Project;
  index: number;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="project-overlay"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <button className="overlay-close" onClick={onClose} data-hover>ESC / Close</button>

      <motion.div
        className="overlay-inner"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Chapter */}
        <motion.div className="overlay-chapter" variants={lineUp}>
          <span className="chapter-num">Chapter {String(index + 1).padStart(2, '0')}</span>
          <div className="chapter-line" />
        </motion.div>

        {/* Title */}
        <motion.h2 className="overlay-title" variants={titleVariants}>
          {project.name}
        </motion.h2>

        {/* Tagline */}
        <motion.p className="overlay-tagline" variants={lineUp}>
          "{project.tagline}"
        </motion.p>

        {/* The Problem */}
        <motion.div className="overlay-section" variants={lineUp}>
          <div className="section-heading">The Problem</div>
          <p className="overlay-problem">{project.problem}</p>
        </motion.div>

        {/* The Build */}
        <motion.div className="overlay-section" variants={lineUp}>
          <div className="section-heading">What Was Built</div>
          <div className="overlay-build">
            {project.build.map((item, i) => (
              <motion.div
                key={i}
                className="build-item"
                custom={i}
                variants={buildItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                <span className="build-index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="build-text" dangerouslySetInnerHTML={{
                  __html: item.replace(/`([^`]+)`/g, '<strong>$1</strong>')
                }} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Result */}
        <motion.div className="overlay-section" variants={lineUp}>
          <div className="section-heading">The Result</div>
          <p className="overlay-result">{project.result}</p>
        </motion.div>

        {/* Footer */}
        <motion.div className="overlay-footer" variants={lineUp}>
          <div className="overlay-metric">{project.metric}</div>
          <div className="overlay-tech">
            {project.tech.map(t => (
              <span className="overlay-tech-tag" key={t}>{t}</span>
            ))}
          </div>
        </motion.div>

        {project.link !== '#' && (
          <motion.div className="overlay-cta" variants={lineUp}>
            <a
              className="overlay-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
            >
              View Live ↗
            </a>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = selected !== null ? 'hidden' : '';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [selected]);

  return (
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
              <h3>{p.name}</h3>
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
  );
}
