'use client';

import { motion } from 'framer-motion';

const items = [
  { title: 'Shipping Worldwide', sub: 'UK, US, EU & Beyond' },
  { title: 'Low MOQ From 200 PCS', sub: 'Per Style Per Color' },
  { title: 'Private Label Ready', sub: 'Your Brand, Our Craft' },
  { title: 'Sample in 10-15 Days', sub: 'Fast Turnaround' },
];

export default function TrustBar() {
  return (
    <div className="bg-off-white py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-16 flex-wrap">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <h4 className="font-heading text-sm tracking-[3px] text-navy">{item.title}</h4>
            <p className="text-[10px] text-gray-400 tracking-wider uppercase mt-1">{item.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
