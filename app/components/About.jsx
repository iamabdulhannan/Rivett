'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const features = [
  { icon: '◆', title: 'Vertically Integrated', desc: 'Cutting, sewing, washing, finishing — all under one roof for uncompromising quality control.' },
  { icon: '◈', title: 'AQL 2.5 Standard', desc: 'Every production run passes rigorous multi-stage inspection before it leaves our floor.' },
  { icon: '◇', title: 'Brand-First Approach', desc: 'Your labels, your hardware, your packaging. Your identity remains uncompromised.' },
  { icon: '◊', title: 'Global Logistics', desc: 'Seamless FOB & CIF shipping to UK, US, EU, and beyond through trusted partners.' },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Decorative number */}
      <motion.div
        style={{ y: textY }}
        className="absolute top-20 right-10 font-heading text-[200px] md:text-[400px] text-off-white leading-none pointer-events-none select-none z-0"
      >
        01
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              style={{ y: imgY }}
              className="aspect-[4/5] rounded overflow-hidden relative"
            >
              <Image
                src="https://images.pexels.com/photos/31031031/pexels-photo-31031031.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Rivett Manufacturing — sewing floor with rows of machines"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Image badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="absolute top-6 left-6 bg-white/95 backdrop-blur px-5 py-3 rounded-sm"
              >
                <p className="text-[9px] tracking-[2px] uppercase text-brass font-bold">Since 2020</p>
                <p className="font-heading text-2xl text-navy tracking-[2px]">RIVETT MFG</p>
              </motion.div>
            </motion.div>

            {/* Decorative frames */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-[1.5px] border-brass/40 rounded -z-10" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -right-8 w-24 h-24 bg-brass/10 backdrop-blur rounded hidden lg:block"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass block mb-4">
              ✦ The Story
            </span>
            <h2 className="font-heading text-[clamp(38px,5vw,64px)] text-navy tracking-[2px] leading-[1.05] mb-6">
              WHERE HERITAGE<br />
              <span className="text-gradient">MEETS MODERN CRAFT</span>
            </h2>

            <p className="font-accent italic text-[19px] text-gray-700 leading-[1.7] mb-6">
              We don&apos;t just manufacture garments. We translate vision into
              the kind of pieces that build brands, earn reorders, and
              outlast seasons.
            </p>

            <p className="text-gray-500 leading-[1.9] mb-10">
              Rivett Manufacturing is a vertically integrated clothing factory trusted by
              fashion brands from London to Los Angeles. From <strong className="text-navy">tailored trousers</strong> to
              <strong className="text-navy"> premium hoodies</strong>, <strong className="text-navy">formal shirts</strong>,
              and <strong className="text-navy">track suits</strong> — we produce private-label garments
              with the quiet precision that separates great brands from the rest.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4, borderLeftColor: '#d4b76e' }}
                  className="bg-off-white p-5 rounded border-l-[3px] border-brass group cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-brass text-xl mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      {f.icon}
                    </span>
                    <div>
                      <h4 className="text-[13px] font-bold tracking-wider uppercase text-navy mb-1">
                        {f.title}
                      </h4>
                      <p className="text-[13px] text-gray-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 pt-6 border-t border-gray-200 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-brass" />
              </div>
              <div>
                <p className="font-accent italic text-sm text-gray-600">Crafted with intent, produced at scale.</p>
                <p className="text-[10px] tracking-[2px] uppercase text-brass font-bold mt-0.5">The Rivett Promise</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
