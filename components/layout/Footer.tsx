'use client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/ui/SocialIcons';
import { personalInfo } from '@/lib/data';

const initials = personalInfo.name
  .split(' ')
  .map((n) => n[0])
  .join('');

const socials = [
  { Icon: GitHubIcon, href: personalInfo.github, label: 'GitHub' },
  { Icon: LinkedInIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
  { Icon: XIcon, href: personalInfo.twitter, label: 'Twitter' },
  { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-2 text-sm text-white/30">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold text-transparent">
            {initials}
          </span>
          <span className="text-white/10">·</span>
          <span>Building the future, one line at a time.</span>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/30 transition-colors hover:text-white/70"
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
