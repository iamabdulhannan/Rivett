'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ target, suffix = '', duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
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
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const numbers = [
  { value: 15000, suffix: '+', label: 'Pieces Produced Monthly', desc: 'Scaling with your growth' },
  { value: 40, suffix: '+', label: 'Quality Checkpoints', desc: 'On every single garment' },
  { value: 20, suffix: '+', label: 'Countries Served', desc: 'From UK to Australia' },
  { value: 98, suffix: '%', label: 'On-Time Delivery', desc: 'Consistency you can plan around' },
];

export default function Numbers() {
  return (
    <section className="py-28 bg-navy relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brass/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brass/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass">
            The Numbers
          </span>
          <h2 className="font-heading text-[clamp(36px,5vw,56px)] text-white tracking-[4px] mt-3">
            PRECISION AT SCALE
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {numbers.map((num, i) => (
            <motion.div
              key={num.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="text-center relative group"
            >
              {/* Vertical separator */}
              {i < numbers.length - 1 && (
                <div className="hidden lg:block absolute top-0 right-0 w-[1px] h-full bg-white/5" />
              )}

              <div className="font-heading text-[clamp(48px,8vw,90px)] text-gradient leading-none mb-3 tracking-wider">
                <Counter target={num.value} suffix={num.suffix} />
              </div>
              <h4 className="text-white text-sm tracking-[2px] uppercase font-semibold mb-2">
                {num.label}
              </h4>
              <p className="text-steel text-[12px] font-light italic">
                {num.desc}
              </p>

              {/* Animated underline on hover */}
              <div className="w-0 group-hover:w-16 h-[2px] bg-brass mx-auto mt-4 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
