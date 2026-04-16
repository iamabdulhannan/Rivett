'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
const uns = (id, tall) =>
  `https://images.unsplash.com/photo-${id}?w=600&h=${tall ? 900 : 600}&fit=crop&auto=format&q=80`;
const px = (id, tall) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=${tall ? 900 : 600}&fit=crop`;

const lookbook = [
  { src: px('13339846', true),                     tag: 'Tailored',   title: 'Formal Trousers',     size: 'tall' },
  { src: uns('1620012253295-c15cc3e65df4', false), tag: 'Formal',     title: 'Dress Shirts',        size: 'square' },
  { src: uns('1620799140408-edc6dcb6d633', true),  tag: 'Casual',     title: 'Premium Hoodies',     size: 'tall' },
  { src: px('29381847', false),                    tag: 'Classic',    title: 'Polo Shirts',         size: 'square' },
  { src: px('3705262', true),                      tag: 'Outerwear',  title: 'Jackets',             size: 'tall' },
  { src: px('5746087', false),                     tag: 'Core',       title: 'Tee Program',         size: 'square' },
  { src: px('28540142', false),                    tag: 'Active',     title: 'Track Suits',         size: 'square' },
  { src: px('31031031', true),                     tag: 'Process',    title: 'The Sewing Floor',    size: 'tall' },
];

function LookbookCard({ item, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative group cursor-pointer overflow-hidden rounded ${
        item.size === 'tall' ? 'row-span-2' : ''
      }`}
      data-cursor="view"
    >
      <motion.div
        style={{ y }}
        className={`relative ${item.size === 'tall' ? 'aspect-[2/3]' : 'aspect-square'}`}
      >
        <Image
          src={item.src}
          alt={`${item.title} - Rivett Manufacturing Lookbook`}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.05 }}
          >
            <span className="inline-block text-[10px] tracking-[2px] uppercase text-brass font-bold bg-brass/10 border border-brass/30 backdrop-blur-sm px-3 py-1 rounded-sm mb-3">
              {item.tag}
            </span>
            <h3 className="font-heading text-2xl md:text-3xl text-white tracking-[3px] mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-brass text-[11px] tracking-[2px] uppercase font-semibold">
                View Details
              </span>
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-brass"
              >
                →
              </motion.span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-32 bg-off-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass">
              The Lookbook
            </span>
            <h2 className="font-heading text-[clamp(36px,5vw,72px)] text-navy tracking-[3px] mt-3 leading-[0.95]">
              CRAFT IN<br />
              <span className="text-gradient">EVERY THREAD</span>
            </h2>
          </div>
          <p className="font-accent italic text-lg text-gray-500 max-w-md">
            A glimpse into the garments we produce &mdash;
            every detail considered, every stitch deliberate.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {lookbook.map((item, i) => (
            <LookbookCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-3 text-navy font-semibold tracking-[3px] uppercase text-xs group"
          >
            <span className="border-b border-navy group-hover:border-brass group-hover:text-brass transition-colors duration-300">
              Explore Our Full Range
            </span>
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
