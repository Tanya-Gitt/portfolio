import { createContext, useContext, useState, type ReactNode } from 'react';

interface LoadingCtx {
  loaded: boolean;
  setLoaded: (v: boolean) => void;
}

const Ctx = createContext<LoadingCtx>({ loaded: false, setLoaded: () => {} });

export const useLoading = () => useContext(Ctx);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  return <Ctx.Provider value={{ loaded, setLoaded }}>{children}</Ctx.Provider>;
}
