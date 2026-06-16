'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';

const initials = personalInfo.name
  .split(' ')
  .map((n) => n[0])
  .join('');

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [15, 28, 45, 60, 72, 85, 94, 100];
    let i = 0;
    const next = () => {
      if (i >= steps.length) return;
      setProgress(steps[i]);
      i++;
      if (steps[i - 1] < 100) {
        setTimeout(next, Math.random() * 200 + 80);
      } else {
        setTimeout(onComplete, 400);
      }
    };
    const t = setTimeout(next, 200);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060606]"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative flex flex-col items-center gap-10">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/40">
            <span className="text-3xl font-black text-white tracking-tight">{initials}</span>
            <div className="absolute -inset-px rounded-2xl border border-white/20" />
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-px w-52 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
          <motion.p
            className="font-mono text-xs text-white/25"
            animate={{ opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {String(progress).padStart(3, '0')}%
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
