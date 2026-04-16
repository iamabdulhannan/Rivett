'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'SEND TECHPACK',
    desc: 'Share your techpack, sketches, or reference samples. We review and provide a detailed quote within 48 hours.',
    time: 'Day 1-2',
  },
  {
    num: '02',
    title: 'SAMPLE DEVELOPMENT',
    desc: 'We develop your sample with precise pattern-making, construction, and wash. Revisions included until approved.',
    time: 'Day 3-15',
  },
  {
    num: '03',
    title: 'BULK PRODUCTION',
    desc: 'Once sample is approved and order confirmed, bulk production begins with strict quality control at every stage.',
    time: 'Week 3-7',
  },
  {
    num: '04',
    title: 'QC & DELIVERY',
    desc: 'Final AQL inspection, professional packaging, and shipment via your preferred logistics — FOB or CIF.',
    time: 'Week 7-8',
  },
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.7], ['0%', '75%']);

  return (
    <section id="process" ref={containerRef} className="py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass">
            How It Works
          </span>
          <h2 className="font-heading text-[clamp(36px,5vw,56px)] text-white tracking-[4px] mt-3 mb-4">
            FROM TECHPACK TO DELIVERY
          </h2>
          <p className="text-steel max-w-xl mx-auto leading-relaxed">
            A streamlined production process designed for transparency and efficiency.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated progress line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] w-[75%] h-[2px] bg-white/5">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-brass via-denim to-brass"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center px-5 relative"
              >
                {/* Step icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-full bg-navy-light border-2 border-brass mx-auto mb-6 flex items-center justify-center relative z-10"
                >
                  <span className="font-heading text-3xl text-brass">{step.num}</span>
                  {/* Pulse ring */}
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute inset-0 rounded-full border border-brass/30"
                  />
                </motion.div>

                <h3 className="font-heading text-xl tracking-[3px] text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[13px] text-steel leading-relaxed mb-4">{step.desc}</p>
                <span className="inline-block text-[10px] tracking-[2px] uppercase text-brass font-semibold bg-brass/10 px-4 py-1.5 rounded-sm">
                  {step.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
