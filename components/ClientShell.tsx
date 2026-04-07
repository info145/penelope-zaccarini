"use client";

import { useCallback, useState } from "react";
import { Header } from "./Header";
import { CustomCursor } from "./CustomCursor";
import { SmoothScroll } from "./SmoothScroll";
import { Preloader } from "./Preloader";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  const onPreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Preloader onComplete={onPreloaderComplete} />
      <SmoothScroll />
      <CustomCursor />
      <Header />
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}
