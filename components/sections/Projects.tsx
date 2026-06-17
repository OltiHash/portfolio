'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronRight } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/SocialIcons';
import { projects } from '@/lib/data';
import type { Project } from '@/types';

const categories = ['All', 'Web', 'AI', 'Tools'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative overflow-hidden bg-[#060606] py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm text-blue-400/70">// what I&apos;ve built</p>
          <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-white/35">
            A selection of work that showcases my range and depth as a builder.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                filter === cat
                  ? 'border-blue-500/45 bg-blue-500/10 text-blue-300'
                  : 'border-white/[0.08] text-white/35 hover:border-white/15 hover:text-white/60'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={project.featured ? 'md:col-span-2' : ''}
              >
                <ProjectCard project={project} onClick={() => setSelected(project)} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

const BACKEND_TECH = new Set([
  'Node.js', 'Python', 'Go', 'Rust', 'Java', 'PHP', 'Ruby', 'C#', '.NET',
  'Express', 'FastAPI', 'Django', 'Flask', 'NestJS', 'Hono',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Supabase', 'Firebase',
  'GraphQL', 'REST APIs', 'Prisma', 'Drizzle', 'Bull MQ',
  'OpenAI API', 'Anthropic API', 'JWT Auth', 'bcryptjs', 'Multer',
]);

function techChipClass(t: string) {
  if (BACKEND_TECH.has(t))
    return 'border-green-500/20 bg-green-500/[0.06] text-green-400/80';
  return 'border-white/[0.06] bg-white/[0.03] text-white/40';
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -3 }}
      className="group w-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-left transition-all hover:border-blue-500/25 hover:bg-white/[0.035] hover:shadow-xl hover:shadow-blue-500/[0.05]"
    >
      {/* Top bar on hover */}
      <div className="mb-5 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="mb-1 flex items-center gap-2">
            <span className="font-mono text-xs text-white/25">{project.category}</span>
            {project.featured && (
              <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2 py-0.5 text-xs text-yellow-400">
                Featured
              </span>
            )}
          </div>
          <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-blue-300">
            {project.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-white/45">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 6).map((t) => (
              <span
                key={t}
                className={`rounded-lg border px-2 py-1 text-xs ${techChipClass(t)}`}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 6 && (
              <span className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2 py-1 text-xs text-white/25">
                +{project.tech.length - 6}
              </span>
            )}
          </div>
        </div>
        <ChevronRight
          size={18}
          className="mt-1 flex-shrink-0 text-white/15 transition-all group-hover:translate-x-1 group-hover:text-blue-400"
        />
      </div>
    </motion.button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center p-4 md:items-center md:p-8"
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 240, damping: 24 }}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/[0.08] bg-[#0a0a0d] p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <X size={15} />
        </button>

        {/* Header */}
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-xs text-white/25">{project.category}</span>
          {project.featured && (
            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2 py-0.5 text-xs text-yellow-400">
              Featured
            </span>
          )}
        </div>
        <h2 className="mb-2 text-3xl font-black text-white">{project.title}</h2>
        <p className="mb-8 leading-relaxed text-white/45">{project.longDescription}</p>

        {/* Features */}
        {project.features.length > 0 && (
          <div className="mb-8">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Key Features
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="mt-0.5 flex-shrink-0 text-blue-400">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech */}
        <div className="mb-8">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`rounded-lg border px-3 py-1.5 text-sm ${
                  BACKEND_TECH.has(t)
                    ? 'border-green-500/25 bg-green-500/8 text-green-300'
                    : 'border-blue-500/20 bg-blue-500/8 text-blue-300'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <GitHubIcon width={14} height={14} />
              GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
