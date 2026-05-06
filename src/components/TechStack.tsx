import { techStack } from '../data';
import './styles/TechStack.css';

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="marquee-track-wrap">
      <div className={`marquee-track${reverse ? ' reverse' : ''}`}>
        {doubled.map((t, i) => (
          <div className="marquee-item" key={`${t}-${i}`}>
            <span className="marquee-dot" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const half = Math.ceil(techStack.length / 2);
  return (
    <section className="techstack" id="skills">
      <div className="techstack-label section-label">Skills & Technologies</div>
      <MarqueeRow items={techStack.slice(0, half)} />
      <MarqueeRow items={techStack.slice(half)} reverse />
    </section>
  );
}
