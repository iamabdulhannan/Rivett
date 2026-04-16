'use client';

import { motion } from 'framer-motion';

const capabilities = [
  { icon: '⚙', title: 'Cutting Department', desc: 'CAD-assisted pattern grading and precision fabric cutting with automated spreading machines.' },
  { icon: '✦', title: 'Sewing Floor', desc: 'Single needle, overlock, flatlock, bartack, buttonhole, and chain stitch machines.' },
  { icon: '◎', title: 'Washing Plant', desc: 'Industrial washing machines with stone wash, enzyme, acid, bleach, tinting capabilities.' },
  { icon: '★', title: 'Laser & Ozone', desc: 'Advanced laser machines for whiskers, chevrons. Ozone technology for eco-friendly fading.' },
  { icon: '◆', title: 'Quality Control', desc: 'In-line and end-line QC inspection. AQL 2.5 standard. Every garment checked before packing.' },
  { icon: '✉', title: 'Packaging & Logistics', desc: 'Custom poly bags, hang tags, carton packing, and freight coordination for global delivery.' },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass">
            Factory Capabilities
          </span>
          <h2 className="font-heading text-[clamp(36px,5vw,56px)] text-navy tracking-[4px] mt-3 mb-4">
            BUILT FOR SCALE & QUALITY
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Our factory is equipped with industrial-grade machinery and a skilled team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ x: 6, backgroundColor: '#ffffff', boxShadow: '0 8px 32px rgba(10,22,40,0.06)' }}
              className="flex gap-5 p-8 bg-off-white rounded transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 min-w-[48px] bg-navy rounded-full flex items-center justify-center text-brass text-lg">
                {c.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-wider uppercase text-navy mb-2">
                  {c.title}
                </h4>
                <p className="text-[13px] text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
