'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 15, suffix: 'K+', label: 'Pieces/Month' },
  { value: 200, suffix: '+', label: 'Low MOQ' },
  { value: 48, suffix: 'H', label: 'Quote Time' },
  { value: 15, suffix: 'D', label: 'Sample Ready' },
];

// Split text into letters for stagger animation
const SplitHeading = ({ text, className, delay = 0 }) => {
  const letters = text.split('');
  return (
    <span className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: delay + i * 0.04,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <header ref={ref} className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 denim-bg opacity-90" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] border border-brass/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-60 -left-60 w-[800px] h-[800px] border border-brass/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-brass/5 rounded-full"
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(200,164,92,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,92,0.2) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Gradient bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-20" />

      <div className="relative z-10 min-h-screen flex items-center pt-24 pb-16">
        <motion.div
          style={{ y, opacity }}
          className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center"
        >
          {/* LEFT COLUMN - TEXT */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="relative w-2 h-2">
                <div className="absolute inset-0 bg-green-400 rounded-full" />
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-green-400 rounded-full"
                />
              </div>
              <span className="text-white/70 text-[11px] tracking-[3px] uppercase font-medium">
                Now Booking Q3 2026 Production
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-block bg-brass/10 border border-brass/30 text-brass text-[10px] font-semibold tracking-[3px] uppercase px-4 py-1.5 mb-6"
            >
              ✦ Premium Clothing Manufacturer Since Day One
            </motion.div>

            {/* Mega heading with split animation */}
            <h1 className="font-heading text-[clamp(54px,10vw,130px)] text-white tracking-[2px] leading-[0.95] mb-4 overflow-hidden">
              <div className="overflow-hidden">
                <SplitHeading text="TAILORED" delay={0.5} />
              </div>
              <div className="overflow-hidden">
                <SplitHeading text="TO YOUR" delay={0.7} className="text-gradient" />
              </div>
              <div className="overflow-hidden">
                <SplitHeading text="VISION." delay={0.9} />
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="font-accent italic text-steel text-[clamp(16px,2vw,22px)] mb-6 max-w-xl"
            >
              From a single techpack to ten thousand pieces &mdash;
              we are the quiet craftsmen behind the world&apos;s most thoughtful fashion brands.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-white/50 text-[14px] max-w-xl leading-relaxed font-light mb-10"
            >
              Shirts. Trousers. Hoodies. Track Suits. Jackets. Rivett Manufacturing produces premium
              private-label garments for emerging and established brands across the United Kingdom,
              United States, and Europe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="flex gap-4 flex-wrap mb-16"
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-brass text-navy px-10 py-4 text-xs font-bold tracking-[3px] uppercase overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Send Your Techpack
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
              <motion.a
                href="#products"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/20 text-white px-10 py-4 text-xs font-semibold tracking-[3px] uppercase hover:border-brass hover:text-brass transition-all duration-300"
              >
                Browse Lookbook
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/10"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + i * 0.1, duration: 0.6 }}
                >
                  <div className="font-heading text-[40px] text-brass tracking-wider leading-none mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[10px] text-white/40 tracking-[2px] uppercase font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="relative aspect-[3/4] rounded overflow-hidden"
            >
              <Image
                src="https://images.pexels.com/photos/31031031/pexels-photo-31031031.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Rivett Manufacturing — garment factory floor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-navy/15" />

              {/* Floating info card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl p-5 rounded-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brass rounded-full flex items-center justify-center text-navy font-heading text-lg">
                    ✦
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[2px] uppercase text-brass font-bold mb-0.5">
                      Crafted in-house
                    </p>
                    <p className="text-navy text-xs leading-snug">
                      Every garment passes through 40+ quality checkpoints
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute -top-6 -right-6 w-full h-full border-2 border-brass/30 rounded -z-10"
            />

            {/* Floating rivet */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-brass rounded-full flex items-center justify-center shadow-2xl"
            >
              <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-brass rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] text-white/40 tracking-[3px] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-10 bg-gradient-to-b from-brass to-transparent"
          />
        </div>
      </motion.div>
    </header>
  );
}
