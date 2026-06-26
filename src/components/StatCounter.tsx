"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  end,
  suffix = "",
  label,
  dark = false,
}: {
  end: number;
  suffix?: string;
  label: string;
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1500;
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center">
      <p className={`text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-black"}`}>
        {count}
        {suffix}
      </p>
      <p className={`mt-1 text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>{label}</p>
    </div>
  );
}
