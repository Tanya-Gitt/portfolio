import { useEffect } from 'react';
import { useLoading } from './context/LoadingProvider';
import Cursor from './components/Cursor';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Work from './components/Work';
import TechStack from './components/TechStack';
import Career from './components/Career';
import Contact from './components/Contact';

function App() {
  const { setLoaded } = useLoading();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(timer);
  }, [setLoaded]);

  return (
    <>
      <Cursor />
      <Loading />
      <Navbar />
      <main>
        <Landing />
        <About />
        <WhatIDo />
        <Work />
        <TechStack />
        <Career />
        <Contact />
      </main>
    </>
  );
}

export default App;
