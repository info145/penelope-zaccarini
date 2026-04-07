"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  priority?: boolean;
};

export function ParallaxImage({ src, alt, className = "", speed = 0.3, priority = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    gsap.to(img, {
      yPercent: -15 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={imgRef} className="relative h-[120%] w-full">
        <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" priority={priority} />
      </div>
    </div>
  );
}
