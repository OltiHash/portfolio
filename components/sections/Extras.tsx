'use client';
import { motion } from 'framer-motion';
import { MapPin, Coffee, Moon, Zap, Rocket, Heart, Users } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/SocialIcons';
import { personalInfo } from '@/lib/data';

const card = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

export default function Extras() {
  return (
    <section id="extras" className="relative overflow-hidden bg-[#060606] py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="mx-auto max-w-5xl px-6">
        <motion.div {...card()} className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm text-purple-400/70">// the human behind the code</p>
          <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            <span className="text-white">Beyond </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              the Code
            </span>
          </h2>
          <p className="text-white/35">A few things that make me, me.</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">

          {/* Location — wide */}
          <motion.div
            {...card(0.05)}
            className="col-span-2 flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/10 transition-colors"
          >
            <div className="mb-8 flex items-center gap-2 text-white/30">
              <MapPin size={14} />
              <span className="font-mono text-xs">location</span>
            </div>
            <div>
              <p className="text-3xl font-black text-white">Prishtina</p>
              <p className="text-3xl font-black">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Kosovo 🇽🇰
                </span>
              </p>
              <p className="mt-2 text-sm text-white/30">Writing code from the Balkans.</p>
            </div>
          </motion.div>

          {/* Student */}
          <motion.div
            {...card(0.1)}
            className="col-span-2 flex flex-col justify-between rounded-2xl border border-purple-500/15 bg-purple-500/[0.04] p-6 md:col-span-1"
          >
            <span className="text-3xl">🎓</span>
            <div>
              <p className="text-lg font-bold text-white">Still in high school</p>
              <p className="mt-1 text-sm text-white/35">
                Already shipping real products. The diploma can wait.
              </p>
            </div>
          </motion.div>

          {/* Dark mode */}
          <motion.div
            {...card(0.15)}
            className="col-span-2 flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/10 md:col-span-1"
          >
            <Moon size={22} className="text-indigo-400" />
            <div>
              <p className="text-lg font-bold text-white">Dark mode.</p>
              <p className="mt-1 text-sm text-white/35">
                Light mode is a crime. This site is evidence.
              </p>
            </div>
          </motion.div>

          {/* Currently building — wide */}
          <motion.div
            {...card(0.2)}
            className="col-span-2 flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-6"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              <span className="font-mono text-xs text-blue-400/70">currently building</span>
            </div>
            <div>
              <p className="text-2xl font-black text-white">BuildAI</p>
              <p className="mt-1 text-sm text-white/40">
                AI-powered website builder SaaS — type a prompt, get a full site.
              </p>
              <a
                href="https://aibuilder-phi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-blue-400 transition-colors hover:text-blue-300"
              >
                <Rocket size={11} />
                aibuilder-phi.vercel.app
              </a>
            </div>
          </motion.div>

          {/* Coffee */}
          <motion.div
            {...card(0.25)}
            className="col-span-1 flex flex-col justify-between rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] p-6"
          >
            <Coffee size={22} className="text-amber-400" />
            <div>
              <p className="text-lg font-bold text-white">Coffee first</p>
              <p className="mt-1 text-xs text-white/35">then code.</p>
            </div>
          </motion.div>

          {/* TypeScript */}
          <motion.div
            {...card(0.28)}
            className="col-span-1 flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-[#3178c6]/[0.06] p-6"
          >
            <span className="font-mono text-2xl font-black text-[#3178c6]">TS</span>
            <div>
              <p className="text-lg font-bold text-white">TypeScript</p>
              <p className="mt-1 text-xs text-white/35">or bust.</p>
            </div>
          </motion.div>

          {/* Open to collabs */}
          <motion.div
            {...card(0.3)}
            className="col-span-2 flex flex-col justify-between rounded-2xl border border-green-500/20 bg-green-500/[0.04] p-6 md:col-span-2"
          >
            <Users size={22} className="text-green-400" />
            <div>
              <p className="text-xl font-bold text-white">Open to collaborations</p>
              <p className="mt-1 text-sm text-white/35">
                Got a cool idea? Let&apos;s build it together.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1.5 font-mono text-xs text-green-400 transition-all hover:bg-green-500/20"
              >
                <Heart size={10} />
                reach out
              </button>
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.div
            {...card(0.33)}
            className="col-span-2 flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/10 md:col-span-2"
          >
            <GitHubIcon width={22} height={22} className="text-white/40" />
            <div>
              <p className="text-xl font-bold text-white">All my work is open</p>
              <p className="mt-1 text-sm text-white/35">No gatekeeping. See the code.</p>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-white/40 transition-colors hover:text-white/70"
              >
                <Zap size={10} />
                github.com/OltiHash
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
