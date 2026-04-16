'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-28 denim-bg-dark relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brass/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brass/5 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[clamp(36px,5vw,60px)] text-white tracking-[4px] mb-2"
            >
              READY TO <span className="text-gradient">START?</span>
            </motion.h2>
          </div>

          <p className="font-accent italic text-xl text-steel mb-6">
            Send your techpack and get a quote within 48 hours.
          </p>
          <p className="text-white/50 text-[15px] max-w-lg mx-auto leading-relaxed mb-10">
            Whether you&apos;re launching your first collection or scaling production,
            we&apos;re ready to be your manufacturing partner.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brass text-navy px-10 py-4 text-xs font-bold tracking-[3px] uppercase hover:bg-brass-light transition-colors duration-300"
            >
              Send Your Techpack
            </motion.a>
            <motion.a
              href="https://wa.me/923044480452"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/20 text-white px-10 py-4 text-xs font-semibold tracking-[3px] uppercase hover:border-brass hover:text-brass transition-all duration-300"
            >
              WhatsApp Us
            </motion.a>
          </div>

          <div className="flex justify-center gap-12 flex-wrap">
            {[
              { label: 'Email', value: 'info@rivettmfg.com', href: 'mailto:info@rivettmfg.com' },
              { label: 'WhatsApp', value: '+92 304 4480452', href: 'https://wa.me/923044480452' },
              { label: 'Instagram', value: '@rivettmfg', href: 'https://instagram.com/rivettmfg' },
            ].map((c) => (
              <div key={c.label} className="text-center">
                <span className="block text-[10px] text-white/30 tracking-[2px] uppercase mb-1">
                  {c.label}
                </span>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener' : undefined}
                  className="text-brass text-[15px] font-medium hover:text-brass-light transition-colors"
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
