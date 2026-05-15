"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES_DESKTOP = ["/hero4.png", "/hero9.png", "/hero7.png", "/hero5.png"];
const SLIDES_MOBILE = [
  "/hero2_phone.png",
  "/hero_phone4.png",
  "/hero5_phone.png",
];
const INTERVAL = 5000;

function Slideshow({
  slides,
  priority,
}: {
  slides: string[];
  priority?: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const [animating, setAnimating] = useState(false);

  const currentRef = useRef(0);
  const animatingRef = useRef(false);
  const slidesRef = useRef(slides);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const transition = useCallback((nextIndex: number, direction: 1 | -1) => {
    if (animatingRef.current) return;
    const total = slidesRef.current.length;
    const next = (nextIndex + total) % total;
    if (next === currentRef.current) return;

    animatingRef.current = true;
    setDir(direction);
    setPrev(currentRef.current);
    currentRef.current = next;
    setCurrent(next);
    setAnimating(true);

    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
      animatingRef.current = false;
    }, 620);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const total = slidesRef.current.length;
      const next = (currentRef.current + 1) % total;
      transition(next, 1);
    }, INTERVAL);
  }, [transition]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const enterFrom = dir === 1 ? "100%" : "-100%";
  const exitTo = dir === 1 ? "-100%" : "100%";

  return (
    <>
      {prev !== null && (
        <div
          className="absolute inset-0"
          style={{
            animation: "slideOut 0.6s cubic-bezier(0.32,0,0.67,0) forwards",
            ["--exit-to" as string]: exitTo,
          }}
        >
          <Image
            src={slides[prev]}
            alt={`Eurovet Logistics ${prev + 1}`}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}

      <div
        className="absolute inset-0"
        style={{
          animation: animating
            ? "slideIn 0.6s cubic-bezier(0.32,0,0.67,0) forwards"
            : undefined,
          ["--enter-from" as string]: enterFrom,
        }}
      >
        <Image
          src={slides[current]}
          alt={`Eurovet Logistics ${current + 1}`}
          fill
          priority={priority && current === 0}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              transition(i, i > currentRef.current ? 1 : -1);
              startTimer();
            }}
            className={`h-[3px] rounded-none transition-all duration-300 ${
              i === current
                ? "w-10 bg-white"
                : "w-8 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Mobile slideshow */}
      <div className="md:hidden absolute inset-0">
        <Slideshow slides={SLIDES_MOBILE} priority />
      </div>

      {/* Desktop slideshow */}
      <div className="hidden md:block absolute inset-0">
        <Slideshow slides={SLIDES_DESKTOP} priority />
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(var(--enter-from)); }
          to   { transform: translateX(0); }
        }
        @keyframes slideOut {
          from { transform: translateX(0); }
          to   { transform: translateX(var(--exit-to)); }
        }
      `}</style>
    </section>
  );
}
