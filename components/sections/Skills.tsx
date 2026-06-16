'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/lib/data';
import type { Skill } from '@/types';

type CategoryKey = 'frontend' | 'backend' | 'uiux' | 'tools';

const categories: { key: CategoryKey; label: string; accent: string }[] = [
  { key: 'frontend', label: 'Frontend', accent: 'blue' },
  { key: 'backend', label: 'Backend', accent: 'green' },
  { key: 'uiux', label: 'UI / UX', accent: 'purple' },
  { key: 'tools', label: 'Tools', accent: 'orange' },
];

const accentClasses: Record<string, Record<string, string>> = {
  blue: {
    tab: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
    card: 'border-blue-500/20 bg-blue-500/[0.06] hover:border-blue-400/40',
    icon: 'text-blue-400',
    badge: 'bg-blue-500/10 text-blue-300',
    glow: 'hover:shadow-blue-500/15',
  },
  green: {
    tab: 'border-green-500/40 bg-green-500/10 text-green-300',
    card: 'border-green-500/20 bg-green-500/[0.06] hover:border-green-400/40',
    icon: 'text-green-400',
    badge: 'bg-green-500/10 text-green-300',
    glow: 'hover:shadow-green-500/15',
  },
  purple: {
    tab: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
    card: 'border-purple-500/20 bg-purple-500/[0.06] hover:border-purple-400/40',
    icon: 'text-purple-400',
    badge: 'bg-purple-500/10 text-purple-300',
    glow: 'hover:shadow-purple-500/15',
  },
  orange: {
    tab: 'border-orange-500/40 bg-orange-500/10 text-orange-300',
    card: 'border-orange-500/20 bg-orange-500/[0.06] hover:border-orange-400/40',
    icon: 'text-orange-400',
    badge: 'bg-orange-500/10 text-orange-300',
    glow: 'hover:shadow-orange-500/15',
  },
};

function SkillCard({ skill, accent, index }: { skill: Skill; accent: string; index: number }) {
  const c = accentClasses[accent];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.06, y: -4 }}
      className={`cursor-default rounded-2xl border p-4 backdrop-blur-sm transition-all hover:shadow-xl ${c.card} ${c.glow}`}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-lg font-bold ${c.icon}`}
        >
          {skill.icon}
        </div>
        <p className="text-sm font-medium text-white">{skill.name}</p>
        <span className={`rounded-full px-2 py-0.5 text-xs ${c.badge}`}>{skill.level}</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<CategoryKey>('frontend');
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="skills" className="relative overflow-hidden bg-[#060606] py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-950/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm text-blue-400/70">// what I work with</p>
          <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            <span className="text-white">Skills & </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-white/35">
            A curated toolkit for building modern, scalable, and beautiful applications.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => {
            const isActive = active === cat.key;
            const c = accentClasses[cat.accent];
            return (
              <motion.button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? c.tab
                    : 'border-white/[0.08] bg-white/[0.025] text-white/35 hover:text-white/60'
                }`}
              >
                {cat.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {(skills[active] ?? []).map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} accent={current.accent} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
