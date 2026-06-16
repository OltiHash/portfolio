'use client';
import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TermIcon } from 'lucide-react';

interface HistoryLine {
  kind: 'cmd' | 'out';
  text: string;
}

const COMMANDS: Record<string, string> = {
  help: `Available commands:

  about      →  Who I am
  projects   →  Things I've built
  skills     →  My tech stack
  contact    →  How to reach me
  clear      →  Clear the terminal`,

  about: `Alex Chen  //  Full Stack Developer

  Location   →  San Francisco, CA
  Experience →  3+ years
  Focus      →  React · Node.js · AI integrations
  Status     →  Open to work`,

  projects: `Featured Projects:

  01  NeuralDash    →  AI analytics platform
  02  CodeCollab    →  Real-time code editor
  03  FlowForge     →  Visual workflow builder
  04  DataPulse     →  Open-source chart library`,

  skills: `Tech Stack:

  Frontend  →  React, Next.js, TypeScript, Tailwind
  Backend   →  Node.js, PostgreSQL, Redis, GraphQL
  DevOps    →  Docker, AWS, Vercel, GitHub Actions
  Design    →  Figma, Framer Motion`,

  contact: `Get in touch:

  Email     →  hello@alexchen.dev
  GitHub    →  github.com/alexchen
  LinkedIn  →  linkedin.com/in/alexchen
  Portfolio →  alexchen.dev`,
};

const WELCOME = `Welcome to alexchen.dev  [v1.0.0]
Type "help" to see available commands.
`;

export default function Terminal() {
  const [lines, setLines] = useState<HistoryLine[]>([{ kind: 'out', text: WELCOME }]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    setLines((prev) => [...prev, { kind: 'cmd', text: raw }]);

    if (!cmd) {
      setLines((prev) => [...prev, { kind: 'out', text: '' }]);
      return;
    }

    setHistory((prev) => [cmd, ...prev]);
    setHistIdx(-1);

    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    const out = COMMANDS[cmd] ?? `bash: ${cmd}: command not found\nType "help" for available commands.`;
    setLines((prev) => [...prev, { kind: 'out', text: out }]);
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      run(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(next);
      setInput(history[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? '' : history[next]);
    }
  };

  return (
    <section id="terminal" className="relative overflow-hidden bg-[#060606] py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-mono text-sm text-green-400/70">// interactive</p>
          <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            <span className="text-white">Terminal </span>
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Mode
            </span>
          </h2>
          <p className="text-white/35">
            Explore my portfolio through a CLI interface. Try{' '}
            <code className="rounded-md bg-green-500/10 px-1.5 py-0.5 font-mono text-sm text-green-400">
              help
            </code>
            .
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-white/[0.06] shadow-2xl shadow-black"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title bar */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex flex-1 items-center justify-center gap-1.5">
              <TermIcon size={11} className="text-white/25" />
              <span className="font-mono text-xs text-white/25">alexchen — zsh</span>
            </div>
          </div>

          {/* Output */}
          <div className="h-72 overflow-y-auto bg-black/55 p-5 font-mono text-sm">
            {lines.map((line, i) =>
              line.kind === 'cmd' ? (
                <div key={i} className="mb-1 flex items-start gap-2">
                  <span className="select-none text-green-400">❯</span>
                  <span className="text-white">{line.text}</span>
                </div>
              ) : (
                <pre
                  key={i}
                  className="mb-3 whitespace-pre-wrap pl-5 leading-relaxed text-white/50"
                >
                  {line.text}
                </pre>
              )
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input row */}
          <div className="flex items-center gap-3 border-t border-white/[0.06] bg-black/35 px-5 py-3.5">
            <span className="select-none font-mono text-sm text-green-400">❯</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              autoComplete="off"
              spellCheck={false}
              placeholder="Type a command..."
              className="flex-1 bg-transparent font-mono text-sm text-white caret-green-400 outline-none placeholder:text-white/18"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
