'use client';

import { motion } from 'framer-motion';

const washes = [
  { name: 'Raw / Unwashed', color: 'from-[#0a1628] to-[#1a2840]' },
  { name: 'Dark Rinse', color: 'from-[#1a3060] to-[#264070]' },
  { name: 'Stone Wash', color: 'from-[#3a5a8c] to-[#5a7aac]' },
  { name: 'Light Wash', color: 'from-[#6a8ab0] to-[#8aaad0]' },
  { name: 'Tinted / Overdye', color: 'from-[#8a9a7a] to-[#6a7a5a]' },
  { name: 'Black Wash', color: 'from-[#2a2a2a] to-[#4a4a4a]' },
  { name: 'Bleach Wash', color: 'from-[#b8c8d8] to-[#d8e0e8]' },
  { name: 'Acid Wash', color: 'from-[#5a6a7a] to-[#7a8a9a]' },
  { name: 'Enzyme Wash', color: 'from-[#4a6080] to-[#6a80a0]' },
  { name: 'Vintage Wash', color: 'from-[#3a4a5a] to-[#5a6a7a]' },
  { name: 'Laser Finish', color: 'from-[#7090b0] to-[#90b0d0]' },
  { name: 'Ozone Treated', color: 'from-[#506070] to-[#708090]' },
];

export default function Washes() {
  return (
    <section id="washes" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass">
            Wash Library
          </span>
          <h2 className="font-heading text-[clamp(36px,5vw,56px)] text-navy tracking-[4px] mt-3 mb-4">
            GARMENT WASHES & FINISHES
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            A complete range of garment washes and finishes to match any aesthetic your brand requires.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {washes.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="text-center p-6 bg-off-white rounded cursor-pointer group"
            >
              <div
                className={`w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br ${w.color} border-2 border-white/10 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              />
              <h4 className="text-[11px] font-bold tracking-[1.5px] uppercase text-navy">
                {w.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
