'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';
import ParticleField from '@/components/ui/ParticleField';
import GlowButton from '@/components/ui/GlowButton';
import { personalInfo } from '@/lib/data';

const initials = personalInfo.name
  .split(' ')
  .map((n) => n[0])
  .join('');

const fadeUp = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }) as const;

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  // Typing effect
  useEffect(() => {
    const current = personalInfo.roles[roleIdx];
    const speed = deleting ? 35 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) setTimeout(() => setDeleting(true), 2200);
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === '') {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % personalInfo.roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  const handleCardMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#060606]"
    >
      {/* Perspective grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
            maskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
      </div>

      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-blue-700/15 blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-purple-700/15 blur-[120px]"
          animate={{ x: [0, -50, 0], y: [0, -35, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/8 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </div>

      {/* Particles */}
      <ParticleField count={60} />

      {/* Main grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-32 lg:grid-cols-2">
        {/* LEFT: Text */}
        <div>
          {/* Available badge */}
          <motion.div {...fadeUp(0.1)} className="mb-8 inline-flex">
            <div className="flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/8 px-3 py-1.5 text-xs font-medium text-green-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              Available for work
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.2)}
            className="mb-4 text-5xl font-black leading-none tracking-tighter md:text-7xl"
          >
            <span className="text-white">Hi, I&apos;m</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p {...fadeUp(0.3)} className="mb-6 text-xl font-light text-white/55 md:text-2xl">
            I build{' '}
            <em className="font-medium not-italic text-white">experiences</em>
            , not websites.
          </motion.p>

          {/* Typing role */}
          <motion.div {...fadeUp(0.4)} className="mb-12 flex items-center gap-2">
            <span className="font-mono text-sm text-blue-400/60">&gt;</span>
            <span className="font-mono text-sm text-white/60">
              {displayed}
              <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-blue-400" />
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
            <GlowButton
              variant="primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink size={15} />
              View Projects
            </GlowButton>
            <GlowButton
              variant="secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </GlowButton>
          </motion.div>
        </div>

        {/* RIGHT: Profile card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, type: 'spring', stiffness: 100 }}
          className="flex justify-center lg:justify-end"
        >
          <div
            ref={cardRef}
            onMouseMove={handleCardMouse}
            className="relative h-80 w-72 overflow-hidden rounded-3xl"
            style={{
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(59,130,246,0.12) 0%, transparent 60%)`,
            }}
          >
            <div className="absolute inset-0 rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm" />

            {/* Corner accents */}
            <div className="absolute right-4 top-4 h-6 w-6 rounded-tr-lg border-r border-t border-blue-400/35" />
            <div className="absolute bottom-4 left-4 h-6 w-6 rounded-bl-lg border-b border-l border-purple-400/35" />

            {/* Floating scan line */}
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
              animate={{ top: ['10%', '90%', '10%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Card content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-5xl font-black text-white shadow-2xl shadow-blue-500/40"
              >
                {initials}
              </motion.div>

              <div className="text-center">
                <p className="text-lg font-semibold text-white">{personalInfo.name}</p>
                <p className="text-sm text-white/45">{personalInfo.title}</p>
                <p className="mt-0.5 font-mono text-xs text-white/25">{personalInfo.location}</p>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                <span className="font-mono text-xs text-green-300">Open to work</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 transition-colors hover:text-white/50"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
