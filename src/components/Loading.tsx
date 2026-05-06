import { useEffect, useState } from 'react';
import { useLoading } from '../context/LoadingProvider';
import './styles/Loading.css';

export default function Loading() {
  const { loaded } = useLoading();
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPct(p => {
        if (p >= 100) { clearInterval(id); return 100; }
        return p + Math.random() * 12;
      });
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`loading${loaded ? ' hide' : ''}`}>
      <div className="loading-name">Tanya <span>Sharma</span></div>
      <div className="loading-bar-wrap">
        <div className="loading-bar" style={{ width: `${Math.min(pct, 100)}%` }} />
      </div>
      <div className="loading-pct">{Math.min(Math.floor(pct), 100)}%</div>
    </div>
  );
}
