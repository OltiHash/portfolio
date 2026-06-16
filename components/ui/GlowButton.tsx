'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
}

export default function GlowButton({
  children,
  variant = 'primary',
  onClick,
  href,
  className,
  type = 'button',
}: Props) {
  const base =
    'relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 select-none';

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40',
    secondary:
      'border border-white/10 bg-white/[0.05] text-white/80 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20',
  };

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={cn(base, variants[variant], className)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.button>
  );
}
