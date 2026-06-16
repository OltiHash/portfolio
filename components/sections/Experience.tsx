'use client';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Star } from 'lucide-react';
import { experience } from '@/lib/data';
import type { ExperienceItem } from '@/types';

const iconMap: Record<ExperienceItem['type'], React.ElementType> = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Star,
};

const colorMap: Record<ExperienceItem['type'], string> = {
  work: 'border-blue-500/50 bg-blue-500/10 text-blue-400',
  education: 'border-purple-500/50 bg-purple-500/10 text-purple-400',
  achievement: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400',
};

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#060606] py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-3 font-mono text-sm text-blue-400/70">// my journey</p>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            <span className="text-white">Experience & </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experience.map((item, i) => {
              const Icon = iconMap[item.type];
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`relative pl-12 md:w-[calc(50%-28px)] md:pl-0 ${
                      isLeft ? 'md:pr-10' : 'md:pl-10'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="group rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 transition-all hover:border-blue-500/20"
                    >
                      <span className="mb-1.5 block font-mono text-xs text-blue-400/60">
                        {item.year}
                      </span>
                      <h3 className="mb-0.5 text-lg font-bold text-white transition-colors group-hover:text-blue-200">
                        {item.title}
                      </h3>
                      <p className="mb-3 text-sm text-white/40">{item.company}</p>
                      <p className="text-sm leading-relaxed text-white/35">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Icon node */}
                  <div className="absolute left-0 z-10 md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={`mt-5 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-[#060606] ${colorMap[item.type]}`}
                    >
                      <Icon size={13} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
