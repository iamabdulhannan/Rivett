'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ProductVisual from './ProductVisual';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'bottoms', label: 'Bottoms' },
  { id: 'tops', label: 'Tops' },
  { id: 'outerwear', label: 'Outerwear & Active' },
];

const uns = (id, w = 600, h = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;
const px = (id, w = 600, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

const products = [
  { title: 'TROUSERS',                  desc: 'Tailored dress pants and formal trousers in cotton, wool blends, and stretch fabrics.', category: 'bottoms', tag: 'Best Seller',  img: px('13339846') },
  { title: 'SHORTS',                    desc: 'Chino shorts, athletic shorts, and casual styles for all seasons.',                     category: 'bottoms', tag: 'Seasonal',     img: px('16654402') },

  { title: 'SHIRTS',                    desc: 'Business shirts, casual button-downs, and formal wear in cotton and premium blends.',   category: 'tops',    tag: 'Popular',      img: uns('1620012253295-c15cc3e65df4') },
  { title: 'T-SHIRTS',                  desc: 'Premium cotton tees, oversized fits, heavyweight and garment-dyed options.',            category: 'tops',    tag: 'Bulk Ready',   img: px('5746087') },
  { title: 'POLO SHIRTS',               desc: 'Classic and modern polos in pique cotton, performance blends.',                         category: 'tops',    tag: 'Classic',      img: px('29381847') },
  { title: 'SLEEVELESS',                desc: 'Tank tops, muscle tees, and athletic sleeveless tops in premium fabrics.',              category: 'tops',    tag: 'New',          img: px('17559312') },

  { title: 'HOODIES',                   desc: 'Heavyweight hoodies, crewneck sweatshirts, and zip-ups in premium fleece.',             category: 'outerwear', tag: 'Best Seller', img: uns('1620799140408-edc6dcb6d633') },
  { title: 'TRACK SUITS',               desc: 'Matching track jacket and jogger sets in tricot, fleece, and performance fabrics.',     category: 'outerwear', tag: 'Trending',    img: px('28540142') },
  { title: 'JACKETS',                   desc: 'Bomber, varsity, coach jackets, and technical outerwear.',                              category: 'outerwear', tag: 'Premium',     img: px('3705262') },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass">
            What We Make
          </span>
          <h2 className="font-heading text-[clamp(36px,5vw,56px)] text-navy tracking-[4px] mt-3 mb-4">
            FULL FASHION PRODUCT RANGE
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            From trousers to hoodies, polos to track suits — we manufacture
            the complete fashion wardrobe for your brand.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-6 py-2.5 text-[11px] font-semibold tracking-[2px] uppercase rounded-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-navy text-brass border border-brass'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-brass hover:text-navy'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                href="#contact"
                key={p.title}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded overflow-hidden border border-gray-100 cursor-pointer relative block"
                aria-label={`Request sample of ${p.title}`}
              >
                {/* Tag badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-brass text-navy text-[9px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 rounded-sm">
                    {p.tag}
                  </span>
                </div>

                {/* Visual — real photo where verified, branded silhouette otherwise */}
                <motion.div
                  className="aspect-[3/4] relative overflow-hidden bg-gray-100"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                >
                  {p.img ? (
                    <Image
                      src={p.img}
                      alt={`${p.title} - Rivett Manufacturing`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <ProductVisual icon={p.icon} palette={p.palette} label={p.title} size="tall" />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <span className="text-white text-xs tracking-[3px] uppercase font-semibold translate-y-3 group-hover:translate-y-0 transition-transform duration-500 border border-brass/60 bg-brass/10 backdrop-blur-sm px-5 py-2.5 rounded-sm">
                      Request Sample
                    </span>
                  </div>
                </motion.div>

                {/* Body */}
                <div className="p-5">
                  <h4 className="font-heading text-lg tracking-[2px] text-navy mb-1 group-hover:text-brass transition-colors duration-300">
                    {p.title}
                  </h4>
                  <p className="text-[12px] text-gray-400 leading-relaxed">{p.desc}</p>
                </div>

                {/* Bottom accent line */}
                <div className="h-[2px] bg-brass w-0 group-hover:w-full transition-all duration-500" />
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* "More coming" banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center p-8 bg-navy rounded"
        >
          <p className="font-accent italic text-steel text-lg mb-2">
            Don&apos;t see what you&apos;re looking for?
          </p>
          <p className="text-white/70 text-sm mb-4 max-w-lg mx-auto">
            We manufacture custom garments beyond these categories. Send us your
            techpack and we&apos;ll let you know within 24 hours if we can produce it.
          </p>
          <a
            href="#contact"
            className="inline-block bg-brass text-navy px-8 py-3 text-[11px] font-bold tracking-[3px] uppercase hover:bg-brass-light transition-colors duration-300"
          >
            Ask About Custom Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
