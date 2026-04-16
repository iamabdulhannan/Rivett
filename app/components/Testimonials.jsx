'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: 'Rivett delivered our first collection exactly as we envisioned. The attention to detail was unmatched — every stitch, every finish, every garment. They became our go-to partner from day one.',
    author: 'Sarah M.',
    role: 'Founder',
    brand: 'London Streetwear Brand',
    location: 'London, UK',
    orderSize: '3,200 pieces',
  },
  {
    quote: 'What impressed us most was the 48-hour quote turnaround and transparent communication throughout. Our samples were delivered in 12 days and bulk production ran flawlessly. Rare find in this industry.',
    author: 'James T.',
    role: 'Creative Director',
    brand: 'Emerging Menswear Label',
    location: 'New York, USA',
    orderSize: '1,800 pieces',
  },
  {
    quote: 'We switched to Rivett after issues with three other factories. The difference is night and day — quality, consistency, and most importantly, they understand fashion. They are not just a factory, they are partners.',
    author: 'Emma L.',
    role: 'Brand Owner',
    brand: 'Premium Fashion Brand',
    location: 'Los Angeles, USA',
    orderSize: '5,400 pieces',
  },
  {
    quote: 'As a small brand starting out, the 200 MOQ was a lifesaver. They treated our 300-piece order with the same care as their biggest clients. Quality was outstanding. We are scaling with them now.',
    author: 'Oliver K.',
    role: 'Co-Founder',
    brand: 'Sustainable Fashion Startup',
    location: 'Manchester, UK',
    orderSize: '300 → 2,500 pieces',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const current = testimonials[index];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background quote mark */}
      <div className="absolute left-0 top-10 font-heading text-[400px] text-brass/5 leading-none pointer-events-none select-none">
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass">
            Client Stories
          </span>
          <h2 className="font-heading text-[clamp(36px,5vw,56px)] text-navy tracking-[4px] mt-3 mb-4">
            TRUSTED BY BRANDS WORLDWIDE
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            From bedroom startups to established labels, our clients speak for the work.
          </p>
        </motion.div>

        {/* Testimonial card */}
        <div
          className="relative min-h-[420px]"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Star rating */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="w-5 h-5 fill-brass"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-accent italic text-[clamp(22px,3vw,36px)] text-navy leading-[1.4] mb-10 max-w-3xl mx-auto">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-[1px] bg-brass mb-4" />
                <p className="font-bold text-navy text-[15px]">{current.author}</p>
                <p className="text-gray-500 text-sm">
                  {current.role}, {current.brand}
                </p>
                <div className="flex items-center gap-4 mt-4 text-[11px] text-gray-400 tracking-wider uppercase">
                  <span>📍 {current.location}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>📦 {current.orderSize}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative h-[2px] transition-all duration-500 ${
                i === index ? 'w-12 bg-brass' : 'w-6 bg-gray-300 hover:bg-brass/50'
              }`}
            >
              {i === index && autoplay && (
                <motion.div
                  className="absolute inset-0 bg-navy"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
