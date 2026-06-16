'use client';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, Code2 } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const initials = personalInfo.name
  .split(' ')
  .map((n) => n[0])
  .join('');

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
};

const infoCards = [
  { Icon: MapPin, label: 'Location', value: personalInfo.location },
  { Icon: Calendar, label: 'Experience', value: '3+ Years' },
  { Icon: Briefcase, label: 'Status', value: 'Open to Work' },
  { Icon: Code2, label: 'Focus', value: 'Full Stack Dev' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#060606] py-32">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Orbit rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 rounded-full border border-dashed border-white/[0.06]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-12 rounded-full border border-dashed border-blue-500/[0.07]"
              />

              {/* Avatar box */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-60 w-60 items-center justify-center rounded-3xl border border-white/[0.07] bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-5xl font-black text-white shadow-2xl shadow-blue-500/40">
                  {initials}
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute -right-10 top-6 rounded-xl border border-blue-500/25 bg-blue-500/10 px-3 py-2 backdrop-blur-sm"
              >
                <p className="font-mono text-xs text-blue-300">50+ Projects</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-10 bottom-10 rounded-xl border border-purple-500/25 bg-purple-500/10 px-3 py-2 backdrop-blur-sm"
              >
                <p className="font-mono text-xs text-purple-300">3+ Years</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.p variants={fadeUp} className="mb-3 font-mono text-sm text-blue-400/70">
              // about me
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-5xl"
            >
              <span className="text-white">Crafting Digital</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mb-4 text-lg leading-relaxed text-white/55">
              {personalInfo.bio}
            </motion.p>

            <motion.p variants={fadeUp} className="mb-10 leading-relaxed text-white/35">
              {personalInfo.bioExtended}
            </motion.p>

            {/* Info grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              {infoCards.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                    <Icon size={14} className="text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/30">{label}</p>
                    <p className="truncate text-sm font-medium text-white">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
