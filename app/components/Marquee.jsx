'use client';

import { motion } from 'framer-motion';

const words = [
  'PRIVATE LABEL',
  'TECHPACK TO PRODUCTION',
  'LOW MOQ',
  'WORLDWIDE SHIPPING',
  'QUALITY ASSURED',
  'CUSTOM BRANDING',
  'FAST SAMPLING',
  'ETHICAL MANUFACTURING',
];

export default function Marquee() {
  return (
    <section className="bg-navy py-8 overflow-hidden border-y border-brass/10">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex gap-16 whitespace-nowrap"
      >
        {[...words, ...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center gap-16 shrink-0">
            <span className="font-heading text-[clamp(32px,5vw,64px)] text-white/20 tracking-[6px] hover:text-brass transition-colors duration-500">
              {word}
            </span>
            <span className="w-3 h-3 bg-brass rounded-full" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
