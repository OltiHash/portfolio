'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { stats } from '@/lib/data';

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const duration = 2000;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.floor(eased * value));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="inline-flex items-end gap-1">
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-black tabular-nums text-transparent md:text-6xl">
        {count}
      </span>
      {suffix && (
        <span className="mb-1.5 text-2xl font-black text-blue-400/50">{suffix}</span>
      )}
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-purple-950/8 to-blue-950/10" />
      <div className="absolute inset-0 border-y border-white/[0.04]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs uppercase tracking-widest text-white/30">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
